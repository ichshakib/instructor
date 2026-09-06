import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_9_LESSONS: Record<string, LessonContent> = {
  "js-ch9-l25": {
    overview:
      "JavaScript is single-threaded, meaning it can only execute one piece of code at any given time. How then can a web browser handle user input, run timers, and make HTTP requests without freezing the screen? In this lesson based on Chapter 13 of 'JavaScript from Beginner to Professional', you will demystify the JavaScript concurrency model: the Call Stack, Web APIs, the Task Queue (Macrotasks), the Microtask Queue (Promises), and the Event Loop.",
    canDo:
      "Can trace execution order across synchronous and asynchronous code, explain why JavaScript remains responsive, and avoid blocking the main UI thread.",
    teacherNote:
      "Remember the event loop processing priority: The call stack runs all synchronous code first. Once the stack is empty, the Event Loop drains the ENTIRE Microtask Queue (Promises, `queueMicrotask`) before picking up a single task from the Macrotask Queue (`setTimeout`, `setInterval`). This is why `Promise.resolve().then(...)` runs BEFORE `setTimeout(..., 0)`!",
    sections: [
      {
        title: "1. The Anatomy of the Event Loop",
        description: "How single-threaded JavaScript achieves non-blocking concurrency:",
        table: {
          headers: ["Component", "Location", "Role", "Example"],
          rows: [
            ["Call Stack", "JS Engine (V8, SpiderMonkey)", "Executes functions in LIFO (Last In, First Out) order", "Active function execution frame"],
            ["Web APIs", "Browser C++ Environment", "Handles timers, network requests, DOM events outside the JS thread", "`setTimeout()`, `fetch()`, `addEventListener()`"],
            ["Microtask Queue", "Job Queue", "High-priority queue processed immediately after stack clears", "`Promise.then()`, `async/await` resumption"],
            ["Macrotask Queue", "Task Queue", "Standard queue for timers and I/O callbacks", "`setTimeout()`, `setInterval()`, `setImmediate()`"],
            ["Event Loop", "Orchestrator", "Continuously checks if stack is clear; pumps tasks into the stack", "The heartbeat of the browser runtime"],
          ],
        },
      },
    ],
    practice: [
      {
        question: "In what order will the numbers log: `console.log(1); setTimeout(() => console.log(2), 0); Promise.resolve().then(() => console.log(3)); console.log(4);`?",
        options: [
          "1, 4, 3, 2",
          "1, 2, 3, 4",
          "1, 4, 2, 3",
          "3, 1, 4, 2",
        ],
        answer: "1, 4, 3, 2",
        explanation:
          "1 and 4 are synchronous on the call stack. 3 is a microtask (Promise) and runs immediately after the stack clears. 2 is a macrotask (setTimeout) and runs last.",
      },
      {
        question: "Is JavaScript a multi-threaded programming language in standard browser execution?",
        options: [
          "Yes, each function runs on a separate CPU thread",
          "No, JavaScript has a single call stack and executes on a single main thread",
          "Yes, except in Internet Explorer",
          "Only when using ES6 classes",
        ],
        answer: "No, JavaScript has a single call stack and executes on a single main thread",
        explanation:
          "JavaScript is fundamentally single-threaded; asynchronous operations are offloaded to browser Web APIs, leaving the main thread unblocked.",
      },
      {
        question: "Which queue has higher priority when the call stack becomes empty?",
        options: [
          "Microtask Queue (Promises)",
          "Macrotask Queue (setTimeout/setInterval)",
          "Both have equal priority and alternate evenly",
          "DOM Click Event Queue",
        ],
        answer: "Microtask Queue (Promises)",
        explanation:
          "The event loop processes all pending microtasks to completion before picking up the next macrotask from the task queue.",
      },
    ],
  },

  "js-ch9-l26": {
    overview:
      "Before modern Promises, asynchronous JavaScript relied on nested callbacks, leading to unreadable, brittle structures known as 'Callback Hell' or the 'Pyramid of Doom'. In this lesson based on Chapter 13 of 'JavaScript from Beginner to Professional', you will learn how Promises represent future completion, transition between states (Pending, Fulfilled, Rejected), and chain operations using '.then()', '.catch()', and '.finally()'.",
    canDo:
      "Can create new Promises using `new Promise((resolve, reject) => {})`, chain asynchronous operations with `.then()`, catch errors with `.catch()`, and run cleanup logic with `.finally()`.",
    teacherNote:
      "Always return a value or another Promise inside a `.then()` callback! If you return a Promise from within a `.then()`, the next `.then()` in the chain automatically waits for it to resolve, flattening complex asynchronous pipelines into clean sequential code.",
    sections: [
      {
        title: "1. The Three States of a Promise",
        description: "The lifecycle of an asynchronous operation:",
        table: {
          headers: ["State", "Description", "Settled?", "Next Handler Invoked"],
          rows: [
            ["Pending", "Initial state; the asynchronous operation is still actively running", "No", "None yet (Waiting)"],
            ["Fulfilled", "The operation completed successfully (`resolve(value)`)", "Yes (Immutable)", "`.then(value => ...)`"],
            ["Rejected", "The operation failed with an error (`reject(error)`)", "Yes (Immutable)", "`.catch(error => ...)`"],
          ],
        },
      },
      {
        title: "2. Promise Chaining & Error Propagation",
        description: "Sequencing asynchronous steps and centralized error handling:",
        items: [
          {
            term: "Promise Chaining",
            meaning: "Each call to `.then()` returns a brand new Promise, allowing linear sequential chaining",
            example: "fetchUser(id)\n  .then(user => fetchOrders(user.id))\n  .then(orders => display(orders))\n  .catch(err => showError(err));",
          },
          {
            term: "Centralized Error Catching",
            meaning: "A single `.catch()` at the end of a chain catches any rejection that occurred in ANY prior step",
            example: "`.catch(err => console.error('Failed somewhere in pipeline:', err))`",
          },
          {
            term: ".finally()",
            meaning: "Executes regardless of whether the Promise was fulfilled or rejected (perfect for hiding loading spinners)",
            example: "`.finally(() => setLoading(false))`",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What are the three possible states of a JavaScript Promise?",
        options: [
          "Starting, Working, Done",
          "Pending, Fulfilled, Rejected",
          "Unsent, Opened, Completed",
          "Waiting, Success, Error",
        ],
        answer: "Pending, Fulfilled, Rejected",
        explanation:
          "A Promise begins in the `pending` state and transitions once into either `fulfilled` (success) or `rejected` (failure).",
      },
      {
        question: "What does the `.finally()` handler do in a Promise chain?",
        options: [
          "It only runs if an error occurred",
          "It executes regardless of whether the promise was fulfilled or rejected",
          "It cancels the promise execution",
          "It forces the promise to return a string",
        ],
        answer: "It executes regardless of whether the promise was fulfilled or rejected",
        explanation:
          "`.finally()` is guaranteed to execute at the conclusion of a promise chain, making it ideal for cleanup actions like stopping loaders.",
      },
      {
        question: "How do Promises solve 'Callback Hell'?",
        options: [
          "By running code synchronously",
          "By allowing asynchronous steps to be chained linearly with `.then()` instead of nesting deeply inside each other",
          "By removing the need for error handling",
          "By increasing CPU speed",
        ],
        answer: "By allowing asynchronous steps to be chained linearly with `.then()` instead of nesting deeply inside each other",
        explanation:
          "Promises flatten nested callback pyramids into readable, top-to-bottom chainable pipelines with unified error catching.",
      },
    ],
  },

  "js-ch9-l27": {
    overview:
      "Modern JavaScript revolutionized asynchronous development with 'async' and 'await' (ES2017), allowing asynchronous code to be read and written just like synchronous code. In this lesson based on Chapter 13 of 'JavaScript from Beginner to Professional', you will master declaring async functions, pausing execution with 'await', handling errors with 'try...catch', and fetching live JSON data from web APIs using 'fetch()'.",
    canDo:
      "Can write clean asynchronous functions with `async/await`, make HTTP GET and POST requests using `fetch()`, parse JSON responses, and catch network failures.",
    teacherNote:
      "Remember that `fetch()` does NOT reject on HTTP error statuses like 404 Not Found or 500 Server Error! `fetch()` only rejects if there is a network failure or DNS error. Always check `if (!response.ok)` to handle HTTP errors gracefully!",
    sections: [
      {
        title: "1. The async / await Syntax",
        description: "Syntactic sugar built over native JavaScript Promises:",
        table: {
          headers: ["Keyword", "Where Used", "Behavior / Return Value"],
          rows: [
            ["async", "Before function declaration (`async function()`, `async () =>`)", "Wraps the function's return value in a Promise automatically"],
            ["await", "Inside an `async` function, before a Promise expression", "Pauses function execution until the Promise settles; unpacks resolved value"],
            ["try / catch", "Surrounding `await` statements", "Catches rejected Promises using standard synchronous error handling syntax"],
          ],
        },
      },
      {
        title: "2. The Modern fetch() API Pattern",
        description: "Making network requests and parsing JSON:",
        items: [
          {
            term: "Two-Step Fetch Pattern",
            meaning: "1st step: await fetch(url) for HTTP headers; 2nd step: await res.json() to parse the JSON body",
            example: "async function loadData() {\n  const res = await fetch('https://api.example.com/users');\n  if (!res.ok) throw new Error(`HTTP error: ${res.status}`);\n  const data = await res.json();\n  return data;\n}",
          },
          {
            term: "Sending POST Requests with Headers",
            meaning: "Configuring request method, headers, and stringified JSON body",
            example: "await fetch('/api/users', {\n  method: 'POST',\n  headers: { 'Content-Type': 'application/json' },\n  body: JSON.stringify({ name: 'Alex' })\n});",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Does `fetch()` reject its Promise if the server responds with a 404 Not Found status code?",
        options: [
          "Yes, all 4xx and 5xx statuses reject automatically",
          "No, `fetch()` only rejects on network failures; you must inspect `response.ok` or `response.status`",
          "Yes, but only in strict mode",
          "Only in Node.js",
        ],
        answer: "No, `fetch()` only rejects on network failures; you must inspect `response.ok` or `response.status`",
        explanation:
          "The Promise from `fetch()` resolves successfully as long as a response was received. Developers must manually check `if (!res.ok)` to handle HTTP errors.",
      },
      {
        question: "What does an `async` function always return?",
        options: [
          "A Promise",
          "The raw unpacked value directly",
          "undefined",
          "A generator",
        ],
        answer: "A Promise",
        explanation:
          "Functions declared with `async` always return a Promise, automatically wrapping any non-Promise return value in `Promise.resolve()`.",
      },
      {
        question: "Where can the `await` keyword be placed in JavaScript?",
        options: [
          "Anywhere in any file",
          "Inside `async` functions (or at top-level in ES modules)",
          "Only inside class constructors",
          "Only inside if-statements",
        ],
        answer: "Inside `async` functions (or at top-level in ES modules)",
        explanation:
          "The `await` keyword pauses execution and is only permitted inside `async` functions or top-level ES module scripts.",
      },
    ],
  },
};
