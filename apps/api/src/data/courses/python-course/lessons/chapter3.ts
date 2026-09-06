import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_3_LESSONS: Record<string, LessonContent> = {
  "py-ch3-l7": {
    overview:
      "Lists in Python are dynamic, mutable arrays capable of holding heterogeneous object references. As explained in Eric Matthes' 'Python Crash Course' and Mark Lutz's 'Learning Python', lists are contiguous arrays of pointers that dynamically resize when capacity is reached. This lesson masters index assignments, appending, inserting, extending, removing, popping, and the difference between shallow and deep copying.",
    canDo:
      "Can manipulate lists dynamically, append and pop elements, explain memory over-allocation in list resizing, and implement shallow vs deep copies with copy.deepcopy.",
    teacherNote:
      "Appending to a list (`list.append(x)`) runs in amortized O(1) time because Python over-allocates internal pointer slots. However, inserting or deleting at the front (`list.insert(0, x)` or `list.pop(0)`) requires shifting all downstream pointers, running in O(n) time. For frequent queue operations from the left, use collections.deque!",
    sections: [
      {
        title: "1. List Mutation Methods & Complexity",
        description: "Standard in-place operations on mutable lists:",
        table: {
          headers: ["Method", "Syntax", "Time Complexity", "Behavior"],
          rows: [
            ["append(x)", "items.append('new')", "O(1) amortized", "Adds element to the rightmost end."],
            ["extend(iterable)", "items.extend([1, 2])", "O(k)", "Appends all elements from another iterable."],
            ["insert(i, x)", "items.insert(0, 'first')", "O(n)", "Inserts element at index i, shifting remaining items."],
            ["pop([i])", "val = items.pop()", "O(1) for end, O(n) for index", "Removes and returns item (defaults to last)."],
            ["remove(x)", "items.remove('val')", "O(n)", "Searches and removes first occurrence of value."],
            ["clear()", "items.clear()", "O(n)", "Removes all elements, leaving empty list []."],
          ],
        },
      },
      {
        title: "2. Shallow vs Deep Copying",
        description: "Preventing accidental mutation of nested data structures:",
        items: [
          {
            term: "Shallow Copy: list.copy() or items[:]",
            meaning: "Creates a new outer list container, but nested mutable objects remain shared pointers",
            example: "original = [[1, 2], [3, 4]]\nshallow = original.copy()\nshallow[0].append(99)  # Mutates original[0] as well!",
          },
          {
            term: "Deep Copy: copy.deepcopy(items)",
            meaning: "Recursively clones both the outer list and every nested object down the entire hierarchy",
            example: "import copy\ndeep = copy.deepcopy(original)\ndeep[0].append(100)  # original remains completely untouched",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What is the difference between list.append([1, 2]) and list.extend([1, 2])?",
        options: [
          "They behave identically",
          "append() adds the list as a single nested element; extend() unpacks and appends each element individually",
          "extend() only works on numeric strings",
          "append() is O(n) while extend() is O(1)",
        ],
        answer: "append() adds the list as a single nested element; extend() unpacks and appends each element individually",
        explanation:
          "append(x) inserts x as one element (producing [..., [1, 2]]), while extend(iterable) iterates through the argument and appends each item separately (producing [..., 1, 2]).",
      },
      {
        question: "Why should you use copy.deepcopy() when copying a list containing nested dictionaries or lists?",
        options: [
          "Because standard copy() is deprecated",
          "Because shallow copy only copies the outer container, leaving nested mutable objects shared",
          "Because deepcopy converts lists into immutable tuples",
          "Because deepcopy runs in O(1) constant time",
        ],
        answer: "Because shallow copy only copies the outer container, leaving nested mutable objects shared",
        explanation:
          "A shallow copy creates a new outer list but copies references to inner objects. Mutating an inner dictionary or sublist will modify both lists unless copy.deepcopy() is used.",
      },
    ],
  },

  "py-ch3-l8": {
    overview:
      "Sorting, searching, and unpacking sequences are core daily tasks in Python development. Drawing from the official Python Tutorial by Guido van Rossum and Mark Lutz's algorithms section, this lesson examines list.sort() (in-place Timsort) versus the built-in sorted(), custom sorting with key lambda functions, reverse iteration, and extended unpacking (*rest).",
    canDo:
      "Can sort complex sequences using key functions, reverse lists efficiently, and unpack elements using starred expressions (*args).",
    teacherNote:
      "Remember the golden rule of Python API design: methods that mutate an object in-place (like `list.sort()` or `list.reverse()`) return `None` to prevent method-chaining confusion! If you need a new sorted list, use the built-in function `sorted(iterable)`.",
    sections: [
      {
        title: "1. In-Place sort() vs Built-in sorted()",
        description: "Understanding return values, immutability, and Timsort:",
        table: {
          headers: ["Feature", "list.sort()", "sorted(iterable)", "Characteristics"],
          rows: [
            [
              "Return Value",
              "None",
              "New sorted list",
              "list.sort() alters original in-place; sorted() leaves source untouched.",
            ],
            [
              "Supported Inputs",
              "Lists only",
              "Any iterable (tuples, dicts, sets, generators)",
              "sorted() accepts any iterable collection.",
            ],
            [
              "Custom Key",
              "key=callable",
              "key=callable",
              "Transforms each element prior to comparison without altering output values.",
            ],
            [
              "Reverse Order",
              "reverse=True",
              "reverse=True",
              "Sorts in descending order with guaranteed stability.",
            ],
          ],
        },
      },
      {
        title: "2. Extended Sequence Unpacking (* operator)",
        description: "Destructuring collections into variables cleanly:",
        items: [
          {
            term: "first, *middle, last = items",
            meaning: "Captures first item, arbitrary middle items as a list, and final item",
            example: "scores = [98, 85, 76, 92, 99]\nfirst, *rest, last = sorted(scores)\n# first = 76, rest = [85, 92, 98], last = 99",
          },
          {
            term: "Key Sorting with Lambdas",
            meaning: "Custom sorting by attribute or nested item index",
            example: "users = [{'name': 'Alice', 'age': 30}, {'name': 'Bob', 'age': 25}]\nusers.sort(key=lambda u: u['age'])  # Bob, then Alice",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What is the result of running:\n\nnums = [3, 1, 2]\nres = nums.sort()\nprint(res)",
        options: ["[1, 2, 3]", "None", "[3, 2, 1]", "Error"],
        answer: "None",
        explanation:
          "list.sort() mutates the list in place and returns None. The variable nums is now [1, 2, 3], but res is None.",
      },
      {
        question: "What does *rest capture in `head, *rest = [10, 20, 30, 40]`?",
        options: ["20", "(20, 30, 40)", "[20, 30, 40]", "40"],
        answer: "[20, 30, 40]",
        explanation:
          "Extended sequence unpacking assigns the first element to head (10) and gathers all remaining elements into a list bound to rest ([20, 30, 40]).",
      },
    ],
  },

  "py-ch3-l9": {
    overview:
      "Tuples (tuple) are immutable ordered sequences in Python. In this lesson, informed by Guido van Rossum's design decisions in the official tutorial and Mark Lutz's memory analysis, we explore why tuples exist alongside lists: data integrity guarantees, constant-time hashing allowing tuples to serve as dictionary keys, memory optimization, and namedtuples from collections.",
    canDo:
      "Can construct single-element and multi-element tuples, utilize tuples as compound dictionary keys, and structure self-documenting data records with collections.namedtuple.",
    teacherNote:
      "To create a single-element tuple, a trailing comma is syntactically mandatory! `(42)` is just the integer 42 enclosed in mathematical grouping parentheses; `(42,)` is a single-element tuple.",
    sections: [
      {
        title: "1. Tuples vs Lists: Structural Comparison",
        description: "When to choose tuples over lists in professional Python:",
        table: {
          headers: ["Attribute", "Tuple (tuple)", "List (list)", "Significance"],
          rows: [
            ["Mutability", "Immutable (Fixed after creation)", "Mutable (Resizable)", "Tuples guarantee write-protection."],
            ["Memory Overhead", "Compact (exact size allocated)", "Over-allocated (headroom for appending)", "Tuples consume ~25% less RAM."],
            ["Hashability", "Hashable (if elements are hashable)", "Unhashable (TypeError if used as key)", "Tuples can be dictionary keys or set members."],
            ["Use Case", "Heterogeneous records (x, y, timestamp)", "Homogeneous collections of items", "Semantic clarity in codebases."],
          ],
        },
      },
      {
        title: "2. Named Tuples (collections.namedtuple)",
        description: "Lightweight, readable record structures without the overhead of full classes:",
        items: [
          {
            term: "collections.namedtuple",
            meaning: "Creates tuple subclasses with named fields accessible via dot notation",
            example: "from collections import namedtuple\nPoint = namedtuple('Point', ['x', 'y'])\np = Point(10, 20)\nprint(p.x, p.y)  # 10 20 (also accessible as p[0], p[1])",
          },
          {
            term: "Tuple Packing and Unpacking",
            meaning: "Implicit tuple creation and element assignment without parentheses",
            example: "coords = 10, 20  # Packing into tuple\nx, y = coords    # Unpacking",
          },
        ],
      },
    ],
    practice: [
      {
        question: "How do you define a valid single-element tuple containing the integer 5?",
        options: ["(5)", "tuple(5)", "(5,)", "[5]"],
        answer: "(5,)",
        explanation:
          "The comma is what defines a tuple in Python syntax. (5) is treated as the integer 5 within grouping parentheses; (5,) defines a tuple of length 1.",
      },
      {
        question: "Can a tuple containing two strings `('admin', 'write')` be used as a dictionary key?",
        options: [
          "No, only integers can be keys",
          "Yes, because strings and tuples are immutable and hashable",
          "No, because tuples are collections",
          "Only if imported from typing",
        ],
        answer: "Yes, because strings and tuples are immutable and hashable",
        explanation:
          "Dictionary keys must be hashable. Because strings are immutable and the tuple containing them is immutable, the entire tuple is hashable and can serve as a dict key.",
      },
    ],
  },
};
