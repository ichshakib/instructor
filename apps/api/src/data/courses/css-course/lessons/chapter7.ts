import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_7_LESSONS: Record<string, LessonContent> = {
  "css-ch7-l21": {
    overview:
      "The `transform` property allows elements to be moved, rotated, scaled, and skewed in both 2D and 3D space without affecting normal document flow or causing browser layout recalculations.",
    canDo:
      "Apply 2D and 3D transforms (`translate`, `rotate`, `scale`, `skew`) to create interactive hover micro-animations and depth effects.",
    teacherNote:
      "Always animate `transform` and `opacity` whenever possible. Browsers offload transform and opacity animations directly to the GPU compositor thread, guaranteeing silky-smooth 60fps / 120fps performance without CPU layout recalculations.",
    sections: [
      {
        title: "Core CSS Transform Functions",
        description: "Transform operations for modern UI interactions.",
        table: {
          headers: ["Function", "Example Syntax", "Transformation Effect", "Common UI Pattern"],
          rows: [
            ["translate()", "transform: translateY(-4px);", "Moves element along X and Y axes", "Card hover elevation effect"],
            ["scale()", "transform: scale(1.05);", "Enlarges or shrinks element proportionately", "Button click / hover zoom feedback"],
            ["rotate()", "transform: rotate(45deg);", "Rotates element around its transform-origin", "Accordion chevron toggle, close icons"],
            ["skew()", "transform: skewX(-10deg);", "Distorts element along coordinate axes", "Slanted banner badges and stylized buttons"]
          ]
        }
      }
    ],
    practice: [
      {
        question: "Why is animating `transform: translateY(-4px)` superior to animating `top: -4px` for performance?",
        options: [
          "Transforms run on the GPU compositor thread without triggering CPU layout reflows",
          "`top` is deprecated in CSS3",
          "Transforms download fewer bytes",
          "Internet Explorer only supports transforms"
        ],
        answer: "Transforms run on the GPU compositor thread without triggering CPU layout reflows",
        explanation:
          "Modifying `top` forces the browser to recalculate the layout geometry of the entire page. Transforms bypass layout and paint entirely, running directly on the GPU."
      }
    ]
  },

  "css-ch7-l22": {
    overview:
      "CSS Transitions provide smooth state changes over time. Master `transition-property`, `transition-duration`, `transition-timing-function` (`ease`, `linear`, `cubic-bezier`), and `transition-delay`.",
    canDo:
      "Craft natural, refined micro-animations for hover, active, and focus states with smooth acceleration and deceleration curves.",
    teacherNote:
      "Avoid `transition: all 0.3s`. Specifying `all` forces the browser to check every single CSS property for changes. Always explicitly declare the properties being transitioned, e.g. `transition: transform 0.2s ease, opacity 0.2s ease;`.",
    sections: [
      {
        title: "Transition Properties Reference",
        description: "Components of the transition shorthand.",
        table: {
          headers: ["Property", "Shorthand Order", "Example Value", "Role"],
          rows: [
            ["transition-property", "1st", "transform, opacity, color", "The exact properties to animate smoothly"],
            ["transition-duration", "2nd", "0.2s, 300ms", "How long the animation takes to complete"],
            ["transition-timing-function", "3rd", "ease, ease-out, cubic-bezier(...)", "The acceleration curve of the animation"],
            ["transition-delay", "4th", "0.1s, 50ms", "Wait time before the animation starts"]
          ]
        }
      }
    ],
    practice: [
      {
        question: "Why should you avoid writing `transition: all 0.3s;` on performance-critical interfaces?",
        options: [
          "Because `all` forces the browser to monitor and evaluate all properties, causing performance drops",
          "Because `all` only works in Firefox",
          "Because `all` disables color transitions",
          "Because transitions must be at least 1 second long"
        ],
        answer: "Because `all` forces the browser to monitor and evaluate all properties, causing performance drops",
        explanation:
          "Declaring explicit properties (e.g. `transform, opacity`) allows the browser to optimize execution paths and avoid unintended transitions on unrelated properties."
      }
    ]
  },

  "css-ch7-l23": {
    overview:
      "While transitions animate between two states (A to B), `@keyframes` animations provide multi-stage timeline choreography with looping, directions, iteration counts, and keyframe percentages (0% to 100%).",
    canDo:
      "Build complex keyframe animations (spinners, pulse effects, skeleton loaders, floating hero graphics) using `@keyframes` and `animation` shorthand properties.",
    teacherNote:
      "Always respect user accessibility preferences with `@media (prefers-reduced-motion: reduce)`. Users with vestibular disorders can experience nausea from looping motion; provide a static fallback.",
    sections: [
      {
        title: "Animation Properties Reference",
        description: "Controlling multi-step keyframe sequences.",
        table: {
          headers: ["Property", "Example Value", "Purpose"],
          rows: [
            ["@keyframes", "@keyframes spin { to { transform: rotate(360deg); } }", "Defines the animation timeline and keyframe states"],
            ["animation-name", "spin, pulse, float", "Binds the element to a defined keyframe timeline"],
            ["animation-duration", "1.5s, 800ms", "Time required to complete one full cycle"],
            ["animation-iteration-count", "infinite, 3, 1", "How many times the animation repeats (`infinite` loops forever)"],
            ["animation-timing-function", "ease-in-out, linear", "Acceleration curve between keyframe steps"],
            ["animation-fill-mode", "forwards, backwards, both", "Retains the final keyframe styles after animation completes (`forwards`)"]
          ]
        }
      }
    ],
    practice: [
      {
        question: "What does `animation-fill-mode: forwards` do after an animation finishes?",
        options: [
          "It restarts the animation from the beginning",
          "It retains the styles applied by the final keyframe instead of reverting to original styles",
          "It deletes the element from the DOM",
          "It reverses the animation backwards"
        ],
        answer: "It retains the styles applied by the final keyframe instead of reverting to original styles",
        explanation:
          "`forwards` ensures that the element stays in the state defined by the last executed keyframe rather than snapping back to its pre-animation styles."
      }
    ]
  }
};
