import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_1_LESSONS: Record<string, LessonContent> = {
  "css-ch1-l1": {
    overview:
      "CSS (Cascading Style Sheets) separates structural content from visual presentation. Understand the fundamental structure of a CSS rule: the selector, declaration block, property, and value, as well as the three inclusion methods: external stylesheets (<link>), internal style blocks (<style>), and inline style attributes.",
    canDo:
      "Write valid CSS rule sets and choose the correct method to attach styling to an HTML document.",
    teacherNote:
      "Always use external stylesheets linked via `<link rel='stylesheet' href='...'>` in production. External stylesheets can be cached across multiple pages by the browser, significantly accelerating subsequent page load speeds.",
    sections: [
      {
        title: "Anatomy of a CSS Rule",
        description: "Deconstructing how a style rule is declared and executed.",
        table: {
          headers: ["Component", "Example Syntax", "Purpose"],
          rows: [
            ["Selector", "h1, .lead-title", "Identifies which DOM elements in the HTML tree receive the styling"],
            ["Declaration Block", "{ color: #1e293b; font-size: 2rem; }", "Enclosed in curly braces; contains one or more property-value pairs"],
            ["Property", "font-weight", "The specific visual or layout characteristic being styled"],
            ["Value", "700 or bold", "The setting assigned to the property, ending with a mandatory semicolon"]
          ]
        }
      },
      {
        title: "The Three Style Inclusion Methods",
        description: "How CSS can be introduced to HTML documents.",
        table: {
          headers: ["Method", "Syntax Example", "Scope / Reusability", "Performance Rating"],
          rows: [
            ["External Stylesheet", "<link rel='stylesheet' href='styles.css'>", "Site-wide (across all linked pages)", "Optimal (Browser HTTP cache enabled)"],
            ["Embedded Style Block", "<style> h1 { color: red; } </style>", "Current document only", "Moderate (Requires re-parsing per page)"],
            ["Inline Style", "<p style='color: red;'>...</p>", "Single element instance", "Poor (No caching, breaks separation of concerns)"]
          ]
        },
        notes: [
          "Inline styles have the highest specificity (aside from `!important`) and make maintenance exceedingly difficult across large design systems.",
          "Place `<link>` tags in the `<head>` of your HTML document so the browser constructs the CSSOM before painting the first frame, avoiding Flash of Unstyled Content (FOUC)."
        ]
      }
    ],
    practice: [
      {
        question: "Which CSS inclusion method is the recommended industry best practice for production web applications?",
        options: [
          "Inline styles on each HTML element",
          "External stylesheets linked in the `<head>` via `<link rel='stylesheet'>`",
          "Importing stylesheets using `@import` inside JavaScript strings",
          "Placing `<style>` tags at the bottom of the `<body>`"
        ],
        answer: "External stylesheets linked in the `<head>` via `<link rel='stylesheet'>`",
        explanation:
          "External stylesheets maintain a clean separation of concerns and allow browsers to cache CSS assets across multiple visits."
      }
    ]
  },

  "css-ch1-l2": {
    overview:
      "CSS selectors target elements for styling based on element type, class names, IDs, attributes, and structural tree relationships. Master the differences between universal (`*`), type, class (`.name`), ID (`#name`), descendant (space), child (`>`), and sibling combinators (`+`, `~`).",
    canDo:
      "Construct precise selectors using combinators and attribute matching to target elements without writing redundant class names.",
    teacherNote:
      "Favor class selectors over ID selectors. IDs have very high specificity and cannot be reused across multiple elements on the same page, making them brittle for scalable UI design systems.",
    sections: [
      {
        title: "Core Selectors Reference",
        description: "Essential selector types in modern CSS.",
        table: {
          headers: ["Selector Type", "Syntax", "Matches", "Example"],
          rows: [
            ["Universal", "*", "Every element on the entire page", "* { box-sizing: border-box; }"],
            ["Type (Element)", "p, h1, button", "All instances of that HTML tag", "button { cursor: pointer; }"],
            ["Class", ".btn, .card", "Any element with that class in its classList", ".btn { padding: 0.5rem 1rem; }"],
            ["ID", "#header, #navbar", "The single element with that unique ID", "#navbar { position: sticky; }"],
            ["Attribute", "[type='email'], [target='_blank']", "Elements possessing that specific attribute/value", "input[type='email'] { border-color: blue; }"]
          ]
        }
      },
      {
        title: "Combinators Reference",
        description: "Targeting elements based on their relationships in the DOM hierarchy.",
        table: {
          headers: ["Combinator", "Symbol", "Relationship", "Example Target"],
          rows: [
            ["Descendant", " (space)", "Any descendant at any nesting depth", "article p (All paragraphs inside <article>)"],
            ["Child", ">", "Direct immediate children only", "ul > li (Only direct list item children)"],
            ["Adjacent Sibling", "+", "The immediately next sibling element", "h2 + p (Only paragraph directly following h2)"],
            ["General Sibling", "~", "Any following sibling sharing same parent", "h2 ~ p (All paragraphs following h2)"]
          ]
        }
      }
    ],
    practice: [
      {
        question: "What is the difference between `div p` and `div > p` in CSS?",
        options: [
          "`div p` only styles direct children, while `div > p` styles any descendant",
          "`div p` targets any paragraph at any level inside the div, while `div > p` targets only immediate child paragraphs",
          "`div > p` is invalid syntax in modern CSS",
          "`div p` has higher specificity than `div > p`"
        ],
        answer: "`div p` targets any paragraph at any level inside the div, while `div > p` targets only immediate child paragraphs",
        explanation:
          "The space combinator selects all nested descendants, whereas the child combinator `>` strictly selects direct child elements."
      }
    ]
  },

  "css-ch1-l3": {
    overview:
      "The 'Cascade' in CSS is the algorithm that determines which style rule wins when multiple conflicting declarations target the same element. Master the four levels of the cascade: Importance, Specificity (Inline > ID > Class > Type), Source Order, and Property Inheritance.",
    canDo:
      "Calculate specificity vectors (A, B, C, D) and resolve style conflicts predictably without resorting to hacky `!important` declarations.",
    teacherNote:
      "Specificity can be calculated as a 4-part vector: (Inline, ID, Class/Attribute/Pseudo-class, Type/Pseudo-element). For example, `#nav .item a` has specificity (0, 1, 1, 1).",
    sections: [
      {
        title: "The Specificity Hierarchy",
        description: "Weighting scale used by the browser to resolve style conflicts.",
        table: {
          headers: ["Level", "Category", "Weight Value", "Examples"],
          rows: [
            ["A", "Inline styles", "1,0,0,0", "style='color: red;'"],
            ["B", "ID selectors", "0,1,0,0", "#nav, #sidebar"],
            ["C", "Class, Attribute & Pseudo-class", "0,0,1,0", ".btn, [type='text'], :hover"],
            ["D", "Type selector & Pseudo-element", "0,0,0,1", "div, h1, p, ::before, ::after"]
          ]
        },
        notes: [
          "Universal selector `*` and combinators (`+`, `>`, `~`) carry zero specificity (0,0,0,0).",
          "When two competing rules have the exact same specificity score, the one declared later in the source code (source order) wins."
        ]
      }
    ],
    practice: [
      {
        question: "Which of the following selectors has the highest specificity?",
        options: [
          "nav ul li a (0, 0, 0, 4)",
          ".nav-link:hover (0, 0, 2, 0)",
          "#main-menu a (0, 1, 0, 1)",
          "div.container p (0, 0, 1, 2)"
        ],
        answer: "#main-menu a (0, 1, 0, 1)",
        explanation:
          "#main-menu a contains an ID selector (0,1,0,1), which outweighs any quantity of classes, pseudo-classes, or type selectors."
      }
    ]
  },

  "css-ch1-l4": {
    overview:
      "Pseudo-classes target elements based on dynamic user state, history, or DOM position (e.g. `:hover`, `:focus`, `:active`, `:nth-child`). Pseudo-elements create virtual cosmetic DOM elements (e.g. `::before`, `::after`) for decorative accents without polluting the HTML markup.",
    canDo:
      "Implement accessible interactive focus and hover states, and use `::before` and `::after` with `content` to inject decorative visual elements.",
    teacherNote:
      "Pseudo-elements (`::before`, `::after`) will NOT render unless you include the `content` property, even if it is just an empty string: `content: ''`.",
    sections: [
      {
        title: "Common Interactive & Structural Pseudo-classes",
        description: "State-driven and position-driven element targeting.",
        table: {
          headers: ["Pseudo-class", "Trigger Condition", "Accessibility Role"],
          rows: [
            [":hover", "User points cursor over element", "Provides visual feedback for interactive desktop items"],
            [":focus", "Element receives keyboard focus via Tab key", "Crucial for keyboard-only accessibility compliance"],
            [":active", "Element is actively pressed or clicked", "Simulates mechanical button press sensation"],
            [":disabled", "Form element has disabled attribute", "Mutes visual styling and suppresses pointer events"],
            [":nth-child(even/odd)", "Element position among siblings", "Zebra striping for tables and list collections"]
          ]
        }
      },
      {
        title: "Pseudo-elements vs. Pseudo-classes",
        description: "Key syntactic and functional differences.",
        table: {
          headers: ["Feature", "Pseudo-class (:)", "Pseudo-element (::)"],
          rows: [
            ["Notation Standard", "Single colon (e.g. :hover)", "Double colon in modern CSS (e.g. ::before)"],
            ["Target", "An existing DOM element in a specific state", "A virtual sub-element created inside the target"],
            ["Content Injection", "Cannot inject content", "Requires content: 'text' or content: ''"],
            ["Common Examples", ":hover, :focus, :first-child, :not()", "::before, ::after, ::marker, ::placeholder"]
          ]
        }
      }
    ],
    practice: [
      {
        question: "Why must `content: ''` be declared when using `::before` or `::after` pseudo-elements?",
        options: [
          "To reset the element's font size",
          "Because browsers refuse to generate or render the pseudo-element box without a content property",
          "To make the element clickable",
          "To enable CSS Grid on the pseudo-element"
        ],
        answer: "Because browsers refuse to generate or render the pseudo-element box without a content property",
        explanation:
          "The CSS specification states that a pseudo-element is only generated in the visual formatting model if its `content` property computes to a non-none value."
      }
    ]
  }
};
