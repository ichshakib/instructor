import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_1_LESSONS: Record<string, LessonContent> = {
  "py-ch1-l1": {
    overview:
      "Python is a high-level, interpreted, dynamically typed programming language renowned for its elegance, readability, and multi-paradigm design. Drawing from Mark Lutz's 'Learning Python' and Guido van Rossum's official tutorial, this lesson explores how the CPython virtual machine compiles source text into portable bytecode (.pyc), executes it in the Python runtime loop, and isolates dependencies cleanly using modern virtual environments (venv).",
    canDo:
      "Can explain the CPython compilation and runtime pipeline, execute scripts in interactive and file modes, and initialize isolated virtual environments.",
    teacherNote:
      "Unlike pure compiled languages (C/C++) or pure tree-walking interpreters, Python is a bytecode interpreter. Source files (.py) are parsed into Python Virtual Machine (PVM) opcodes stored in the __pycache__ directory, which significantly accelerates repeated imports.",
    sections: [
      {
        title: "1. The CPython Execution Architecture",
        description: "How Python processes, compiles, and evaluates your code at runtime:",
        table: {
          headers: ["Stage", "Input", "Output", "Description"],
          rows: [
            [
              "1. Source Code Parsing",
              "app.py (Text)",
              "AST (Abstract Syntax Tree)",
              "CPython checks lexical syntax, indentation blocks, and generates tokens.",
            ],
            [
              "2. Bytecode Compilation",
              "AST",
              ".pyc / Code Objects",
              "Generates platform-independent stack machine instructions (disassemblable via dis).",
            ],
            [
              "3. Python Virtual Machine",
              "Bytecode Stack Instructions",
              "OS System Calls / CPU Execution",
              "CPython's runtime loop iteratively fetches opcodes and modifies memory heaps.",
            ],
          ],
        },
      },
      {
        title: "2. Script Execution Modes & Virtual Environments",
        description: "Core commands for running Python code and managing isolated dependency sandboxes:",
        items: [
          {
            term: "python script.py",
            meaning: "Compiles and executes the specified file from the entry point",
            example: "python main.py",
          },
          {
            term: "python -m venv .venv",
            meaning: "Creates an isolated virtual environment containing dedicated site-packages",
            example: "python -m venv .venv && source .venv/bin/activate  # (Linux/macOS)\n.venv\\Scripts\\activate  # (Windows)",
          },
          {
            term: "python -i script.py",
            meaning: "Runs script and then remains in interactive REPL inspection mode",
            example: "python -i test_module.py",
          },
        ],
        notes: [
          "Always activate a virtual environment before installing project dependencies via pip install.",
          "Check active interpreter paths with sys.executable and active search paths with sys.path.",
        ],
      },
    ],
    funFact: {
      title: "Why 'Python'?",
      content:
        "Guido van Rossum named the language after the British surreal comedy sketch troupe Monty Python's Flying Circus, not after the snake genus. The official documentation frequently references spam, eggs, and knights!",
    },
    practice: [
      {
        question: "Where does CPython cache compiled bytecode for imported modules?",
        options: [
          "In the system /tmp partition",
          "Inside the __pycache__ directory as .pyc files",
          "In browser localStorage",
          "Inside the operating system kernel registry",
        ],
        answer: "Inside the __pycache__ directory as .pyc files",
        explanation:
          "CPython saves pre-compiled bytecode inside the local __pycache__ folder with filenames indicating the Python version (e.g., module.cpython-310.pyc) to avoid recompilation on subsequent runs.",
      },
      {
        question: "Which built-in module is recommended to create isolated package environments in Python 3?",
        options: ["virtualenv_legacy", "pip_builder", "venv", "sandbox"],
        answer: "venv",
        explanation:
          "The venv module is built into Python's standard library since Python 3.3 and is invoked using 'python -m venv <env_name>'.",
      },
    ],
  },

  "py-ch1-l2": {
    overview:
      "Python's defining design aesthetic is clarity and readability. Syntactic structure in Python is communicated through significant indentation rather than curly braces. This lesson, grounded in PEP 8 (Style Guide for Python Code) and Eric Matthes' 'Python Crash Course', establishes professional habits: proper 4-space indentation, docstrings, variable naming conventions, and clean inline commenting.",
    canDo:
      "Can format code adhering to PEP 8, formulate expressive comments and docstrings, and prevent IndentationError and SyntaxError.",
    teacherNote:
      "Never mix tabs and spaces. Modern Python 3 strictly prohibits mixing tabs and spaces for indentation and will raise a TabError. Standardize on 4 spaces per indentation level across all editors.",
    sections: [
      {
        title: "1. PEP 8 Naming Conventions",
        description: "Official community conventions for identifier casing across Python applications:",
        table: {
          headers: ["Identifier Type", "Naming Convention", "Correct Example", "Anti-Pattern"],
          rows: [
            [
              "Variables & Functions",
              "snake_case (lowercase with underscores)",
              "user_active_count, calculate_total()",
              "userActiveCount, CalculateTotal()",
            ],
            [
              "Classes",
              "PascalCase (CapWords)",
              "UserProfile, DatabaseConnection",
              "user_profile, databaseConnection",
            ],
            [
              "Constants",
              "UPPER_SNAKE_CASE",
              "MAX_RETRY_LIMIT, DATABASE_PORT",
              "maxRetryLimit, Max_Retry",
            ],
            [
              "Modules & Packages",
              "short, all-lowercase (underscores discouraged)",
              "math, request_handler",
              "RequestHandler, MathUtils",
            ],
          ],
        },
      },
      {
        title: "2. Indentation & Structural Blocks",
        description: "Code blocks are defined by a colon followed by indented statements:",
        items: [
          {
            term: "4 Spaces Standard",
            meaning: "PEP 8 mandate for every nesting indentation level",
            example: "def greet(name):\n    if name:\n        print(f'Hello, {name}')",
          },
          {
            term: "Docstrings (\"\"\"...\"\"\")",
            meaning: "Triple-quoted multi-line string documenting modules, classes, and functions",
            example: 'def add(a, b):\n    """Return the arithmetic sum of a and b."""\n    return a + b',
          },
          {
            term: "# Single-Line Comment",
            meaning: "Explanatory commentary ignored by the bytecode compiler",
            example: "# Validate that timeout is a positive integer\nif timeout < 0:\n    raise ValueError()",
          },
        ],
        notes: [
          "Docstrings are accessible at runtime via the `__doc__` attribute or `help(function_name)`.",
          "Limit all lines to a maximum of 79 characters, and docstrings/comments to 72 characters where possible.",
        ],
      },
    ],
    practice: [
      {
        question: "According to PEP 8, which casing convention must be used for function and variable names?",
        options: ["camelCase", "snake_case", "kebab-case", "PascalCase"],
        answer: "snake_case",
        explanation:
          "PEP 8 stipulates that variable and function names should be lowercase, with words separated by underscores (snake_case) to improve readability.",
      },
      {
        question: "How does Python determine the body of a loop, function, or conditional block?",
        options: [
          "Enclosing statements inside curly braces { }",
          "Using begin and end keywords",
          "A colon (:) followed by consistently indented lines",
          "Semicolons at the end of each statement",
        ],
        answer: "A colon (:) followed by consistently indented lines",
        explanation:
          "Python uses significant whitespace: a colon introduces a block, and all subsequent lines indented to the same depth belong to that block.",
      },
    ],
  },

  "py-ch1-l3": {
    overview:
      "Python's computational model treats everything as an object. As Mark Lutz meticulously demonstrates in 'Learning Python', Python variables are not memory-reserved boxes; they are lightweight object references (pointers) bound to allocated heap objects. This lesson explores the Zen of Python (PEP 20), dynamic typing, object identity vs equality, and garbage collection via reference counting.",
    canDo:
      "Can explain Python's object pointer model, differentiate between the 'is' and '==' operators, and apply the principles of the Zen of Python.",
    teacherNote:
      "When you execute `a = [1, 2, 3]` and `b = a`, Python does NOT copy the list. Both variables now point to the exact same heap memory object! Modifying `b.append(4)` will mutate `a` as well.",
    sections: [
      {
        title: "1. The Zen of Python (Guiding Principles)",
        description: "Core aphorisms accessible by entering `import this` in any Python shell:",
        items: [
          {
            term: "Beautiful is better than ugly",
            meaning: "Prioritize clean, aesthetically pleasing, expressive syntax",
            example: "numbers = [x * 2 for x in raw_values if x > 0]",
          },
          {
            term: "Explicit is better than implicit",
            meaning: "Avoid hidden magic, obscure side-effects, and implicit assumptions",
            example: "def calculate_fee(price, tax_rate=0.05): return price * tax_rate",
          },
          {
            term: "Simple is better than complex",
            meaning: "Choose the simplest viable data structures before building complex abstractions",
            example: "Use a dictionary before building an elaborate custom class hierarchy",
          },
          {
            term: "Readability counts",
            meaning: "Write code optimized for human readers, who spend 10x more time reading than writing",
            example: "Meaningful variable names over single-letter cryptic abbreviations",
          },
        ],
      },
      {
        title: "2. Variables as References & Object Identity",
        description: "How Python handles allocation, pointers, and equality checks:",
        table: {
          headers: ["Concept", "Mechanism", "Code Example", "Evaluation"],
          rows: [
            [
              "Value Equality (==)",
              "Checks if the contents / values of two objects are equivalent",
              "[1, 2] == [1, 2]",
              "True (contents are identical)",
            ],
            [
              "Identity Check (is)",
              "Checks if two references point to the exact same memory address (id)",
              "[1, 2] is [1, 2]",
              "False (two distinct list instances in memory)",
            ],
            [
              "Shared Reference",
              "Binding an existing reference to a new identifier name",
              "x = [1]; y = x; y is x",
              "True (both refer to the identical memory heap address)",
            ],
            [
              "Reference Counting",
              "CPython frees memory when an object's reference count drops to zero",
              "del x; del y",
              "Memory reclaimed automatically by garbage collector",
            ],
          ],
        },
      },
    ],
    practice: [
      {
        question: "What will the following code output?\n\na = [1, 2, 3]\nb = a\nb.append(4)\nprint(len(a))",
        options: ["3", "4", "Error: b is immutable", "None"],
        answer: "4",
        explanation:
          "Because variables in Python are object references, 'b = a' does not clone the list; both 'a' and 'b' reference the exact same list in heap memory. Appending to 'b' mutates the object referenced by 'a', making len(a) equal to 4.",
      },
      {
        question: "Which operator tests whether two variables point to the exact same memory address?",
        options: ["==", "===", "is", "id_equals"],
        answer: "is",
        explanation:
          "The 'is' operator compares object identity (memory addresses via id()), whereas '==' compares equality of values.",
      },
    ],
  },
};
