import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_2_LESSONS: Record<string, LessonContent> = {
  "js-ch2-l4": {
    overview:
      "Arrays are ordered collections capable of storing lists of values under a single identifier. In this lesson based on Chapter 3 of 'JavaScript from Beginner to Professional', you will learn how to create arrays, access elements using zero-based indexing, manage the array length property, and perform fast end and start mutations using push, pop, shift, and unshift.",
    canDo:
      "Can instantiate arrays, query elements by index, dynamically resize lists, and apply stack and queue operations in JavaScript.",
    teacherNote:
      "`push()` and `pop()` operate at the END of an array with O(1) constant time complexity. In contrast, `shift()` and `unshift()` operate at the START of an array and must re-index all subsequent elements, making them O(n) linear time on large datasets.",
    sections: [
      {
        title: "1. Array Creation & Zero-Based Indexing",
        description: "Fundamentals of constructing and reading ordered lists:",
        table: {
          headers: ["Operation", "Code Syntax", "Description / Output", "Data Type Handled"],
          rows: [
            ["Array Literal", "const colors = ['red', 'green', 'blue'];", "Standard literal initialization syntax", "Any JavaScript types"],
            ["Zero-Based Index", "colors[0]; // 'red'", "First element is located at index 0", "First element"],
            ["Last Element", "colors[colors.length - 1]; // 'blue'", "Dynamically compute the final element index", "Last element"],
            ["Length Property", "colors.length; // 3", "Tracks the total count of elements; dynamically updated", "Number"],
            ["Overwriting Index", "colors[1] = 'emerald';", "Direct assignment mutates the item at index 1 in-place", "Mutation"],
          ],
        },
      },
      {
        title: "2. The Four Fundamental Array Mutators",
        description: "Stack and queue operations for adding and removing items:",
        table: {
          headers: ["Method", "Target Position", "Action", "Return Value", "Performance"],
          rows: [
            ["push(item)", "End of array", "Appends one or more elements", "New array length", "O(1) - Fast"],
            ["pop()", "End of array", "Removes and returns the final element", "The removed element", "O(1) - Fast"],
            ["unshift(item)", "Start of array", "Prepends one or more elements", "New array length", "O(n) - Re-indexes all"],
            ["shift()", "Start of array", "Removes and returns the first element", "The removed element", "O(n) - Re-indexes all"],
          ],
        },
      },
    ],
    practice: [
      {
        question: "What does the `push()` method return after appending an element to an array?",
        options: [
          "The element that was added",
          "The new length of the array",
          "A copy of the updated array",
          "Boolean true if successful",
        ],
        answer: "The new length of the array",
        explanation:
          "`array.push()` returns the newly updated numeric `length` property of the mutated array.",
      },
      {
        question: "What is the index of the first item in a JavaScript array?",
        options: ["0", "1", "-1", "undefined"],
        answer: "0",
        explanation:
          "JavaScript arrays are zero-indexed, meaning the initial element resides at index 0.",
      },
      {
        question: "Which method removes the FIRST element of an array?",
        options: ["pop()", "shift()", "unshift()", "splice(0)"],
        answer: "shift()",
        explanation:
          "`shift()` removes the item at index 0 and shifts all remaining elements down by one position.",
      },
    ],
  },

  "js-ch2-l5": {
    overview:
      "Beyond basic mutations, modern JavaScript offers powerful tools for splicing, slicing, merging, and navigating complex multi-dimensional lists. In this lesson from Chapter 3 of 'JavaScript from Beginner to Professional', you will master the critical differences between mutating 'splice()' and non-mutating 'slice()', array searching, and nested matrices.",
    canDo:
      "Can extract subarrays with `slice`, insert/delete elements anywhere with `splice`, combine arrays with `concat`, and traverse 2D arrays.",
    teacherNote:
      "Never confuse `slice()` with `splice()`: `slice(start, end)` is NON-DESTRUCTIVE and returns a shallow copy without altering the original array. `splice(start, count, ...items)` is DESTRUCTIVE and alters the original array in place.",
    sections: [
      {
        title: "1. Destructive splice() vs. Non-Destructive slice()",
        description: "Side-by-side behavioral comparison:",
        table: {
          headers: ["Method", "Mutates Original?", "Parameters", "Example Call", "Result"],
          rows: [
            [
              "slice(start, end)",
              "No (Pure)",
              "start index (inclusive), end index (exclusive)",
              "['a','b','c','d'].slice(1, 3)",
              "Returns ['b', 'c']; original remains unchanged",
            ],
            [
              "splice(start, deleteCount, ...items)",
              "Yes (Destructive)",
              "start index, number of items to delete, replacement items",
              "['a','b','c'].splice(1, 1, 'x')",
              "Returns ['b']; original array is now ['a', 'x', 'c']",
            ],
          ],
        },
      },
      {
        title: "2. Multi-Dimensional Arrays (Matrices)",
        description: "Working with nested arrays in JavaScript:",
        items: [
          {
            term: "2D Grid Representation",
            meaning: "An array containing arrays, accessed via multiple sequential brackets `[row][col]`",
            example: "const grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; console.log(grid[1][2]); // 6",
          },
          {
            term: "concat(...arrays)",
            meaning: "Merges two or more arrays into a new array without modifying the originals",
            example: "const merged = listA.concat(listB, listC);",
          },
          {
            term: "indexOf() & includes()",
            meaning: "Checks for value existence (`includes` returns boolean; `indexOf` returns numeric index or -1)",
            example: "['apple', 'banana'].includes('banana'); // true",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Given `const arr = ['a', 'b', 'c', 'd']; const sub = arr.slice(1, 3);`, what does `arr` contain afterwards?",
        options: [
          "['a', 'd']",
          "['a', 'b', 'c', 'd']",
          "['b', 'c']",
          "['d']",
        ],
        answer: "['a', 'b', 'c', 'd']",
        explanation:
          "`slice()` does not mutate the original array. `arr` remains `['a', 'b', 'c', 'd']`, while `sub` receives `['b', 'c']`.",
      },
      {
        question: "How do you access the number 9 in `const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];`?",
        options: [
          "matrix[3][3]",
          "matrix[2][2]",
          "matrix[9]",
          "matrix(2, 2)",
        ],
        answer: "matrix[2][2]",
        explanation:
          "The inner array `[7, 8, 9]` is at outer row index 2 (`matrix[2]`), and the number 9 is at inner column index 2 (`matrix[2][2]`).",
      },
      {
        question: "Which method checks if an array contains a specific value and returns a boolean `true` or `false`?",
        options: ["has()", "includes()", "contains()", "find()"],
        answer: "includes()",
        explanation:
          "`Array.prototype.includes()` returns `true` if the specified element is found, or `false` otherwise.",
      },
    ],
  },

  "js-ch2-l6": {
    overview:
      "While arrays store ordered elements by index, JavaScript Objects store data as key-value pairs (properties and methods) accessible by name. In this lesson based on Chapter 3 of 'JavaScript from Beginner to Professional', you will learn to declare object literals, access properties via dot notation and bracket notation, nest objects inside arrays, and model real-world entities.",
    canDo:
      "Can construct object literals, dynamically query properties using dot and bracket notation, delete properties, and model complex real-world data structures.",
    teacherNote:
      "Use dot notation (`person.name`) when the property name is a known valid identifier. Switch to bracket notation (`person['first-name']` or `person[dynamicKey]`) when the property name contains hyphens/spaces or is stored in a dynamic variable.",
    sections: [
      {
        title: "1. Object Anatomy: Keys, Values & Access Notation",
        description: "Representing structured data using object literals:",
        table: {
          headers: ["Concept", "Syntax Example", "Usage Rule", "Output / Behavior"],
          rows: [
            ["Object Literal", "const user = { name: 'Sarah', age: 29 };", "Curly braces `{}` with key-value pairs", "Creates an object in memory"],
            ["Dot Notation", "user.name", "Standard accessor for alphanumeric identifiers", "'Sarah'"],
            ["Bracket Notation", "user['age'] or user[propKey]", "Required for dynamic variables, spaces, or special characters", "29"],
            ["Property Deletion", "delete user.age;", "Deletes the key-value pair from the object", "Returns boolean true"],
            ["in Operator", "'name' in user", "Checks if a property key exists on the object", "Returns true or false"],
          ],
        },
      },
      {
        title: "2. Complex Modeling: Objects in Arrays & Arrays in Objects",
        description: "Nesting collections to mirror realistic API payloads:",
        items: [
          {
            term: "Array of Objects",
            meaning: "A list where each item is a structured object (standard database/API record list)",
            example: "const students = [{ id: 1, name: 'Ava' }, { id: 2, name: 'Ben' }];",
          },
          {
            term: "Object with Nested Array",
            meaning: "An entity with multi-value attributes stored inside an array property",
            example: "const company = { name: 'Acme', departments: ['Dev', 'Sales', 'HR'] };",
          },
          {
            term: "Object.keys() & Object.values()",
            meaning: "Extracts an array of all property keys or values from an object",
            example: "Object.keys({ a: 1, b: 2 }); // ['a', 'b']",
          },
        ],
      },
    ],
    practice: [
      {
        question: "When is bracket notation (`object[key]`) required over dot notation (`object.key`)?",
        options: [
          "Only when reading numbers",
          "When the property name is stored in a dynamic variable or contains hyphens/spaces",
          "Only inside class constructors",
          "Bracket notation is always mandatory in modern ES6+",
        ],
        answer: "When the property name is stored in a dynamic variable or contains hyphens/spaces",
        explanation:
          "Bracket notation accepts arbitrary string expressions, making it essential when keys are dynamic (`user[dynamicField]`) or contain special characters.",
      },
      {
        question: "How do you delete a property named `status` from an object named `order`?",
        options: [
          "remove order.status;",
          "delete order.status;",
          "order.status.destroy();",
          "order.status = undefined;",
        ],
        answer: "delete order.status;",
        explanation:
          "The `delete` operator removes a property key and its corresponding value completely from an object.",
      },
      {
        question: "What does `Object.values({ name: 'Alex', role: 'Admin' })` return?",
        options: [
          "['name', 'role']",
          "['Alex', 'Admin']",
          "{ name: 'Alex', role: 'Admin' }",
          "2",
        ],
        answer: "['Alex', 'Admin']",
        explanation:
          "`Object.values()` returns an array containing all enumerable property values of the provided object.",
      },
    ],
  },
};
