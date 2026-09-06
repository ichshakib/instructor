import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_2_LESSONS: Record<string, LessonContent> = {
  "react-ch2-l4": {
    overview:
      "Props (properties) are read-only inputs passed from parent components to child components, establishing a unidirectional top-down data flow. Drawing from Kirupa Chinnathambi's 'Learning React' Chapter 4 and Fullstack React, this lesson covers props destructuring, default prop values, passing callback functions to communicate upwards, and enforcing type contracts with TypeScript interfaces.",
    canDo:
      "Can pass and destructure props, communicate upward using callback props, define TypeScript component prop interfaces, and ensure prop immutability.",
    teacherNote:
      "Props are strictly READ-ONLY! A child component must never mutate `props.data = 'new'`. To change data owned by a parent, the parent passes a callback function (`onUpdate={handleUpdate}`) that the child invokes, maintaining single source of truth.",
    sections: [
      {
        title: "1. Unidirectional Data Flow & Props Patterns",
        description: "How data and events flow through component trees:",
        table: {
          headers: ["Direction", "Vehicle", "Example", "Responsibility"],
          rows: [
            ["Downwards (Parent -> Child)", "Props", "<UserProfile name={user.name} role={user.role} />", "Parent passes state down as read-only inputs."],
            ["Upwards (Child -> Parent)", "Callback Props", "<Button onClick={() => onDelete(id)}>Delete</Button>", "Child notifies parent of events; parent mutates state."],
          ],
        },
      },
      {
        title: "2. TypeScript Interface Contract",
        description: "Type-safe props with defaults:",
        items: [
          {
            term: "Typed Functional Component",
            meaning: "Explicit interface contract for inputs",
            example: "interface CardProps {\n  title: string;\n  count?: number; // Optional\n  onSelect: (id: string) => void;\n}\n\nexport function Card({ title, count = 0, onSelect }: CardProps) {\n  return <div onClick={() => onSelect(title)}>{title} ({count})</div>;\n}",
          },
        ],
      },
    ],
    practice: [
      {
        question: "How does a child component notify its parent of a user interaction in React's unidirectional data flow?",
        options: [
          "By modifying the parent's props object directly",
          "By calling a callback function passed down as a prop from the parent",
          "By setting a global window variable",
          "By re-importing the parent component",
        ],
        answer: "By calling a callback function passed down as a prop from the parent",
        explanation:
          "Unidirectional data flow dictates that state flows down via props and notifications flow up via callback functions passed in props.",
      },
      {
        question: "What happens if a child component attempts to reassign `props.title = 'New'`?",
        options: [
          "The parent title changes automatically",
          "It throws a TypeError in strict mode because props are read-only / frozen",
          "React creates a new database entry",
          "The browser crashes",
        ],
        answer: "It throws a TypeError in strict mode because props are read-only / frozen",
        explanation:
          "Props are immutable inputs. Attempting to assign new values directly to the props object violates React's core contract and fails.",
      },
    ],
  },

  "react-ch2-l5": {
    overview:
      "Component composition allows building flexible, reusable layouts without prop drilling. In this lesson, based on 'Fullstack React', we explore the special `children` prop, slot-based composition (passing JSX elements as named props), container vs presentational components, and avoiding deeply nested prop chains.",
    canDo:
      "Can utilize props.children to create reusable wrapper components, pass JSX elements as named slots, and architect composable layout hierarchies.",
    teacherNote:
      "Prefer composition over inheritance! Instead of creating complex class inheritance hierarchies, nest components using `children` or pass elements into props (e.g. `<Modal header={<Header />} body={<Body />} />`). This makes components modular and easily swappable.",
    sections: [
      {
        title: "1. The children Prop & Wrapper Components",
        description: "Allowing arbitrary content insertion inside components:",
        table: {
          headers: ["Pattern", "Declaration Syntax", "Usage Example"],
          rows: [
            ["Default Children Slot", "function Panel({ children }) { return <div className='panel'>{children}</div>; }", "<Panel><p>Nested text</p><button>OK</button></Panel>"],
            ["Named Slots via Props", "function SplitPane({ left, right }) { return <div className='split'>{left}{right}</div>; }", "<SplitPane left={<Sidebar />} right={<ChatWindow />} />"],
          ],
        },
      },
      {
        title: "2. Slot Composition Example",
        description: "Eliminating prop drilling through element passing:",
        items: [
          {
            term: "Inversion of Control",
            meaning: "Passing the pre-configured JSX element directly rather than passing raw data down through intermediate layers",
            example: "<PageLayout\n  navbar={<Navigation user={currentUser} />}\n  content={<DashboardData items={data} />}\n/>",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What is `props.children` in a React component?",
        options: [
          "An array containing all CSS classes of the component",
          "The content passed between the opening and closing tags of the component",
          "A list of all child component names in the project",
          "A reference to child DOM nodes",
        ],
        answer: "The content passed between the opening and closing tags of the component",
        explanation:
          "props.children represents whatever JSX, text, or components are placed between `<Component>...</Component>`.",
      },
      {
        question: "Why is component composition preferred over inheritance in React applications?",
        options: [
          "JavaScript does not support inheritance",
          "Composition provides flexible, decoupled layouts and eliminates brittle, deeply nested class hierarchies",
          "Inheritance requires Node.js",
          "Composition reduces HTML bundle size by 90%",
        ],
        answer: "Composition provides flexible, decoupled layouts and eliminates brittle, deeply nested class hierarchies",
        explanation:
          "React's design philosophy favors composition: assembling small, focused components together yields far more maintainable code than complex inheritance trees.",
      },
    ],
  },

  "react-ch2-l6": {
    overview:
      "Dynamic interfaces conditionally render elements and render collections from datasets. This lesson covers conditional rendering patterns (ternary operators, short-circuit `&&`, early returns), avoiding the classic `{count && <Component />}` numeric zero bug, and correctly assigning persistent unique `key` props.",
    canDo:
      "Can implement conditional rendering with ternaries and early returns, avoid falsy 0 rendering traps with logical &&, and choose reliable keys for lists.",
    teacherNote:
      "WATCH OUT FOR THE NUMBER ZERO BUG: If you write `{items.length && <List />}`, and `items.length` is 0, React renders the number `0` directly onto your screen because 0 is falsy but is a valid number literal! Write `{items.length > 0 && <List />}` or `{items.length ? <List /> : null}` instead.",
    sections: [
      {
        title: "1. Conditional Rendering Idioms",
        description: "Best practices for branching JSX rendering:",
        table: {
          headers: ["Pattern", "Syntax Example", "Best Use Case", "Gotcha"],
          rows: [
            ["Early Return (Guard)", "if (!user) return <Loading />; return <Profile user={user} />;", "Clean exit before rendering complex layouts", "Hooks must precede any early returns!"],
            ["Ternary Operator", "{isLoggedIn ? <Dashboard /> : <LoginForm />}", "Choosing between two mutually exclusive UI branches", "Can become unreadable if deeply nested."],
            ["Logical AND (&&)", "{hasErrors && <ErrorBanner />}", "Conditionally showing or hiding an optional element", "Renders 0 if left side evaluates to numeric zero!"],
          ],
        },
      },
      {
        title: "2. Key Selection for Lists",
        description: "Providing stable identities for reconciliation:",
        items: [
          {
            term: "Database ID as Key",
            meaning: "Always prefer unique IDs from your data model (e.g. user.id, product.sku)",
            example: "{items.map(item => <ItemRow key={item.id} data={item} />)}",
          },
          {
            term: "Array Index as Key (Antipattern)",
            meaning: "Using index `key={index}` causes subtle state bugs if list items are sorted, filtered, or prepended",
            example: "Only use index if the list is strictly static and will never be reordered or filtered.",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Why is `key={index}` considered an antipattern when rendering dynamically reorderable lists?",
        options: [
          "Because React throws a compile error",
          "Because reordering or deleting items shifts indices, causing React to associate internal component state with the wrong item",
          "Because indices consume too many bytes",
          "Because indices are strings",
        ],
        answer: "Because reordering or deleting items shifts indices, causing React to associate internal component state with the wrong item",
        explanation:
          "When items are inserted or removed, array indices change. If index is used as a key, React reuses DOM nodes and internal component state for the wrong items.",
      },
      {
        question: "What will render on screen if you write `{unreadCount && <Badge count={unreadCount} />}` when `unreadCount` is 0?",
        options: [
          "Nothing (null)",
          "The literal number '0'",
          "An empty Badge",
          "A runtime error",
        ],
        answer: "The literal number '0'",
        explanation:
          "In JavaScript, '0 && anything' evaluates to 0. In JSX, numbers (including 0) are valid renderable content, so React renders the character '0' onto the screen.",
      },
    ],
  },
};
