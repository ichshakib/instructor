import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_10_LESSONS: Record<string, LessonContent> = {
  "js-ch10-l28": {
    overview:
      "JSON (JavaScript Object Notation) is the lightweight, universal data interchange standard powering modern web APIs and databases. In this lesson based on Chapter 12 of 'JavaScript from Beginner to Professional', you will master converting JavaScript in-memory objects to textual JSON with 'JSON.stringify()', parsing JSON back into live objects with 'JSON.parse()', and handling circular references and formatting.",
    canDo:
      "Can serialize JavaScript data structures to JSON strings, parse incoming JSON payloads safely, and use indentation parameters for human-readable output.",
    teacherNote:
      "JSON is strictly a data-only format! JSON cannot store JavaScript functions, `undefined`, `Symbol` keys, or DOM nodes. Passing functions or undefined into `JSON.stringify()` causes them to be silently omitted from objects or converted to `null` in arrays.",
    sections: [
      {
        title: "1. The JSON Object: stringify() and parse()",
        description: "Transforming between in-memory objects and portable strings:",
        table: {
          headers: ["Method", "Signature", "Input", "Output", "Throws Error?"],
          rows: [
            [
              "JSON.stringify()",
              "JSON.stringify(value, replacer, space)",
              "JavaScript Object, Array, or primitive",
              "JSON-formatted string",
              "Throws TypeError on circular references",
            ],
            [
              "JSON.parse()",
              "JSON.parse(text, reviver)",
              "Valid JSON string",
              "JavaScript Object, Array, or primitive",
              "Throws SyntaxError if JSON string is malformed!",
            ],
          ],
        },
      },
      {
        title: "2. Pretty-Printing & Safe Parsing",
        description: "Best practices for working with JSON:",
        items: [
          {
            term: "Pretty-Printing Indentation",
            meaning: "Pass the third argument to format JSON with clean indentation for debugging",
            example: "JSON.stringify({ a: 1, b: 2 }, null, 2); // 2-space indented string",
          },
          {
            term: "Always Wrap JSON.parse in try/catch",
            meaning: "Malformed JSON throws an uncatchable fatal error unless wrapped in try/catch",
            example: "try {\n  const data = JSON.parse(rawString);\n} catch (err) {\n  console.error('Invalid JSON payload:', err);\n}",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What happens when you pass an object containing a function to `JSON.stringify({ name: 'Alex', greet: () => 'Hi' })`?",
        options: [
          "The function is stringified into its source code",
          "The `greet` function property is silently omitted from the resulting JSON string",
          "It throws a TypeError",
          "It converts the function to 'function()'",
        ],
        answer: "The `greet` function property is silently omitted from the resulting JSON string",
        explanation:
          "JSON is a pure data format and does not support executable code. Functions and undefined values are stripped out during serialization.",
      },
      {
        question: "What happens if you pass an invalid JSON string like `'{ name: Alex }'` to `JSON.parse()`?",
        options: [
          "It returns null",
          "It throws a SyntaxError",
          "It fixes the quotes automatically",
          "It returns an empty object",
        ],
        answer: "It throws a SyntaxError",
        explanation:
          "In JSON, all keys and string values must be enclosed in double quotes. Malformed JSON causes `JSON.parse()` to throw a SyntaxError immediately.",
      },
      {
        question: "How do you pretty-print a JSON string with 2-space indentation using `JSON.stringify`?",
        options: [
          "JSON.stringify(obj, null, 2)",
          "JSON.stringify(obj, 2)",
          "JSON.stringify(obj, 'indent')",
          "JSON.format(obj, 2)",
        ],
        answer: "JSON.stringify(obj, null, 2)",
        explanation:
          "The third argument of `JSON.stringify(value, replacer, space)` controls whitespace indentation.",
      },
    ],
  },

  "js-ch10-l29": {
    overview:
      "Client-side web applications often need to persist user settings, auth tokens, themes, and shopping cart items across browser refreshes. In this lesson based on Chapter 12 of 'JavaScript from Beginner to Professional', you will master the Web Storage API, understanding the differences between persistent 'localStorage' and tab-scoped 'sessionStorage', quota limits, and combining storage with JSON serialization.",
    canDo:
      "Can store, retrieve, and remove data from `localStorage` and `sessionStorage`, store complex objects via JSON serialization, and clear browser caches safely.",
    teacherNote:
      "The Web Storage API only stores strings! If you attempt to store an object directly with `localStorage.setItem('user', { name: 'Alex' })`, it will coerce the object into the useless string `'[object Object]'`! Always use `JSON.stringify()` when saving, and `JSON.parse()` when reading.",
    sections: [
      {
        title: "1. localStorage vs. sessionStorage",
        description: "Browser key-value storage comparison:",
        table: {
          headers: ["Feature", "localStorage", "sessionStorage"],
          rows: [
            ["Persistence", "Permanent; persists even after closing browser / restarting OS", "Ephemeral; cleared automatically when the specific browser tab is closed"],
            ["Scope", "Shared across all tabs and windows of the same origin (protocol + domain + port)", "Isolated strictly to the single browser tab"],
            ["Capacity", "~5MB per origin", "~5MB per origin"],
            ["Data Format", "String keys and string values only", "String keys and string values only"],
          ],
        },
      },
      {
        title: "2. The 4 Essential Storage Methods",
        description: "Standard API operations across both storage types:",
        table: {
          headers: ["Method", "Syntax Example", "Action"],
          rows: [
            ["setItem(key, value)", "localStorage.setItem('theme', 'dark');", "Saves or overwrites a key-value string pair"],
            ["getItem(key)", "const theme = localStorage.getItem('theme');", "Returns the string value, or `null` if key does not exist"],
            ["removeItem(key)", "localStorage.removeItem('theme');", "Deletes the specific key and its value"],
            ["clear()", "localStorage.clear();", "Wipes out all stored data for the entire origin"],
          ],
        },
      },
    ],
    practice: [
      {
        question: "What happens if you store an object without serialization like this: `localStorage.setItem('data', { id: 101 });`?",
        options: [
          "It stores the object perfectly as a JavaScript object",
          "It coerces the object to the string `'[object Object]'`, losing the inner data",
          "It throws a TypeError",
          "It saves the object into sessionStorage instead",
        ],
        answer: "It coerces the object to the string `'[object Object]'`, losing the inner data",
        explanation:
          "Storage keys and values must be strings. JavaScript calls `.toString()` on objects, turning them into `'[object Object]'`. Use `JSON.stringify()` to preserve data.",
      },
      {
        question: "When is data in `sessionStorage` automatically cleared by the browser?",
        options: [
          "Every 60 minutes",
          "When the user closes the browser tab or window",
          "When the page is refreshed",
          "Never; it is permanent",
        ],
        answer: "When the user closes the browser tab or window",
        explanation:
          "`sessionStorage` persists across page reloads within the same tab, but is completely purged once that tab is closed.",
      },
      {
        question: "What does `localStorage.getItem('non-existent-key')` return?",
        options: ["undefined", "null", "'' (empty string)", "false"],
        answer: "null",
        explanation:
          "When a requested key is not present in storage, `getItem()` returns `null`.",
      },
    ],
  },

  "js-ch10-l30": {
    overview:
      "Writing production-grade JavaScript requires anticipating failures, handling exceptions gracefully, and organizing code into modular files. In this capstone lesson based on Chapters 12 and 15 of 'JavaScript from Beginner to Professional', you will master the 'try...catch...finally' statement, throwing custom Error instances, and organizing modular applications using modern ES Modules ('export' and 'import').",
    canDo:
      "Can intercept runtime errors without crashing applications using `try/catch/finally`, construct custom error instances with `throw new Error()`, and organize multi-file codebases using ES module exports and imports.",
    teacherNote:
      "In modern web development, ES modules are native! When linking an entry file that uses `import` / `export`, always specify the `type='module'` attribute in your HTML tag: `<script type='module' src='app.js'></script>`. Modules run in strict mode by default and load deferred automatically.",
    sections: [
      {
        title: "1. The try...catch...finally Error Handling Pattern",
        description: "Intercepting and recovering from runtime exceptions:",
        table: {
          headers: ["Block", "Execution Condition", "Purpose"],
          rows: [
            ["try { ... }", "Always runs first", "Encloses code that might throw an unexpected runtime error or exception"],
            ["catch (error) { ... }", "Runs ONLY if an error is thrown in `try`", "Captures the Error object (`error.message`, `error.name`, `error.stack`) to recover"],
            ["finally { ... }", "ALWAYS runs after try and catch", "Guaranteed cleanup logic (e.g. closing database connections, resetting loading flags)"],
            ["throw new Error('msg')", "Explicit invocation", "Generates a custom error and interrupts current execution, jumping to nearest catch block"],
          ],
        },
      },
      {
        title: "2. ES Modules: export and import",
        description: "Breaking large applications into clean, maintainable files:",
        table: {
          headers: ["Module Pattern", "Syntax Example", "Usage Rule"],
          rows: [
            ["Named Export", "export const PI = 3.14;\nexport function add() { ... }", "Can export multiple identifiers per file"],
            ["Named Import", "import { PI, add } from './math.js';", "Names must match the exported identifiers (or use `as` alias)"],
            ["Default Export", "export default class Calculator { ... }", "Exactly one default export per module file"],
            ["Default Import", "import Calculator from './Calculator.js';", "Imported without curly braces; can be named anything"],
          ],
        },
      },
    ],
    practice: [
      {
        question: "What information does a standard JavaScript `Error` object provide?",
        options: [
          "`name`, `message`, and `stack` (call stack trace)",
          "Only a number code",
          "The user's IP address",
          "The browser history",
        ],
        answer: "`name`, `message`, and `stack` (call stack trace)",
        explanation:
          "A JavaScript `Error` instance contains a `name` (e.g. 'TypeError', 'ReferenceError'), a descriptive `message`, and the execution `stack` trace.",
      },
      {
        question: "How many `export default` statements can exist in a single ES module file?",
        options: ["As many as you want", "Exactly one", "None; default exports are deprecated", "Two"],
        answer: "Exactly one",
        explanation:
          "A module can contain multiple named exports, but at most one single `export default`.",
      },
      {
        question: "Which HTML attribute must be added to a `<script>` tag to enable ES Module `import` and `export` statements?",
        options: [
          "type='module'",
          "module='true'",
          "async='module'",
          "language='es6'",
        ],
        answer: "type='module'",
        explanation:
          "`<script type='module'>` instructs the browser to treat the script as an ECMAScript module.",
      },
    ],
  },
};
