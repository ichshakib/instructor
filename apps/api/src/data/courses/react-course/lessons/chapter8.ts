import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_8_LESSONS: Record<string, LessonContent> = {
  "react-ch8-l22": {
    overview:
      "Client-side routing allows single-page applications (SPAs) to update the URL and render different views without full page reloads from a web server. Based on 'Fullstack React' and modern React Router patterns, this lesson explores declarative routing (`createBrowserRouter`, `<RouterProvider>`, `<Routes>`, `<Route>`), nested layout routes with `<Outlet />`, dynamic URL params via `useParams`, and programmatic navigation with `useNavigate`.",
    canDo:
      "Can configure client-side routing, build nested layout hierarchies using `<Outlet />`, extract URL parameters with useParams(), and navigate programmatically with useNavigate().",
    teacherNote:
      "In modern React Router (v6+), use `<Outlet />` inside layout components to render child routes dynamically! This preserves shared headers, sidebars, and navigation state without unmounting and remounting wrapper layouts during route transitions.",
    sections: [
      {
        title: "1. Core React Router Architecture",
        description: "Components and hooks powering SPA navigation:",
        table: {
          headers: ["Construct", "Category", "Role", "Example Usage"],
          rows: [
            ["<Outlet />", "Component", "Renders matched child route elements inside a parent layout", "<nav /> <Outlet /> <footer />"],
            ["useParams()", "Hook", "Extracts dynamic route parameters from URL (e.g. /users/:id)", "const { id } = useParams();"],
            ["useNavigate()", "Hook", "Triggers programmatic navigation after async actions", "navigate('/dashboard', { replace: true });"],
            ["<NavLink />", "Component", "Link with automatic active styling class/function", "<NavLink className={({ isActive }) => isActive ? 'active' : ''}>"],
          ],
        },
      },
      {
        title: "2. Nested Route Layout Example",
        description: "Building responsive multi-tier dashboards:",
        items: [
          {
            term: "Nested Routes Pattern",
            meaning: "Sharing parent layouts while swapping inner page content",
            example: "const router = createBrowserRouter([\n  {\n    path: '/',\n    element: <RootLayout />,\n    children: [\n      { path: 'dashboard', element: <DashboardPage /> },\n      { path: 'settings', element: <SettingsPage /> },\n    ],\n  },\n]);",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What is the purpose of the `<Outlet />` component in React Router?",
        options: [
          "To render external websites inside an iframe",
          "To act as a placeholder within a parent layout component where matching child route components are rendered",
          "To handle 404 not found errors",
          "To submit forms to a backend server",
        ],
        answer: "To act as a placeholder within a parent layout component where matching child route components are rendered",
        explanation:
          "An <Outlet /> should be used in parent route elements to render their child route elements, enabling nested layouts with persistent navigation frames.",
      },
      {
        question: "Which hook is used to access dynamic URL segments like the `:id` in `/products/:id`?",
        options: ["useRoute()", "useParams()", "useLocation()", "useQuery()"],
        answer: "useParams()",
        explanation:
          "useParams() returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>.",
      },
    ],
  },

  "react-ch8-l23": {
    overview:
      "Form handling in React bridges user input with application state. In this lesson, we study Controlled Components (where React state acts as the single source of truth driving input values) versus Uncontrolled Components (where the DOM manages field values via refs), form validation strategies, handling multiple input fields with a single handler, and React 19 / form submission actions.",
    canDo:
      "Can build robust controlled forms, handle complex multi-field inputs cleanly, implement synchronous and asynchronous form validation, and manage submission states.",
    teacherNote:
      "Controlled inputs require BOTH `value={state}` AND `onChange={e => setState(e.target.value)}`. If you provide `value` without `onChange`, the input becomes read-only and users cannot type into it!",
    sections: [
      {
        title: "1. Controlled vs Uncontrolled Forms",
        description: "Controlling form state in React:",
        table: {
          headers: ["Attribute", "Controlled Components", "Uncontrolled Components"],
          rows: [
            ["Source of Truth", "React State (useState)", "Browser DOM (accessed via useRef)"],
            ["Value Management", "Bound via `value` prop; updated via `onChange`", "Managed natively; uses `defaultValue` prop"],
            ["Instant Validation", "Trivial (validation runs on every keystroke in state)", "Requires reading ref on submit or custom listeners"],
            ["Form Reset", "Easy (reset state to initial values)", "Requires calling DOM form.reset()"],
          ],
        },
      },
      {
        title: "2. Multi-Input Form Handler Pattern",
        description: "Managing multiple inputs with a single state object:",
        items: [
          {
            term: "Computed Property Name Pattern",
            meaning: "Using e.target.name to update the corresponding key dynamically",
            example: "function handleChange(e: React.ChangeEvent<HTMLInputElement>) {\n  const { name, value } = e.target;\n  setFormData(prev => ({ ...prev, [name]: value }));\n}",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What defines a 'Controlled Component' in React?",
        options: [
          "A component wrapped in Redux",
          "A form input whose current value is dictated by React state and whose changes are handled by React state setters",
          "A component that cannot be edited by the user",
          "A component with password protection",
        ],
        answer: "A form input whose current value is dictated by React state and whose changes are handled by React state setters",
        explanation:
          "An input form element whose value is controlled by React in this way is called a controlled component: state drives the value and onChange updates state.",
      },
      {
        question: "What happens if an `<input />` has a `value` prop set to state, but has NO `onChange` handler?",
        options: [
          "React crashes immediately",
          "The user cannot type into the input; it becomes effectively read-only and React emits a console warning",
          "The input deletes itself",
          "The input works normally",
        ],
        answer: "The user cannot type into the input; it becomes effectively read-only and React emits a console warning",
        explanation:
          "Without an onChange handler to update the bound state, React continually re-renders the input with the unchanged value, preventing user typing.",
      },
    ],
  },

  "react-ch8-l24": {
    overview:
      "Production-ready React applications must gracefully handle component errors, code-split bundles for fast loading, and optimize assets. In this capstone lesson, based on 'Fullstack React', we cover Error Boundaries (`componentDidCatch`), lazy loading components with `React.lazy()` and `<Suspense>`, and production bundling strategies with Vite and Next.js.",
    canDo:
      "Can implement Error Boundaries to catch unhandled runtime crashes, code-split routes and heavy components using React.lazy and Suspense, and optimize production bundles.",
    teacherNote:
      "Error Boundaries MUST be class components (or use a library like `react-error-boundary`) because there is currently no functional hook equivalent for `componentDidCatch` or `getDerivedStateFromError`! Wrap critical features in separate Error Boundaries so an error in one widget doesn't crash the entire screen.",
    sections: [
      {
        title: "1. Error Boundaries & Fallback UI",
        description: "Containing component crashes gracefully:",
        table: {
          headers: ["Lifecycle Method", "Static?", "Purpose"],
          rows: [
            ["static getDerivedStateFromError(error)", "Yes", "Updates state to render fallback UI on the next render pass."],
            ["componentDidCatch(error, errorInfo)", "No", "Logs error details and component stack traces to reporting services (e.g. Sentry)."],
          ],
        },
      },
      {
        title: "2. Code Splitting with React.lazy and Suspense",
        description: "Loading JavaScript chunks on demand:",
        items: [
          {
            term: "Dynamic Import & Suspense",
            meaning: "Splitting heavy components into separate network bundles loaded only when rendered",
            example: "const HeavyChart = React.lazy(() => import('./HeavyChart'));\n\nfunction Dashboard() {\n  return (\n    <Suspense fallback={<LoadingSpinner />}>\n      <HeavyChart />\n    </Suspense>\n  );\n}",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Why should you wrap heavy routes or components in `React.lazy()` and `<Suspense>`?",
        options: [
          "To encrypt the component source code",
          "To code-split the application into smaller bundles loaded on-demand, reducing initial page load time and improving Core Web Vitals",
          "Because React 19 requires all components to be lazy",
          "To disable TypeScript checks",
        ],
        answer: "To code-split the application into smaller bundles loaded on-demand, reducing initial page load time and improving Core Web Vitals",
        explanation:
          "React.lazy enables dynamic import of components, allowing the browser to download only the necessary code for the current view and displaying a fallback during loading.",
      },
      {
        question: "What happens when an unhandled JavaScript error is thrown inside a component render tree that has NO Error Boundary?",
        options: [
          "The error is silently swallowed",
          "The entire React component tree is unmounted, leaving the user with a blank white screen",
          "React reloads the page automatically",
          "The browser rolls back to the previous version",
        ],
        answer: "The entire React component tree is unmounted, leaving the user with a blank white screen",
        explanation:
          "In React 16+, unhandled errors in the render or lifecycle methods that are not caught by any Error Boundary result in unmounting the entire React component tree.",
      },
    ],
  },
};
