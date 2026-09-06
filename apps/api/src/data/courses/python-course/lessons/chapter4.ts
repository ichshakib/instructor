import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_4_LESSONS: Record<string, LessonContent> = {
  "py-ch4-l10": {
    overview:
      "Dictionaries (dict) are Python's ubiquitous mapping type, mapping hashable keys to arbitrary object values. Based on Mark Lutz's deep exploration of hash tables and Eric Matthes' practical dictionary patterns, this lesson reveals how hash tables work, why keys must be immutable and hashable, how to safely retrieve values with .get() to prevent KeyError, and how Python 3.7+ guarantees insertion-order preservation.",
    canDo:
      "Can construct dictionaries, safely look up items using .get() with fallbacks, explain hash functions, and explain the hashable requirement for dictionary keys.",
    teacherNote:
      "Direct indexing with square brackets (`user['email']`) raises a runtime `KeyError` if the key does not exist. Use `user.get('email', default_value)` whenever a key may be absent to avoid unhandled crashes!",
    sections: [
      {
        title: "1. The Hash Table Engine & Key Requirements",
        description: "How Python achieves average O(1) constant-time key lookups:",
        table: {
          headers: ["Mechanism", "Requirement", "Underlying Function", "Performance"],
          rows: [
            [
              "Hashing",
              "Keys must implement __hash__() and remain immutable",
              "hash(key) -> 64-bit integer",
              "O(1) average lookup",
            ],
            [
              "Equality Comparison",
              "Keys must implement __eq__() for collision resolution",
              "key1 == key2",
              "Resolves slot collisions",
            ],
            [
              "Order Preservation",
              "Since Python 3.7, dictionaries preserve insertion order",
              "Dense array + index table",
              "Guaranteed deterministic iteration",
            ],
            [
              "Valid Key Types",
              "str, int, float, tuple (immutable items), frozenset",
              "Must be hashable",
              "Lists and dicts raise TypeError: unhashable type",
            ],
          ],
        },
      },
      {
        title: "2. Safe Access & Default Values",
        description: "Retrieval patterns that prevent KeyError exceptions:",
        items: [
          {
            term: "dict.get(key, default=None)",
            meaning: "Returns the value if key exists; returns fallback default without raising KeyError",
            example: "user = {'username': 'jdoe'}\nrole = user.get('role', 'guest')  # 'guest'",
          },
          {
            term: "key in dict",
            meaning: "O(1) membership check testing whether key exists in mapping",
            example: "if 'email' in user:\n    send_email(user['email'])",
          },
          {
            term: "dict.setdefault(key, default)",
            meaning: "Retrieves value if key is present; otherwise inserts key with default and returns it",
            example: "counts = {}\ncounts.setdefault('views', 0)\ncounts['views'] += 1",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What happens when you run `d = {'a': 1}; print(d['b'])`?",
        options: ["Prints None", "Prints 0", "Raises a KeyError: 'b'", "Inserts 'b' into d"],
        answer: "Raises a KeyError: 'b'",
        explanation:
          "Accessing a non-existent key using bracket syntax d[k] raises a KeyError. Use d.get('b') to safely return None or a specified default instead.",
      },
      {
        question: "Why can a list NOT be used as a dictionary key?",
        options: [
          "Lists can only contain numbers",
          "Lists are mutable and therefore unhashable (TypeError)",
          "Lists have a maximum length limit",
          "Lists use 1-based indexing internally",
        ],
        answer: "Lists are mutable and therefore unhashable (TypeError)",
        explanation:
          "Because lists can be mutated in-place, their hash value could change while stored in the hash table, breaking table lookups. Hence, mutable types do not implement __hash__ and raise TypeError.",
      },
    ],
  },

  "py-ch4-l11": {
    overview:
      "Dictionaries are dynamic and allow versatile in-place mutation, bulk updates, and structured iteration. Drawing from the official Python Tutorial and modern Python 3.9+ features, this lesson demonstrates iterating over .keys(), .values(), and .items(), mutating via .pop() and .update(), and merging dictionaries using the union operator (|).",
    canDo:
      "Can iterate through dictionary keys, values, and pairs simultaneously, merge dictionaries using the | operator, and delete keys using .pop() and del.",
    teacherNote:
      "In Python 3.9+, you can merge two dictionaries using the concise union operator `dict1 | dict2` or update in-place with `dict1 |= dict2`. If keys overlap, values from the right-hand operand take precedence!",
    sections: [
      {
        title: "1. Dictionary Views & Iteration",
        description: "Dynamic view objects that reflect dictionary modifications in real time:",
        table: {
          headers: ["Method", "Yields", "Idiomatic for Loop Example", "Characteristics"],
          rows: [
            [
              "d.items()",
              "(key, value) 2-tuples",
              "for key, value in d.items():",
              "Unpacks both keys and values in one traversal step.",
            ],
            [
              "d.keys()",
              "All dictionary keys",
              "for key in d:",
              "Default dictionary iteration yields keys automatically.",
            ],
            [
              "d.values()",
              "All stored values",
              "for value in d.values():",
              "Extracts values without needing keys.",
            ],
          ],
        },
      },
      {
        title: "2. Merging & Deleting Keys",
        description: "Modern techniques for combining and pruning dictionaries:",
        items: [
          {
            term: "Union Operator: d1 | d2 (Python 3.9+)",
            meaning: "Creates a new dictionary containing keys from both operands; right operand overrides overlaps",
            example: "defaults = {'theme': 'light', 'size': 14}\ncustom = {'theme': 'dark'}\nconfig = defaults | custom  # {'theme': 'dark', 'size': 14}",
          },
          {
            term: "d.pop(key, [default])",
            meaning: "Removes the key and returns its associated value; returns default if key not present",
            example: "token = session.pop('auth_token', None)",
          },
          {
            term: "del d[key]",
            meaning: "Directly deletes key from hash table; raises KeyError if not present",
            example: "del user['temp_password']",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What is the result of `{'a': 1, 'b': 2} | {'b': 99, 'c': 3}` in Python 3.9+?",
        options: [
          "{'a': 1, 'b': 2, 'c': 3}",
          "{'a': 1, 'b': 99, 'c': 3}",
          "{'a': 1, 'b': [2, 99], 'c': 3}",
          "TypeError: unsupported operand type",
        ],
        answer: "{'a': 1, 'b': 99, 'c': 3}",
        explanation:
          "The dictionary union operator (|) combines two dictionaries. When keys collide ('b'), the right-hand dictionary's value (99) overrides the left-hand value (2).",
      },
      {
        question: "Which loop cleanly unpacks both key and value from a dictionary?",
        options: [
          "for k, v in d:",
          "for k, v in d.items():",
          "for k, v in d.all():",
          "for k, v in d.entries():",
        ],
        answer: "for k, v in d.items():",
        explanation:
          "d.items() yields dynamic key-value pairs as 2-tuples, allowing clean tuple unpacking with 'for k, v in d.items():'.",
      },
    ],
  },

  "py-ch4-l12": {
    overview:
      "Sets (set) and immutable sets (frozenset) are unordered collections of unique, hashable elements. Grounded in Guido van Rossum's standard library tutorial and mathematical set theory, this lesson covers O(1) membership testing, deduplicating sequences, set comprehensions, and mathematical operations: union, intersection, difference, and symmetric difference.",
    canDo:
      "Can perform mathematical set operations with operators and methods, deduplicate sequences, utilize frozensets as dictionary keys, and leverage O(1) membership checks.",
    teacherNote:
      "Membership testing in a list (`item in list`) is an O(n) linear scan that checks every element until a match is found. In contrast, membership testing in a set (`item in set`) is O(1) average constant time because it computes a hash! For large datasets, always convert to a set before checking membership.",
    sections: [
      {
        title: "1. Mathematical Set Operations",
        description: "High-performance set operations via operators and methods:",
        table: {
          headers: ["Operation", "Operator", "Method Equivalent", "Description"],
          rows: [
            ["Union", "a | b", "a.union(b)", "All elements in either a or b or both."],
            ["Intersection", "a & b", "a.intersection(b)", "Elements common to both a and b."],
            ["Difference", "a - b", "a.difference(b)", "Elements in a that are not in b."],
            ["Symmetric Difference", "a ^ b", "a.symmetric_difference(b)", "Elements in either a or b, but NOT both."],
            ["Subset Test", "a <= b", "a.issubset(b)", "True if every element of a is in b."],
          ],
        },
      },
      {
        title: "2. Deduplication & Frozenset",
        description: "Eliminating duplicates and building immutable hashable sets:",
        items: [
          {
            term: "Deduplication: list(set(items))",
            meaning: "Instant removal of duplicate elements from any collection",
            example: "emails = ['a@x.com', 'b@x.com', 'a@x.com']\nunique = list(set(emails))  # ['a@x.com', 'b@x.com']",
          },
          {
            term: "frozenset([iterable])",
            meaning: "Immutable variant of a set; hashable and can be used as a dictionary key or set element",
            example: "permissions = frozenset(['read', 'write'])\ncache = {permissions: 'granted'}",
          },
          {
            term: "Set Literal: {1, 2, 3}",
            meaning: "Fast literal construction (note: {} creates an empty dict, use set() for empty set)",
            example: "tags = {'python', 'backend', 'api'}\nempty_set = set()  # NOT {}",
          },
        ],
      },
    ],
    practice: [
      {
        question: "How do you initialize a truly empty set in Python?",
        options: ["{}", "set()", "[]", "set([]) only"],
        answer: "set()",
        explanation:
          "{} is reserved for creating an empty dictionary (dict). To create an empty set, you must call set().",
      },
      {
        question: "Given s1 = {1, 2, 3} and s2 = {2, 3, 4}, what does `s1 & s2` evaluate to?",
        options: ["{1, 4}", "{1, 2, 3, 4}", "{2, 3}", "{}"],
        answer: "{2, 3}",
        explanation:
          "The ampersand (&) operator performs set intersection, returning a new set containing only the elements present in both sets ({2, 3}).",
      },
    ],
  },
};
