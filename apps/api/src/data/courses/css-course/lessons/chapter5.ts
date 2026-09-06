import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_5_LESSONS: Record<string, LessonContent> = {
  "css-ch5-l15": {
    overview:
      "CSS Grid is a two-dimensional layout system capable of handling both rows and columns simultaneously. Learn how to declare a grid container (`display: grid`), define explicit tracks with `grid-template-columns` and `grid-template-rows`, and manage gutters with `gap`.",
    canDo:
      "Create robust two-dimensional layouts, defining columns and rows with precise track measurements.",
    teacherNote:
      "Use Flexbox when you care about content flow in ONE direction (a navbar, a row of buttons, a vertical list). Use CSS Grid when you care about alignment in TWO directions (a photo gallery, dashboard cards, a multi-column page layout).",
    sections: [
      {
        title: "Grid Container Fundamentals",
        description: "Setting up 2D track grids.",
        table: {
          headers: ["Property", "Syntax Example", "Description"],
          rows: [
            ["display", "grid, inline-grid", "Establishes a grid formatting context"],
            ["grid-template-columns", "250px 1fr 200px", "Defines the number and track widths of columns"],
            ["grid-template-rows", "auto 1fr auto", "Defines the track heights of rows (Header, Main, Footer)"],
            ["gap", "1.5rem, 24px 16px", "Defines the gutters between rows and columns"]
          ]
        }
      }
    ],
    practice: [
      {
        question: "What is the primary architectural difference between Flexbox and CSS Grid?",
        options: [
          "Flexbox is 1-dimensional (row OR column), while Grid is 2-dimensional (rows AND columns simultaneously)",
          "Flexbox is deprecated in CSS3",
          "Grid only works on desktop monitors",
          "Grid cannot use the gap property"
        ],
        answer: "Flexbox is 1-dimensional (row OR column), while Grid is 2-dimensional (rows AND columns simultaneously)",
        explanation:
          "Flexbox calculates layout along a single axis at a time, whereas Grid aligns items across both columns and rows at the same time."
      }
    ]
  },

  "css-ch5-l16": {
    overview:
      "CSS Grid introduced the Fractional Unit (`fr`), which represents a fraction of the remaining free space in the grid container. Combine `fr` with `repeat()` and `minmax()` functions to build responsive tracks with minimal code.",
    canDo:
      "Write concise grid templates utilizing `repeat()`, `minmax()`, and fractional units to divide layout space proportionally.",
    teacherNote:
      "The `fr` unit distributes leftover space AFTER fixed pixel or content sizes are subtracted. For example, `grid-template-columns: 200px 1fr 2fr;` allocates 200px to column 1, then gives 1/3 of the remaining space to column 2, and 2/3 to column 3.",
    sections: [
      {
        title: "Grid Sizing Functions & Units",
        description: "Advanced mathematical track definitions in CSS Grid.",
        table: {
          headers: ["Feature", "Example Syntax", "Explanation"],
          rows: [
            ["Fractional Unit (fr)", "1fr 1fr 1fr", "Divides remaining container space into equal parts"],
            ["repeat() Function", "repeat(3, 1fr)", "Repeats track pattern N times (identical to 1fr 1fr 1fr)"],
            ["minmax() Function", "minmax(200px, 1fr)", "Sets minimum floor (200px) and maximum ceiling (1fr) for a track"],
            ["auto Keyword", "auto 1fr", "Sizes track to fit its content naturally"]
          ]
        }
      }
    ],
    practice: [
      {
        question: "In `grid-template-columns: repeat(4, 1fr)`, how many columns are created and how are they sized?",
        options: [
          "1 column divided into 4 pieces",
          "4 columns, each taking up an equal share (25%) of available space",
          "4 columns that only appear on mobile",
          "16 columns total"
        ],
        answer: "4 columns, each taking up an equal share (25%) of available space",
        explanation:
          "`repeat(4, 1fr)` is shorthand for `1fr 1fr 1fr 1fr`, creating 4 identical columns of equal width."
      }
    ]
  },

  "css-ch5-l17": {
    overview:
      "Unlock the holy grail of responsive design: automated multi-column card grids that adapt smoothly to ANY screen size WITHOUT writing a single `@media` query, using `repeat(auto-fit, minmax(280px, 1fr))` and `grid-template-areas`.",
    canDo:
      "Build completely responsive, wrap-capable card grids without media queries, and construct semantic dashboard layouts with `grid-template-areas`.",
    teacherNote:
      "`repeat(auto-fit, minmax(250px, 1fr))` is one of the most powerful CSS rules ever written. On a phone, it shows 1 column. On a tablet, 2 or 3. On a 4K display, 6 columns—all automatically calculated by the browser.",
    sections: [
      {
        title: "auto-fit vs. auto-fill",
        description: "Creating self-responsive track grids.",
        table: {
          headers: ["Keyword", "Behavior with Few Items", "Best Use Case"],
          rows: [
            ["auto-fit", "Expands existing items to fill the full container width", "Card catalogs, product listings, responsive dashboards"],
            ["auto-fill", "Maintains designated item widths and preserves empty tracks", "Toolbars or fixed-size photo galleries"]
          ]
        }
      }
    ],
    practice: [
      {
        question: "What does `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))` achieve?",
        options: [
          "It forces the website into mobile mode",
          "It automatically creates as many 250px+ columns as fit the viewport, stretching them to fill free space, without media queries",
          "It requires 250 media queries to function",
          "It locks the grid to exactly 250 columns"
        ],
        answer: "It automatically creates as many 250px+ columns as fit the viewport, stretching them to fill free space, without media queries",
        explanation:
          "The browser fits as many 250px columns as possible. If screen space allows 3 columns, 3 are created; on mobile screens, it wraps to a single column automatically."
      }
    ]
  }
};
