import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_6_LESSONS: Record<string, LessonContent> = {
  "html-ch6-l18": {
    overview:
      "The HTML5 `<canvas>` element provides a high-performance bitmap surface that allows dynamic, scriptable 2D pixel rendering using JavaScript. Learn the distinction between immediate-mode canvas rendering and retained-mode DOM graphics.",
    canDo:
      "Declare a `<canvas>` element, obtain its 2D rendering context in JavaScript, and draw shapes, paths, lines, and text.",
    teacherNote:
      "Always set `<canvas>` dimensions using the HTML attributes `width` and `height` (e.g. `<canvas width='600' height='400'>`), NOT with CSS width and height. CSS scales the canvas bitmap like an image, resulting in blurry, stretched graphics.",
    sections: [
      {
        title: "Canvas Mechanics: Dimensions vs. CSS",
        description: "Critical sizing rules for HTML5 canvas.",
        table: {
          headers: ["Method", "Syntax", "Effect on Rendering"],
          rows: [
            ["HTML Attributes", "<canvas width='800' height='600'>", "Sets the actual coordinate resolution of the drawing buffer (sharp rendering)"],
            ["CSS Dimensions", "canvas { width: 100%; height: 300px; }", "Scales the display view of the canvas without altering internal buffer (may distort)"]
          ]
        }
      }
    ],
    practice: [
      {
        question: "What happens if you resize a `<canvas>` element exclusively using CSS width and height without changing its HTML attributes?",
        options: [
          "The drawing context resets to blank",
          "The internal bitmap is stretched or compressed, resulting in pixelated graphics",
          "The browser throws a CanvasRenderingError",
          "JavaScript drawing calls stop functioning"
        ],
        answer: "The internal bitmap is stretched or compressed, resulting in pixelated graphics",
        explanation:
          "The default canvas coordinate space is 300x150. Resizing with CSS merely stretches that 300x150 raster bitmap to fill the CSS dimensions."
      }
    ]
  },

  "html-ch6-l19": {
    overview:
      "Unlike canvas (which is pixel-based raster graphics), SVG (Scalable Vector Graphics) is an XML-based retained-mode vector format that scales infinitely without quality loss. Learn how to embed inline `<svg>` directly into HTML documents and style vector paths with CSS.",
    canDo:
      "Embed inline SVGs, style fill and stroke properties with CSS, and build crisp, responsive icons and vector illustrations.",
    teacherNote:
      "Inline SVG allows vector elements (`<circle>`, `<path>`, `<rect>`) to be targeted directly with CSS hover effects and JavaScript click listeners, making it ideal for UI icons and interactive charts.",
    sections: [
      {
        title: "Canvas vs. SVG Comparison",
        description: "When to choose Canvas vs. SVG in web projects.",
        table: {
          headers: ["Criterion", "HTML5 <canvas>", "Inline <svg>"],
          rows: [
            ["Rendering Model", "Immediate mode (Raster pixels)", "Retained mode (DOM nodes)"],
            ["Resolution Scalability", "Resolution-dependent (can blur on zoom)", "Infinite resolution independence (Vector)"],
            ["DOM Accessibility", "Single DOM element (Internal pixels not accessible)", "Every sub-shape is a DOM node in the tree"],
            ["CSS Styling", "Cannot be styled via CSS", "Full CSS support (fill, stroke, transitions)"],
            ["Best Use Case", "High-frequency games, particle simulations, video filters", "Icons, diagrams, interactive maps, scalable charts"]
          ]
        }
      }
    ],
    practice: [
      {
        question: "Which graphics technology is preferable for a crisp, responsive UI icon that changes color on `:hover`?",
        options: [
          "<canvas>",
          "Inline <svg>",
          "WebP image",
          "GIF"
        ],
        answer: "Inline <svg>",
        explanation:
          "Inline SVG paths are live DOM nodes that can be directly colored and animated using CSS `fill` and `stroke` transitions."
      }
    ]
  },

  "html-ch6-l20": {
    overview:
      "HTML5 transformed web pages into full-fledged web applications. Learn how to store persistent client-side data using `localStorage` and `sessionStorage`, and attach arbitrary structured metadata to DOM elements using `data-*` attributes.",
    canDo:
      "Store and retrieve client-side data using Web Storage APIs and read custom data attributes using the JavaScript `dataset` API.",
    teacherNote:
      "`localStorage` persists data indefinitely until explicitly cleared, even across browser restarts. `sessionStorage` is cleared immediately when the browser tab or window is closed.",
    sections: [
      {
        title: "Web Storage vs. Cookies Comparison",
        description: "Storage options in modern web applications.",
        table: {
          headers: ["Mechanism", "Capacity", "Persistence", "Sent with HTTP Requests?"],
          rows: [
            ["localStorage", "~5MB per origin", "Permanent until deleted", "No (strictly client-side)"],
            ["sessionStorage", "~5MB per origin", "Tab session lifetime", "No (strictly client-side)"],
            ["Cookies", "~4KB per cookie", "Configurable expiration date", "Yes (sent in every HTTP header)"]
          ]
        }
      }
    ],
    practice: [
      {
        question: "How do you access the value of an attribute written as `data-course-id='42'` in JavaScript?",
        options: [
          "element.dataset.courseId",
          "element.data.course_id",
          "element.getData('courseId')",
          "element.getStorage('course-id')"
        ],
        answer: "element.dataset.courseId",
        explanation:
          "The HTML5 dataset API converts kebab-cased `data-*` attributes into camelCase properties on the `element.dataset` object."
      }
    ]
  }
};
