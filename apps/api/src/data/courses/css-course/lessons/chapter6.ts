import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_6_LESSONS: Record<string, LessonContent> = {
  "css-ch6-l18": {
    overview:
      "Responsive Web Design (RWD) ensures web applications deliver exceptional user experiences across smartphones, tablets, laptops, and ultra-wide desktop monitors. Understand mobile-first methodology and viewport configuration.",
    canDo:
      "Structure CSS with mobile-first architecture, writing base styles for small viewports and progressively enhancing with min-width media queries.",
    teacherNote:
      "Mobile-first design starts with simple linear styles for mobile devices, then uses `@media (min-width: ...)` to add multi-column complexity for larger screens. This results in cleaner code and faster mobile load times.",
    sections: [
      {
        title: "Mobile-First vs. Desktop-First",
        description: "Architectural comparison of responsive workflows.",
        table: {
          headers: ["Strategy", "Base Styles", "Media Query Query Used", "Performance Advantage"],
          rows: [
            ["Mobile-First (Standard)", "Mobile smartphone styles written first", "@media (min-width: 768px)", "Mobile devices parse minimal CSS without overriding desktop rules"],
            ["Desktop-First (Legacy)", "Complex desktop layouts written first", "@media (max-width: 768px)", "Mobile devices must download and override heavy desktop declarations"]
          ]
        }
      }
    ],
    practice: [
      {
        question: "Why is the mobile-first approach considered industry best practice?",
        options: [
          "Because desktop computers no longer exist",
          "Because mobile devices have more constrained bandwidth and CPUs, benefiting from lean base styles",
          "Because Apple requires it for App Store approval",
          "Because max-width queries are deprecated"
        ],
        answer: "Because mobile devices have more constrained bandwidth and CPUs, benefiting from lean base styles",
        explanation:
          "Mobile-first ensures lightweight, unencumbered CSS is served to mobile devices first, progressively layering on layout complexity for high-powered desktop screens."
      }
    ]
  },

  "css-ch6-l19": {
    overview:
      "Media queries (`@media`) allow styles to be conditionally applied based on viewport dimensions, screen orientation, pixel density, and user preferences (`prefers-color-scheme`, `prefers-reduced-motion`).",
    canDo:
      "Author responsive breakpoints using standard screen thresholds (640px, 768px, 1024px, 1280px) and support system Dark Mode.",
    teacherNote:
      "Always design responsive breakpoints based on your content needs rather than specific device models (like 'iPhone 14' or 'iPad'). Devices change every year, but content breakpoints remain resilient.",
    sections: [
      {
        title: "Standard Responsive Breakpoints",
        description: "Common industry viewport thresholds.",
        table: {
          headers: ["Breakpoint Name", "Min-Width Query", "Target Device Category"],
          rows: [
            ["sm", "@media (min-width: 640px)", "Large smartphones in landscape, small phablets"],
            ["md", "@media (min-width: 768px)", "Standard tablets (iPads) in portrait"],
            ["lg", "@media (min-width: 1024px)", "Tablets in landscape, laptops, small desktops"],
            ["xl", "@media (min-width: 1280px)", "Standard desktop monitors"],
            ["2xl", "@media (min-width: 1536px)", "Large high-resolution desktop and ultrawide monitors"]
          ]
        }
      }
    ],
    practice: [
      {
        question: "How do you detect if a user has configured their operating system for Dark Mode in CSS?",
        options: [
          "@media (prefers-color-scheme: dark) { ... }",
          "@media (dark-mode: true) { ... }",
          "@theme (mode: dark) { ... }",
          "body.dark-mode { ... }"
        ],
        answer: "@media (prefers-color-scheme: dark) { ... }",
        explanation:
          "The `prefers-color-scheme` media feature checks whether the user's OS preference is set to light or dark theme."
      }
    ]
  },

  "css-ch6-l20": {
    overview:
      "Modern CSS enables fluid, continuous responsiveness without abrupt breakpoint jumps. Master fluid typography using `clamp(min, preferred, max)`, responsive image sizing, and the new era of CSS Container Queries (`@container`).",
    canDo:
      "Implement fluid typography that smoothly scales between mobile and desktop sizes, and understand how container queries adapt components based on parent container width.",
    teacherNote:
      "With Container Queries (`@container (min-width: 400px)`), a card component can reformat its layout based on the width of its parent container, whether placed in a narrow sidebar or a wide main column.",
    sections: [
      {
        title: "Fluid Typography with clamp()",
        description: "Syntax and mathematical behavior of clamp().",
        table: {
          headers: ["Argument", "Example", "Role"],
          rows: [
            ["Minimum Value", "1.5rem (24px)", "Floor: font size will never drop below this on mobile"],
            ["Preferred Value", "2.5vw + 1rem", "Fluid scaling factor tied to viewport width"],
            ["Maximum Value", "3rem (48px)", "Ceiling: font size will never grow beyond this on wide screens"]
          ]
        }
      }
    ],
    practice: [
      {
        question: "What is the primary advantage of CSS Container Queries over Viewport Media Queries?",
        options: [
          "Container Queries make images download faster",
          "Components adapt according to the width of their immediate parent container, enabling truly modular design",
          "Container queries do not require CSS",
          "Container queries only work in JavaScript"
        ],
        answer: "Components adapt according to the width of their immediate parent container, enabling truly modular design",
        explanation:
          "Viewport media queries only check the whole window width. Container queries allow a card component to adapt whether placed in a narrow sidebar or a wide main body."
      }
    ]
  }
};
