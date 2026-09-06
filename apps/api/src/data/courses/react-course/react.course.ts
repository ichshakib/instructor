import { Course, Chapter } from "../../../types/course.types";
import { ALL_REACT_LESSONS_CONTENT } from "./lessons";

const REACT_RAW_CHAPTERS: Chapter[] = [
  {
    id: "react-ch1",
    title: "Chapter 1: The Modern React Paradigm",
    lessons: [
      {
        id: "react-ch1-l1",
        title: "Lesson 1: Modern React Foundations: JSX, Declarative UI & The Virtual DOM",
        description: "Declarative UI vs imperative DOM manipulation, JSX compilation to React.createElement(), and VDOM architecture.",
      },
      {
        id: "react-ch1-l2",
        title: "Lesson 2: Virtual DOM Reconciliation, Fiber Architecture & Batching",
        description: "The Render and Commit phases, heuristic O(n) diffing, Fiber time-slicing, and automatic state batching.",
      },
      {
        id: "react-ch1-l3",
        title: "Lesson 3: Functional Components, Pure Functions & StrictMode",
        description: "Purity contracts, preventing side-effects during render, and React.StrictMode development diagnostics.",
      },
    ],
  },
  {
    id: "react-ch2",
    title: "Chapter 2: Components, Props & Composition",
    lessons: [
      {
        id: "react-ch2-l4",
        title: "Lesson 4: Component Decomposition & Props Passing Patterns",
        description: "Top-down unidirectional data flow, props destructuring, callback props, and TypeScript interface contracts.",
      },
      {
        id: "react-ch2-l5",
        title: "Lesson 5: The Children Prop, Component Composition & Slots",
        description: "Composition over inheritance, arbitrary content embedding via children, and element slot patterns.",
      },
      {
        id: "react-ch2-l6",
        title: "Lesson 6: Conditional Rendering Strategies & List Keys",
        description: "Ternary operators, avoiding the numeric zero bug with logical &&, and persistent reconciliation keys.",
      },
    ],
  },
  {
    id: "react-ch3",
    title: "Chapter 3: State Architecture with useState & useReducer",
    lessons: [
      {
        id: "react-ch3-l7",
        title: "Lesson 7: The useState Hook, State Immutability & Functional Updaters",
        description: "Preserving state in Fiber cells, immutable updates with the spread operator, and functional updaters.",
      },
      {
        id: "react-ch3-l8",
        title: "Lesson 8: Complex State with useReducer: Actions, Dispatch & Reducers",
        description: "Pure reducer functions, action dispatching, complex state transitions, and isolated business logic testing.",
      },
      {
        id: "react-ch3-l9",
        title: "Lesson 9: Lifting State Up vs Component Colocation",
        description: "Strategic state placement, avoiding unnecessary root re-renders, and pushing state down for performance.",
      },
    ],
  },
  {
    id: "react-ch4",
    title: "Chapter 4: Side Effects & Component Lifecycle with useEffect",
    lessons: [
      {
        id: "react-ch4-l10",
        title: "Lesson 10: The useEffect Hook, Dependency Arrays & Execution Timing",
        description: "External system synchronization, dependency array configurations, and post-paint asynchronous execution.",
      },
      {
        id: "react-ch4-l11",
        title: "Lesson 11: Effect Cleanup Functions & Aborting Network Requests",
        description: "Dismantling subscriptions, preventing memory leaks, and cancelling HTTP requests with AbortController.",
      },
      {
        id: "react-ch4-l12",
        title: "Lesson 12: Avoiding Common useEffect Antipatterns & Infinite Loops",
        description: "Eliminating object dependency loops, derived state without effects, and handling actions in event handlers.",
      },
    ],
  },
  {
    id: "react-ch5",
    title: "Chapter 5: Performance Optimization & Escape Hatches",
    lessons: [
      {
        id: "react-ch5-l13",
        title: "Lesson 13: The useRef Hook: Accessing DOM Nodes & Mutable Values",
        description: "Imperative DOM manipulation, focusing inputs, and persisting mutable instance state without re-renders.",
      },
      {
        id: "react-ch5-l14",
        title: "Lesson 14: Memoization: useMemo, useCallback & React.memo",
        description: "Skipping unnecessary child re-renders, stabilizing function references, and caching heavy computations.",
      },
      {
        id: "react-ch5-l15",
        title: "Lesson 15: Profiling Render Cycles & Virtualized Long Lists",
        description: "Inspecting commit flamegraphs with React Profiler, and virtualizing 10,000+ item lists with windowing.",
      },
    ],
  },
  {
    id: "react-ch6",
    title: "Chapter 6: Custom Hooks & Reusable Headless Logic",
    lessons: [
      {
        id: "react-ch6-l16",
        title: "Lesson 16: Extracting Custom Hooks & The Rules of Hooks",
        description: "Decoupling business logic from UI, hook call order invariants, and the two Rules of Hooks.",
      },
      {
        id: "react-ch6-l17",
        title: "Lesson 17: Building useFetch, useDebounce & useLocalStorage",
        description: "Hands-on implementation of production utility hooks with cleanup timers and storage synchronization.",
      },
      {
        id: "react-ch6-l18",
        title: "Lesson 18: Composing Multiple Hooks for Complex Workflows",
        description: "Assembling modular headless features and testing custom hooks in isolation.",
      },
    ],
  },
  {
    id: "react-ch7",
    title: "Chapter 7: Global State & Context Architecture",
    lessons: [
      {
        id: "react-ch7-l19",
        title: "Lesson 19: The Context API: createContext, Provider & useContext",
        description: "Eliminating prop drilling, wrapping subtrees in Providers, and writing guarded custom consumer hooks.",
      },
      {
        id: "react-ch7-l20",
        title: "Lesson 20: Preventing Unnecessary Context Re-renders with Split Contexts",
        description: "Diagnosing subscriber cascades and isolating state from dispatch via the Split Context pattern.",
      },
      {
        id: "react-ch7-l21",
        title: "Lesson 21: Global State Stores: Integrating Zustand / Redux Toolkit",
        description: "Atomic global state stores, fine-grained selector subscriptions, and Redux Toolkit vs Zustand trade-offs.",
      },
    ],
  },
  {
    id: "react-ch8",
    title: "Chapter 8: Routing, Forms & Production Architecture",
    lessons: [
      {
        id: "react-ch8-l22",
        title: "Lesson 22: Client-Side Routing: React Router & Navigation Hooks",
        description: "SPA navigation without page reloads, nested layouts with <Outlet />, and dynamic URL parameters with useParams.",
      },
      {
        id: "react-ch8-l23",
        title: "Lesson 23: Controlled vs Uncontrolled Forms & Validation",
        description: "Single source of truth forms, computed property names, synchronous validation, and submission states.",
      },
      {
        id: "react-ch8-l24",
        title: "Lesson 24: Error Boundaries, Suspense & Production Bundling",
        description: "Graceful error recovery with Error Boundaries, on-demand code-splitting with React.lazy, and Suspense fallbacks.",
      },
    ],
  },
];

const REACT_CHAPTERS: Chapter[] = REACT_RAW_CHAPTERS.map((chapter) => ({
  ...chapter,
  lessons: chapter.lessons.map((lesson) => ({
    ...lesson,
    content: ALL_REACT_LESSONS_CONTENT[lesson.id],
  })),
}));

export const reactCourse: Course = {
  id: "react-complete-course",
  title: "React & Modern Frontend Architecture: The Complete Guide",
  category: "Development",
  type: "Full Course",
  typeIcon: "path",
  structureType: "chapters-and-lessons",
  tag1: "React 19 / Hooks",
  tag2: "Beginner to Advanced",
  badgeCount: "",
  coverVariant: "code-architecture",
  imageUrl: "/course-images/react-course.jpg",
  buttonLabel: "Start",
  description:
    "Master modern React frontend engineering from core JSX and Virtual DOM reconciliation to advanced custom hooks, Context architecture, performance memoization, client-side routing, and error boundaries, based on 'Fullstack React' and Kirupa Chinnathambi's 'Learning React'.",
  featured: true,
  totalChapters: REACT_CHAPTERS.length,
  totalLessons: REACT_CHAPTERS.reduce((acc, ch) => acc + ch.lessons.length, 0),
  progressStatus: {
    type: "status",
    statusText: "New",
  },
  chapters: REACT_CHAPTERS,
};
