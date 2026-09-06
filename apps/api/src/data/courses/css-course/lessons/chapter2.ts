import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_2_LESSONS: Record<string, LessonContent> = {
  "css-ch2-l5": {
    overview:
      "Every element rendered in CSS is rectangular and governed by the Box Model. Understand the four concentric zones: the innermost Content area, Padding (clearance around content), Border (visible edge stroke), and Margin (exterior separation between adjacent elements).",
    canDo:
      "Deconstruct any layout issue into its margin, border, padding, and content components, diagnosing margin collapsing and spacing bugs.",
    teacherNote:
      "Vertical margins collapse into a single margin (the larger of the two) when two block elements touch. Horizontal margins never collapse.",
    sections: [
      {
        title: "The Four Box Model Layers",
        description: "From innermost to outermost layer of every HTML box.",
        table: {
          headers: ["Layer", "Position", "Background Color Applied?", "Interactivity"],
          rows: [
            ["Content", "Center", "Yes (inherits background)", "Houses text, child tags, and media"],
            ["Padding", "Surrounds content", "Yes (shares element background)", "Internal breathing room around content"],
            ["Border", "Surrounds padding", "No (has its own border-color)", "Structural boundary outline"],
            ["Margin", "Outside border", "Transparent (shows parent background)", "Separates element from external neighbors"]
          ]
        }
      }
    ],
    practice: [
      {
        question: "When two block elements sit stacked vertically with margins of 20px and 30px respectively, what is the resulting space between them?",
        options: ["50px", "30px", "10px", "25px"],
        answer: "30px",
        explanation:
          "Due to vertical margin collapse, adjacent vertical margins combine into a single margin equal to the larger of the two (30px)."
      }
    ]
  },

  "css-ch2-l6": {
    overview:
      "In the legacy `content-box` sizing model, adding padding or borders increases the rendered width of the element, causing calculation headaches. The modern industry standard is `box-sizing: border-box`, which constrains padding and border inside the declared width.",
    canDo:
      "Apply the universal border-box reset to ensure that `width: 100%` elements never overflow their parent containers when padding or borders are added.",
    teacherNote:
      "Virtually all modern frameworks (Tailwind, Bootstrap) and production design systems start with `*, *::before, *::after { box-sizing: border-box; }`.",
    sections: [
      {
        title: "content-box vs. border-box",
        description: "How box-sizing alters total rendered width calculation.",
        table: {
          headers: ["Mode", "Total Rendered Width Formula", "Prediction Difficulty"],
          rows: [
            ["content-box (Legacy default)", "width + padding-left + padding-right + border-left + border-right", "High (adding 10px padding breaks grid layouts)"],
            ["border-box (Modern standard)", "width (padding and borders are absorbed internally)", "Zero (width: 300px is always exactly 300px)"]
          ]
        }
      }
    ],
    practice: [
      {
        question: "Under `box-sizing: border-box`, if an element has `width: 200px`, `padding: 20px`, and `border: 2px solid black`, what is its final rendered width?",
        options: ["244px", "200px", "160px", "220px"],
        answer: "200px",
        explanation:
          "With `border-box`, padding and borders are absorbed inside the declared width, so the final visible box remains precisely 200px."
      }
    ]
  },

  "css-ch2-l7": {
    overview:
      "CSS offers absolute units (pixels: `px`) and relative units (`rem`, `em`, `%`, `vw`, `vh`). Master root-relative units (`rem`) for scalable typography, viewport units for hero sections, and the fluid `clamp(min, preferred, max)` function.",
    canDo:
      "Choose the right CSS unit for every layout context, building accessible interfaces that respect user font-size preferences in operating system settings.",
    teacherNote:
      "Use `rem` for font sizes, padding, and margins. When users increase the default font size in their browser settings (for accessibility), `rem`-based layouts scale proportionately, whereas fixed `px` layouts stay tiny.",
    sections: [
      {
        title: "Common CSS Length Units",
        description: "Comparative guide to modern units.",
        table: {
          headers: ["Unit", "Category", "Relative To", "Best Use Case"],
          rows: [
            ["px", "Absolute", "1 device pixel at standard 96dpi view", "Thin borders, fixed shadows"],
            ["rem", "Relative", "Root element (<html>) font size", "Typography, padding, margins, media queries"],
            ["em", "Relative", "Current parent element font size", "Icon sizing scaled to text, button padding"],
            ["%", "Relative", "Parent container dimension", "Fluid column widths, progress bars"],
            ["vh / vw", "Viewport", "1% of viewport height / width", "Hero banners, full-screen section backgrounds"],
            ["clamp()", "CSS Function", "clamp(MIN, VAL, MAX)", "Fluid responsive typography without media queries"]
          ]
        }
      }
    ],
    practice: [
      {
        question: "If the root `<html>` font-size is 16px, how many pixels does `2.5rem` equal?",
        options: ["32px", "40px", "25px", "50px"],
        answer: "40px",
        explanation:
          "2.5 * 16px = 40px. The `rem` unit is always calculated relative to the root element font size."
      }
    ]
  },

  "css-ch2-l8": {
    overview:
      "When content exceeds the bounding box of its container, `overflow` controls clipping and scrollbars. Learn `overflow-x`, `overflow-y`, the difference between `scroll` and `auto`, and why `outline` is better than `border` for focus states.",
    canDo:
      "Manage container overflow cleanly, prevent horizontal scrollbar leaks on mobile, and apply accessible focus rings using `outline`.",
    teacherNote:
      "Never replace `outline: none` on `:focus` without providing an alternative focus indicator. Removing focus rings completely breaks accessibility for keyboard-only users.",
    sections: [
      {
        title: "Overflow Values Reference",
        description: "Controlling content that spills past box boundaries.",
        table: {
          headers: ["Value", "Clipping", "Scrollbars Shown", "Typical Application"],
          rows: [
            ["visible", "No clipping (overflows container)", "Never", "Default behavior; dropdowns and tooltips"],
            ["hidden", "Clips content at box boundary", "Never", "Card image corners, preventing scroll leaks"],
            ["scroll", "Clips content", "Always (even if content fits)", "Fixed-height code blocks with permanent scrollbar"],
            ["auto", "Clips content", "Only when content exceeds dimensions", "Scrollable data tables, modal dialog bodies"]
          ]
        }
      }
    ],
    practice: [
      {
        question: "What is the key advantage of `outline` over `border` when creating focus indicators?",
        options: [
          "Outlines render with higher color saturation",
          "Outlines do not occupy space in the Box Model, preventing layout shifting when triggered",
          "Outlines only work in dark mode",
          "Outlines are supported in Internet Explorer 6"
        ],
        answer: "Outlines do not occupy space in the Box Model, preventing layout shifting when triggered",
        explanation:
          "Because `outline` is drawn entirely outside the Box Model, adding or removing an outline does not cause adjacent elements to move or re-flow."
      }
    ]
  }
};
