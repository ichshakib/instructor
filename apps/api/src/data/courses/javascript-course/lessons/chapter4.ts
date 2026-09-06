import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_4_LESSONS: Record<string, LessonContent> = {
  "js-ch4-l10": {
    overview:
      "Functions are reusable blocks of code designed to perform specific tasks. In this lesson based on Chapter 6 of 'JavaScript from Beginner to Professional', you will master the three major ways to declare functions: traditional Function Declarations, Function Expressions, and concise ES6 Arrow Functions, understanding how their syntax, hoisting, and 'this' binding differ.",
    canDo:
      "Can define functions using declarations, expressions, and arrow functions, and select the correct syntax based on hoisting requirements and lexical 'this' binding.",
    teacherNote:
      "Arrow functions (`() => {}`) do NOT possess their own `this`, `arguments`, or `prototype`! They lexically inherit `this` from the enclosing execution context. For object methods that rely on `this.property`, use traditional method syntax (`greet() { ... }`). For callbacks, array methods, and functional code, prefer arrow functions.",
    sections: [
      {
        title: "1. Three Ways to Define Functions in JavaScript",
        description: "Syntax, hoisting, and behavior comparison:",
        table: {
          headers: ["Pattern", "Example Syntax", "Hoisting Behavior", "Lexical 'this'?"],
          rows: [
            [
              "Function Declaration",
              "function add(a, b) { return a + b; }",
              "Fully hoisted (Can be called BEFORE its definition in code)",
              "No (Has its own dynamic `this`)",
            ],
            [
              "Function Expression",
              "const add = function(a, b) { return a + b; };",
              "Variable is hoisted to TDZ; cannot be called before definition",
              "No (Has its own dynamic `this`)",
            ],
            [
              "Arrow Function (ES6)",
              "const add = (a, b) => a + b;",
              "Variable is hoisted to TDZ; cannot be called before definition",
              "Yes (Lexically inherits `this` from enclosing scope)",
            ],
          ],
        },
      },
      {
        title: "2. Concise Arrow Function Syntax Rules",
        description: "Streamlining functional expressions:",
        items: [
          {
            term: "Implicit Return",
            meaning: "When omitting curly braces `{ ... }`, the single expression is automatically returned without the `return` keyword",
            example: "const square = x => x * x; // Returns x * x automatically",
          },
          {
            term: "Returning Object Literals",
            meaning: "Wrap object literals in parentheses `({ ... })` so the parser doesn't mistake curly braces for a function block",
            example: "const makeUser = name => ({ name: name, active: true });",
          },
          {
            term: "Single Parameter Parenthesis",
            meaning: "If a function takes exactly one parameter, the parentheses around the parameter are optional",
            example: "const double = n => n * 2;",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Can a standard Function Declaration be invoked in code before the line where it is written?",
        options: [
          "Yes, because function declarations are fully hoisted to the top of their scope",
          "No, it throws a ReferenceError",
          "Only if 'use strict' is disabled",
          "Only in Node.js, not in web browsers",
        ],
        answer: "Yes, because function declarations are fully hoisted to the top of their scope",
        explanation:
          "JavaScript engines hoist function declarations with their complete body during the compile phase, allowing them to be called anywhere in their enclosing scope.",
      },
      {
        question: "How do arrow functions determine the value of `this`?",
        options: [
          "They bind `this` dynamically to whatever object called them",
          "They inherit `this` lexically from the surrounding scope where they were defined",
          "`this` is always null inside an arrow function",
          "`this` always refers to the window object",
        ],
        answer: "They inherit `this` lexically from the surrounding scope where they were defined",
        explanation:
          "Arrow functions do not bind their own `this`; they inherit `this` lexically from the enclosing execution context.",
      },
      {
        question: "How do you implicitly return an object literal from an arrow function?",
        options: [
          "const getObj = () => { id: 1 };",
          "const getObj = () => ({ id: 1 });",
          "const getObj = () => return { id: 1 };",
          "const getObj = () => [ id: 1 ];",
        ],
        answer: "const getObj = () => ({ id: 1 });",
        explanation:
          "Wrapping the object in parentheses `({ ... })` tells JavaScript that the curly braces represent an object literal, not a statement block.",
      },
    ],
  },

  "js-ch4-l11": {
    overview:
      "Passing information into functions is central to modular programming. In this lesson based on Chapter 6 of 'JavaScript from Beginner to Professional', you will master function parameters, ES6 default parameter values, the Rest parameter syntax (`...args`) for variable-length argument lists, and the Spread operator (`...`) for unpacking data.",
    canDo:
      "Can configure functions with default fallback arguments, collect arbitrary argument lists using the rest operator, and unpack arrays with spread syntax.",
    teacherNote:
      "Remember the difference between Rest and Spread: Rest (`...`) GATHERS multiple elements into a single array (used in function parameter definitions: `function sum(...nums)`). Spread (`...`) EXPANDS a single array into individual values (used in function calls or array literals: `Math.max(...nums)`).",
    sections: [
      {
        title: "1. Default Parameters & The Rest Parameter",
        description: "Handling flexible input signatures in modern JavaScript:",
        table: {
          headers: ["Feature", "Syntax Example", "Behavior", "Replaces"],
          rows: [
            [
              "Default Parameters (ES6)",
              "function greet(name = 'Guest', role = 'Member')",
              "Assigns default value if argument is undefined or omitted",
              "Old manual checks: `name = name || 'Guest'`",
            ],
            [
              "Rest Parameters (ES6)",
              "function sum(...numbers)",
              "Collects all remaining arguments into a true JavaScript array",
              "Old legacy `arguments` array-like pseudo-object",
            ],
            [
              "Spread in Function Calls",
              "Math.max(...scoresArray)",
              "Spreads array elements into individual comma-separated arguments",
              "Old `Math.max.apply(null, scoresArray)`",
            ],
          ],
        },
      },
      {
        title: "2. Rules of Rest Parameters",
        description: "Syntax boundaries when capturing variable arguments:",
        items: [
          {
            term: "Must be the Final Parameter",
            meaning: "A rest parameter must always be the last argument in the function definition",
            example: "function logMessage(level, ...details) { ... } // Valid!",
          },
          {
            term: "Only One Rest Parameter Allowed",
            meaning: "A function signature cannot contain multiple rest parameters",
            example: "// SyntaxError: Rest parameter must be last formal parameter",
          },
        ],
      },
    ],
    practice: [
      {
        question: "When is a default parameter value used in a function call?",
        options: [
          "Whenever an argument is passed as `false` or `0`",
          "When the argument is omitted or passed explicitly as `undefined`",
          "Only when strict mode is active",
          "Whenever the argument is `null`",
        ],
        answer: "When the argument is omitted or passed explicitly as `undefined`",
        explanation:
          "Default parameters are triggered exclusively when an argument is missing or strictly `undefined` (`null` is considered a valid value and does not trigger the default).",
      },
      {
        question: "What does `...` represent in `function calculateTotal(tax, ...items)`?",
        options: [
          "Spread operator",
          "Rest parameter",
          "Ellipsis string",
          "Optional chaining",
        ],
        answer: "Rest parameter",
        explanation:
          "Inside a function's parameter definition list, `...items` is a Rest parameter that collects all subsequent arguments into an array.",
      },
      {
        question: "How do you pass the elements of `const nums = [10, 25, 5];` to `Math.max()`?",
        options: [
          "Math.max(nums)",
          "Math.max(...nums)",
          "Math.max(..nums)",
          "Math.max([nums])",
        ],
        answer: "Math.max(...nums)",
        explanation:
          "`Math.max(...nums)` uses the spread operator to expand the array into individual numerical arguments.",
      },
    ],
  },

  "js-ch4-l12": {
    overview:
      "Understanding return values, variable scope, closures, and recursion separates intermediate JavaScript developers from beginners. In this lesson based on Chapter 6 of 'JavaScript from Beginner to Professional', you will explore the return statement, lexical scope hierarchies, closures (functions remembering their creation scope), and recursive self-calling algorithms.",
    canDo:
      "Can return values cleanly from functions, predict variable visibility across nested scopes, leverage closures for data encapsulation, and implement base-cased recursion.",
    teacherNote:
      "A closure is formed whenever an inner function retains access to its outer lexical environment, even after the outer function has finished executing. Closures enable private variables and powerful factory patterns without polluting the global namespace.",
    sections: [
      {
        title: "1. Scope Hierarchy: Global, Function, and Block",
        description: "How the JavaScript engine traverses the scope chain:",
        table: {
          headers: ["Scope Level", "Where Declared", "Visibility", "Lifespan"],
          rows: [
            ["Global Scope", "Outside any function or block", "Accessible everywhere across the application", "Entire runtime session"],
            ["Function Scope", "Inside a `function() { ... }`", "Accessible only inside that specific function", "While the function is executing"],
            ["Block Scope", "Inside `{ ... }` with `let` or `const`", "Confined strictly to the enclosing curly braces", "While the block executes"],
          ],
        },
      },
      {
        title: "2. Closures & Recursion",
        description: "Advanced functional execution patterns:",
        items: [
          {
            term: "Closure Definition",
            meaning: "A function bundled together with references to its surrounding lexical state",
            example: "function makeCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst counter = makeCounter();\ncounter(); // 1\ncounter(); // 2 (count is private and preserved!)",
          },
          {
            term: "Recursion & Base Case",
            meaning: "A function that calls itself until a stopping condition (the base case) is reached",
            example: "function factorial(n) {\n  if (n <= 1) return 1; // Base case\n  return n * factorial(n - 1); // Recursive step\n}",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What is a closure in JavaScript?",
        options: [
          "A method that automatically closes the browser window",
          "An inner function that retains access to variables from its outer enclosing scope even after the outer function returns",
          "A syntax error caused by unclosed curly braces",
          "A tool used only for database connections",
        ],
        answer: "An inner function that retains access to variables from its outer enclosing scope even after the outer function returns",
        explanation:
          "Closures allow functions to maintain persistent private state across invocations by remembering their lexical environment.",
      },
      {
        question: "What happens if a recursive function lacks a base case?",
        options: [
          "It returns null",
          "It loops forever until a 'RangeError: Maximum call stack size exceeded' occurs",
          "JavaScript automatically halts execution after 100 calls without error",
          "It converts itself into a while loop",
        ],
        answer: "It loops forever until a 'RangeError: Maximum call stack size exceeded' occurs",
        explanation:
          "Without a base case to terminate execution, recursion continuously pushes frames onto the call stack until a stack overflow error occurs.",
      },
      {
        question: "What does a JavaScript function return if it lacks an explicit `return` statement?",
        options: ["null", "undefined", "false", "0"],
        answer: "undefined",
        explanation:
          "In JavaScript, functions that finish executing without reaching an explicit `return` statement return `undefined` by default.",
      },
    ],
  },
};
