import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_6_LESSONS: Record<string, LessonContent> = {
  "py-ch6-l16": {
    overview:
      "Functions are Python's primary mechanism for procedural decomposition and code reuse. Synthesizing Mark Lutz's thorough function chapter and Eric Matthes' practical programming patterns, this lesson covers def statement mechanics, returning single and multiple values, writing descriptive docstrings, and modern PEP 484 type annotations for static analysis with tools like mypy.",
    canDo:
      "Can define functions, return multiple values via tuple packing, write compliant docstrings, and annotate parameters and return types with type hints.",
    teacherNote:
      "Functions without an explicit `return` statement implicitly return `None`. If you return comma-separated values like `return x, y`, Python automatically packs them into a single `tuple` `(x, y)` which caller code can unpack immediately.",
    sections: [
      {
        title: "1. Defining Functions & Return Values",
        description: "Syntax, tuple packing on return, and runtime evaluation:",
        table: {
          headers: ["Construct", "Syntax Example", "Evaluation Detail"],
          rows: [
            [
              "Standard Definition",
              "def calculate_tax(subtotal: float) -> float:\n    return subtotal * 0.08",
              "The def statement is executable code: it creates a function object and assigns it to the name.",
            ],
            [
              "Multiple Returns",
              "def min_max(items):\n    return min(items), max(items)",
              "Implicitly returns a 2-element tuple: low, high = min_max(nums).",
            ],
            [
              "Docstring Standard",
              'def fetch_user(uid: int) -> dict:\n    """Fetch user record from database by ID."""',
              "Stored in the function's __doc__ attribute; readable via help().",
            ],
          ],
        },
      },
      {
        title: "2. Modern Type Hints (PEP 484 / Python 3.10+)",
        description: "Documenting and statically verifying argument and return types:",
        items: [
          {
            term: "Union Types: int | str",
            meaning: "Specifies that an argument or return value can be either an integer or string",
            example: "def parse_id(val: int | str) -> int:\n    return int(val)",
          },
          {
            term: "Optional Types: str | None",
            meaning: "Specifies a value that can be a string or None",
            example: "def get_nickname(user_id: int) -> str | None:\n    return db.find_nickname(user_id)",
          },
          {
            term: "Generic Collections: list[str], dict[str, int]",
            meaning: "Type hints for collections with specific internal element types",
            example: "def word_frequencies(words: list[str]) -> dict[str, int]:\n    return {w: words.count(w) for w in set(words)}",
          },
        ],
        notes: [
          "Type annotations do NOT enforce type safety at runtime in CPython; they enable editor autocomplete and static type checkers like mypy and pyright.",
        ],
      },
    ],
    practice: [
      {
        question: "What actually happens when a Python function executes `return 10, 20, 30`?",
        options: [
          "It returns a list [10, 20, 30]",
          "It packs the values into a tuple (10, 20, 30) and returns it",
          "It raises a SyntaxError: multiple returns unsupported",
          "It returns only the first value (10)",
        ],
        answer: "It packs the values into a tuple (10, 20, 30) and returns it",
        explanation:
          "In Python, returning comma-separated values is syntactic sugar for tuple packing: the function returns the single tuple (10, 20, 30).",
      },
      {
        question: "Do Python type hints cause a runtime TypeError if a caller passes the wrong type?",
        options: [
          "Yes, Python halts execution immediately",
          "No, type hints are purely annotations used by linters and IDEs, not enforced at runtime",
          "Only in production mode",
          "Only if the function uses async def",
        ],
        answer: "No, type hints are purely annotations used by linters and IDEs, not enforced at runtime",
        explanation:
          "Python remains dynamically typed. Type annotations are ignored during standard runtime execution and are analyzed by external tools like mypy.",
      },
    ],
  },

  "py-ch6-l17": {
    overview:
      "Python provides one of the most expressive argument-passing systems of any modern language. In this lesson, grounded in Mark Lutz's argument resolution model and the official Python tutorial, you will master positional arguments, keyword arguments, default parameters (and the classic mutable default argument trap!), arbitrary positional args (*args), arbitrary keyword args (**kwargs), and keyword-only parameters.",
    canDo:
      "Can design flexible function APIs with *args and **kwargs, establish keyword-only parameters using the bare asterisk (*), and avoid the mutable default argument bug.",
    teacherNote:
      "CRITICAL PYTHON GOTCHA: Default parameter expressions are evaluated ONCE when the function definition is executed, NOT each time the function is called! Never write `def append_to(item, target=[]):`. If you mutate `target`, that mutated list persists across subsequent function calls! Use `target=None` and initialize inside the function.",
    sections: [
      {
        title: "1. The Mutable Default Argument Trap",
        description: "Why default arguments must be immutable (or None):",
        table: {
          headers: ["Pattern", "Code Example", "Consequence", "Status"],
          rows: [
            [
              "Dangerous Anti-Pattern",
              "def add_item(val, bag=[]):\n    bag.append(val)\n    return bag",
              "Subsequent calls share the SAME mutated list: add_item(1) -> [1]; add_item(2) -> [1, 2]!",
              "BUG prone",
            ],
            [
              "Idiomatic Best Practice",
              "def add_item(val, bag=None):\n    if bag is None:\n        bag = []\n    bag.append(val)\n    return bag",
              "A fresh empty list is instantiated dynamically on every function call when bag is omitted.",
              "RECOMMENDED",
            ],
          ],
        },
      },
      {
        title: "2. *args, **kwargs & Keyword-Only Parameters",
        description: "Capturing arbitrary parameters and enforcing caller clarity:",
        items: [
          {
            term: "*args (Varargs)",
            meaning: "Collects arbitrary surplus positional arguments into a tuple",
            example: "def calculate_sum(*numbers):\n    return sum(numbers)  # numbers is a tuple of all passed positional arguments",
          },
          {
            term: "**kwargs (Keyword Args)",
            meaning: "Collects arbitrary surplus keyword arguments into a dictionary",
            example: "def create_profile(username, **attributes):\n    # attributes is a dict of any extra key=value pairs",
          },
          {
            term: "Keyword-Only Parameters (*, arg)",
            meaning: "Forces callers to explicitly supply arguments by name, preventing confusion",
            example: "def connect(host, port, *, timeout=30, retry=True):\n    pass\n# Valid: connect('localhost', 5432, timeout=60)\n# Invalid: connect('localhost', 5432, 60) -> TypeError",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Why should you NOT use a mutable object like a list or dict as a default parameter value in Python?",
        options: [
          "It raises a SyntaxError at compile time",
          "Default values are evaluated once at definition time, so mutations persist across all subsequent calls",
          "Python runs out of memory",
          "It prevents the function from returning a value",
        ],
        answer: "Default values are evaluated once at definition time, so mutations persist across all subsequent calls",
        explanation:
          "Because default argument expressions are evaluated once when the function is parsed, using a mutable object creates a single shared object that accumulates changes across all calls.",
      },
      {
        question: "How do you enforce that an argument `timeout` must be passed as a keyword argument?",
        options: [
          "def connect(host, timeout: keyword):",
          "def connect(host, *, timeout=30):",
          "def connect(host, **timeout):",
          "def connect(host, @keyword timeout=30):",
        ],
        answer: "def connect(host, *, timeout=30):",
        explanation:
          "A bare asterisk (*) in the parameter list separates positional arguments from keyword-only arguments. Any parameters defined after the * can only be passed by name.",
      },
    ],
  },

  "py-ch6-l18": {
    overview:
      "Scope rules dictate how names are resolved when referenced in code. Mark Lutz's 'Learning Python' dedicates multiple chapters to the LEGB rule: Local, Enclosing, Global, Built-in. In this lesson, we study variable resolution order, mutating outer scopes with global and nonlocal, creating stateful closures, and writing anonymous lambda functions.",
    canDo:
      "Can trace name resolution using the LEGB lookup rule, manipulate enclosing state with nonlocal, build function factories with closures, and write anonymous lambdas.",
    teacherNote:
      "Remember the LEGB lookup order: when a variable name is referenced, Python searches: 1. Local (inside current def) -> 2. Enclosing (inside outer enclosing defs) -> 3. Global (module level) -> 4. Built-in (builtins module). It stops at the first match or raises NameError.",
    sections: [
      {
        title: "1. The LEGB Scope Architecture",
        description: "The 4 nested scoping layers in Python name resolution:",
        table: {
          headers: ["Scope Layer", "Description", "Example Identifiers"],
          rows: [
            ["L - Local", "Names assigned inside the active function body", "Variables created within the local def."],
            ["E - Enclosing", "Names in local scopes of any enclosing (outer) defs", "Variables in parent factory functions."],
            ["G - Global", "Names assigned at the top-level of the current module file", "Module-level constants and definitions."],
            ["B - Built-in", "Pre-assigned names in the Python builtins module", "len, print, range, open, int, ValueError."],
          ],
        },
      },
      {
        title: "2. Closures, nonlocal & Lambdas",
        description: "Techniques for functional programming and state retention:",
        items: [
          {
            term: "Function Closure",
            meaning: "An inner function that retains access to variables from its enclosing scope even after the outer function has finished executing",
            example: "def make_multiplier(factor):\n    def multiply(n):\n        return n * factor\n    return multiply\ndouble = make_multiplier(2)\nprint(double(5))  # 10",
          },
          {
            term: "nonlocal Keyword",
            meaning: "Allows an inner function to rebind a variable located in an enclosing (non-global) scope",
            example: "def make_counter():\n    count = 0\n    def increment():\n        nonlocal count\n        count += 1\n        return count\n    return increment",
          },
          {
            term: "Lambda Expression: lambda args: expr",
            meaning: "Anonymous inline function restricted to a single expression whose result is returned",
            example: "sorted_pairs = sorted([(1, 'b'), (2, 'a')], key=lambda x: x[1])",
          },
        ],
      },
    ],
    practice: [
      {
        question: "In what order does Python search for variable names according to the LEGB rule?",
        options: [
          "Local -> Enclosing -> Global -> Built-in",
          "Global -> Local -> Enclosing -> Built-in",
          "Built-in -> Global -> Enclosing -> Local",
          "Local -> Global -> Enclosing -> Built-in",
        ],
        answer: "Local -> Enclosing -> Global -> Built-in",
        explanation:
          "Python name resolution strictly checks Local scope first, then Enclosing function scopes from innermost to outermost, then module Global scope, and finally the Built-in scope.",
      },
      {
        question: "Which keyword allows an inner function to modify a variable declared in its outer enclosing function?",
        options: ["global", "nonlocal", "outer", "super"],
        answer: "nonlocal",
        explanation:
          "The 'nonlocal' keyword tells Python that a variable name refers to a previously bound variable in the nearest enclosing function scope, allowing in-place reassignment without creating a new local variable.",
      },
    ],
  },
};
