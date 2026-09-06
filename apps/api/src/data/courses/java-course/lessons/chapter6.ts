import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_6_LESSONS: Record<string, LessonContent> = {
  "java-ch6-l16": {
    overview:
      "The Java Collections Framework (JCF) provides a unified architecture for representing and manipulating collections. Drawing from Liang's Chapter 20 and David J. Eck's collections overview, this lesson focuses on the `List<E>` interface, comparing the dynamic array implementation (`ArrayList`) with the doubly-linked list implementation (`LinkedList`), exploring time complexity and memory characteristics.",
    canDo:
      "Can choose between ArrayList and LinkedList based on algorithmic complexity, perform CRUD operations on lists, and safely iterate using Iterator<E>.",
    teacherNote:
      "In almost all real-world scenarios, `ArrayList` beats `LinkedList` even for insertions, because contiguous memory arrays benefit dramatically from CPU cache locality! `LinkedList` incurs huge node allocation overhead and pointer chasing across RAM.",
    sections: [
      {
        title: "1. ArrayList vs LinkedList Time Complexity",
        description: "Algorithmic comparison across standard list operations:",
        table: {
          headers: ["Operation", "ArrayList<E>", "LinkedList<E>", "Winner"],
          rows: [
            ["Random Access (get(i))", "O(1) constant time", "O(n) linear traversal from head/tail", "ArrayList (drastically faster)"],
            ["Append (add(e))", "O(1) amortized", "O(1) constant time", "Tie"],
            ["Insert at index 0", "O(n) (shifts elements)", "O(1) (pointer adjustment)", "LinkedList"],
            ["Memory per element", "Compact pointer array", "Node object + 2 pointers + data", "ArrayList (consumes ~4x less memory)"],
          ],
        },
      },
      {
        title: "2. Safe Removal During Iteration",
        description: "Preventing ConcurrentModificationException:",
        items: [
          {
            term: "Iterator.remove()",
            meaning: "The only safe way to delete items while traversing a collection",
            example: "Iterator<String> it = names.iterator();\nwhile (it.hasNext()) {\n    if (it.next().startsWith(\"T\")) {\n        it.remove(); // Safe!\n    }\n}",
          },
          {
            term: "Collection.removeIf(Predicate)",
            meaning: "Modern Java 8+ declarative method to prune collections cleanly",
            example: "names.removeIf(name -> name.startsWith(\"T\"));",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What exception is thrown if you remove an element using `list.remove(item)` inside a standard for-each loop?",
        options: [
          "NullPointerException",
          "ConcurrentModificationException",
          "IndexOutOfBoundsException",
          "UnsupportedOperationException",
        ],
        answer: "ConcurrentModificationException",
        explanation:
          "Modifying a collection directly while an active for-each loop (enhanced for loop) is iterating over it detects that modCount changed and immediately throws ConcurrentModificationException.",
      },
      {
        question: "Which collection provides O(1) constant-time indexed access via `list.get(index)`?",
        options: ["LinkedList", "ArrayList", "TreeSet", "HashSet"],
        answer: "ArrayList",
        explanation:
          "ArrayList is backed by an internal array, allowing direct memory address calculation (base + index * pointer_size) in O(1) constant time.",
      },
    ],
  },

  "java-ch6-l17": {
    overview:
      "The `Set<E>` interface represents an unordered collection containing no duplicate elements. In this lesson, we study the three primary Set implementations: `HashSet` (backed by a hash table), `LinkedHashSet` (predictable insertion-order iteration), and `TreeSet` (Red-Black tree, sorted order). We also examine the mandatory contract between `equals()` and `hashCode()`.",
    canDo:
      "Can eliminate duplicate elements using sets, choose appropriate set implementations for sorting or insertion-order needs, and implement the hashCode/equals contract.",
    teacherNote:
      "THE HASHCODE/EQUALS CONTRACT: If two objects are equal according to `equals(Object)`, they MUST produce the identical integer from `hashCode()`! If you override `equals()`, you MUST override `hashCode()`, or your object will be lost or duplicated inside a HashSet or HashMap.",
    sections: [
      {
        title: "1. The 3 Set Implementations Compared",
        description: "Choosing the correct Set data structure:",
        table: {
          headers: ["Implementation", "Underlying Data Structure", "Order Guarantees", "Lookup Time Complexity"],
          rows: [
            ["HashSet<E>", "Hash Table (HashMap)", "Unordered / Unpredictable", "O(1) average"],
            ["LinkedHashSet<E>", "Hash Table + Doubly-Linked List", "Preserves Insertion Order", "O(1) average"],
            ["TreeSet<E>", "Red-Black Balanced Binary Search Tree", "Sorted (Natural or Comparator)", "O(log n) guaranteed"],
          ],
        },
      },
      {
        title: "2. The equals() and hashCode() Contract",
        description: "Critical rules for objects stored in hash-based collections:",
        items: [
          {
            term: "Rule 1: Consistency with equals",
            meaning: "If a.equals(b) == true, then a.hashCode() MUST equal b.hashCode()",
            example: "@Override\npublic boolean equals(Object o) {\n    if (this == o) return true;\n    if (!(o instanceof User u)) return false;\n    return Objects.equals(id, u.id);\n}\n@Override\npublic int hashCode() {\n    return Objects.hash(id);\n}",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What happens if you place objects of a custom class into a HashSet without overriding `hashCode()`, even though you implemented `equals()`?",
        options: [
          "Java throws a CompileError",
          "Equal objects will compute different hash codes and be treated as distinct duplicate entries in the set",
          "The set automatically sorts the items",
          "The first item is overwritten",
        ],
        answer: "Equal objects will compute different hash codes and be treated as distinct duplicate entries in the set",
        explanation:
          "HashSet uses hashCode() to locate the hash bucket first. If two logically equal objects produce different default memory-address hash codes, they land in different buckets and duplicate entries result.",
      },
      {
        question: "Which Set implementation keeps elements sorted according to their natural ordering or a supplied Comparator?",
        options: ["HashSet", "LinkedHashSet", "TreeSet", "ArraySet"],
        answer: "TreeSet",
        explanation:
          "TreeSet is backed by a NavigableMap (Red-Black tree) that maintains elements in sorted ascending order in O(log n) time.",
      },
    ],
  },

  "java-ch6-l18": {
    overview:
      "Maps (`Map<K, V>`) associate unique keys with corresponding values. This lesson breaks down Java's `HashMap<K, V>` internal architecture: hash calculation, bucket arrays, collision handling via linked lists, treeification into Red-Black trees at threshold 8, and comparing with `LinkedHashMap` and `TreeMap`.",
    canDo:
      "Can manage key-value pairs with HashMap, explain hash bucket treeification, iterate over entrySet(), and use modern Map methods like computeIfAbsent and getOrDefault.",
    teacherNote:
      "Since Java 8, when a single hash bucket in a `HashMap` experiences high collisions exceeding 8 entries (and total capacity >= 64), Java converts the bucket's linked list into a balanced Red-Black tree (`TreeNode`), improving worst-case search performance from O(n) to O(log n) to defend against hash-flooding DoS attacks!",
    sections: [
      {
        title: "1. Map Implementations & Characteristics",
        description: "Comparison of key-value storage structures:",
        table: {
          headers: ["Implementation", "Ordering", "Null Keys/Values Allowed?", "Lookup Performance"],
          rows: [
            ["HashMap<K, V>", "Unordered", "1 null key, multiple null values", "O(1) average (O(log n) worst case)"],
            ["LinkedHashMap<K, V>", "Insertion or Access Order", "1 null key, multiple null values", "O(1) average"],
            ["TreeMap<K, V>", "Sorted by Key", "Null keys NOT allowed (throws NPE)", "O(log n) guaranteed"],
            ["ConcurrentHashMap<K, V>", "Thread-Safe / Lock-Striped", "NO null keys or values", "O(1) average"],
          ],
        },
      },
      {
        title: "2. Modern Map Methods (Java 8+)",
        description: "Fluent methods that eliminate manual boilerplate checks:",
        items: [
          {
            term: "map.getOrDefault(key, defaultValue)",
            meaning: "Returns the value mapped to key, or defaultValue if key is absent",
            example: "int views = pageViews.getOrDefault('/about', 0);",
          },
          {
            term: "map.computeIfAbsent(key, mappingFunction)",
            meaning: "If key is not present, computes value using function and inserts into map",
            example: "Map<String, List<String>> groups = new HashMap<>();\ngroups.computeIfAbsent(\"admin\", k -> new ArrayList<>()).add(\"Alice\");",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What does Java 8+ HashMap do when a bucket's linked list length exceeds 8 items?",
        options: [
          "Throws a HashCollisionException",
          "Converts the bucket's linked list into a balanced Red-Black tree (TreeNode)",
          "Deletes the oldest item",
          "Doubles the RAM size of the JVM",
        ],
        answer: "Converts the bucket's linked list into a balanced Red-Black tree (TreeNode)",
        explanation:
          "Java 8 treeifies overloaded hash buckets when collisions reach 8, guaranteeing O(log n) worst-case lookup performance instead of degrading to O(n) linked list traversal.",
      },
      {
        question: "Which method cleanly iterates over both keys and values of a Map simultaneously?",
        options: [
          "for (Map.Entry<K, V> entry : map.entrySet())",
          "for (K key : map.keys())",
          "for (V val : map.values())",
          "for (Pair p : map.all())",
        ],
        answer: "for (Map.Entry<K, V> entry : map.entrySet())",
        explanation:
          "map.entrySet() returns a Set of Map.Entry objects, allowing direct access to both entry.getKey() and entry.getValue() in a single traversal.",
      },
    ],
  },
};
