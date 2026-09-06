import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_9_LESSONS: Record<string, LessonContent> = {
  "py-ch9-l25": {
    overview:
      "Comprehensions provide a concise, declarative syntax for transforming, filtering, and constructing collections in Python. Synthesizing Mark Lutz's benchmark analysis in 'Learning Python' and Eric Matthes' practical examples, this lesson covers list comprehensions, dictionary comprehensions, set comprehensions, conditional filtering, and avoiding unreadable nested comprehension antipatterns.",
    canDo:
      "Can construct list, dict, and set comprehensions with predicates, explain why comprehensions execute faster than equivalent for-loop append operations in CPython, and refactor multi-line loops.",
    teacherNote:
      "Comprehensions are not merely aesthetic: in CPython, a list comprehension runs at C-speed in an optimized bytecode loop (LIST_APPEND opcode) without the overhead of repeated attribute lookup and function calls that `items.append()` incurs.",
    sections: [
      {
        title: "1. The 3 Comprehension Flavors",
        description: "Declarative construction syntax across list, dict, and set collections:",
        table: {
          headers: ["Type", "Syntax Template", "Example", "Result"],
          rows: [
            [
              "List Comprehension",
              "[expr for item in iterable if condition]",
              "[x**2 for x in range(5) if x % 2 == 0]",
              "[0, 4, 16]",
            ],
            [
              "Dict Comprehension",
              "{k_expr: v_expr for item in iterable if condition}",
              "{w: len(w) for w in ['python', 'dev']}",
              "{'python': 6, 'dev': 3}",
            ],
            [
              "Set Comprehension",
              "{expr for item in iterable if condition}",
              "{x.lower() for x in ['A', 'B', 'a']}",
              "{'a', 'b'}",
            ],
          ],
        },
      },
      {
        title: "2. Filtering vs Transforming",
        description: "Position of if conditions changes semantic behavior:",
        items: [
          {
            term: "Trailing if (Filtering)",
            meaning: "Filters which items from the iterable enter the result; placed at the very end",
            example: "evens = [x for x in numbers if x % 2 == 0]",
          },
          {
            term: "Leading if/else (Ternary Value Selection)",
            meaning: "Transforms the value based on a condition; placed before the 'for' keyword",
            example: "labels = ['even' if x % 2 == 0 else 'odd' for x in numbers]",
          },
        ],
        notes: [
          "Keep comprehensions readable: if a comprehension requires more than two for clauses or complex logic, write a standard for loop instead.",
        ],
      },
    ],
    practice: [
      {
        question: "What is the output of `[x * 10 for x in range(4) if x > 1]`?",
        options: ["[0, 10, 20, 30]", "[20, 30]", "[10, 20, 30]", "[20, 30, 40]"],
        answer: "[20, 30]",
        explanation:
          "range(4) produces 0, 1, 2, 3. The trailing if condition filters for elements strictly greater than 1 (yielding 2 and 3). Multiplying by 10 produces [20, 30].",
      },
      {
        question: "How do you create a dictionary mapping words to their length using a comprehension?",
        options: [
          "[w: len(w) for w in words]",
          "{w: len(w) for w in words}",
          "{w, len(w) for w in words}",
          "dict([w for w in words])",
        ],
        answer: "{w: len(w) for w in words}",
        explanation:
          "Dictionary comprehensions use curly braces {} with key: value syntax separated by a colon, followed by the for clause: {w: len(w) for w in words}.",
      },
    ],
  },

  "py-ch9-l26": {
    overview:
      "Generators and the iterator protocol enable processing massive or infinite streams of data with minimal memory consumption. Grounded in Guido van Rossum's PEP 255 and Mark Lutz's deep iteration mechanics, this lesson covers the iterator protocol (`__iter__` and `__next__`), writing generator functions using `yield`, generator expressions `(x for x in seq)`, and pipeline streaming.",
    canDo:
      "Can construct memory-efficient generator functions using yield, stream large datasets without loading them entirely into RAM, and manually drive iterators with next().",
    teacherNote:
      "A regular function runs to completion and destroys its stack frame upon returning. A generator function containing `yield` freezes its state, preserves local variables and execution pointers, and resumes execution right where it paused when `next()` is called again!",
    sections: [
      {
        title: "1. The Iterator Protocol & yield Mechanics",
        description: "How Python processes sequences lazily on-demand:",
        table: {
          headers: ["Concept", "Mechanism", "Role", "Memory Impact"],
          rows: [
            [
              "Iterator Protocol",
              "__iter__() returns self; __next__() yields next item or raises StopIteration",
              "Universal abstraction behind all Python for loops.",
              "Only the current item is held in memory.",
            ],
            [
              "Generator Function",
              "def gen(): ... yield value",
              "Produces a generator object upon invocation without executing code immediately.",
              "O(1) memory regardless of stream size (even infinite streams!).",
            ],
            [
              "Generator Expression",
              "(expr for item in iterable)",
              "Lazy, on-demand counterpart to list comprehensions.",
              "Avoids allocating intermediate lists.",
            ],
          ],
        },
      },
      {
        title: "2. Large Dataset Streaming Pipeline",
        description: "Processing gigabyte-scale logs with zero memory footprint:",
        items: [
          {
            term: "Log File Streamer",
            meaning: "Reading line by line without readlines() loading the entire file",
            example: "def read_error_logs(filename):\n    with open(filename, 'r') as file:\n        for line in file:\n            if 'ERROR' in line:\n                yield line.strip()\n\n# Pipeline: memory stays under 5MB even for a 50GB file!\nfor error in read_error_logs('system.log'):\n    alert_engineer(error)",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What exception does an iterator raise when there are no more items left to yield?",
        options: ["IndexError", "StopIteration", "EOFError", "GeneratorExit"],
        answer: "StopIteration",
        explanation:
          "Under the Python iterator protocol, calling next(iterator) when the sequence is exhausted raises a StopIteration exception, which for loops catch automatically.",
      },
      {
        question: "Why would you choose a generator function with `yield` over returning a list of 10,000,000 items?",
        options: [
          "Generators execute 100x faster in single-threaded tasks",
          "Generators produce items on-demand (lazy evaluation), requiring virtually no memory compared to a huge in-memory list",
          "Generators are automatically multi-threaded",
          "Lists cannot hold more than 100,000 items",
        ],
        answer: "Generators produce items on-demand (lazy evaluation), requiring virtually no memory compared to a huge in-memory list",
        explanation:
          "Generators evaluate lazily one item at a time. A list of 10 million items consumes hundreds of megabytes of RAM, whereas a generator uses constant O(1) memory.",
      },
    ],
  },

  "py-ch9-l27": {
    overview:
      "Decorators are a powerful metaprogramming technique in Python, enabling you to wrap, extend, or alter the behavior of functions and methods cleanly without modifying their source code. Informed by Mark Lutz's decorator architecture in 'Learning Python', this lesson covers higher-order functions, closure wrappers, the `@decorator` syntax, accepting arguments in decorators, and preserving function signatures with `functools.wraps`.",
    canDo:
      "Can implement custom decorators for timing, logging, authentication, and caching, pass arguments into parameterized decorators, and preserve function metadata with @functools.wraps.",
    teacherNote:
      "ALWAYS decorate your inner wrapper with `@functools.wraps(func)`. Without it, your decorated function will lose its original `__name__`, `__doc__`, and signature, appearing to the debugger as 'wrapper', which makes debugging and documentation generation a nightmare!",
    sections: [
      {
        title: "1. The Anatomy of a Decorator",
        description: "How the `@syntax` translates to function composition:",
        table: {
          headers: ["Syntax", "Syntactic Translation", "Lifecycle", "Purpose"],
          rows: [
            [
              "@my_decorator\ndef func(): pass",
              "func = my_decorator(func)",
              "Evaluated when module loads",
              "Wraps func inside decorator's wrapper logic.",
            ],
            [
              "@functools.wraps(func)",
              "Copies __name__, __doc__, __annotations__",
              "Applied to inner wrapper",
              "Preserves introspection and debugging metadata.",
            ],
          ],
        },
      },
      {
        title: "2. Practical Production Decorators",
        description: "Timing execution and caching expensive results:",
        items: [
          {
            term: "Execution Timer Decorator",
            meaning: "Measures wall-clock time of any function call automatically",
            example: "import time\nfrom functools import wraps\n\ndef measure_time(func):\n    @wraps(func)\n    def wrapper(*args, **kwargs):\n        start = time.perf_counter()\n        result = func(*args, **kwargs)\n        elapsed = time.perf_counter() - start\n        print(f'[{func.__name__}] executed in {elapsed:.4f}s')\n        return result\n    return wrapper\n\n@measure_time\ndef compute_data():\n    return sum(i**2 for i in range(500_000))",
          },
          {
            term: "functools.lru_cache",
            meaning: "Standard library memoization decorator caching function results for repeated arguments",
            example: "from functools import lru_cache\n\n@lru_cache(maxsize=128)\ndef fibonacci(n):\n    if n < 2: return n\n    return fibonacci(n-1) + fibonacci(n-2)",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What does the syntax `@track_calls\ndef compute(): pass` do under the hood?",
        options: [
          "It compiles compute into C machine code",
          "It executes `compute = track_calls(compute)`",
          "It registers compute in the global operating system scheduler",
          "It makes compute asynchronous",
        ],
        answer: "It executes `compute = track_calls(compute)`",
        explanation:
          "The @decorator syntax is syntactic sugar that passes the declared function object into the decorator callable and rebinds the function name to the return value.",
      },
      {
        question: "Why should you always apply `@functools.wraps(func)` to the inner wrapper function of a decorator?",
        options: [
          "To make the wrapper thread-safe",
          "To preserve the original function's name (__name__), docstring (__doc__), and signature metadata",
          "To automatically convert return values into JSON",
          "Because Python throws a SyntaxError without it",
        ],
        answer: "To preserve the original function's name (__name__), docstring (__doc__), and signature metadata",
        explanation:
          "@functools.wraps copies the original function's metadata (including __name__, __doc__, and type annotations) onto the wrapper function, preventing loss of introspection data.",
      },
    ],
  },
};
