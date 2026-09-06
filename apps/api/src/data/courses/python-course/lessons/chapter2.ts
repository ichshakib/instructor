import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_2_LESSONS: Record<string, LessonContent> = {
  "py-ch2-l4": {
    overview:
      "Python provides rich, built-in numeric types that support arbitrary precision integers, IEEE 754 double-precision floating-point numbers, and complex numbers. Synthesizing insights from Mark Lutz's 'Learning Python' and the official tutorial, this lesson unpacks standard arithmetic operators, floor division vs true division, modulo arithmetic, precedence, and floating-point precision caveats.",
    canDo:
      "Can select appropriate numeric types, perform robust arithmetic calculations, handle floating-point precision limitations, and utilize the math standard library.",
    teacherNote:
      "In Python 3, integers have arbitrary precision (they automatically expand to use as much RAM as needed, eliminating integer overflow bugs). However, floats are 64-bit IEEE 754 representations, meaning expressions like 0.1 + 0.2 equal 0.30000000000000004. For exact currency math, always use the decimal module!",
    sections: [
      {
        title: "1. Numeric Data Types & Arithmetic Operators",
        description: "Standard mathematical operators and their behavioral semantics:",
        table: {
          headers: ["Operator", "Operation", "Example", "Result"],
          rows: [
            ["+", "Addition", "15 + 4", "19"],
            ["-", "Subtraction", "20 - 7", "13"],
            ["*", "Multiplication", "6 * 7", "42"],
            ["/", "True Division (Always returns float)", "10 / 2", "5.0"],
            ["//", "Floor Division (Truncates down)", "11 // 3", "3"],
            ["%", "Modulo (Remainder)", "11 % 3", "2"],
            ["**", "Exponentiation (Power)", "2 ** 8", "256"],
          ],
        },
      },
      {
        title: "2. Precision & The Math Module",
        description: "Techniques for controlling floating-point precision and advanced computations:",
        items: [
          {
            term: "round(number, ndigits)",
            meaning: "Rounds a floating-point number to specified decimal places (uses round-half-to-even)",
            example: "round(3.14159, 2)  # 3.14",
          },
          {
            term: "math.floor() / math.ceil()",
            meaning: "Rounds down to nearest integer / rounds up to nearest integer",
            example: "import math\nmath.floor(4.9)  # 4\nmath.ceil(4.1)   # 5",
          },
          {
            term: "decimal.Decimal",
            meaning: "Fixed-precision arithmetic designed specifically for financial and monetary calculation",
            example: "from decimal import Decimal\nprice = Decimal('0.1') + Decimal('0.2')  # Decimal('0.3')",
          },
        ],
        notes: [
          "Underscores can be placed anywhere inside numeric literals for readability without affecting value: 1_000_000.",
          "Complex numbers are supported natively using 'j' suffix: z = 3 + 4j.",
        ],
      },
    ],
    practice: [
      {
        question: "What is the return type of the true division operator (10 / 2) in Python 3?",
        options: ["int (5)", "float (5.0)", "complex (5+0j)", "Decimal('5')"],
        answer: "float (5.0)",
        explanation:
          "In Python 3, the single slash operator (/) always performs true division and produces a float result, even if the division is without remainder. Use integer floor division (//) to get an int.",
      },
      {
        question: "What does the expression 17 // 5 evaluate to?",
        options: ["3.4", "3", "2", "3.0"],
        answer: "3",
        explanation:
          "Floor division (//) computes the quotient and truncates fractional digits down towards negative infinity, resulting in the integer 3.",
      },
    ],
  },

  "py-ch2-l5": {
    overview:
      "Strings in Python (str) are immutable sequences of Unicode characters. Based on Eric Matthes' 'Python Crash Course' and Mark Lutz's detailed string analysis, this lesson covers string construction, escape sequences, raw strings, zero-based indexing, negative indexing, and Python's slicing idiom [start:stop:step].",
    canDo:
      "Can extract substrings using forward, negative, and stride slicing, demonstrate string immutability, and apply raw string literals.",
    teacherNote:
      "Python strings are strictly immutable: you cannot write `text[0] = 'H'`. Any modification method (like `.replace()`, `.upper()`, or slicing) creates and returns a brand-new string object in memory.",
    sections: [
      {
        title: "1. Indexing & Slicing Syntax: [start:stop:step]",
        description: "Sub-sequence extraction without boundary exceptions:",
        table: {
          headers: ["Slice Pattern", "Meaning", "Example (s = 'PYTHON')", "Result"],
          rows: [
            ["s[0]", "First character (0-indexed)", "s[0]", "'P'"],
            ["s[-1]", "Last character (negative indexing)", "s[-1]", "'N'"],
            ["s[1:4]", "Indices 1 up to (not including) 4", "s[1:4]", "'YTH'"],
            ["s[:3]", "From start up to index 3", "s[:3]", "'PYT'"],
            ["s[2:]", "From index 2 to end", "s[2:]", "'THON'"],
            ["s[::2]", "Every second character across string", "s[::2]", "'PTO'"],
            ["s[::-1]", "Reverse the entire string", "s[::-1]", "'NOHTYP'"],
          ],
        },
      },
      {
        title: "2. Escape Sequences & Raw Strings",
        description: "Controlling special characters and regex patterns:",
        items: [
          {
            term: "\\n and \\t",
            meaning: "Newline and horizontal tab characters",
            example: "print('Row 1\\nRow 2\\tIndented')",
          },
          {
            term: "Raw String: r'path\\to\\file'",
            meaning: "Treats backslashes as literal characters; disables escape character processing",
            example: "path = r'C:\\Users\\Professor\\Documents'  # No need for double backslashes",
          },
          {
            term: "Triple-Quoted Strings: \"\"\"...\"\"\"",
            meaning: "Multi-line strings preserving linebreaks and internal quotes literally",
            example: "query = \"\"\"SELECT id, email\nFROM users\nWHERE active = TRUE\"\"\"",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Given the string text = 'PROGRAMMING', what does text[3:7] return?",
        options: ["'GRAM'", "'ROGR'", "'GRAMM'", "'PROG'"],
        answer: "'GRAM'",
        explanation:
          "Slicing text[3:7] extracts characters at indices 3 ('G'), 4 ('R'), 5 ('A'), and 6 ('M'), stopping right before index 7 ('M').",
      },
      {
        question: "What happens when you attempt `s = 'hello'; s[0] = 'H'` in Python?",
        options: [
          "The string changes to 'Hello'",
          "It raises a TypeError because strings are immutable",
          "It returns False",
          "It creates an alias named 'Hello'",
        ],
        answer: "It raises a TypeError because strings are immutable",
        explanation:
          "Python strings are immutable. Direct in-place character mutation raises 'TypeError: 'str' object does not support item assignment'.",
      },
    ],
  },

  "py-ch2-l6": {
    overview:
      "Modern Python code relies on formatted string literals (f-strings) introduced in Python 3.6 for high-performance, readable interpolation. In this lesson, we explore f-strings with expression evaluation, decimal precision format specifiers, date alignment, and essential str transformation methods (.strip(), .split(), .join(), .replace(), .find()).",
    canDo:
      "Can format complex output using f-strings with format specifiers, clean user inputs with string methods, and construct structured text from sequences with str.join().",
    teacherNote:
      "Prefer f-strings (`f'{var}'`) over the legacy `%` operator or `.format()`. F-strings are evaluated at runtime directly as optimized bytecode, making them noticeably faster and far easier to read.",
    sections: [
      {
        title: "1. Formatted String Literals (f-strings)",
        description: "Dynamic interpolation and format specifiers inside `{expression:format}`:",
        table: {
          headers: ["Feature", "Syntax", "Output Example", "Description"],
          rows: [
            [
              "Variable & Expression",
              "f'Total: {price * 1.08}'",
              "'Total: 108.0'",
              "Evaluates arbitrary Python expressions inside braces.",
            ],
            [
              "Decimal Precision",
              "f'{pi:.2f}'",
              "'3.14'",
              "Rounds and formats floating point to 2 decimal places.",
            ],
            [
              "Comma Separators",
              "f'{1000000:,}'",
              "'1,000,000'",
              "Adds standard thousands separators for large numeric values.",
            ],
            [
              "Padding & Alignment",
              "f'{\"Code\":<10} | {\"Result\":>10}'",
              "'Code       |     Result'",
              "Left (<), center (^), or right (>) align with padding characters.",
            ],
          ],
        },
      },
      {
        title: "2. High-Frequency String Methods",
        description: "Built-in methods for parsing, trimming, and sanitizing strings:",
        items: [
          {
            term: "s.strip() / s.lstrip() / s.rstrip()",
            meaning: "Removes leading and trailing whitespace (or specific characters)",
            example: "'  data  '.strip()  # 'data'",
          },
          {
            term: "s.split(delimiter)",
            meaning: "Splits a string into a list of substrings based on a separator",
            example: "'apple,banana,cherry'.split(',')  # ['apple', 'banana', 'cherry']",
          },
          {
            term: "delimiter.join(iterable)",
            meaning: "Concatenates a sequence of strings using the caller string as a glue delimiter",
            example: "'-'.join(['2026', '09', '06'])  # '2026-09-06'",
          },
          {
            term: "s.replace(old, new)",
            meaning: "Returns a copy with all occurrences of substring replaced",
            example: "'good morning'.replace('morning', 'evening')  # 'good evening'",
          },
        ],
      },
    ],
    practice: [
      {
        question: "How do you format a float balance = 45.6789 to exactly two decimal places using an f-string?",
        options: ["f'{balance.2f}'", "f'{balance:.2f}'", "f'{balance%2}'", "f'{round(balance, 2):f}'"],
        answer: "f'{balance:.2f}'",
        explanation:
          "The format specifier inside an f-string follows a colon (:). ':.2f' specifies floating-point presentation rounded to 2 decimal places.",
      },
      {
        question: "What does ', '.join(['HTML', 'CSS', 'JS']) return?",
        options: [
          "['HTML, CSS, JS']",
          "'HTML, CSS, JS'",
          "'HTML CSS JS'",
          "Error: join is a list method",
        ],
        answer: "'HTML, CSS, JS'",
        explanation:
          "str.join() takes an iterable of strings and concatenates them with the calling delimiter string in between each element.",
      },
    ],
  },
};
