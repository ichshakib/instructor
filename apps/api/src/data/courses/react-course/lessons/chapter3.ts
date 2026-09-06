import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_3_LESSONS: Record<string, LessonContent> = {
  "react-ch3-l7": {
    overview:
      "State represents data that changes over time and drives user interface re-renders. Drawing from Fullstack React and Kirupa Chinnathambi's state chapters, this lesson explores the `useState` hook, preserving state across render passes via Fiber memoizedState cells, why state mutations must be immutable, and applying functional updater functions `setCount(prev => prev + 1)` to prevent race conditions during batched updates.",
    canDo:
      "Can declare local state with useState, apply functional updaters to prevent stale closures, and update complex nested objects/arrays immutably using the spread operator.",
    teacherNote:
      "NEVER mutate state in-place like `user.name = 'Bob'; setUser(user)`. React compares state references using `Object.is()`. If the memory reference hasn't changed, React skips re-rendering! Always create a fresh clone: `setUser({ ...user, name: 'Bob' })`.",
    sections: [
      {
        title: "1. State Immutability & The Spread Operator",
        description: "Cloning objects and arrays during updates:",
        table: {
          headers: ["Data Structure", "Dangerous Mutation (Broken)", "Immutable Pattern (Correct)"],
          rows: [
            ["Object State", "user.age = 31;\nsetUser(user);", "setUser(prev => ({ ...prev, age: 31 }));"],
            ["Array Append", "items.push(newItem);\nsetItems(items);", "setItems(prev => [...prev, newItem]);"],
            ["Array Filter", "items.splice(index, 1);\nsetItems(items);", "setItems(prev => prev.filter(i => i.id !== targetId));"],
          ],
        },
      },
      {
        title: "2. Functional Updaters vs Direct Values",
        description: "Solving stale closures in asynchronous handlers:",
        items: [
          {
            term: "Functional Updater: setVal(prev => prev + 1)",
            meaning: "Passes a callback that receives the guaranteed latest pending state from the queue",
            example: "// If clicked rapidly 3 times:\nsetCount(c => c + 1);\nsetCount(c => c + 1);\nsetCount(c => c + 1);\n// Correctly increments by 3!",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Why does `user.name = 'Alice'; setUser(user);` fail to trigger a re-render in React?",
        options: [
          "Because 'user' is a reserved keyword",
          "Because React uses Object.is() shallow comparison; the object reference is identical, so React assumes state did not change",
          "Because setUser must be called inside setTimeout",
          "It works fine; there is no issue",
        ],
        answer: "Because React uses Object.is() shallow comparison; the object reference is identical, so React assumes state did not change",
        explanation:
          "React compares previous and next state references. Since mutating the object in-place leaves the reference pointer unchanged, React bails out of re-rendering.",
      },
      {
        question: "When should you use the functional updater form `setCount(prev => prev + 1)` instead of `setCount(count + 1)`?",
        options: [
          "Only when using TypeScript",
          "Whenever the new state depends directly on the previous state, preventing stale closure values during batched or async updates",
          "Only in production builds",
          "Never, they are identical in all circumstances",
        ],
        answer: "Whenever the new state depends directly on the previous state, preventing stale closure values during batched or async updates",
        explanation:
          "Functional updaters access the latest state in the update queue, ensuring sequential calculations don't overwrite each other.",
      },
    ],
  },

  "react-ch3-l8": {
    overview:
      "When state transitions involve multiple sub-values or complex business rules, `useReducer` offers a more predictable, scalable alternative to multiple `useState` calls. In this lesson, based on Redux and Fullstack React patterns, we explore pure reducer functions `(state, action) => newState`, action objects with types and payloads, dispatching actions, and lazy initialization.",
    canDo:
      "Can structure complex multi-field state using useReducer, author pure reducer functions with switch statements, and dispatch typed actions.",
    teacherNote:
      "A reducer must be a strictly PURE function: no side-effects, no API calls, no mutating arguments. Given `(state, action)`, it must calculate and return the next state immutably.",
    sections: [
      {
        title: "1. useState vs useReducer Decision Matrix",
        description: "When to graduate from useState to useReducer:",
        table: {
          headers: ["Criterion", "useState", "useReducer"],
          rows: [
            ["State Complexity", "Primitives (strings, booleans, simple numbers)", "Complex nested objects, arrays, interrelated fields"],
            ["State Transitions", "1 or 2 simple update triggers", "Multiple distinct event types modifying same data"],
            ["Testing", "Tested via component mounting", "Reducer is pure JS function testable in isolation without DOM!"],
          ],
        },
      },
      {
        title: "2. The useReducer Pattern",
        description: "Action dispatching and reducer execution:",
        items: [
          {
            term: "Reducer & Action Dispatch",
            meaning: "Centralizing state mutations in a single pure function",
            example: "type Action = { type: 'INCREMENT' } | { type: 'SET_STEP'; payload: number };\n\nfunction reducer(state: State, action: Action): State {\n  switch (action.type) {\n    case 'INCREMENT': return { ...state, count: state.count + state.step };\n    case 'SET_STEP': return { ...state, step: action.payload };\n    default: return state;\n  }\n}",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What must be true about the reducer function passed to `useReducer`?",
        options: [
          "It must make fetch() calls inside case statements",
          "It must be a pure function that calculates and returns the next state without mutating its arguments or triggering side effects",
          "It must be asynchronous",
          "It must be defined inside the component body",
        ],
        answer: "It must be a pure function that calculates and returns the next state without mutating its arguments or triggering side effects",
        explanation:
          "Reducers must be pure functions. They take (state, action) and return a new state object immutably without side-effects.",
      },
      {
        question: "What does the `dispatch` function returned by `useReducer` do?",
        options: [
          "It sends an action object to the reducer to calculate the next state and schedule a re-render",
          "It renders the component directly to the DOM",
          "It resets all state to null",
          "It deletes the component",
        ],
        answer: "It sends an action object to the reducer to calculate the next state and schedule a re-render",
        explanation:
          "Calling dispatch(action) passes the action to the reducer, which computes the new state and informs React to trigger a re-render.",
      },
    ],
  },

  "react-ch3-l9": {
    overview:
      "State architecture determines component maintainability and re-render performance. In this lesson, we cover 'Lifting State Up' to the closest common ancestor when sibling components need to synchronize, versus 'State Colocation' (keeping state as close as possible to where it is used to prevent unnecessary top-level re-renders).",
    canDo:
      "Can determine optimal state placement, lift state up to common ancestors, and colocate state to isolate component re-render boundaries.",
    teacherNote:
      "Avoid lifting state too high! Storing transient UI state (like an open modal or input text) in root components causes the ENTIRE application tree to re-render on every keystroke. Keep state as local as possible (State Colocation).",
    sections: [
      {
        title: "1. Lifting State Up vs Colocation",
        description: "Strategic placement of component state:",
        table: {
          headers: ["Strategy", "When to Apply", "Primary Benefit", "Risk"],
          rows: [
            ["Lifting State Up", "Two or more sibling components need access to the same live data", "Single source of truth across siblings", "Prop drilling; can trigger broad re-render trees."],
            ["State Colocation", "State is only consumed by a single component or its immediate sub-tree", "Maximum performance; re-renders are isolated", "Sibling components cannot read this state directly."],
          ],
        },
      },
      {
        title: "2. Pushing State Down (Refactoring)",
        description: "Isolating high-frequency state updates:",
        items: [
          {
            term: "Component Extraction for Performance",
            meaning: "Extracting rapidly changing inputs into their own sub-component so the parent doesn't re-render",
            example: "// Extract <SearchInput /> into its own component so typing doesn't re-render the heavy <SlowDashboardGrid />",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What does 'Lifting State Up' mean in React?",
        options: [
          "Uploading state to a cloud database",
          "Moving shared state to the closest common parent component of the children that need it",
          "Converting a functional component into a class component",
          "Using Redux for all variables",
        ],
        answer: "Moving shared state to the closest common parent component of the children that need it",
        explanation:
          "Lifting state up places the state in the nearest common ancestor so that it can be passed down as props to all siblings that depend on it.",
      },
      {
        question: "What is the primary performance benefit of 'State Colocation'?",
        options: [
          "It eliminates all CSS files",
          "It keeps state local to the component that uses it, preventing unnecessary re-renders across unaffected parts of the component tree",
          "It runs components in separate CPU threads",
          "It makes bundle sizes smaller",
        ],
        answer: "It keeps state local to the component that uses it, preventing unnecessary re-renders across unaffected parts of the component tree",
        explanation:
          "Colocation ensures that when state changes, only the small local sub-tree re-renders, rather than re-evaluating ancestor components.",
      },
    ],
  },
};
