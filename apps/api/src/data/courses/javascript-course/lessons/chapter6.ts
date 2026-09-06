import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_6_LESSONS: Record<string, LessonContent> = {
  "js-ch6-l16": {
    overview:
      "JavaScript includes a rich set of built-in global utility functions accessible everywhere without importing. In this lesson based on Chapter 8 of 'JavaScript from Beginner to Professional', you will master number parsing with 'parseInt' and 'parseFloat', checking numeric validity with 'Number.isNaN', and encoding URLs with 'encodeURIComponent' to safely transmit data over the web.",
    canDo:
      "Can parse integers and floating-point values from strings, safely inspect numbers with `Number.isFinite` and `Number.isNaN`, and encode query strings for network requests.",
    teacherNote:
      "Always pass the radix parameter `10` when using `parseInt(string, 10)` to guarantee base-10 decimal parsing! Furthermore, use `Number.isNaN()` instead of the legacy global `isNaN()`, because the legacy function coerces inputs (making `isNaN('hello')` true, while `Number.isNaN('hello')` is correctly false).",
    sections: [
      {
        title: "1. Global Number Parsing Methods",
        description: "Extracting numeric values from textual inputs:",
        table: {
          headers: ["Method", "Sample Input", "Output", "Parsing Behavior"],
          rows: [
            ["parseInt(str, 10)", "parseInt('42px', 10)", "42", "Reads leading digits; stops at the first non-numeric character ('p')"],
            ["parseInt(str, 10)", "parseInt('px42', 10)", "NaN", "Fails immediately if the first character cannot be parsed as a digit"],
            ["parseFloat(str)", "parseFloat('3.1415rem')", "3.1415", "Extracts fractional decimal numbers up to the unit suffix"],
            ["Number(str)", "Number('42px')", "NaN", "Strict conversion: entire string must be numeric, otherwise returns NaN"],
            ["Number.isNaN(val)", "Number.isNaN(NaN)", "true", "Robust NaN check without performing type coercion"],
          ],
        },
      },
      {
        title: "2. URI Encoding for Web Transmission",
        description: "Safely encoding special characters in URLs:",
        items: [
          {
            term: "encodeURIComponent(string)",
            meaning: "Encodes characters like &, =, ?, / so they can be safely passed inside query parameters",
            example: "const param = encodeURIComponent('John & Sons?'); // 'John%20%26%20Sons%3F'",
          },
          {
            term: "decodeURIComponent(string)",
            meaning: "Decodes percent-encoded URI strings back into original human-readable characters",
            example: "decodeURIComponent('hello%20world'); // 'hello world'",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What is the output of `parseInt('100px', 10)` in JavaScript?",
        options: ["100", "NaN", "TypeError", "'100'"],
        answer: "100",
        explanation:
          "`parseInt` scans from left to right, parses the digits `100`, and terminates cleanly upon reaching the non-digit `'p'`.",
      },
      {
        question: "Why is `Number.isNaN(val)` preferred over the global `isNaN(val)`?",
        options: [
          "`Number.isNaN` works only on strings",
          "`Number.isNaN` does not perform type coercion, ensuring only actual NaN values return true",
          "`Number.isNaN` converts undefined to 0",
          "Global `isNaN` is deprecated in all browsers",
        ],
        answer: "`Number.isNaN` does not perform type coercion, ensuring only actual NaN values return true",
        explanation:
          "Global `isNaN('hello')` coerces `'hello'` to `NaN` and returns `true`, whereas `Number.isNaN('hello')` strictly checks if the argument is of type number and value NaN, returning `false`.",
      },
      {
        question: "Which function should be used to encode a query string parameter containing an ampersand (`&`)?",
        options: ["escape()", "encodeURI()", "encodeURIComponent()", "sanitize()"],
        answer: "encodeURIComponent()",
        explanation:
          "`encodeURIComponent()` encodes reserved URL characters including `&`, `=`, and `?`, making it safe for query parameter values.",
      },
    ],
  },

  "js-ch6-l17": {
    overview:
      "Strings are fundamental across every web application, from UI rendering to data validation. In this lesson based on Chapter 8 of 'JavaScript from Beginner to Professional', you will master the essential string manipulation methods: extracting substrings, replacing patterns, testing character containment, trimming whitespace, and splitting text into arrays.",
    canDo:
      "Can transform strings, replace patterns using `replace` and `replaceAll`, test substring existence with `includes`, split strings into arrays, and clean user inputs with `trim`.",
    teacherNote:
      "All JavaScript string methods return a BRAND NEW string! Strings in JavaScript are primitive and completely immutable; calling `str.trim()` or `str.replace()` will NEVER modify the original string in place.",
    sections: [
      {
        title: "1. Core String Manipulation Methods",
        description: "Transforming, searching, and extracting textual data:",
        table: {
          headers: ["Method", "Example Call", "Output", "Description"],
          rows: [
            ["includes(sub)", "'JavaScript'.includes('Script')", "true", "Checks if substring exists anywhere in string (case-sensitive)"],
            ["startsWith() / endsWith()", "'index.html'.endsWith('.html')", "true", "Tests if string begins or ends with the specified substring"],
            ["slice(start, end)", "'Hello World'.slice(0, 5)", "'Hello'", "Extracts a section of a string and returns a new string"],
            ["replace(target, replacement)", "'red car'.replace('red', 'blue')", "'blue car'", "Replaces first occurrence of target with replacement"],
            ["replaceAll(target, replacement)", "'a-b-a'.replaceAll('a', 'x')", "'x-b-x'", "Replaces all occurrences across the entire string"],
            ["split(separator)", "'cat,dog,bird'.split(',')", "['cat', 'dog', 'bird']", "Divides a string into an ordered array of substrings"],
            ["trim()", "'   hello   '.trim()", "'hello'", "Removes leading and trailing whitespace characters"],
          ],
        },
      },
    ],
    practice: [
      {
        question: "Do string methods like `.toUpperCase()` mutate the original string variable?",
        options: [
          "Yes, they modify the variable directly in memory",
          "No, strings are immutable in JavaScript; string methods return a new string",
          "Only if declared with `let`",
          "Only in strict mode",
        ],
        answer: "No, strings are immutable in JavaScript; string methods return a new string",
        explanation:
          "JavaScript primitive strings are immutable. All string transformation methods return new string values without changing the original.",
      },
      {
        question: "Which method converts the comma-separated string `'apple,banana,cherry'` into an array?",
        options: [
          "string.toArray(',')",
          "string.split(',')",
          "string.slice(',')",
          "string.parse(',')",
        ],
        answer: "string.split(',')",
        explanation:
          "The `split(separator)` method breaks a string into an array of substrings using the specified delimiter.",
      },
      {
        question: "What is the difference between `replace()` and `replaceAll()` when passing a string target?",
        options: [
          "`replace()` replaces all instances; `replaceAll()` replaces the first",
          "`replace()` replaces only the first matching occurrence; `replaceAll()` replaces every matching occurrence",
          "`replaceAll()` requires a regular expression",
          "They are exact synonyms",
        ],
        answer: "`replace()` replaces only the first matching occurrence; `replaceAll()` replaces every matching occurrence",
        explanation:
          "When given a string target, `replace()` only substitutes the first occurrence, while `replaceAll()` replaces all occurrences throughout the text.",
      },
    ],
  },

  "js-ch6-l18": {
    overview:
      "Working with numbers, mathematical formulas, random values, and timestamps is essential for game development, UI animations, financial calculations, and timers. In this lesson based on Chapter 8 of 'JavaScript from Beginner to Professional', you will master the Math object (`Math.random`, `Math.floor`, `Math.round`), and the Date object for timestamps and date arithmetic.",
    canDo:
      "Can generate random integers within custom ranges, apply accurate mathematical rounding, construct Date instances, and compute elapsed time intervals.",
    teacherNote:
      "To generate a random integer between `min` and `max` inclusive, use the standard formula: `Math.floor(Math.random() * (max - min + 1)) + min`. Also note that JavaScript Date months are zero-indexed: 0 is January and 11 is December!",
    sections: [
      {
        title: "1. The Math Object & Rounding Operations",
        description: "Built-in mathematical constants and calculations:",
        table: {
          headers: ["Method / Property", "Example Syntax", "Output", "Description"],
          rows: [
            ["Math.PI", "Math.PI", "3.141592653589793", "Ratio of a circle's circumference to its diameter"],
            ["Math.floor(n)", "Math.floor(4.9)", "4", "Rounds downwards to the nearest integer"],
            ["Math.ceil(n)", "Math.ceil(4.1)", "5", "Rounds upwards to the nearest integer"],
            ["Math.round(n)", "Math.round(4.5)", "5", "Rounds to the nearest integer (.5 rounds up)"],
            ["Math.min(...nums)", "Math.min(5, 2, 9, 1)", "1", "Returns the smallest numeric value"],
            ["Math.max(...nums)", "Math.max(5, 2, 9, 1)", "9", "Returns the largest numeric value"],
            ["Math.random()", "Math.random()", "0.0 <= x < 1.0", "Returns a pseudo-random floating-point number"],
          ],
        },
      },
      {
        title: "2. The Date Object & Timestamps",
        description: "Creating, querying, and comparing calendar moments:",
        items: [
          {
            term: "new Date()",
            meaning: "Creates a Date instance representing the exact current moment",
            example: "const now = new Date();",
          },
          {
            term: "Date.now()",
            meaning: "Returns the current Unix timestamp in milliseconds since January 1, 1970 UTC",
            example: "const start = Date.now(); // e.g. 1725619200000",
          },
          {
            term: "Zero-Indexed Months",
            meaning: "Months are numbered 0 to 11 in the Date constructor",
            example: "const dec25 = new Date(2025, 11, 25); // Month 11 is December!",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Which formula correctly generates a random integer between 1 and 10 inclusive in JavaScript?",
        options: [
          "Math.floor(Math.random() * 10) + 1",
          "Math.random(1, 10)",
          "Math.round(Math.random() * 10)",
          "Math.ceil(Math.random() * 9)",
        ],
        answer: "Math.floor(Math.random() * 10) + 1",
        explanation:
          "`Math.random() * 10` produces a float from 0 to 9.999. `Math.floor()` rounds down to 0-9, and adding `+ 1` yields 1 to 10.",
      },
      {
        question: "In the JavaScript `Date` object, what number corresponds to the month of January?",
        options: ["1", "0", "-1", "'Jan'"],
        answer: "0",
        explanation:
          "JavaScript Date months are 0-indexed: January is 0, February is 1, and December is 11.",
      },
      {
        question: "What does `Math.ceil(7.01)` evaluate to?",
        options: ["7", "8", "7.5", "7.1"],
        answer: "8",
        explanation:
          "`Math.ceil()` always rounds a number up to the next highest integer.",
      },
    ],
  },
};
