import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_2_LESSONS: Record<string, LessonContent> = {
  "html-ch2-l4": {
    overview:
      "Heading tags (<h1> through <h6>) establish the outline and logical hierarchy of a web document. Correct heading usage improves readability, screen-reader navigation, and search engine relevance.",
    canDo:
      "Structure a document with an accessible heading hierarchy from <h1> to <h6>, avoiding skipping levels and maintaining a single primary topic.",
    teacherNote:
      "A common mistake is choosing heading levels for their default visual font size rather than their hierarchical meaning. Always use CSS to change font sizes, and reserve <h1> to <h6> strictly for document architecture.",
    sections: [
      {
        title: "Heading Hierarchy Guidelines",
        description: "How to properly nest and organize heading levels on modern web pages.",
        table: {
          headers: ["Level", "Semantic Role", "Usage Limit", "Visual Default"],
          rows: [
            ["<h1>", "Document title / Main topic", "Exactly one per page", "Largest display heading (approx 2em)"],
            ["<h2>", "Major section headings", "Multiple per page", "Subheading (approx 1.5em)"],
            ["<h3>", "Subsections under <h2>", "Multiple per section", "Medium heading (approx 1.17em)"],
            ["<h4> - <h6>", "Deeply nested technical subsections", "As needed", "Standard / small bold text"]
          ]
        },
        notes: [
          "Never skip heading levels (e.g., jumping from `<h2>` directly to `<h4>`). This confuses screen-reader users who rely on heading navigation.",
          "Use a single `<h1>` on each page that matches the page title or primary value proposition."
        ]
      }
    ],
    practice: [
      {
        question: "Why should you avoid jumping directly from an <h1> to an <h3>?",
        options: [
          "It causes the browser engine to throw a fatal syntax error",
          "It breaks the document outline for screen readers and assistive technologies",
          "It prevents CSS styles from being applied to <h3>",
          "It disables search engine indexing"
        ],
        answer: "It breaks the document outline for screen readers and assistive technologies",
        explanation:
          "Screen reader users frequently navigate pages using heading shortcuts (e.g., pressing H in NVDA or JAWS). Skipping levels causes users to wonder if content was missed."
      }
    ]
  },

  "html-ch2-l5": {
    overview:
      "Text formatting in modern HTML is strictly semantic. Learn the precise distinction between structural paragraphs (<p>), semantic importance (<strong>, <em>), highlighted text (<mark>), computer code (<code>), and preformatted blocks (<pre>).",
    canDo:
      "Choose the semantically correct inline text formatting elements to convey meaning and importance rather than purely decorative styling.",
    teacherNote:
      "In HTML 4, <b> was 'bold' and <i> was 'italic'. In modern HTML5, <strong> represents strong importance/urgency, while <em> represents stress emphasis. Purely visual boldness should be achieved using CSS `font-weight: bold`.",
    sections: [
      {
        title: "Semantic Text Elements Reference",
        description: "Comparative guide to modern inline formatting elements.",
        table: {
          headers: ["Element", "Semantic Meaning", "Traditional Visual", "Common Use Case"],
          rows: [
            ["<p>", "Paragraph of running text", "Block with vertical margins", "General body text and reading copy"],
            ["<strong>", "Strong importance, seriousness, or urgency", "Bold font weight", "Critical warnings or key takeaways"],
            ["<em>", "Stress emphasis (alters sentence meaning)", "Italicized slant", "Emphasizing a specific spoken word"],
            ["<code>", "Fragment of computer code", "Monospace font", "Inline variable, tag name, or command"],
            ["<pre>", "Preformatted text block", "Monospace, preserves spaces/newlines", "Multi-line code blocks and ASCII diagrams"],
            ["<mark>", "Highlighted or marked text", "Yellow background highlight", "Search result matches or user review highlights"]
          ]
        }
      }
    ],
    practice: [
      {
        question: "What is the difference between <strong> and <b> in modern HTML5?",
        options: [
          "They are identical and interchangeable in every way",
          "<strong> carries semantic importance for accessibility, whereas <b> is purely stylistic without added importance",
          "<b> is newer than <strong>",
          "<strong> can only be used inside headings"
        ],
        answer: "<strong> carries semantic importance for accessibility, whereas <b> is purely stylistic without added importance",
        explanation:
          "HTML5 defines `<strong>` as representing strong importance, seriousness, or urgency. Assistive tech may speak `<strong>` with an altered tone of voice."
      }
    ]
  },

  "html-ch2-l6": {
    overview:
      "HTML5 introduced landmark sectioning elements (<header>, <nav>, <main>, <article>, <section>, <aside>, <footer>) to replace generic <div> soup. These landmarks give meaning to page layout and enable keyboard/screen-reader navigation.",
    canDo:
      "Deconstruct a web page layout into semantic landmark regions, replacing non-semantic container divs with appropriate semantic tags.",
    teacherNote:
      "A `<section>` is for thematic grouping of content, typically with a heading. An `<article>` is for self-contained, independently distributable content (like a blog post, product card, or forum entry). If content makes sense copied to an RSS feed, it is an `<article>`.",
    sections: [
      {
        title: "HTML5 Landmark Elements",
        description: "Core structural landmarks and their designated roles.",
        table: {
          headers: ["Landmark", "Purpose", "Allowed Instances", "Accessibility Role"],
          rows: [
            ["<header>", "Introductory content, site logo, or section header", "Multiple (Page or Section level)", "banner (at top level)"],
            ["<nav>", "Primary or secondary navigation links", "Multiple", "navigation"],
            ["<main>", "Unique dominant content of the document", "Exactly one per page", "main"],
            ["<article>", "Self-contained, syndicatable content component", "Multiple", "article"],
            ["<section>", "Thematic grouping of content with a heading", "Multiple", "region (when labelled)"],
            ["<aside>", "Tangentially related content (sidebar, callouts)", "Multiple", "complementary"],
            ["<footer>", "Closing info, copyright, legal, or author metadata", "Multiple (Page or Section level)", "contentinfo (at top level)"]
          ]
        }
      }
    ],
    practice: [
      {
        question: "How many `<main>` elements can be visible at once in a single HTML document?",
        options: ["As many as needed", "Only one", "Up to three", "Zero; <main> is deprecated"],
        answer: "Only one",
        explanation:
          "The `<main>` element must be unique to the document and contain content directly related to the central topic. There can only be one visible `<main>` per page."
      }
    ]
  }
};
