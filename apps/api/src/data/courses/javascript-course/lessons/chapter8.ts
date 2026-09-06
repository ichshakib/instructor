import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_8_LESSONS: Record<string, LessonContent> = {
  "js-ch8-l22": {
    overview:
      "Web applications are asynchronous and event-driven. Rather than executing sequentially from top to bottom, code responds to user interactions like clicks, keystrokes, and scrolls. In this lesson based on Chapter 11 of 'JavaScript from Beginner to Professional', you will master attaching event listeners using 'addEventListener', managing callback references, and cleanly tearing down listeners with 'removeEventListener'.",
    canDo:
      "Can attach multiple event listeners to elements using `addEventListener`, prevent memory leaks by removing listeners, and configure handler options.",
    teacherNote:
      "Never use inline HTML event attributes like `<button onclick='doSomething()'>`! Inline handlers mix structural markup with logic, expose global scope, and prevent attaching multiple handlers. Always use `element.addEventListener('click', handler)`.",
    sections: [
      {
        title: "1. The addEventListener Architecture",
        description: "Registering handlers for asynchronous user interactions:",
        table: {
          headers: ["Method Signature", "Parameter", "Description", "Best Practice"],
          rows: [
            ["target.addEventListener(type, listener, options)", "type (string)", "The name of the event (e.g., 'click', 'keydown', 'submit')", "All event names are lowercase"],
            ["target.addEventListener(type, listener, options)", "listener (function)", "Callback function executed when event triggers", "Use named functions if you plan to remove the listener later!"],
            ["target.addEventListener(type, listener, options)", "options (object/bool)", "Optional settings (e.g. `{ once: true }` or capture phase)", "Use `{ once: true }` for single-use actions like one-time submit"],
          ],
        },
      },
      {
        title: "2. Removing Event Listeners",
        description: "Preventing memory leaks and unexpected behavior:",
        items: [
          {
            term: "removeEventListener Requirement",
            meaning: "To remove an event listener, you MUST pass the exact same function reference that was added",
            example: "function handleClick() { ... }\nbtn.addEventListener('click', handleClick);\nbtn.removeEventListener('click', handleClick);",
          },
          {
            term: "Anonymous Function Trap",
            meaning: "Anonymous arrow functions `btn.addEventListener('click', () => {})` CANNOT be removed because their reference cannot be retrieved!",
            example: "// Cannot remove anonymous listener!",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Why can't you remove an event listener added like this: `btn.addEventListener('click', () => console.log('Hi'));`?",
        options: [
          "The arrow function creates a unique anonymous reference that cannot be matched by `removeEventListener`",
          "Arrow functions are permanent in browsers",
          "`removeEventListener` only works with mouse events",
          "Browsers do not support removing click listeners",
        ],
        answer: "The arrow function creates a unique anonymous reference that cannot be matched by `removeEventListener`",
        explanation:
          "`removeEventListener` requires the exact same function reference in memory. An inline anonymous function cannot be referenced again.",
      },
      {
        question: "How can you configure an event listener to trigger only once and automatically remove itself?",
        options: [
          "Pass `{ once: true }` in the options object",
          "Use `btn.addSingleListener()`",
          "Call `event.stop()` in the function",
          "Declare the callback with `const`",
        ],
        answer: "Pass `{ once: true }` in the options object",
        explanation:
          "Passing `{ once: true }` as the third parameter instructs the browser to automatically invoke `removeEventListener` immediately after the first execution.",
      },
      {
        question: "Which of the following represents the modern best practice for event handling?",
        options: [
          "`button.onclick = handleClick;`",
          "`<button onclick='handleClick()'>` in HTML",
          "`button.addEventListener('click', handleClick);`",
          "`button.trigger('click');`",
        ],
        answer: "`button.addEventListener('click', handleClick);`",
        explanation:
          "`addEventListener` maintains clean separation of concerns and allows multiple independent handlers to listen to the same event.",
      },
    ],
  },

  "js-ch8-l23": {
    overview:
      "Capturing keyboard input, managing mouse gestures, and controlling HTML form submissions form the backbone of interactive user interfaces. In this lesson based on Chapter 11 of 'JavaScript from Beginner to Professional', you will master the Event object (`e`), intercepting form submissions with `e.preventDefault()`, and distinguishing between 'input' and 'change' events.",
    canDo:
      "Can intercept form submissions without page reloads, inspect keyboard keycodes via `e.key`, and track input field updates in real-time.",
    teacherNote:
      "When a form is submitted, the browser's default behavior is to reload the page or navigate to the form's `action` URL. In modern single-page applications (SPAs), always call `e.preventDefault()` inside your `submit` handler to prevent the page reload!",
    sections: [
      {
        title: "1. Core DOM Event Categories",
        description: "The most frequent user interactions in web applications:",
        table: {
          headers: ["Category", "Event Type", "Fires When", "Key Event Properties"],
          rows: [
            ["Form", "submit", "Form submit button is clicked or Enter key is pressed", "`e.preventDefault()` prevents browser reload"],
            ["Form", "input", "Value of an `<input>`, `<textarea>`, or `<select>` changes immediately", "`e.target.value` contains the live text"],
            ["Form", "change", "Input value changes AND loses focus (blur)", "`e.target.value` contains the finalized text"],
            ["Keyboard", "keydown / keyup", "User presses or releases a physical key", "`e.key` ('Enter', 'Escape', 'a') and `e.code`"],
            ["Mouse", "click / dblclick", "Pointer button is pressed and released over an element", "`e.clientX`, `e.clientY`, `e.button`"],
          ],
        },
      },
      {
        title: "2. The Event Object & preventDefault()",
        description: "Controlling default browser behaviors:",
        items: [
          {
            term: "event.preventDefault()",
            meaning: "Cancels the browser's built-in default action (e.g. following links, reloading on form submit)",
            example: "form.addEventListener('submit', (e) => {\n  e.preventDefault();\n  // Handle submit via JavaScript fetch!\n});",
          },
          {
            term: "event.target",
            meaning: "Reference to the exact DOM element that originally dispatched the event",
            example: "console.log('Clicked element:', e.target);",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What is the primary purpose of calling `e.preventDefault()` in a form's `submit` event handler?",
        options: [
          "To stop the browser from refreshing the entire page",
          "To reset all form inputs to empty strings",
          "To validate email addresses automatically",
          "To disable the submit button",
        ],
        answer: "To stop the browser from refreshing the entire page",
        explanation:
          "HTML forms naturally reload the page on submit; `e.preventDefault()` cancels this default navigation so JavaScript can process the data.",
      },
      {
        question: "Which event property provides the human-readable character of a pressed keyboard key (e.g. 'Enter', 'ArrowUp', 'a')?",
        options: ["e.key", "e.keyCode", "e.charCode", "e.ascii"],
        answer: "e.key",
        explanation:
          "`e.key` is the modern standard property that returns the string representation of the pressed key.",
      },
      {
        question: "How does the `input` event differ from the `change` event on a text field?",
        options: [
          "`input` fires on every keystroke in real-time; `change` fires only after the input loses focus",
          "`input` only works on numbers",
          "`change` fires on every keystroke",
          "They are identical",
        ],
        answer: "`input` fires on every keystroke in real-time; `change` fires only after the input loses focus",
        explanation:
          "`input` triggers immediately upon any character change, whereas `change` waits until focus leaves the input field.",
      },
    ],
  },

  "js-ch8-l24": {
    overview:
      "When an event occurs on a deeply nested element, it does not happen in isolation—it travels through the DOM tree in phases. In this lesson based on Chapter 11 of 'JavaScript from Beginner to Professional', you will master the 3 phases of event propagation (Capturing, Target, and Bubbling), halting propagation with 'e.stopPropagation()', and implementing Event Delegation.",
    canDo:
      "Can predict event propagation paths, stop event bubbling, and implement the high-performance Event Delegation pattern on parent containers.",
    teacherNote:
      "Event Delegation is one of the most important performance patterns in frontend development: Instead of attaching 1,000 event listeners to 1,000 list items (`<li>`), attach a SINGLE event listener to their parent container (`<ul>`) and check `e.target`! This consumes minimal memory and automatically handles dynamically added child elements.",
    sections: [
      {
        title: "1. The 3 Phases of Event Propagation",
        description: "How events travel through the DOM hierarchy:",
        table: {
          headers: ["Phase", "Direction", "Description", "Standard Behavior"],
          rows: [
            ["1. Capturing Phase", "Downwards (Window -> Target)", "Event trickles down from the root window through ancestors to the target", "Skipped unless `{ capture: true }` is explicitly set"],
            ["2. Target Phase", "At the Target", "Event arrives at the exact element where the user initiated the interaction", "Fires handlers registered directly on the target"],
            ["3. Bubbling Phase", "Upwards (Target -> Window)", "Event bubbles upwards through all parent ancestors back to root", "Default phase where almost all handlers execute"],
          ],
        },
      },
      {
        title: "2. The Event Delegation Pattern",
        description: "Handling events on many children using a single parent listener:",
        items: [
          {
            term: "Event Delegation",
            meaning: "Leveraging event bubbling by listening on a common parent and using `e.target.closest()` to identify the clicked child",
            example: "list.addEventListener('click', (e) => {\n  const button = e.target.closest('.delete-btn');\n  if (button) removeItem(button.dataset.id);\n});",
          },
          {
            term: "e.stopPropagation()",
            meaning: "Prevents the event from traveling further up or down the DOM propagation chain",
            example: "modalBox.addEventListener('click', e => e.stopPropagation()); // Prevents closing backdrop",
          },
        ],
      },
    ],
    practice: [
      {
        question: "In what direction does an event travel during the default Bubbling phase?",
        options: [
          "From the target element UPWARDS through its ancestors to the window",
          "From the window DOWNWARDS to the target element",
          "Horizontally across sibling elements only",
          "It stays confined to the target element without moving",
        ],
        answer: "From the target element UPWARDS through its ancestors to the window",
        explanation:
          "During the bubbling phase, the event bubbles upward from the target element through all parent nodes to `document` and `window`.",
      },
      {
        question: "What is the primary advantage of using Event Delegation on a parent `<ul>` instead of adding listeners to each `<li>`?",
        options: [
          "Better memory performance and automatic support for dynamically added list items",
          "It makes CSS transitions faster",
          "It prevents all mouse clicks",
          "It converts list items to numbers",
        ],
        answer: "Better memory performance and automatic support for dynamically added list items",
        explanation:
          "A single event listener uses less memory and automatically catches events from child elements added to the DOM in the future.",
      },
      {
        question: "Which method stops an event from bubbling further up the DOM hierarchy?",
        options: [
          "e.stopPropagation()",
          "e.preventDefault()",
          "e.halt()",
          "e.freeze()",
        ],
        answer: "e.stopPropagation()",
        explanation:
          "`e.stopPropagation()` halts the propagation of the event through the capture and bubble phases.",
      },
    ],
  },
};
