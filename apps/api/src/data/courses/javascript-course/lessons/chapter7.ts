import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_7_LESSONS: Record<string, LessonContent> = {
  "js-ch7-l19": {
    overview:
      "The Document Object Model (DOM) is a tree-like object representation of the HTML document created by the browser. In this lesson based on Chapter 9 of 'JavaScript from Beginner to Professional', you will understand the global 'window' object, the 'document' root, DOM node hierarchies (Element nodes, Text nodes, Comment nodes), and parent-child tree relationships.",
    canDo:
      "Can explain the relationship between HTML source code and the live DOM tree, navigate parent, child, and sibling nodes, and distinguish Element nodes from Text nodes.",
    teacherNote:
      "The DOM is NOT JavaScript! The DOM is a platform-independent API provided by the browser environment. JavaScript is merely the programming language used to interact with and mutate this DOM tree.",
    sections: [
      {
        title: "1. The Browser Hierarchy: window & document",
        description: "The global environment model of web browsers:",
        table: {
          headers: ["Object", "Role", "Key Properties / Children"],
          rows: [
            ["window", "The global browser execution context", "window.location, window.navigator, window.localStorage, window.document"],
            ["document", "The root object of the loaded web page", "document.documentElement (<html>), document.head, document.body"],
            ["DOM Nodes", "Every structural part of the tree", "Element nodes (type 1), Text nodes (type 3), Comment nodes (type 8)"],
          ],
        },
      },
      {
        title: "2. Traversing the DOM Tree",
        description: "Moving across connected nodes without querying:",
        items: [
          {
            term: "parentNode / parentElement",
            meaning: "Accesses the parent node or enclosing element of the current node",
            example: "const card = button.parentElement;",
          },
          {
            term: "children vs childNodes",
            meaning: "`children` returns ONLY Element nodes; `childNodes` includes whitespace text nodes and comments",
            example: "list.children.length; // Count of child <li> tags only",
          },
          {
            term: "nextElementSibling / previousElementSibling",
            meaning: "Navigates directly to the adjacent sibling Element node",
            example: "const nextItem = currentItem.nextElementSibling;",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What is the primary difference between `element.children` and `element.childNodes`?",
        options: [
          "`children` contains only Element nodes; `childNodes` includes text nodes (whitespace) and comments",
          "`childNodes` works only on tables",
          "`children` is deprecated in modern HTML5",
          "There is no difference",
        ],
        answer: "`children` contains only Element nodes; `childNodes` includes text nodes (whitespace) and comments",
        explanation:
          "`children` returns an HTMLCollection containing strictly Element nodes, filtering out blank whitespace text nodes that `childNodes` includes.",
      },
      {
        question: "Which global object represents the browser window and hosts all global variables in client-side JavaScript?",
        options: ["globalThis / window", "process", "document", "navigator"],
        answer: "globalThis / window",
        explanation:
          "In web browsers, `window` (accessible universally as `globalThis`) represents the top-level global environment.",
      },
      {
        question: "Is the DOM an intrinsic part of the core JavaScript ECMAScript language specification?",
        options: [
          "Yes, it is defined directly in the ECMAScript standard",
          "No, the DOM is a Web API provided by browser engines (defined by W3C/WHATWG)",
          "Yes, it is identical in Node.js server environments",
          "Only in ES6 and above",
        ],
        answer: "No, the DOM is a Web API provided by browser engines (defined by W3C/WHATWG)",
        explanation:
          "The DOM is a browser Web API specified by the WHATWG standard; JavaScript is the programming language that interfaces with it.",
      },
    ],
  },

  "js-ch7-l20": {
    overview:
      "Before you can manipulate a webpage, you must target and select the appropriate DOM elements. In this lesson based on Chapter 9 of 'JavaScript from Beginner to Professional', you will master the modern element query methods: 'document.querySelector' and 'document.querySelectorAll', compare them to legacy methods ('getElementById', 'getElementsByClassName'), and understand NodeLists versus live HTMLCollections.",
    canDo:
      "Can target any element using standard CSS selectors (`querySelector`), retrieve multiple elements (`querySelectorAll`), and iterate over selected collections safely.",
    teacherNote:
      "`querySelector` returns the FIRST matching Element node, or `null` if none match. `querySelectorAll` returns a static `NodeList` containing all matches. Always check if the returned element exists before attempting to read its properties!",
    sections: [
      {
        title: "1. DOM Selector Methods Comparison",
        description: "Targeting elements across the document:",
        table: {
          headers: ["Method", "Selector Syntax", "Return Value", "Live or Static?"],
          rows: [
            [
              "getElementById(id)",
              "document.getElementById('header')",
              "Single matching Element or null",
              "Direct reference",
            ],
            [
              "querySelector(cssSelector)",
              "document.querySelector('.card > p.lead')",
              "First matching Element or null",
              "Direct reference",
            ],
            [
              "querySelectorAll(cssSelector)",
              "document.querySelectorAll('.btn-primary')",
              "NodeList of matching Elements",
              "Static (Snapshot of the DOM at query time)",
            ],
            [
              "getElementsByClassName(name)",
              "document.getElementsByClassName('active')",
              "HTMLCollection of matching Elements",
              "Live (Automatically updates if DOM changes!)",
            ],
          ],
        },
      },
    ],
    practice: [
      {
        question: "What does `document.querySelector('.btn')` return if there are five buttons with class `btn` on the page?",
        options: [
          "An array containing all five buttons",
          "Only the first button matching the selector",
          "null",
          "A NodeList",
        ],
        answer: "Only the first button matching the selector",
        explanation:
          "`querySelector` terminates as soon as it discovers the first matching element in document order.",
      },
      {
        question: "What does `document.querySelector('#non-existent-id')` return if no matching element exists?",
        options: ["undefined", "null", "false", "Empty NodeList"],
        answer: "null",
        explanation:
          "`querySelector` and `getElementById` return `null` when no element matches the query.",
      },
      {
        question: "Can you call `.forEach()` directly on the result of `document.querySelectorAll()` in modern browsers?",
        options: [
          "Yes, modern NodeList supports forEach directly",
          "No, you must always convert it to an array with Array.from() first",
          "Only in Internet Explorer",
          "Only if the NodeList contains fewer than 10 elements",
        ],
        answer: "Yes, modern NodeList supports forEach directly",
        explanation:
          "`NodeList.prototype.forEach()` is supported in all modern browsers, allowing direct iteration.",
      },
    ],
  },

  "js-ch7-l21": {
    overview:
      "Dynamic web applications require changing text, injecting HTML structures, toggling CSS classes, and modifying element attributes in response to user actions. In this lesson based on Chapter 10 of 'JavaScript from Beginner to Professional', you will master 'textContent', 'innerHTML', the 'classList' API, modifying attributes, and programmatically creating elements with 'createElement' and 'appendChild'.",
    canDo:
      "Can modify text safely without XSS vulnerabilities, manage CSS classes dynamically with `classList.toggle()`, update HTML attributes, and build new DOM nodes from scratch.",
    teacherNote:
      "Never use `innerHTML` when displaying untrusted user input! Doing so creates severe Cross-Site Scripting (XSS) vulnerabilities where malicious `<script>` or `<img onerror=...>` tags can execute. Use `textContent` for plain text injection.",
    sections: [
      {
        title: "1. Modifying Text & Content: textContent vs innerHTML",
        description: "Safely writing to DOM nodes:",
        table: {
          headers: ["Property", "Behavior", "Security / Performance", "Best Used For"],
          rows: [
            ["textContent", "Inserts pure text; automatically escapes all HTML tags", "100% Safe from XSS; Fast", "User input, labels, counts, titles"],
            ["innerHTML", "Parses string as HTML and constructs child DOM nodes", "Vulnerable to XSS if user input is unescaped", "Trusted HTML markup templates"],
          ],
        },
      },
      {
        title: "2. The classList API & Dynamic Styles",
        description: "Manipulating visual presentation through CSS classes:",
        table: {
          headers: ["Method", "Code Syntax", "Action"],
          rows: [
            ["classList.add()", "card.classList.add('highlight', 'active');", "Adds one or more class names"],
            ["classList.remove()", "modal.classList.remove('open');", "Removes specified class names"],
            ["classList.toggle()", "nav.classList.toggle('collapsed');", "Adds if absent, removes if present; returns boolean"],
            ["classList.contains()", "if (btn.classList.contains('disabled'))", "Checks if element possesses the specified class"],
            ["style property", "el.style.backgroundColor = '#f8fafc';", "Applies inline CSS (uses camelCase property names)"],
          ],
        },
      },
      {
        title: "3. Creating & Appending DOM Nodes",
        description: "Constructing elements programmatically:",
        items: [
          {
            term: "document.createElement(tagName)",
            meaning: "Creates a new element in memory (not yet attached to the visible document)",
            example: "const newLi = document.createElement('li');",
          },
          {
            term: "parent.appendChild(child) / parent.append(...nodes)",
            meaning: "Mounts the constructed element into the visible DOM tree inside the parent container",
            example: "list.appendChild(newLi);",
          },
          {
            term: "node.remove()",
            meaning: "Removes an element node directly from the DOM tree",
            example: "oldCard.remove();",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Why is `textContent` preferred over `innerHTML` when displaying user-entered comments or usernames?",
        options: [
          "`textContent` is faster and prevents Cross-Site Scripting (XSS) attacks by escaping HTML tags",
          "`textContent` can display images while `innerHTML` cannot",
          "`innerHTML` is deprecated in HTML5",
          "`textContent` only works on `<input>` fields",
        ],
        answer: "`textContent` is faster and prevents Cross-Site Scripting (XSS) attacks by escaping HTML tags",
        explanation:
          "`textContent` treats input strictly as plain text, neutralising any injected HTML tags or malicious scripts.",
      },
      {
        question: "Which `classList` method adds a class if it is missing, or removes it if it is already present?",
        options: ["classList.switch()", "classList.toggle()", "classList.flip()", "classList.replace()"],
        answer: "classList.toggle()",
        explanation:
          "`classList.toggle('className')` flips the presence of a class and returns a boolean indicating whether the class is now active.",
      },
      {
        question: "How do you set an inline style for `background-color` in JavaScript?",
        options: [
          "el.style['background-color'] or el.style.backgroundColor",
          "el.css.background-color",
          "el.style(background-color)",
          "el.setAttribute('css', 'background-color')",
        ],
        answer: "el.style['background-color'] or el.style.backgroundColor",
        explanation:
          "The `style` object uses camelCase properties (`backgroundColor`) or bracket notation with kebab-case.",
      },
    ],
  },
};
