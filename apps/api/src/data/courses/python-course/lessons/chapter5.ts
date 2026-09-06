import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_5_LESSONS: Record<string, LessonContent> = {
  "py-ch5-l13": {
    overview:
      "Control flow in Python directs program execution through boolean evaluations. Grounded in Eric Matthes' 'Python Crash Course' and Mark Lutz's syntax rules, this lesson examines if, elif, and else statements, boolean logic with short-circuit operators (and, or, not), truthy and falsy evaluation rules across all data types, and the inline conditional expression (ternary operator).",
    canDo:
      "Can construct multi-branch conditional statements, apply short-circuit evaluation rules, evaluate truthiness of collections, and write ternary expressions.",
    teacherNote:
      "In Python, empty collections (`[]`, `{}`, `set()`, `\"\"`, `0`, `None`, `False`) are inherently falsy! Never write `if len(items) > 0:`; write the idiomatic Python check `if items:` instead.",
    sections: [
      {
        title: "1. Truth Value Testing (Truthy vs Falsy)",
        description: "How Python evaluates object truthiness when used in boolean conditions:",
        table: {
          headers: ["Category", "Falsy Values (Evaluate to False)", "Truthy Values (Evaluate to True)"],
          rows: [
            ["Constants", "None, False", "True"],
            ["Numeric Zeroes", "0, 0.0, 0j, Decimal(0)", "Any non-zero number (1, -5, 0.001)"],
            ["Empty Sequences", "\"\", (), [], range(0)", "Any sequence with length >= 1 (\"hi\", [0])"],
            ["Empty Mappings", "{}, set(), frozenset()", "Any collection with elements ({'a': 1})"],
          ],
        },
      },
      {
        title: "2. Short-Circuit Evaluation & The Ternary Operator",
        description: "Optimized conditional evaluation and concise inline expressions:",
        items: [
          {
            term: "Short-Circuit: a or b",
            meaning: "Evaluates a; if truthy, returns a immediately without evaluating b; otherwise evaluates and returns b",
            example: "user_name = input_name or 'Anonymous'  # Sets fallback if input_name is empty string",
          },
          {
            term: "Short-Circuit: a and b",
            meaning: "Evaluates a; if falsy, returns a immediately; otherwise evaluates and returns b",
            example: "result = is_valid and compute_expensive_hash()",
          },
          {
            term: "Ternary Expression: x if condition else y",
            meaning: "Concise single-line expression returning x when condition is true, else y",
            example: "status = 'admin' if user.is_superuser else 'member'",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Which of the following values is considered TRUTHY in an if statement?",
        options: ["[]", "0", "[0]", "None"],
        answer: "[0]",
        explanation:
          "An empty list [] is falsy, 0 is falsy, and None is falsy. However, [0] is a non-empty list with 1 element, making its truth value True.",
      },
      {
        question: "What does the expression `[] or 'default'` evaluate to?",
        options: ["True", "False", "[]", "'default'"],
        answer: "'default'",
        explanation:
          "The 'or' operator evaluates the left operand ([]); because [] is falsy, it evaluates and returns the right operand ('default').",
      },
    ],
  },

  "py-ch5-l14": {
    overview:
      "Introduced in Python 3.10 (PEP 634), structural pattern matching (match/case) elevates Python control flow far beyond traditional switch/case statements. In this lesson, we explore matching literal values, destructuring sequences and mappings, binding variables with 'as', wildcard matches (_), and applying guard clauses with 'if'.",
    canDo:
      "Can structure complex branching logic using match/case, destructure lists and dictionaries directly in case patterns, and apply conditional guard clauses.",
    teacherNote:
      "Structural pattern matching is NOT merely a switch statement; it does deep structural destructuring. For example, `case [x, y]:` will check both that the value is a 2-element sequence AND unpack the two elements into local variables `x` and `y` in a single step!",
    sections: [
      {
        title: "1. Structural Pattern Matching Syntax",
        description: "Anatomy of match, case, variable binding, and guard conditions:",
        table: {
          headers: ["Pattern Type", "Case Syntax Example", "Matches When", "Action"],
          rows: [
            ["Literal Match", "case 200 | 201:", "Subject equals 200 or 201", "Runs block for status success"],
            ["Sequence Pattern", "case [cmd, arg]:", "Subject is a 2-item sequence", "Binds items to variables cmd and arg"],
            ["Wildcard Match", "case _:", "Any unmatched subject", "Default fallback (equivalent to default/else)"],
            ["Guard Clause", "case x if x > 100:", "Value matches pattern AND condition holds", "Executes when predicate is True"],
          ],
        },
      },
      {
        title: "2. Practical Destructuring Example",
        description: "Parsing API actions and command payloads elegantly:",
        items: [
          {
            term: "Command Parser with match/case",
            meaning: "Handling user inputs or command line flags without fragile if/else chains",
            example: "command = ['move', 10, 'north']\nmatch command:\n    case ['quit']:\n        sys.exit()\n    case ['move', distance, direction]:\n        player.move(distance, direction)\n    case ['shoot', *targets]:\n        player.attack(targets)\n    case _:\n        print('Unknown command')",
          },
        ],
      },
    ],
    practice: [
      {
        question: "In Python 3.10+ match/case, what represents the default fallback pattern (like default in C/JS)?",
        options: ["case *:", "case default:", "case _:", "case else:"],
        answer: "case _:",
        explanation:
          "The single underscore (case _:) acts as a wildcard pattern that matches any subject that did not match previous cases.",
      },
      {
        question: "What is a guard clause in a case statement?",
        options: [
          "A try/except block wrapping the case",
          "An additional `if <condition>` appended to the case pattern",
          "A type annotation on the match variable",
          "A security filter for malicious inputs",
        ],
        answer: "An additional `if <condition>` appended to the case pattern",
        explanation:
          "A guard clause (e.g., case [x, y] if x == y:) adds an extra boolean condition that must evaluate to True for the case to match.",
      },
    ],
  },

  "py-ch5-l15": {
    overview:
      "Iteration is at the heart of idiomatic Python. Drawing from Mark Lutz's detailed loop analysis and Guido van Rossum's tutorial, this lesson covers while loops, for...in iteration, generating arithmetic ranges with range(), tracking indices with enumerate(), iterating multiple streams in lockstep with zip(), and the unique 'else' clause in Python loops.",
    canDo:
      "Can implement while and for loops, use range(), enumerate(), and zip() productively, control iteration with break and continue, and explain loop 'else' semantics.",
    teacherNote:
      "The loop `else` block runs ONLY if the loop completes normally without encountering a `break` statement! It is ideal for search algorithms where you want to execute a fallback action if no match was found.",
    sections: [
      {
        title: "1. Built-in Iteration Helpers",
        description: "Standard utilities for clean, index-free traversal:",
        table: {
          headers: ["Function", "Signature", "Use Case Example", "Output Yielded"],
          rows: [
            ["range()", "range(start, stop[, step])", "for i in range(1, 10, 2):", "Arithmetic sequence: 1, 3, 5, 7, 9"],
            ["enumerate()", "enumerate(iterable, start=0)", "for idx, val in enumerate(items, 1):", "Pairs: (1, 'first'), (2, 'second')"],
            ["zip()", "zip(*iterables, strict=False)", "for name, score in zip(names, scores):", "Pairs: ('Alice', 95), ('Bob', 88)"],
            ["reversed()", "reversed(sequence)", "for item in reversed(items):", "Reverse-order iterator"],
          ],
        },
      },
      {
        title: "2. Loop Control & The Loop 'else' Clause",
        description: "Controlling flow and implementing clean search loops:",
        items: [
          {
            term: "break and continue",
            meaning: "break terminates loop immediately; continue skips to next iteration",
            example: "for n in numbers:\n    if n < 0: continue  # Skip negatives\n    if n > 100: break   # Terminate on threshold",
          },
          {
            term: "for ... else / while ... else",
            meaning: "Executes if the loop finishes without hitting a 'break' statement",
            example: "for item in inventory:\n    if item.id == target_id:\n        print('Found!')\n        break\nelse:\n    print('Item not found in inventory!')  # Runs only if break was NOT hit",
          },
        ],
      },
    ],
    practice: [
      {
        question: "When does the `else` block of a Python `for` loop execute?",
        options: [
          "Every time an iteration completes",
          "Only when the loop is terminated by a break statement",
          "Only if the loop completes all iterations without encountering a break",
          "When an exception occurs during the loop",
        ],
        answer: "Only if the loop completes all iterations without encountering a break",
        explanation:
          "In Python, a loop's else clause runs when the loop terminates through exhaustion of the iterable, but NOT when it is terminated prematurely by a break statement.",
      },
      {
        question: "How do you loop over a list of items while simultaneously accessing the 1-based index?",
        options: [
          "for i in range(len(items)):",
          "for idx, item in enumerate(items, start=1):",
          "for idx, item in zip(items, 1):",
          "for item, idx in items.indices():",
        ],
        answer: "for idx, item in enumerate(items, start=1):",
        explanation:
          "enumerate(iterable, start=1) yields tuples containing the current index (starting at 1) and the corresponding item, which unpacks directly in the for header.",
      },
    ],
  },
};
