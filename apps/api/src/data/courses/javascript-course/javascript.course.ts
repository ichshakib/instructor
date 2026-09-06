import { Course, Chapter } from "../../../types/course.types";
import { ALL_JAVASCRIPT_LESSONS_CONTENT } from "./lessons";

const JAVASCRIPT_RAW_CHAPTERS: Chapter[] = [
  {
    id: "js-ch1",
    title: "Chapter 1: Getting Started & JavaScript Essentials",
    lessons: [
      {
        id: "js-ch1-l1",
        title: "Lesson 1: The JavaScript Runtime, Script Loading & 'use strict'",
        description: "Understanding browser JS execution, inline vs deferred external scripts, and strict mode.",
      },
      {
        id: "js-ch1-l2",
        title: "Lesson 2: Variables: let, const, and var (Scope & Hoisting)",
        description: "Block scope, mutability rules, variable hoisting, and avoiding the Temporal Dead Zone.",
      },
      {
        id: "js-ch1-l3",
        title: "Lesson 3: Primitive Data Types, Type Coercion & Operators",
        description: "String, Number, BigInt, Boolean, Symbol, Null, Undefined, strict equality (===), and logical operators.",
      },
    ],
  },
  {
    id: "js-ch2",
    title: "Chapter 2: Working with Multiple Values: Arrays & Objects",
    lessons: [
      {
        id: "js-ch2-l4",
        title: "Lesson 4: Arrays: Indexing, Length & Fundamental Mutators",
        description: "Zero-based indexing, dynamic array sizing, push, pop, shift, and unshift operations.",
      },
      {
        id: "js-ch2-l5",
        title: "Lesson 5: Advanced Array Operations & Multi-Dimensional Matrices",
        description: "Extracting subarrays with slice, in-place splicing, concatenation, and navigating 2D grids.",
      },
      {
        id: "js-ch2-l6",
        title: "Lesson 6: JavaScript Objects & Complex Data Structures",
        description: "Object literals, dot vs bracket notation, property deletion, and nesting objects with arrays.",
      },
    ],
  },
  {
    id: "js-ch3",
    title: "Chapter 3: Control Flow: Logic Statements & Loops",
    lessons: [
      {
        id: "js-ch3-l7",
        title: "Lesson 7: Conditional Logic, Truthy/Falsy & The Ternary Operator",
        description: "Branching execution with if, else if, else, truthy evaluation, and clean inline ternary checks.",
      },
      {
        id: "js-ch3-l8",
        title: "Lesson 8: Multi-Branch Switching & Case Fallthrough",
        description: "Organizing discrete comparison paths with switch statements, break statements, and defaults.",
      },
      {
        id: "js-ch3-l9",
        title: "Lesson 9: Iteration & Loops: for, while, do-while & for...of",
        description: "Mastering loop constructs, collection traversal with for...of, and loop control with break and continue.",
      },
    ],
  },
  {
    id: "js-ch4",
    title: "Chapter 4: Functions & Scope",
    lessons: [
      {
        id: "js-ch4-l10",
        title: "Lesson 10: Declarations, Expressions & ES6 Arrow Functions",
        description: "Comparing function declarations, expressions, concise arrow syntax, and lexical 'this' binding.",
      },
      {
        id: "js-ch4-l11",
        title: "Lesson 11: Parameters, Default Values & Rest/Spread Syntax",
        description: "Configuring robust argument signatures with default fallbacks and gathering arguments with rest syntax.",
      },
      {
        id: "js-ch4-l12",
        title: "Lesson 12: Return Values, Lexical Scope, Closures & Recursion",
        description: "Scope boundaries, data encapsulation through closures, and recursive algorithms with base cases.",
      },
    ],
  },
  {
    id: "js-ch5",
    title: "Chapter 5: Object-Oriented Programming & Modern Classes",
    lessons: [
      {
        id: "js-ch5-l13",
        title: "Lesson 13: ES6 Class Syntax & The Constructor Lifecycle",
        description: "Declaring object blueprints, initializing instance state with constructors, and the new operator.",
      },
      {
        id: "js-ch5-l14",
        title: "Lesson 14: Instance Methods, Getters, Setters & Static Utilities",
        description: "Adding behavioral methods, intercepting property access with get/set, and static class helpers.",
      },
      {
        id: "js-ch5-l15",
        title: "Lesson 15: Inheritance (extends & super) and Private Fields (#)",
        description: "Deriving subclasses with extends, invoking parent constructors with super, and private encapsulation.",
      },
    ],
  },
  {
    id: "js-ch6",
    title: "Chapter 6: Standard Library & Built-in Methods",
    lessons: [
      {
        id: "js-ch6-l16",
        title: "Lesson 16: Global Utility Methods, Number Parsing & URI Encoding",
        description: "Parsing integers and floats with parseInt/parseFloat, robust NaN checks, and URI encoding.",
      },
      {
        id: "js-ch6-l17",
        title: "Lesson 17: String Transformation, Search & Slicing Methods",
        description: "Transforming text with slice, replace, replaceAll, includes, split, and whitespace trimming.",
      },
      {
        id: "js-ch6-l18",
        title: "Lesson 18: The Math Object, Random Numbers & Date Timestamps",
        description: "Mathematical rounding (floor, ceil, round), random ranges, and constructing Date moments.",
      },
    ],
  },
  {
    id: "js-ch7",
    title: "Chapter 7: The Document Object Model (DOM)",
    lessons: [
      {
        id: "js-ch7-l19",
        title: "Lesson 19: The DOM Tree Architecture: Window, Document & Nodes",
        description: "Understanding the browser object model, document root, and parent-child-sibling relationships.",
      },
      {
        id: "js-ch7-l20",
        title: "Lesson 20: Modern Element Selection: querySelector & querySelectorAll",
        description: "Targeting elements with CSS selectors, traversing NodeLists, and avoiding null reference errors.",
      },
      {
        id: "js-ch7-l21",
        title: "Lesson 21: Modifying Content, Attributes, Classes & Styles",
        description: "Safe text injection with textContent, the classList API, inline styles, and createElement.",
      },
    ],
  },
  {
    id: "js-ch8",
    title: "Chapter 8: Interactive Content & Event-Driven Programming",
    lessons: [
      {
        id: "js-ch8-l22",
        title: "Lesson 22: Event Listeners with addEventListener & Cleanup",
        description: "Registering asynchronous event handlers, passing options ({ once: true }), and removing listeners.",
      },
      {
        id: "js-ch8-l23",
        title: "Lesson 23: Mouse, Keyboard & Form Submission Events",
        description: "Intercepting form submissions with preventDefault, inspecting e.key, and real-time input events.",
      },
      {
        id: "js-ch8-l24",
        title: "Lesson 24: Event Propagation: Bubbling, Capturing & Delegation",
        description: "Understanding the 3 phases of event flow, stopping bubbling, and the high-performance Event Delegation pattern.",
      },
    ],
  },
  {
    id: "js-ch9",
    title: "Chapter 9: Concurrency & Asynchronous JavaScript",
    lessons: [
      {
        id: "js-ch9-l25",
        title: "Lesson 25: The Call Stack, Web APIs, Task Queues & The Event Loop",
        description: "Visualizing single-threaded asynchronous execution, microtasks vs macrotasks, and non-blocking I/O.",
      },
      {
        id: "js-ch9-l26",
        title: "Lesson 26: Promises: States, Handlers & Chaining",
        description: "Managing asynchronous lifecycles with Promises, .then() chaining, .catch() errors, and .finally().",
      },
      {
        id: "js-ch9-l27",
        title: "Lesson 27: Modern async/await & Fetching Remote JSON Data",
        description: "Syntactic async/await, error handling with try/catch, and making HTTP requests using fetch().",
      },
    ],
  },
  {
    id: "js-ch10",
    title: "Chapter 10: Client Storage, Error Handling & Modern Tooling",
    lessons: [
      {
        id: "js-ch10-l28",
        title: "Lesson 28: JSON Serialization: JSON.stringify() and JSON.parse()",
        description: "Serializing in-memory objects to portable JSON strings, safe parsing, and pretty-printing.",
      },
      {
        id: "js-ch10-l29",
        title: "Lesson 29: The Web Storage API: localStorage vs. sessionStorage",
        description: "Persisting user preferences across browser sessions, storage quotas, and JSON storage wrappers.",
      },
      {
        id: "js-ch10-l30",
        title: "Lesson 30: Robust Error Handling & Modern ES Modules",
        description: "try/catch/finally exception recovery, custom Error objects, and modular import/export architecture.",
      },
    ],
  },
];

const JAVASCRIPT_CHAPTERS: Chapter[] = JAVASCRIPT_RAW_CHAPTERS.map((chapter) => ({
  ...chapter,
  lessons: chapter.lessons.map((lesson) => ({
    ...lesson,
    content: ALL_JAVASCRIPT_LESSONS_CONTENT[lesson.id],
  })),
}));

export const javascriptCourse: Course = {
  id: "javascript-complete-course",
  title: "JavaScript from Beginner to Professional: The Complete Guide",
  category: "Development",
  type: "Full Course",
  typeIcon: "path",
  structureType: "chapters-and-lessons",
  tag1: "JavaScript (ES6+)",
  tag2: "Beginner to Professional",
  badgeCount: "",
  coverVariant: "code-architecture",
  imageUrl: "/course-images/javascript-course.jpg",
  buttonLabel: "Start",
  description:
    "Master modern JavaScript (ES6+) from fundamentals to full-stack readiness based on Laurence Svekis, Maaike van Putten, and Rob Percival's authoritative Packt guide. Learn variables, data structures, OOP classes, DOM manipulation, asynchronous programming, event handling, and modern web application APIs.",
  featured: true,
  totalChapters: JAVASCRIPT_CHAPTERS.length,
  totalLessons: JAVASCRIPT_CHAPTERS.reduce((acc, ch) => acc + ch.lessons.length, 0),
  progressStatus: {
    type: "status",
    statusText: "New",
  },
  chapters: JAVASCRIPT_CHAPTERS,
};
