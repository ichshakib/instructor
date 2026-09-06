import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_1_LESSONS: Record<string, LessonContent> = {
  "js-ch1-l1": {
    overview:
      "JavaScript is the universal programming language of the web, enabling dynamic behavior, responsive interfaces, and interactive applications. In this lesson, based on Chapter 1 of 'JavaScript from Beginner to Professional', you will understand the JavaScript execution environment, how the browser engine processes scripts, incorporating JavaScript into HTML documents via <script> tags, and debugging using the browser console and 'use strict' mode.",
    canDo:
      "Can configure a development environment, embed JavaScript into HTML documents, inspect values in the browser developer console, and apply ECMAScript strict mode.",
    teacherNote:
      "Always link external scripts right before the closing `</body>` tag or use the `defer` attribute in the `<head>` (`<script src='app.js' defer></script>`). This prevents script loading from blocking HTML parsing, delivering immediate visual rendering for users.",
    sections: [
      {
        title: "1. The JavaScript Runtime & Browser Integration",
        description: "How JavaScript is delivered and executed in web clients:",
        table: {
          headers: ["Inclusion Method", "Syntax Example", "Execution Characteristic", "Best For"],
          rows: [
            [
              "Inline Script",
              "<script> console.log('Hello'); </script>",
              "Executes synchronously when HTML parser encounters the tag",
              "Small bootstrapping configurations or critical early state",
            ],
            [
              "External Script",
              "<script src='main.js'></script>",
              "Blocks HTML parsing while fetching and executing external asset",
              "Legacy scripts where order of execution must be strictly preserved",
            ],
            [
              "Deferred External Script",
              "<script src='main.js' defer></script>",
              "Downloads in parallel; executes in order after HTML parsing completes",
              "Modern production web applications (Recommended)",
            ],
            [
              "Asynchronous External Script",
              "<script src='analytics.js' async></script>",
              "Downloads in parallel; executes immediately upon arrival",
              "Independent third-party scripts (e.g., analytics, tracking)",
            ],
          ],
        },
      },
      {
        title: "2. The Browser Developer Console & 'use strict'",
        description: "Essential debugging workflows and strict execution mode:",
        items: [
          {
            term: "console.log(value, ...)",
            meaning: "Standard output log to the browser developer tools console",
            example: "console.log('App initialized:', { version: '1.0.0' });",
          },
          {
            term: "console.error() / console.warn()",
            meaning: "Outputs formatted warning and error messages with stack traces",
            example: "console.warn('Deprecated API invoked in session.');",
          },
          {
            term: "'use strict';",
            meaning: "Enforces stricter parsing and error handling across modern JavaScript",
            example: "'use strict'; x = 10; // Throws ReferenceError: x is not defined",
          },
        ],
        notes: [
          "'use strict' eliminates silent JavaScript bugs by throwing errors when variables are declared without let/const/var, or when assigning to non-writable properties.",
          "ES6 modules (`<script type='module'>`) execute in strict mode automatically without needing an explicit 'use strict' pragma.",
        ],
      },
    ],
    practice: [
      {
        question: "Which script attribute downloads an external JavaScript file in the background without pausing HTML parsing and executes it after DOM parsing is complete?",
        options: ["async", "defer", "preload", "blocking"],
        answer: "defer",
        explanation:
          "The `defer` attribute allows external JavaScript files to download asynchronously without blocking HTML parsing, and guarantees execution in document order once the DOM is constructed.",
      },
      {
        question: "What happens in strict mode ('use strict') if you assign a value to an undeclared variable (e.g. `x = 5;`)?",
        options: [
          "It automatically creates a global variable without errors",
          "It throws a ReferenceError: x is not defined",
          "It silently converts the value to null",
          "It creates a block-scoped constant",
        ],
        answer: "It throws a ReferenceError: x is not defined",
        explanation:
          "In strict mode, assigning to an undeclared variable throws a ReferenceError, preventing accidental leaks of global variables.",
      },
      {
        question: "Where in the browser can developers test interactive JavaScript snippets and inspect output immediately?",
        options: [
          "Network Panel",
          "Console Panel in Developer Tools",
          "Performance Profiler",
          "Application Cache Storage",
        ],
        answer: "Console Panel in Developer Tools",
        explanation:
          "The browser developer console provides a REPL (Read-Eval-Print Loop) for testing expressions and viewing logs in real time.",
      },
    ],
  },

  "js-ch1-l2": {
    overview:
      "Variables are named containers used to store data values in memory. In modern JavaScript (ES6+), variable declarations transitioned from legacy function-scoped 'var' to block-scoped 'let' and 'const'. In this lesson from Chapter 2 of 'JavaScript from Beginner to Professional', you will master the declaration rules, lexical block scoping, re-assignment mutability, and the temporal dead zone.",
    canDo:
      "Can select the correct variable declaration keyword (`const`, `let`, or `var`), predict scope boundaries, and avoid variable hoisting pitfalls.",
    teacherNote:
      "Follow the modern JavaScript golden rule: Use `const` by default for all identifiers. Only switch to `let` when you know the variable will be reassigned (such as in a loop counter or accumulator). Avoid legacy `var` entirely in modern codebases.",
    sections: [
      {
        title: "1. Comparing let, const, and var",
        description: "Architectural differences in scope, re-assignment, and hoisting:",
        table: {
          headers: ["Keyword", "Scope Boundary", "Re-assignable?", "Re-declarable?", "Hoisting Behavior"],
          rows: [
            [
              "const (ES6)",
              "Block Scope ({ ... })",
              "No (Immutable identifier binding)",
              "No (SyntaxError)",
              "Hoisted to Temporal Dead Zone (TDZ); accessing before declaration throws ReferenceError",
            ],
            [
              "let (ES6)",
              "Block Scope ({ ... })",
              "Yes (Can reassign new values)",
              "No (SyntaxError)",
              "Hoisted to Temporal Dead Zone (TDZ); accessing before declaration throws ReferenceError",
            ],
            [
              "var (Legacy)",
              "Function Scope (ignores { } blocks)",
              "Yes",
              "Yes (Can re-declare silently)",
              "Hoisted to top of function and initialized to `undefined`; causes subtle bugs",
            ],
          ],
        },
      },
      {
        title: "2. Understanding Block Scope & Temporal Dead Zone (TDZ)",
        description: "How lexical boundaries protect variables from unintended leakage:",
        items: [
          {
            term: "Block Scope ({ ... })",
            meaning: "Variables declared inside if-statements, loops, or curly braces remain private to that block",
            example: "if (true) { let count = 10; } console.log(count); // ReferenceError",
          },
          {
            term: "Temporal Dead Zone (TDZ)",
            meaning: "The time span between entering a block scope and executing the let/const declaration",
            example: "console.log(score); // ReferenceError: Cannot access 'score' before initialization \nlet score = 95;",
          },
          {
            term: "const Mutation vs Reassignment",
            meaning: "const prevents reassigning the variable identifier, but nested properties in arrays and objects remain mutable",
            example: "const user = { name: 'Alex' }; user.name = 'Sam'; // Valid mutation!",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What error occurs when trying to reassign a variable declared with `const`?",
        options: [
          "ReferenceError",
          "TypeError: Assignment to constant variable",
          "RangeError",
          "No error, it silently updates",
        ],
        answer: "TypeError: Assignment to constant variable",
        explanation:
          "Variables declared with `const` cannot be reassigned; attempting to do so throws a TypeError at runtime.",
      },
      {
        question: "Which of the following keywords respects block scope inside an `if` block or `for` loop?",
        options: ["var only", "let and const", "function and var", "global"],
        answer: "let and const",
        explanation:
          "Both `let` and `const` are block-scoped, confining their visibility strictly to the enclosing `{ ... }` block.",
      },
      {
        question: "Does `const items = [1, 2]; items.push(3);` throw an error in JavaScript?",
        options: [
          "Yes, because `items` is constant and cannot be modified",
          "No, because mutating an array's contents does not reassign the variable reference",
          "Yes, unless strict mode is disabled",
          "Yes, arrays require `let` for any method call",
        ],
        answer: "No, because mutating an array's contents does not reassign the variable reference",
        explanation:
          "`const` freezes the variable identifier binding, not the underlying object or array values in memory.",
      },
    ],
  },

  "js-ch1-l3": {
    overview:
      "JavaScript features seven primitive data types alongside objects and rich operator expressions. In this lesson from Chapter 2 of 'JavaScript from Beginner to Professional', you will explore strings, numbers, booleans, BigInt, Symbol, null, and undefined, understand automatic type coercion, and master arithmetic, comparison (== vs ===), and logical operators.",
    canDo:
      "Can identify primitive types using `typeof`, execute safe mathematical and logical operations, and apply strict equality (`===`) to eliminate type coercion bugs.",
    teacherNote:
      "Always use strict equality (`===`) and strict inequality (`!==`) instead of loose equality (`==`). Loose equality performs implicit type coercion, leading to notorious bugs like `0 == ''` (true) or `null == undefined` (true). Strict equality evaluates both type and value without coercion.",
    sections: [
      {
        title: "1. The 7 JavaScript Primitive Data Types",
        description: "Immutable data representations stored directly on the stack:",
        table: {
          headers: ["Primitive Type", "Example Literal", "typeof Output", "Characteristics"],
          rows: [
            ["String", "'Hello', \"World\", `Total: ${n}`", "'string'", "Textual data; template literals support interpolation (`${...}`)"],
            ["Number", "42, 3.14159, -7, NaN, Infinity", "'number'", "64-bit floating point; includes special values NaN and Infinity"],
            ["BigInt", "9007199254740991n", "'bigint'", "Arbitrary-precision integers ending with an 'n' suffix"],
            ["Boolean", "true, false", "'boolean'", "Binary logic representations for conditionals"],
            ["Undefined", "let x; (unassigned)", "'undefined'", "Default state of declared variables that have not received a value"],
            ["Null", "let user = null;", "'object' (legacy bug!)", "Intentional absence of any object value"],
            ["Symbol", "Symbol('id')", "'symbol'", "Unique, immutable identifier commonly used for private object keys"],
          ],
        },
      },
      {
        title: "2. Comparison Operators: Strict (===) vs. Loose (==)",
        description: "Understanding type coercion in equality checks:",
        table: {
          headers: ["Expression", "Operator Type", "Result", "Reasoning"],
          rows: [
            ["5 === '5'", "Strict Equality", "false", "Different types (number !== string); no coercion performed"],
            ["5 == '5'", "Loose Equality", "true", "String '5' is coerced to number 5 before comparison"],
            ["null === undefined", "Strict Equality", "false", "Different types (object/null !== undefined)"],
            ["null == undefined", "Loose Equality", "true", "Loose equality specification treats both as equivalent empty values"],
            ["0 === false", "Strict Equality", "false", "Number 0 !== boolean false"],
            ["NaN === NaN", "Strict Equality", "false", "NaN is the only value in JavaScript that is not equal to itself! (Use Number.isNaN)"],
          ],
        },
      },
      {
        title: "3. Logical Operators & Short-Circuit Evaluation",
        description: "Boolean logic and default fallbacks in JavaScript:",
        items: [
          {
            term: "Logical AND (&&)",
            meaning: "Evaluates left-to-right; returns first falsy value or the last truthy value",
            example: "const name = user && user.name; // Short-circuits if user is null",
          },
          {
            term: "Logical OR (||)",
            meaning: "Returns first truthy operand, or the last falsy value if none are truthy",
            example: "const port = process.env.PORT || 3000; // Fallback to 3000",
          },
          {
            term: "Nullish Coalescing (??)",
            meaning: "Returns right-hand operand ONLY when left operand is null or undefined (preserves 0 and '')",
            example: "const count = inputCount ?? 10; // If inputCount is 0, count remains 0!",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What is the historical quirk of calling `typeof null` in JavaScript?",
        options: [
          "It returns 'null'",
          "It returns 'object'",
          "It throws a TypeError",
          "It returns 'undefined'",
        ],
        answer: "It returns 'object'",
        explanation:
          "`typeof null` returns 'object' due to an early bug in the original 1995 JavaScript engine implementation where object type tags were represented as 0.",
      },
      {
        question: "What is the result of `5 + '10'` in JavaScript?",
        options: ["15", "'510'", "NaN", "TypeError"],
        answer: "'510'",
        explanation:
          "When the binary addition operator (`+`) encounters a string operand, it coerces the other operand to a string and performs concatenation.",
      },
      {
        question: "How does the nullish coalescing operator (`??`) differ from the logical OR operator (`||`)?",
        options: [
          "`??` triggers only on `null` and `undefined`, preserving falsy values like `0` and `''`",
          "`??` is only used inside switch statements",
          "`??` converts strings into numbers automatically",
          "There is no difference; they are exact aliases",
        ],
        answer: "`??` triggers only on `null` and `undefined`, preserving falsy values like `0` and `''`",
        explanation:
          "`||` treats `0`, `false`, `NaN`, and `''` as triggers for the fallback, whereas `??` triggers only when the value is strictly `null` or `undefined`.",
      },
    ],
  },
};
