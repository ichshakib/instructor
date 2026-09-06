import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_8_LESSONS: Record<string, LessonContent> = {
  "py-ch8-l22": {
    overview:
      "Python objects communicate their textual identity through two distinct special methods: `__repr__` and `__str__`. Guided by Mark Lutz's operator overloading guide and Python standard conventions, this lesson demystifies the difference between unambiguous developer debugging representations (`__repr__`) and readable user-facing output (`__str__`).",
    canDo:
      "Can implement __repr__ and __str__ on custom classes, differentiate their triggers in interactive shells vs print statements, and format fallback representations.",
    teacherNote:
      "Rule of thumb from Python's core developers: `__repr__` should aim to be unambiguous and, whenever possible, match the exact Python code string needed to recreate the object (e.g., `Point(x=3, y=4)`). `__str__` is for end users. If `__str__` is not implemented, Python automatically falls back to `__repr__`!",
    sections: [
      {
        title: "1. __str__ vs __repr__ Protocols",
        description: "How Python displays objects to developers vs end-users:",
        table: {
          headers: ["Method", "Primary Audience", "Primary Goal", "Triggered By"],
          rows: [
            [
              "__repr__(self)",
              "Developers / Debuggers",
              "Unambiguous; ideally executable Python code (e.g. `User('alice')`)",
              "REPL inspection, debugger output, repr(obj), fallback for collections.",
            ],
            [
              "__str__(self)",
              "End-Users / UI",
              "Human-readable, clear, and concise",
              "print(obj), str(obj), f'{obj}'.",
            ],
          ],
        },
      },
      {
        title: "2. Complete Implementation Example",
        description: "Best practices for instrumenting domain models:",
        items: [
          {
            term: "Instrumenting Custom Models",
            meaning: "Providing clean debugging and display representations",
            example: "class Money:\n    def __init__(self, amount, currency='USD'):\n        self.amount = amount\n        self.currency = currency\n\n    def __repr__(self):\n        return f'Money(amount={self.amount!r}, currency={self.currency!r})'\n\n    def __str__(self):\n        return f'{self.amount:.2f} {self.currency}'\n\nm = Money(25.5, 'EUR')\nprint(m)       # '25.50 EUR' (calls __str__)\nprint([m])     # '[Money(amount=25.5, currency='EUR')]' (calls __repr__ in collections!)",
          },
        ],
        notes: [
          "Always implement `__repr__` first. If you only implement `__str__`, displaying a list of your objects `[obj]` will still show the ugly `<__main__.Object object at 0x...>` memory address.",
        ],
      },
    ],
    practice: [
      {
        question: "When a list containing custom objects `[obj1, obj2]` is printed, which method is invoked on each element?",
        options: ["__str__", "__repr__", "__display__", "__format__"],
        answer: "__repr__",
        explanation:
          "Python's collection representations (lists, tuples, dicts) intentionally call __repr__ on their contained elements to ensure unambiguous inspection during debugging.",
      },
      {
        question: "What happens if a class defines `__repr__` but does NOT define `__str__`?",
        options: [
          "Calling print(obj) raises an AttributeError",
          "Python automatically falls back to using `__repr__` for string conversion",
          "Python prints None",
          "The class cannot be instantiated",
        ],
        answer: "Python automatically falls back to using `__repr__` for string conversion",
        explanation:
          "Python has a built-in fallback: if __str__ is missing, str(obj) and print(obj) will seamlessly execute __repr__.",
      },
    ],
  },

  "py-ch8-l23": {
    overview:
      "Python achieves deep language polymorphism through special methods ('dunder' methods, short for double-underscore). In this lesson, drawn from Mark Lutz's 'Learning Python' Part VI, you will implement operator overloading: arithmetic operators (`__add__`, `__sub__`), comparison operators (`__eq__`, `__lt__`), and collection protocols (`__len__`, `__getitem__`).",
    canDo:
      "Can overload arithmetic and comparison operators for custom types, enable sequence indexing with __getitem__, and support len() queries with __len__.",
    teacherNote:
      "Implementing `__getitem__` not only enables square bracket indexing (`obj[index]`), but Python also automatically uses it to provide iteration (`for x in obj:`) and membership testing (`item in obj`) for free via protocol fallbacks!",
    sections: [
      {
        title: "1. Core Operator Dunder Methods",
        description: "Mapping Python operators to internal class methods:",
        table: {
          headers: ["Expression", "Dunder Method", "Operation Category", "Typical Return"],
          rows: [
            ["a + b", "__add__(self, other)", "Arithmetic Addition", "New combined instance"],
            ["a == b", "__eq__(self, other)", "Equality Comparison", "bool (True / False)"],
            ["a < b", "__lt__(self, other)", "Rich Comparison (Less Than)", "bool (enables sorted())"],
            ["len(a)", "__len__(self)", "Collection Sizing", "non-negative int"],
            ["a[key]", "__getitem__(self, key)", "Sequence / Mapping Indexing", "Value at specified key/index"],
            ["a[key] = v", "__setitem__(self, key, value)", "Item Assignment", "None"],
          ],
        },
      },
      {
        title: "2. Implementing a Custom Vector",
        description: "Working vector arithmetic through operator overloading:",
        items: [
          {
            term: "Vector 2D Math",
            meaning: "Overloading addition, scaling, and length queries",
            example: "class Vector:\n    def __init__(self, x, y):\n        self.x, self.y = x, y\n\n    def __add__(self, other):\n        return Vector(self.x + other.x, self.y + other.y)\n\n    def __mul__(self, scalar):\n        return Vector(self.x * scalar, self.y * scalar)\n\n    def __eq__(self, other):\n        return self.x == other.x and self.y == other.y\n\nv1 = Vector(2, 4)\nv2 = Vector(3, 1)\nv3 = v1 + v2  # Vector(5, 5)",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Which dunder method must you implement to allow instances of your class to be measured using `len(obj)`?",
        options: ["__size__", "__count__", "__len__", "__length__"],
        answer: "__len__",
        explanation:
          "The built-in len() function invokes the object's __len__() method, which must return a non-negative integer.",
      },
      {
        question: "If you implement `__lt__` (less than) on a custom class, what built-in capability does Python enable?",
        options: [
          "Sorting instances in lists using sorted() or list.sort()",
          "Automatic encryption",
          "Instant parallel execution",
          "Direct database storage",
        ],
        answer: "Sorting instances in lists using sorted() or list.sort()",
        explanation:
          "Python's Timsort algorithm relies on rich comparisons (specifically __lt__). Implementing __lt__ allows collections of your objects to be ordered cleanly using sorted().",
      },
    ],
  },

  "py-ch8-l24": {
    overview:
      "Deterministic resource management is critical when handling files, network sockets, locks, and database transactions. Guided by Guido van Rossum's PEP 343 and Mark Lutz's context manager design, this lesson teaches the `with` statement, how the `__enter__` and `__exit__` context management protocol works, exception suppression, and building context managers using `contextlib.contextmanager`.",
    canDo:
      "Can manage critical system resources using with statements, build custom context manager classes, intercept and suppress exceptions in __exit__, and write generator context managers with contextlib.",
    teacherNote:
      "The `__exit__(self, exc_type, exc_val, exc_tb)` method receives any exception raised inside the `with` block. If `__exit__` returns `True`, Python suppresses the exception! If it returns `None` or `False`, the exception propagates outward normally.",
    sections: [
      {
        title: "1. The Context Management Protocol Lifecycle",
        description: "How Python's `with` statement executes guaranteed setup and teardown:",
        table: {
          headers: ["Phase", "Protocol Method", "Triggered When", "Action"],
          rows: [
            [
              "1. Setup",
              "__enter__(self)",
              "Immediately upon entering the with block",
              "Acquires resource; return value is bound to the 'as' variable.",
            ],
            [
              "2. Execution",
              "Block Statements",
              "Inside the indented body",
              "Application logic executes. If an exception occurs, execution halts.",
            ],
            [
              "3. Teardown",
              "__exit__(self, exc_type, exc_val, exc_tb)",
              "Always runs upon leaving block (even on uncaught exceptions)",
              "Closes file/socket, releases locks, commits or rolls back transactions.",
            ],
          ],
        },
      },
      {
        title: "2. contextlib Generator Decorator",
        description: "Simplifying context manager creation using generators and yield:",
        items: [
          {
            term: "@contextlib.contextmanager",
            meaning: "Transforms a generator into a context manager: code before yield runs in __enter__, code in finally runs in __exit__",
            example: "from contextlib import contextmanager\nimport time\n\n@contextmanager\ndef timer(label):\n    start = time.perf_counter()\n    try:\n        yield\n    finally:\n        elapsed = time.perf_counter() - start\n        print(f'{label}: {elapsed:.4f}s')\n\nwith timer('Heavy calculation'):\n    sum(i * i for i in range(1_000_000))",
          },
        ],
      },
    ],
    practice: [
      {
        question: "When is the `__exit__` method of a context manager guaranteed to run?",
        options: [
          "Only if the block finishes without errors",
          "Only when an exception is thrown",
          "Always, whether the block succeeds, returns early, or raises an unhandled exception",
          "Only if invoked explicitly by the user",
        ],
        answer: "Always, whether the block succeeds, returns early, or raises an unhandled exception",
        explanation:
          "The with statement guarantees that __exit__ is called upon exiting the block under all circumstances, ensuring robust cleanup of files, locks, and network resources.",
      },
      {
        question: "How can the `__exit__` method tell Python to suppress an exception that occurred inside the with block?",
        options: [
          "By raising a new exception",
          "By returning True",
          "By returning None",
          "By calling sys.suppress()",
        ],
        answer: "By returning True",
        explanation:
          "If __exit__ returns a truthy value (specifically True), Python swallows the active exception and continues program execution immediately after the with block.",
      },
    ],
  },
};
