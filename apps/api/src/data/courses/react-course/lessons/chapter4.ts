import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_4_LESSONS: Record<string, LessonContent> = {
  "react-ch4-l10": {
    overview:
      "The `useEffect` hook synchronizes React components with external systems (APIs, timers, subscriptions, manual DOM manipulation). In this lesson, based on 'Fullstack React' and modern React docs, we explore the effect lifecycle, the dependency array (`deps`), execution timing after screen paint, and ensuring dependencies match reactive values.",
    canDo:
      "Can synchronize components with external systems using useEffect, configure dependency arrays accurately, and explain why effects run after screen paint.",
    teacherNote:
      "Always include every reactive value (props, state, or functions declared in the component body) that the effect reads inside the dependency array! Omitting a dependency causes stale closure bugs where the effect reads outdated data.",
    sections: [
      {
        title: "1. The 3 Dependency Array Configurations",
        description: "Controlling when effects trigger:",
        table: {
          headers: ["Dependency Configuration", "Code Syntax", "When It Executes"],
          rows: [
            ["No Dependency Array", "useEffect(() => { ... });", "Runs after EVERY single render pass of the component."],
            ["Empty Array []", "useEffect(() => { ... }, []);", "Runs ONCE after initial mount (equivalent to componentDidMount)."],
            ["With Dependencies [prop, state]", "useEffect(() => { ... }, [userId, filter]);", "Runs on mount AND whenever any dependency value changes by Object.is()."],
          ],
        },
      },
      {
        title: "2. Execution Timing (Asynchronous Paint)",
        description: "Why useEffect does not block browser rendering:",
        items: [
          {
            term: "Deferred Execution",
            meaning: "React schedules useEffect to run asynchronously AFTER the browser has painted the screen, keeping UI responsive",
            example: "For synchronous measurements before paint, use useLayoutEffect instead.",
          },
        ],
      },
    ],
    practice: [
      {
        question: "When does an effect declared with `useEffect(() => { ... }, [])` execute?",
        options: [
          "On every state update",
          "Only once, after the initial component mount and paint",
          "Before the component renders",
          "Only when the component unmounts",
        ],
        answer: "Only once, after the initial component mount and paint",
        explanation:
          "An empty dependency array [] indicates that the effect has no dependencies on component state or props, so it only executes once after the component mounts.",
      },
      {
        question: "What happens if a variable from component scope is used inside `useEffect` but omitted from the dependency array?",
        options: [
          "The component throws a fatal SyntaxError",
          "The effect may capture a stale closure, reading outdated values from earlier renders",
          "React deletes the variable",
          "The effect runs 10x faster",
        ],
        answer: "The effect may capture a stale closure, reading outdated values from earlier renders",
        explanation:
          "Omitting dependencies traps old variable snapshots inside the closure, causing the effect to operate on stale data when the component updates.",
      },
    ],
  },

  "react-ch4-l11": {
    overview:
      "Side-effects that establish listeners, timers, or network requests must be cleanly dismantled to prevent memory leaks and race conditions. This lesson covers returning cleanup functions from `useEffect`, cleaning up previous effect runs before re-execution, cancelling network requests via `AbortController`, and clearing timeouts.",
    canDo:
      "Can return cleanup functions from useEffect, cancel pending network requests with AbortController, and dismantle window event listeners.",
    teacherNote:
      "The cleanup function runs NOT ONLY when the component unmounts, but ALSO before every subsequent re-execution of the effect! This ensures previous subscriptions are dismantled before new ones are established.",
    sections: [
      {
        title: "1. The Effect Cleanup Lifecycle",
        description: "How React tears down side-effects:",
        table: {
          headers: ["Trigger", "What Runs First?", "What Runs Second?"],
          rows: [
            ["Component Mount", "N/A", "Effect body runs."],
            ["Prop/State Dependency Change", "Previous effect's cleanup function runs.", "New effect body runs."],
            ["Component Unmount", "Current effect's cleanup function runs.", "Component removed from DOM."],
          ],
        },
      },
      {
        title: "2. Cancelling Fetch Requests with AbortController",
        description: "Preventing race condition state updates:",
        items: [
          {
            term: "AbortController Pattern",
            meaning: "Aborts inflight HTTP requests if component unmounts or ID changes before response arrives",
            example: "useEffect(() => {\n  const controller = new AbortController();\n  fetch(`/api/user/${id}`, { signal: controller.signal })\n    .then(res => res.json())\n    .then(data => setUser(data))\n    .catch(err => {\n      if (err.name !== 'AbortError') setError(err);\n    });\n  return () => controller.abort(); // Cleanup!\n}, [id]);",
          },
        ],
      },
    ],
    practice: [
      {
        question: "When does the cleanup function returned by `useEffect` execute?",
        options: [
          "Only when the entire browser tab closes",
          "Before the effect re-runs on a dependency change, and when the component unmounts",
          "Immediately before the render phase begins",
          "Only if an error occurs in the fetch call",
        ],
        answer: "Before the effect re-runs on a dependency change, and when the component unmounts",
        explanation:
          "React executes the previous effect's cleanup function before running the effect again with new dependencies, as well as upon unmounting.",
      },
      {
        question: "Why should you use `AbortController` when fetching data inside `useEffect`?",
        options: [
          "To speed up the internet connection",
          "To cancel pending requests if the user navigates away or changes parameters before the response arrives, preventing race conditions",
          "Because fetch() throws an error without it",
          "To compress JSON payloads",
        ],
        answer: "To cancel pending requests if the user navigates away or changes parameters before the response arrives, preventing race conditions",
        explanation:
          "Aborting in-flight requests prevents stale responses from resolving after the user has navigated away or requested different data, eliminating race conditions.",
      },
    ],
  },

  "react-ch4-l12": {
    overview:
      "Improper `useEffect` usage is a leading cause of bugs and sluggish performance. In this lesson, based on modern React guidelines ('You Might Not Need an Effect'), we explore avoiding infinite loops caused by object/array dependencies, calculating derived state during render rather than in effects, and handling user events in event handlers instead of reactive effects.",
    canDo:
      "Can identify and eliminate infinite render loops, replace unnecessary effects with derived state, and distinguish between event actions and reactive synchronization.",
    teacherNote:
      "YOU MIGHT NOT NEED AN EFFECT: If you can calculate something directly from existing props or state, DO NOT put it in an effect with a new state variable! Compute it synchronously during render: `const fullName = firstName + ' ' + lastName;`. This eliminates an extra render pass and prevents desynchronization.",
    sections: [
      {
        title: "1. The Infinite Loop Trap",
        description: "How object reference creation triggers continuous re-renders:",
        table: {
          headers: ["Antipattern (Infinite Loop)", "Why It Loops", "Fix"],
          rows: [
            [
              "useEffect(() => {\n  setCount(c => c + 1);\n});",
              "No dependency array means effect runs after render; calling setCount triggers render; triggers effect again infinitely.",
              "Add proper dependency array or move logic to event handler.",
            ],
            [
              "const options = { id: 1 };\nuseEffect(() => { ... }, [options]);",
              "options is recreated as a new object reference on EVERY render; Object.is detects change; runs effect infinitely.",
              "Move options inside effect or memoize with useMemo.",
            ],
          ],
        },
      },
      {
        title: "2. Derived State vs Effects",
        description: "Calculating data synchronously during render:",
        items: [
          {
            term: "Synchronous Derived State",
            meaning: "Calculate directly during render without extra state and without useEffect",
            example: "// Bad: storing filtered items in separate state updated via useEffect\n// Good:\nconst filteredItems = items.filter(item => item.category === selectedCategory);",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Why does passing an un-memoized object literal `[ { theme: 'dark' } ]` into a useEffect dependency array cause an infinite re-render loop?",
        options: [
          "Objects cannot be in dependency arrays",
          "A new object reference with a new memory address is instantiated on every render, causing Object.is() to always evaluate to false",
          "It causes a stack overflow in Babel",
          "Because React only accepts strings in dependencies",
        ],
        answer: "A new object reference with a new memory address is instantiated on every render, causing Object.is() to always evaluate to false",
        explanation:
          "In JavaScript, {} !== {}. Because the object has a new reference identity on each render pass, React concludes the dependency changed and triggers the effect again.",
      },
      {
        question: "If `fullName` is simply `firstName + ' ' + lastName`, where should it be computed?",
        options: [
          "Inside a useEffect that calls setFullName()",
          "Synchronously in the component render body: `const fullName = `${firstName} ${lastName}`;`",
          "In a global database",
          "In an external web worker",
        ],
        answer: "Synchronously in the component render body: `const fullName = `${firstName} ${lastName}`;`",
        explanation:
          "Derived state should be calculated inline during render. Using an effect triggers an unnecessary secondary render and introduces state desynchronization bugs.",
      },
    ],
  },
};
