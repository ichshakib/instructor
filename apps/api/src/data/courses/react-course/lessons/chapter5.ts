import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_5_LESSONS: Record<string, LessonContent> = {
  "react-ch5-l13": {
    overview:
      "The `useRef` hook provides a mutable container object whose `.current` property persists across render cycles without triggering a re-render when modified. Drawing from 'Learning React' and modern React docs, this lesson covers direct DOM node referencing (focusing inputs, measuring dimensions), holding mutable instance values (interval IDs, previous state snapshots), and contrasting ref mutation with state mutation.",
    canDo:
      "Can access and control real DOM nodes using refs, store mutable values across renders without re-rendering, and implement timer ID references.",
    teacherNote:
      "Remember: Mutating `ref.current = newValue` does NOT trigger a component re-render! Use state for values that affect what renders on screen; use refs for values that should persist silently in the background (like timer IDs, WebSocket connections, or previous prop values).",
    sections: [
      {
        title: "1. useState vs useRef Comparison",
        description: "When to choose state vs ref for data retention:",
        table: {
          headers: ["Attribute", "useState", "useRef"],
          rows: [
            ["Re-render on change?", "Yes (schedules a render cycle)", "No (mutates silently without re-render)"],
            ["Access Mechanism", "Read variable; mutate via setter function", "Read and mutate directly via `ref.current`"],
            ["Primary Use Case", "Data rendered visually in JSX", "DOM nodes, interval/timeout IDs, cached previous values"],
          ],
        },
      },
      {
        title: "2. DOM Node Access with useRef",
        description: "Focusing inputs and integrating imperative libraries:",
        items: [
          {
            term: "Input Focus Pattern",
            meaning: "Attaching ref to a JSX element to invoke imperative DOM methods",
            example: "const inputRef = useRef<HTMLInputElement>(null);\nfunction handleFocus() {\n  inputRef.current?.focus();\n}\nreturn <input ref={inputRef} />;",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What happens when you update a ref using `myRef.current = 42`?",
        options: [
          "React immediately re-renders the component",
          "The value updates immediately in memory, but NO re-render is triggered",
          "React throws an error because refs are read-only",
          "The entire page reloads",
        ],
        answer: "The value updates immediately in memory, but NO re-render is triggered",
        explanation:
          "useRef holds a plain JavaScript object whose .current property can be modified silently without notifying React or scheduling a re-render.",
      },
      {
        question: "What is the primary use case for attaching a ref to a JSX element (`<div ref={myRef} />`)?",
        options: [
          "To apply inline CSS styling",
          "To obtain direct access to the underlying browser DOM node for imperative operations like focus or scroll measurement",
          "To duplicate the element in memory",
          "To speed up CSS animations",
        ],
        answer: "To obtain direct access to the underlying browser DOM node for imperative operations like focus or scroll measurement",
        explanation:
          "Attaching a ref gives direct access to the real DOM element once mounted, allowing imperative operations like .focus(), .scrollIntoView(), or measuring bounding client rects.",
      },
    ],
  },

  "react-ch5-l14": {
    overview:
      "React re-renders entire child component subtrees when a parent component renders, regardless of whether child props changed. In this lesson, based on 'Fullstack React', we explore memoization tools: `React.memo` for skipping child component re-renders when props are shallowly equal, `useCallback` for preserving function reference identities, and `useMemo` for caching expensive calculations.",
    canDo:
      "Can cache expensive computations with useMemo, stabilize callback props with useCallback, and prevent unnecessary child re-renders using React.memo.",
    teacherNote:
      "DO NOT wrap everything in useMemo and useCallback blindly! Memoization has its own cost (allocating dependency arrays, checking equality). Only apply memoization when: 1. You are passing callbacks to a child wrapped in `React.memo`, 2. The computation is genuinely expensive (>1ms), or 3. The value is a dependency in another hook!",
    sections: [
      {
        title: "1. The Memoization Trifecta",
        description: "Optimizing render cycles and reference stability:",
        table: {
          headers: ["Hook / Wrapper", "What It Memoizes", "Syntax Example", "Typical Use Case"],
          rows: [
            ["React.memo(Component)", "The rendered JSX output of a component", "export const FastList = React.memo(MyList);", "Prevents re-rendering large child component if props haven't changed."],
            ["useMemo(() => fn(), deps)", "The computed return value of a function", "const total = useMemo(() => heavyMath(data), [data]);", "Caches CPU-heavy calculations, sorting, and large array filters."],
            ["useCallback(fn, deps)", "The function reference identity itself", "const onClick = useCallback(() => doWork(id), [id]);", "Passes stable function pointer to memoized child components."],
          ],
        },
      },
      {
        title: "2. The Reference Equality Problem",
        description: "Why inline functions break React.memo:",
        items: [
          {
            term: "Inline Arrow Function Trap",
            meaning: "Defining `onClick={() => doSomething()}` creates a brand new function reference on every render, invalidating React.memo's shallow prop comparison",
            example: "Wrap with useCallback: `const handleClick = useCallback(() => doSomething(), []);` to preserve the pointer.",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Why would a child component wrapped in `React.memo` still re-render when its parent re-renders?",
        options: [
          "Because React.memo is only active in production",
          "Because one of the props passed to it is a newly created object, array, or inline function with a different memory reference",
          "Because React.memo only works on class components",
          "It never re-renders under any circumstance",
        ],
        answer: "Because one of the props passed to it is a newly created object, array, or inline function with a different memory reference",
        explanation:
          "React.memo performs shallow comparison (Object.is) on props. Passing inline functions or new object literals causes shallow equality to fail, triggering a re-render.",
      },
      {
        question: "What is the difference between `useMemo` and `useCallback`?",
        options: [
          "useMemo is for strings; useCallback is for numbers",
          "useMemo caches the result of calling a function; useCallback caches the function definition itself",
          "useMemo runs before render; useCallback runs after render",
          "There is no difference",
        ],
        answer: "useMemo caches the result of calling a function; useCallback caches the function definition itself",
        explanation:
          "useMemo(() => computeValue(a, b), [a, b]) returns the cached result; useCallback(fn, deps) is equivalent to useMemo(() => fn, deps), returning the cached function reference.",
      },
    ],
  },

  "react-ch5-l15": {
    overview:
      "Rendering thousands of DOM elements degrades browser performance, inflating memory usage and causing frame drops during scrolling. In this lesson, we study using the React DevTools Profiler to identify commit flamegraphs and wasted render cycles, and implementing DOM Virtualization (Windowing) using virtual list concepts.",
    canDo:
      "Can profile component render durations with the React DevTools Profiler, spot wasted re-renders, and implement virtualized lists rendering only visible viewport items.",
    teacherNote:
      "DOM Windowing / Virtualization: If you have a list of 10,000 items, NEVER render 10,000 DOM nodes! Virtualization renders ONLY the 15-20 items currently visible in the user's viewport, swapping elements dynamically as the user scrolls. This keeps DOM node count and RAM constant!",
    sections: [
      {
        title: "1. Virtualization Mechanics (Windowing)",
        description: "Displaying massive datasets with constant performance:",
        table: {
          headers: ["Concept", "Without Virtualization", "With Virtualization (Windowing)"],
          rows: [
            ["DOM Elements", "10,000 <div> elements created", "Only ~15 <div> elements in DOM at any time"],
            ["Initial Render Time", "Heavy lag (500ms - 2s)", "Instant (5ms)"],
            ["Memory Usage", "Hundreds of megabytes", "Under 10 megabytes"],
            ["Scroll Performance", "Noticeable stutter / dropped frames", "Smooth 60/120 FPS"],
          ],
        },
      },
      {
        title: "2. React Profiler Flamegraphs",
        description: "Diagnosing render bottlenecks:",
        items: [
          {
            term: "Profiler Flamegraph",
            meaning: "Visual bar chart showing which components rendered during a commit and why ('props changed', 'parent rendered', 'hooks changed')",
            example: "Grey bars = did not render; yellow/green bars = rendered, with width indicating duration in milliseconds.",
          },
        ],
      },
    ],
    practice: [
      {
        question: "How does list virtualization (windowing) improve performance when displaying 20,000 items?",
        options: [
          "By deleting 19,900 items from the database permanently",
          "By rendering only the small subset of items currently visible inside the viewport, dynamically recycling nodes during scroll",
          "By converting images into text",
          "By running React in a separate thread",
        ],
        answer: "By rendering only the small subset of items currently visible inside the viewport, dynamically recycling nodes during scroll",
        explanation:
          "Virtualization maintains a lightweight DOM containing only visible rows plus a small buffer, eliminating DOM thrashing.",
      },
      {
        question: "What does the React DevTools Profiler reveal about a component?",
        options: [
          "Its source code licensing",
          "How long it took to render, when it rendered, and the specific reasons that triggered its render pass",
          "Its CSS file size",
          "The user's IP address",
        ],
        answer: "How long it took to render, when it rendered, and the specific reasons that triggered its render pass",
        explanation:
          "The Profiler measures exact render timings and inspects which props or hooks changed to trigger each commit.",
      },
    ],
  },
};
