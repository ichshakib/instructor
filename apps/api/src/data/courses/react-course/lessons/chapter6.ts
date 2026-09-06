import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_6_LESSONS: Record<string, LessonContent> = {
  "react-ch6-l16": {
    overview:
      "Custom hooks are JavaScript functions whose names begin with `use` and that can call other React hooks. Drawing from modern React architectural patterns, this lesson teaches extracting headless, reusable stateful logic into custom hooks, cleanly decoupling business logic from UI presentation, and strictly following the two Rules of Hooks.",
    canDo:
      "Can design and extract custom hooks, adhere to the Rules of Hooks, and share complex stateful behavior between unrelated components without duplicating code.",
    teacherNote:
      "THE TWO RULES OF HOOKS: 1. Only call Hooks at the top level (never inside loops, conditions, or nested functions). 2. Only call Hooks from React function components or custom Hooks. This ensures that React can preserve the exact same sequence of hook states across every render!",
    sections: [
      {
        title: "1. The Rules of Hooks & The Internal State Linked List",
        description: "Why call order must remain invariant across renders:",
        table: {
          headers: ["Rule", "Reason", "What Happens if Violated"],
          rows: [
            ["Call only at top level", "React tracks hook state internally using a sequential linked list on the Fiber node.", "Hooks shift index order; component reads wrong state or crashes with error."],
            ["Call only from React functions", "Hooks require a valid React Fiber context during execution.", "Throws: Invalid hook call. Hooks can only be called inside the body of a function component."],
          ],
        },
      },
      {
        title: "2. Anatomy of a Custom Hook",
        description: "Standard conventions for custom hook design:",
        items: [
          {
            term: "Naming Convention: use...",
            meaning: "Must start with lowercase 'use' to allow ESLint (eslint-plugin-react-hooks) to enforce hook rules",
            example: "function useOnlineStatus() {\n  const [isOnline, setIsOnline] = useState(navigator.onLine);\n  useEffect(() => {\n    const handleOnline = () => setIsOnline(true);\n    const handleOffline = () => setIsOnline(false);\n    window.addEventListener('online', handleOnline);\n    window.addEventListener('offline', handleOffline);\n    return () => {\n      window.removeEventListener('online', handleOnline);\n      window.removeEventListener('offline', handleOffline);\n    };\n  }, []);\n  return isOnline;\n}",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Why must React hooks NEVER be called inside an `if` statement or `for` loop?",
        options: [
          "Because JavaScript doesn't support functions inside loops",
          "Because React relies on the exact same order of hook calls on every render to correctly map state to each hook cell",
          "To reduce CPU clock cycles",
          "Because ESLint forbids all loops in JavaScript",
        ],
        answer: "Because React relies on the exact same order of hook calls on every render to correctly map state to each hook cell",
        explanation:
          "React stores hooks as an ordered linked list on the component's Fiber. Conditional hook calls throw off the index alignment, mismatching states between renders.",
      },
      {
        question: "Do two components that call the same custom hook share the exact same state values?",
        options: [
          "Yes, custom hooks create a global singleton state",
          "No, custom hooks share stateful logic, but each component call gets its own completely independent state instances",
          "Only if the hook is exported as default",
          "Only in Next.js",
        ],
        answer: "No, custom hooks share stateful logic, but each component call gets its own completely independent state instances",
        explanation:
          "Custom hooks reuse stateful behavior and algorithms, not state itself. Each component invocation instantiates its own isolated hook state cells.",
      },
    ],
  },

  "react-ch6-l17": {
    overview:
      "Mastering custom hooks requires implementing industry-standard utility hooks. In this lesson, we build three essential production hooks: `useFetch` (handling loading, data, and errors with caching), `useDebounce` (delaying rapid input updates to optimize search APIs), and `useLocalStorage` (persisting state to browser storage seamlessly).",
    canDo:
      "Can build useFetch with abort signals, implement useDebounce to throttle search queries, and create useLocalStorage with synchronization across tabs.",
    teacherNote:
      "In `useDebounce`, you delay updating the returned value using a `setTimeout` inside `useEffect`, returning `clearTimeout` in the cleanup function. Every keystroke resets the timer, so the debounced value only updates after the user pauses typing!",
    sections: [
      {
        title: "1. The 3 Essential Utility Hooks",
        description: "Core headless logic abstractions for web apps:",
        table: {
          headers: ["Hook", "Parameters", "Returns", "Primary Purpose"],
          rows: [
            ["useFetch<T>(url)", "url: string", "{ data, loading, error, refetch }", "Automates HTTP data retrieval lifecycle and error handling."],
            ["useDebounce<T>(val, delay)", "value: T, delay: number", "debouncedValue: T", "Throttles expensive API calls during rapid typing."],
            ["useLocalStorage<T>(key, init)", "key: string, initialValue: T", "[value, setValue]", "Synchronizes React state with browser localStorage."],
          ],
        },
      },
      {
        title: "2. The useDebounce Implementation",
        description: "Debouncing user keystrokes:",
        items: [
          {
            term: "useDebounce Implementation Pattern",
            meaning: "Timer reset on dependency change",
            example: "export function useDebounce<T>(value: T, delay: number): T {\n  const [debouncedValue, setDebouncedValue] = useState<T>(value);\n  useEffect(() => {\n    const timer = setTimeout(() => setDebouncedValue(value), delay);\n    return () => clearTimeout(timer); // Resets timer on every keystroke!\n  }, [value, delay]);\n  return debouncedValue;\n}",
          },
        ],
      },
    ],
    practice: [
      {
        question: "How does `useDebounce` prevent making 20 API calls when a user types a 20-letter search query quickly?",
        options: [
          "By disabling the keyboard",
          "By resetting a timeout on every keystroke in the effect cleanup, firing the update only after the user stops typing for the specified delay",
          "By caching all words in dictionary memory",
          "By using WebSockets instead of HTTP",
        ],
        answer: "By resetting a timeout on every keystroke in the effect cleanup, firing the update only after the user stops typing for the specified delay",
        explanation:
          "Each keystroke re-runs the effect, triggering the cleanup function to clear the previous timer. Only when the delay passes without a new keystroke does the timer fire.",
      },
      {
        question: "What should `useLocalStorage` do when reading a value that does not yet exist in localStorage?",
        options: [
          "Throw a fatal exception",
          "Fall back to the provided initial default value",
          "Delete the browser cache",
          "Return undefined and close the window",
        ],
        answer: "Fall back to the provided initial default value",
        explanation:
          "If localStorage returns null for the specified key, the hook should initialize with the fallback default value provided by the caller.",
      },
    ],
  },

  "react-ch6-l18": {
    overview:
      "Enterprise applications assemble multiple custom hooks to orchestrate complex user flows. In this lesson, we cover composing custom hooks together (e.g. combining useDebounce + useFetch + useLocalStorage), structuring headless UI architectures, and separating data fetching from UI design.",
    canDo:
      "Can compose multiple custom hooks into cohesive headless features, isolate data orchestration from presentation, and unit test custom hooks with @testing-library/react-hooks.",
    teacherNote:
      "Think of custom hooks as 'Lego blocks for logic'. You can create a specialized `useProductSearch` hook that internally uses `useDebounce` for the query string, `useFetch` to hit the search endpoint, and `useLocalStorage` to record recent search history!",
    sections: [
      {
        title: "1. Composing Hooks Together",
        description: "Building feature hooks out of primitive hooks:",
        items: [
          {
            term: "Composed Feature Hook Example",
            meaning: "useProductSearch coordinating multiple utility hooks",
            example: "function useProductSearch(initialQuery = '') {\n  const [query, setQuery] = useState(initialQuery);\n  const debouncedQuery = useDebounce(query, 300);\n  const { data, loading, error } = useFetch(`/api/search?q=${debouncedQuery}`);\n  const [history, setHistory] = useLocalStorage<string[]>('search_history', []);\n\n  const handleSearch = (term: string) => {\n    setQuery(term);\n    if (term && !history.includes(term)) setHistory([term, ...history.slice(0, 4)]);\n  };\n\n  return { query, setQuery: handleSearch, results: data, loading, error, history };\n}",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What is the primary architectural advantage of composing custom hooks?",
        options: [
          "It eliminates the need for CSS",
          "It allows clean separation of complex multi-step business logic from presentation components, making components lean and logic testable",
          "It makes the app run entirely on the server",
          "It prevents any re-rendering",
        ],
        answer: "It allows clean separation of complex multi-step business logic from presentation components, making components lean and logic testable",
        explanation:
          "Composing hooks decouples business logic, API requests, and storage from JSX rendering, resulting in clean, declarative presentational components.",
      },
      {
        question: "Can a custom hook invoke other custom hooks inside its body?",
        options: [
          "No, custom hooks can only call primitive React hooks",
          "Yes, custom hooks can freely compose any number of other custom and primitive hooks",
          "Only if both hooks are exported from the same file",
          "Only in development mode",
        ],
        answer: "Yes, custom hooks can freely compose any number of other custom and primitive hooks",
        explanation:
          "Custom hooks are standard JavaScript functions that can compose any combination of primitive (useState, useEffect) and other custom hooks.",
      },
    ],
  },
};
