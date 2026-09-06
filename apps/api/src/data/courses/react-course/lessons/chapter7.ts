import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_7_LESSONS: Record<string, LessonContent> = {
  "react-ch7-l19": {
    overview:
      "The Context API solves the problem of 'prop drilling'—passing props through dozens of intermediate components that don't need the data themselves just to reach a deeply nested child. Drawing from Kirupa Chinnathambi's Context chapter and Fullstack React, this lesson explores `createContext`, the `<Context.Provider>` component, consuming values via the `useContext` hook, and wrapping providers in dedicated Context Provider components.",
    canDo:
      "Can initialize React contexts, wrap component subtrees in Providers, consume global values with useContext, and build custom context consumption hooks with error guards.",
    teacherNote:
      "Always write a custom hook wrapper for consuming your context (e.g. `useAuth()`)! Inside `useAuth`, check if `useContext(AuthContext)` returns undefined; if so, throw a clear error: `'useAuth must be used within an AuthProvider'`. This catches missing provider bugs instantly!",
    sections: [
      {
        title: "1. The 3 Steps of Context",
        description: "Declaring, providing, and consuming global context:",
        table: {
          headers: ["Step", "API Function", "Where Executed", "Role"],
          rows: [
            ["1. Create Context", "const ThemeContext = createContext<Theme | undefined>(undefined);", "Module scope (outside component)", "Defines context channel and default fallback."],
            ["2. Provide Value", "<ThemeContext.Provider value={{ theme, toggleTheme }}>", "Parent/Ancestor component", "Supplies dynamic live state to all descendants."],
            ["3. Consume Value", "const { theme } = useContext(ThemeContext);", "Any descendant component", "Reads live value without intermediate prop drilling."],
          ],
        },
      },
      {
        title: "2. Custom Hook Consumer Guard",
        description: "Defensive programming pattern for context consumers:",
        items: [
          {
            term: "Guarded Consumer Hook",
            meaning: "Throws a helpful developer error if a component tries to consume context outside its Provider",
            example: "export function useTheme() {\n  const context = useContext(ThemeContext);\n  if (context === undefined) {\n    throw new Error('useTheme must be used within a ThemeProvider');\n  }\n  return context;\n}",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What problem does React Context primarily solve?",
        options: [
          "It compiles JavaScript into machine code",
          "It eliminates prop drilling by allowing data to be broadcast to deeply nested components without passing it manually through every level",
          "It speeds up SQL queries",
          "It replaces all CSS files",
        ],
        answer: "It eliminates prop drilling by allowing data to be broadcast to deeply nested components without passing it manually through every level",
        explanation:
          "Context provides a way to pass data through the component tree without having to pass props down manually at every level (prop drilling).",
      },
      {
        question: "Why should you create a custom hook (like `useTheme`) rather than calling `useContext(ThemeContext)` directly across components?",
        options: [
          "React throws a compile error without it",
          "It encapsulates the context reference and throws a helpful error if consumed outside its corresponding Provider",
          "It makes the context read-only",
          "It runs on the server",
        ],
        answer: "It encapsulates the context reference and throws a helpful error if consumed outside its corresponding Provider",
        explanation:
          "Custom consumer hooks clean up component imports and guard against missing provider bugs with clear error messages.",
      },
    ],
  },

  "react-ch7-l20": {
    overview:
      "A common architectural flaw in React applications is bundling high-frequency state updates and static dispatch handlers into a single massive Context value. When ANY value inside a Context changes, EVERY component that calls `useContext` on that context MUST re-render! This lesson teaches the Split Context pattern (separating State Context from Dispatch Context) to eliminate broad, unnecessary re-render waves.",
    canDo:
      "Can diagnose context re-render cascades, implement the Split Context pattern separating state and dispatch, and preserve rendering performance in scaled apps.",
    teacherNote:
      "THE SPLIT CONTEXT PATTERN: Create two contexts: `UserStateContext` (holds the user data) and `UserDispatchContext` (holds the update callbacks/dispatch). Components that only dispatch actions (like a logout button) consume `UserDispatchContext` and NEVER re-render when user profile data updates!",
    sections: [
      {
        title: "1. The Single Context Re-render Problem vs Split Context",
        description: "Controlling subscriber re-evaluations:",
        table: {
          headers: ["Pattern", "Structure", "Consequence of State Change"],
          rows: [
            ["Single Giant Context", "<AppContext.Provider value={{ state, dispatch }}>", "EVERY component reading dispatch re-renders whenever state changes, even if it only needs dispatch."],
            ["Split Context (Recommended)", "<StateCtx.Provider value={state}><DispatchCtx.Provider value={dispatch}>", "Components reading only DispatchCtx NEVER re-render when state changes!"],
          ],
        },
      },
      {
        title: "2. Memoizing the Context Provider Value",
        description: "Preventing object recreation on parent render:",
        items: [
          {
            term: "useMemo Provider Value",
            meaning: "Always wrap provider values in useMemo to prevent re-rendering consumers when the provider's parent renders",
            example: "const value = useMemo(() => ({ theme, toggleTheme }), [theme]);\nreturn <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What happens to components that call `useContext(MyContext)` when the value provided by `<MyContext.Provider value={...}>` changes?",
        options: [
          "Only components that manually request a re-render will update",
          "Every component consuming MyContext is forced to re-render, bypassing React.memo",
          "React skips all re-renders",
          "The browser page reloads",
        ],
        answer: "Every component consuming MyContext is forced to re-render, bypassing React.memo",
        explanation:
          "When a context value changes, all components that subscribe to that context via useContext will re-render, even if wrapped in React.memo.",
      },
      {
        question: "How does the 'Split Context' pattern prevent unnecessary re-renders?",
        options: [
          "By deleting components from memory",
          "By separating state (which changes frequently) and dispatch functions (which remain stable) into two distinct contexts",
          "By using two browser windows",
          "By using Redux instead of React",
        ],
        answer: "By separating state (which changes frequently) and dispatch functions (which remain stable) into two distinct contexts",
        explanation:
          "Separating State and Dispatch contexts allows components that only need to trigger actions to subscribe solely to the dispatch context, avoiding re-renders when state data updates.",
      },
    ],
  },

  "react-ch7-l21": {
    overview:
      "For large applications with complex inter-module state, external state management libraries provide selective subscriptions and fine-grained reactivity. Drawing from 'Fullstack React' and modern frontend trends, this lesson compares the Redux Toolkit (RTK) architecture (store, slices, thunks) with modern lightweight atomic stores like Zustand, detailing selector-based subscriptions.",
    canDo:
      "Can implement global state using modern Zustand stores, contrast store selectors with full context subscriptions, and structure scalable application state.",
    teacherNote:
      "Modern stores like Zustand use fine-grained selector subscriptions (`const user = useStore(state => state.user)`). The component ONLY re-renders if the selected piece of state (`state.user`) changes by reference! If `state.cart` changes, components subscribed only to `state.user` do not render at all.",
    sections: [
      {
        title: "1. Global State Solutions Compared",
        description: "Choosing between Context, Redux Toolkit, and Zustand:",
        table: {
          headers: ["Solution", "Boilerplate", "Fine-Grained Selectors?", "Best Use Case"],
          rows: [
            ["React Context", "Minimal (built-in)", "No (all consumers re-render on change)", "Low-frequency state (Theme, Auth, Language)."],
            ["Zustand", "Very Low (simple hook-based store)", "Yes (auto-subscribes to selected slice)", "Small to large modern applications (Recommended)."],
            ["Redux Toolkit (RTK)", "Moderate (slices, dispatch, reducers)", "Yes (via useSelector)", "Large enterprise systems requiring strict state auditing and time-travel."],
          ],
        },
      },
      {
        title: "2. The Zustand Store Architecture",
        description: "Zero-boilerplate global state hook:",
        items: [
          {
            term: "Zustand Store Creation",
            meaning: "Creates a hook that acts as a global reactive store with fine-grained selectors",
            example: "import { create } from 'zustand';\n\ninterface CartState {\n  items: string[];\n  addItem: (item: string) => void;\n}\n\nexport const useCartStore = create<CartState>(set => ({\n  items: [],\n  addItem: item => set(state => ({ items: [...state.items, item] })),\n}));\n\n// In Component: only re-renders when items.length changes!\nconst itemCount = useCartStore(state => state.items.length);",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Why do store selectors (like `useStore(state => state.cartCount)`) perform better than React Context in large applications?",
        options: [
          "They convert JavaScript to WebAssembly",
          "They selectively subscribe the component to only that specific derived slice of state, skipping re-renders when unrelated store properties change",
          "They disable all CSS animations",
          "They only run on the server",
        ],
        answer: "They selectively subscribe the component to only that specific derived slice of state, skipping re-renders when unrelated store properties change",
        explanation:
          "Selectors evaluate equality on the specific slice returned; if the rest of the store changes but the selected slice remains equal, the component skips re-rendering.",
      },
      {
        question: "What is an 'Action' in Redux architecture?",
        options: [
          "A plain JavaScript object describing what happened, containing a `type` property and optional payload",
          "A function that mutates state directly in the database",
          "A user's mouse click event",
          "A CSS transition",
        ],
        answer: "A plain JavaScript object describing what happened, containing a `type` property and optional payload",
        explanation:
          "In Redux, actions are plain objects with a 'type' property that describe an intention to change state; they are passed to reducers via dispatch.",
      },
    ],
  },
};
