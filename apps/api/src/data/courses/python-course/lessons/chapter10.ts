import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_10_LESSONS: Record<string, LessonContent> = {
  "py-ch10-l28": {
    overview:
      "Production-grade software must anticipate, gracefully intercept, and recover from runtime anomalies. Drawing from Mark Lutz's comprehensive exception architecture in 'Learning Python' and Eric Matthes' practical error handling patterns, this lesson covers the complete try/except/else/finally statement, catching specific exception types, re-raising with 'raise', exception chaining, and architecting custom exception hierarchies derived from Exception.",
    canDo:
      "Can intercept specific runtime exceptions, implement cleanup routines with finally, write clean happy-path code in else blocks, and define custom domain exceptions.",
    teacherNote:
      "NEVER write a bare `except:` or `except Exception:` that silently ignores errors with `pass`! This antipattern hides programming bugs, typos, and interrupts like KeyboardInterrupt and SystemExit, making systems impossible to troubleshoot.",
    sections: [
      {
        title: "1. The Complete Exception Block Architecture",
        description: "The 4 interconnected clauses of Python error handling:",
        table: {
          headers: ["Clause", "Execution Timing", "Mandatory?", "Primary Purpose"],
          rows: [
            ["try", "Always starts the block", "Yes", "Encloses code that might trigger an exception."],
            ["except ExcType as e", "Only when an exception matching ExcType occurs", "At least one (or finally)", "Intercepts error, inspects message, and executes recovery."],
            ["else", "Only when NO exceptions occurred in try", "No", "Contains code that should run only on complete success."],
            ["finally", "Always runs regardless of success or unhandled exception", "No", "Guarantees resource teardown, lock release, or socket closure."],
          ],
        },
      },
      {
        title: "2. Custom Exception Hierarchies",
        description: "Modeling domain-specific errors cleanly:",
        items: [
          {
            term: "Domain Exception Class",
            meaning: "Custom exception subclasses inheriting from built-in Exception",
            example: "class PaymentError(Exception):\n    \"\"\"Base exception for all billing domain failures.\"\"\"\n    pass\n\nclass InsufficientFundsError(PaymentError):\n    def __init__(self, balance, amount):\n        super().__init__(f'Cannot withdraw {amount}; current balance is {balance}')\n        self.balance = balance\n        self.amount = amount",
          },
          {
            term: "Exception Chaining: raise ... from ...",
            meaning: "Links a high-level domain error to an underlying low-level cause for debugging",
            example: "try:\n    connect_database()\nexcept ConnectionRefusedError as err:\n    raise ServiceUnavailableError('Database down') from err",
          },
        ],
      },
    ],
    practice: [
      {
        question: "When does the `else` clause in a `try...except...else...finally` block execute?",
        options: [
          "Only when an exception was caught and handled",
          "Only when no exceptions were raised inside the try block",
          "Every time before the finally block runs",
          "Only when the system runs out of memory",
        ],
        answer: "Only when no exceptions were raised inside the try block",
        explanation:
          "The else block runs only if the try block executes to completion without encountering any exception.",
      },
      {
        question: "What class should custom application exceptions inherit from?",
        options: ["BaseException", "Exception", "RuntimeError only", "object directly"],
        answer: "Exception",
        explanation:
          "Custom exceptions should inherit from Exception. Inheriting from BaseException is reserved for system-exiting exceptions like KeyboardInterrupt and SystemExit that normal code should rarely catch.",
      },
    ],
  },

  "py-ch10-l29": {
    overview:
      "Working with files and persistent state is essential for real-world software. Combining Eric Matthes' file chapters with Guido van Rossum's I/O tutorials, this lesson covers contextual file handling with open(), reading text line-by-line vs chunk-by-chunk, writing and appending data, and serializing complex Python objects into portable JSON data structures using the standard library `json` module.",
    canDo:
      "Can open, read, write, and append files safely using with open(), handle file encodings (UTF-8), and serialize/deserialize data using json.dumps(), json.loads(), json.dump(), and json.load().",
    teacherNote:
      "Always explicitly declare `encoding='utf-8'` when calling `open()`. Operating systems have differing default encodings (e.g., Windows may default to cp1252), which leads to mysterious UnicodeDecodeError bugs when files with accents or emojis are moved across platforms.",
    sections: [
      {
        title: "1. File Modes & Context Management",
        description: "File access modes with automatic closure:",
        table: {
          headers: ["Mode", "Name", "Behavior", "File Pointer Position"],
          rows: [
            ["'r'", "Read (Default)", "Opens for reading; raises FileNotFoundError if missing", "Beginning of file"],
            ["'w'", "Write", "Opens for writing; truncates/overwrites existing file", "Beginning of file"],
            ["'a'", "Append", "Opens for writing; appends to end without deleting content", "End of file"],
            ["'rb' / 'wb'", "Binary Read/Write", "Reads/writes raw bytes (for images, audio, PDFs)", "Beginning of file"],
          ],
        },
      },
      {
        title: "2. The json Standard Module",
        description: "Bidirectional JSON serialization and deserialization:",
        items: [
          {
            term: "json.dumps(obj, indent=2)",
            meaning: "Serializes a Python dict/list into a JSON formatted string (with optional pretty-printing)",
            example: "payload = {'status': 'ok', 'count': 42}\njson_str = json.dumps(payload, indent=2)",
          },
          {
            term: "json.loads(json_str)",
            meaning: "Deserializes a JSON string back into native Python dictionaries, lists, and primitives",
            example: "data = json.loads('{\"name\": \"Alice\", \"age\": 30}')\nprint(data['name'])  # Alice",
          },
          {
            term: "json.dump(obj, file) / json.load(file)",
            meaning: "Serializes / deserializes directly to and from open file streams",
            example: "with open('config.json', 'w', encoding='utf-8') as f:\n    json.dump(config_data, f, indent=4)",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Why is `with open('data.txt', 'r', encoding='utf-8') as f:` preferred over `f = open('data.txt')`?",
        options: [
          "It compresses the file automatically",
          "The with statement guarantees the file descriptor is closed automatically, even if an exception occurs",
          "It makes reading 10x faster",
          "It encrypts the contents in RAM",
        ],
        answer: "The with statement guarantees the file descriptor is closed automatically, even if an exception occurs",
        explanation:
          "Context managers guarantee proper cleanup. The with statement automatically closes the underlying OS file handle when exiting the block, preventing resource leaks.",
      },
      {
        question: "Which function converts a valid JSON string directly into a Python dictionary or list in memory?",
        options: ["json.dump()", "json.loads()", "json.parse()", "json.encode()"],
        answer: "json.loads()",
        explanation:
          "json.loads() ('load string') parses a JSON formatted string into native Python objects, while json.load() reads from an open file-like object.",
      },
    ],
  },

  "py-ch10-l30": {
    overview:
      "As Python projects expand, organizing code into reusable modules, packages, and utilizing the extensive Standard Library ('Batteries Included') is what turns scripts into production software. In this capstone lesson, synthesizing Guido van Rossum's module design and Mark Lutz's package namespaces, you will master `import` mechanics, the `__name__ == '__main__'` guard, creating packages with `__init__.py`, and essential standard library powerhouses (pathlib, collections, itertools, and datetime).",
    canDo:
      "Can structure Python packages and modules, explain import search paths in sys.path, use the __name__ == '__main__' guard idiomatically, and leverage core standard library utilities.",
    teacherNote:
      "The `if __name__ == '__main__':` boilerplate allows a Python file to act BOTH as a standalone executable script (when run directly via `python file.py`) and as an importable module without side-effects (when imported into another file via `import file`). Always guard execution code with this pattern!",
    sections: [
      {
        title: "1. Module Importation & The __name__ Guard",
        description: "How Python resolves and executes modular code:",
        table: {
          headers: ["Concept", "Code Construct", "Behavior", "Key Advantage"],
          rows: [
            [
              "Import Statement",
              "import math\nfrom pathlib import Path",
              "Searches sys.path, executes module on first import, caches in sys.modules.",
              "Prevents duplicate execution.",
            ],
            [
              "Execution Guard",
              "if __name__ == '__main__':\n    main()",
              "Only executes the enclosed block if the script is run directly from CLI.",
              "Enables testability and clean module importing.",
            ],
            [
              "Package Directory",
              "package_name/__init__.py",
              "Treats directory as a Python package containing sub-modules.",
              "Structures clean namespaces.",
            ],
          ],
        },
      },
      {
        title: "2. Standard Library Powerhouses",
        description: "The most indispensable tools built directly into Python:",
        items: [
          {
            term: "pathlib.Path",
            meaning: "Object-oriented, cross-platform filesystem navigation replacing legacy os.path",
            example: "from pathlib import Path\nbase_dir = Path(__file__).resolve().parent\nconfig_file = base_dir / 'config' / 'app.json'\nif config_file.exists():\n    content = config_file.read_text(encoding='utf-8')",
          },
          {
            term: "collections.Counter / defaultdict",
            meaning: "High-performance specialized container datatypes",
            example: "from collections import Counter, defaultdict\ncounts = Counter(['apple', 'orange', 'apple'])  # Counter({'apple': 2, 'orange': 1})\ngroups = defaultdict(list)\ngroups['admins'].append('Alice')",
          },
          {
            term: "datetime.datetime",
            meaning: "Date and time manipulation with ISO 8601 parsing and arithmetic",
            example: "from datetime import datetime, timezone\nnow = datetime.now(timezone.utc)\nprint(now.isoformat())",
          },
        ],
      },
    ],
    funFact: {
      title: "Batteries Included",
      content:
        "The Python motto 'Batteries Included' reflects the philosophy that the standard library should provide rich, reliable functionality out of the box—from sqlite3 databases and cryptographic hashes to HTTP servers and zip compression—without requiring third-party downloads.",
    },
    practice: [
      {
        question: "What is the value of `__name__` when a Python script is executed directly from the terminal?",
        options: ["'__main__'", "'main'", "The filename without extension", "None"],
        answer: "'__main__'",
        explanation:
          "When a file is executed directly, CPython sets the global __name__ variable to the string '__main__'. When imported into another file, __name__ is set to the module's name.",
      },
      {
        question: "Which modern standard library module provides an object-oriented, cross-platform interface for file and directory paths?",
        options: ["os.path", "pathlib", "sys.file", "filepath"],
        answer: "pathlib",
        explanation:
          "pathlib (introduced in Python 3.4) offers the Path class, providing an elegant, object-oriented API for path manipulation across Windows, macOS, and Linux.",
      },
    ],
  },
};
