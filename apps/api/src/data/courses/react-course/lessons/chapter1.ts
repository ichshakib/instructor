import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_1_LESSONS: Record<string, LessonContent> = {
  "react-ch1-l1": {
    overview:
      "React is a declarative, component-based JavaScript library for building modern user interfaces. Drawing from 'Fullstack React' by Anthony Accomazzo et al. and Kirupa Chinnathambi's 'Learning React', this lesson explores the declarative programming paradigm, how JSX compiles down to React.createElement calls via Babel/SWC, and how the Virtual DOM enables high-performance UI updates without touching the browser DOM directly.",
    canDo:
      "Can explain JSX compilation to React.createElement(), differentiate declarative React code from imperative DOM manipulation, and describe the role of the Virtual DOM.",
    teacherNote:
      "JSX is not HTML; it is syntactic sugar for JavaScript expressions. When you write `<div className='box'>Hello</div>`, the compiler transforms it into `React.createElement('div', { className: 'box' }, 'Hello')`, producing a lightweight JavaScript object in memory.",
    sections: [
      {
        title: "1. Imperative vs Declarative UI",
        description: "The paradigm shift powering React:",
        table: {
          headers: ["Paradigm", "Approach", "Example Code", "Maintenance Overhead"],
          rows: [
            ["Imperative (Vanilla JS)", "Step-by-step instructions telling the browser HOW to change the DOM", "btn.classList.add('active');\nbtn.innerText = 'Clicked';", "High (state desynchronization bugs)."],
            ["Declarative (React)", "Declares WHAT the UI should look like given the current state", "<button className={isActive ? 'active' : ''}>\n  {isActive ? 'Clicked' : 'Click Me'}\n</button>", "Low (UI is a direct mathematical function of state)."],
          ],
        },
      },
      {
        title: "2. JSX Compilation Under the Hood",
        description: "How compilers translate JSX into JavaScript objects:",
        items: [
          {
            term: "JSX Expression",
            meaning: "Compiles directly into React.createElement(type, props, ...children)",
            example: "const element = <h1 id=\"title\">React</h1>;\n// Transpiles to:\nconst element = React.createElement('h1', { id: 'title' }, 'React');",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What does JSX transpile into during compilation?",
        options: [
          "Raw HTML strings inserted via innerHTML",
          "React.createElement() JavaScript function calls",
          "WebAssembly binary opcodes",
          "SQL insert statements",
        ],
        answer: "React.createElement() JavaScript function calls",
        explanation:
          "Compilers like Babel or SWC transform JSX tags into nested React.createElement() calls that construct lightweight Virtual DOM objects.",
      },
      {
        question: "Why does React use `className` instead of `class` in JSX?",
        options: [
          "To confuse web browsers",
          "Because `class` is a reserved keyword in JavaScript",
          "Because className is faster in CSS",
          "It is required by TypeScript only",
        ],
        answer: "Because `class` is a reserved keyword in JavaScript",
        explanation:
          "Since JSX compiles to JavaScript objects, using the reserved keyword 'class' for HTML classes would conflict with JavaScript class syntax, so React uses 'className'.",
      },
    ],
  },

  "react-ch1-l2": {
    overview:
      "The Virtual DOM (VDOM) is an in-memory representation of real DOM elements. In this lesson, based on 'Fullstack React', we explore the React Fiber reconciliation engine, tree diffing algorithms (heuristic O(n) comparison), state batching, and how React computes the minimal set of real DOM mutations necessary to synchronize screen state.",
    canDo:
      "Can trace the reconciliation cycle from state trigger to screen paint, explain React Fiber time-slicing, and describe automated state update batching.",
    teacherNote:
      "Direct browser DOM manipulation is slow because modifying elements forces the browser to recalculate styles, layout, and repaint pixels. React's Virtual DOM diffs tree snapshots in JavaScript memory first, batching and applying only the exact modified nodes in a single repaint!",
    sections: [
      {
        title: "1. The Reconciliation Pipeline (Render & Commit)",
        description: "The two distinct phases of a React update:",
        table: {
          headers: ["Phase", "Engine Component", "Work Performed", "Interruptible?"],
          rows: [
            ["1. Render Phase", "React Fiber", "Invokes component functions, builds new VDOM tree, computes diffs against previous tree.", "Yes (can pause/yield to higher priority user input)"],
            ["2. Commit Phase", "ReactDOM", "Applies minimal computed diffs (mutations) to real browser DOM, runs useLayoutEffect.", "No (synchronous paint to prevent visual tearing)"],
          ],
        },
      },
      {
        title: "2. Heuristic Diffing Assumptions",
        description: "How React reduces an O(n^3) tree comparison to O(n) linear time:",
        items: [
          {
            term: "Different Element Types",
            meaning: "Two elements of different types produce entirely different trees; React tears down the old tree and builds from scratch",
            example: "Changing <div> to <span> unmounts the div and all its children completely.",
          },
          {
            term: "Keyed Children",
            meaning: "The developer provides a stable 'key' prop to hint which child elements remain stable across renders",
            example: "Enables reordering items without destroying and recreating DOM nodes.",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What are the two primary phases of the React update lifecycle?",
        options: [
          "Compile phase and Runtime phase",
          "Render phase (computing diffs) and Commit phase (applying real DOM mutations)",
          "Download phase and Parse phase",
          "Setup phase and Teardown phase",
        ],
        answer: "Render phase (computing diffs) and Commit phase (applying real DOM mutations)",
        explanation:
          "React splits work into an interruptible Render phase where virtual diffs are calculated, followed by a synchronous Commit phase that applies changes to the browser DOM.",
      },
      {
        question: "Why does React require stable `key` props when rendering lists of elements?",
        options: [
          "To number the elements on screen",
          "To allow the reconciliation algorithm to match previous children with new children across renders without recreating nodes",
          "To encrypt the list items",
          "Because JavaScript arrays require keys",
        ],
        answer: "To allow the reconciliation algorithm to match previous children with new children across renders without recreating nodes",
        explanation:
          "Keys provide persistent identities, enabling React to insert, remove, or reorder list items efficiently without destroying existing DOM nodes.",
      },
    ],
  },

  "react-ch1-l3": {
    overview:
      "Modern React emphasizes functional components as pure functions of props and state. This lesson covers functional component syntax, ensuring pure rendering without unexpected side-effects during render, and understanding React.StrictMode's intentional double-invocations in development mode to flush out memory leaks.",
    canDo:
      "Can structure pure functional components, predict rendering behavior, and explain why React.StrictMode executes components twice during development.",
    teacherNote:
      "In development mode, `<React.StrictMode>` intentionally mounts and invokes components, state initializers, and effects TWICE. This is a vital diagnostic feature designed to help developers identify accidental side-effects during the pure render phase before deploying to production.",
    sections: [
      {
        title: "1. Pure Component Contract",
        description: "Rules for deterministic, bug-free rendering:",
        table: {
          headers: ["Rule", "Description", "Consequence if Broken"],
          rows: [
            ["Same Input -> Same Output", "Given identical props and state, component must return identical JSX.", "Visual glitches, unstable UI."],
            ["No Side-Effects in Render", "Do NOT fetch data, mutate external variables, or modify DOM during render body.", "Unpredictable state bugs, infinite loops."],
            ["Effects in useEffect", "All mutations, subscriptions, and timers must be deferred to effects.", "Guarantees safe execution after commit."],
          ],
        },
      },
      {
        title: "2. React.StrictMode Diagnostics",
        description: "Development-only verification checks:",
        items: [
          {
            term: "Double Invocation",
            meaning: "Runs component bodies and effect setups twice to verify that cleanup routines successfully reverse actions",
            example: "Uncovers un-cancelled event listeners and missing abort controllers in development.",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Why does React.StrictMode invoke functional components and effects twice in development mode?",
        options: [
          "It is an unresolved bug in React",
          "To intentionally stress-test components and uncover impure rendering side-effects and missing cleanups",
          "To pre-warm the browser cache",
          "To increase JavaScript execution speed",
        ],
        answer: "To intentionally stress-test components and uncover impure rendering side-effects and missing cleanups",
        explanation:
          "StrictMode deliberately executes lifecycle functions twice in development to surface side-effects that violate pure rendering principles.",
      },
      {
        question: "Can a React functional component modify global variables directly inside its body during render?",
        options: [
          "Yes, it is standard practice",
          "No, components must be pure functions with respect to rendering; side-effects belong inside useEffect",
          "Only if the variable is an array",
          "Only in server-side rendering",
        ],
        answer: "No, components must be pure functions with respect to rendering; side-effects belong inside useEffect",
        explanation:
          "Rendering must remain pure and free of side-effects. Any interaction with the outside world (DOM mutation, network calls, global state mutation) belongs in useEffect.",
      },
    ],
  },
};
