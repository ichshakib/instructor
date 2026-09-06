import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_3_LESSONS: Record<string, LessonContent> = {
  "css-ch3-l9": {
    overview:
      "Color brings web interfaces to life. Master the evolution of CSS color models: Hexadecimal (`#rrggbb`), RGB/RGBA (`rgb(24, 25, 30)`), HSL (`hsl(42, 90%, 55%)`), and modern CSS variables for design system tokens.",
    canDo:
      "Express colors accurately in RGB, Hex, and HSL formats, control opacity channels, and establish reusable CSS Custom Properties (`--color-primary`).",
    teacherNote:
      "HSL (Hue, Saturation, Lightness) is by far the most intuitive color model for developers. To create a hover state in HSL, you simply adjust the Lightness value by +5% or -5% without recalculating red, green, and blue values.",
    sections: [
      {
        title: "CSS Color Models Compared",
        description: "Primary formats for declaring colors in modern CSS.",
        table: {
          headers: ["Format", "Syntax Example", "Human Readability", "Alpha Channel Support"],
          rows: [
            ["Hexadecimal", "#18191e or #18191e80", "Low (requires hex conversion)", "Yes (#RRGGBBAA)"],
            ["RGB / RGBA", "rgb(24 25 30 / 0.8)", "Medium (0-255 channels)", "Yes (via slash or rgba)"],
            ["HSL", "hsl(42deg 90% 55% / 0.9)", "High (Hue angle, % Sat, % Light)", "Yes (via slash or hsla)"],
            ["Custom Property", "var(--brand-gold, #FBBF24)", "Highest (named semantic token)", "Inherits from assigned variable"]
          ]
        }
      }
    ],
    practice: [
      {
        question: "In HSL color notation `hsl(210, 80%, 40%)`, what does the first number (210) represent?",
        options: [
          "The color angle on the color wheel in degrees",
          "The percentage of blue pigment",
          "The contrast ratio against white",
          "The font weight"
        ],
        answer: "The color angle on the color wheel in degrees",
        explanation:
          "Hue is represented as a 0 to 360-degree angle on the standard color wheel (0 = Red, 120 = Green, 240 = Blue)."
      }
    ]
  },

  "css-ch3-l10": {
    overview:
      "CSS background properties offer immense visual flexibility: `background-color`, linear and radial gradients, `background-image`, tiling controls (`background-repeat`), and responsive scaling (`background-size: cover` and `contain`).",
    canDo:
      "Create full-bleed hero banners, multi-color gradients, and responsive background images that never distort across differing screen aspect ratios.",
    teacherNote:
      "When building hero headers, use `background-size: cover` combined with `background-position: center`. This ensures the graphic fills the entire container while keeping the visual focal point centered.",
    sections: [
      {
        title: "Key Background Properties",
        description: "Core CSS background styling tools.",
        table: {
          headers: ["Property", "Common Values", "Visual Effect"],
          rows: [
            ["background-image", "url('hero.jpg'), linear-gradient(...)", "Applies visual asset or algorithmic gradient"],
            ["background-size", "cover, contain, 100% auto", "Scales image to fill (cover) or fit without clipping (contain)"],
            ["background-position", "center, top right, 50% 50%", "Anchors focal point within the container"],
            ["background-repeat", "no-repeat, repeat-x, repeat", "Prevents or enables image tiling across excess space"],
            ["background-attachment", "scroll, fixed", "Creates parallax effect when set to `fixed`"]
          ]
        }
      }
    ],
    practice: [
      {
        question: "What is the behavior of `background-size: cover`?",
        options: [
          "It stretches the image disproportionately to touch all four edges",
          "It scales the image while maintaining aspect ratio so the entire container is covered, clipping excess if needed",
          "It tiles the image in a repeating pattern",
          "It shrinks the image so all edges are completely visible with white letterboxing"
        ],
        answer: "It scales the image while maintaining aspect ratio so the entire container is covered, clipping excess if needed",
        explanation:
          "`cover` guarantees no empty background space remains visible while preserving the original aspect ratio."
      }
    ]
  },

  "css-ch3-l11": {
    overview:
      "Typography accounts for over 90% of web communication. Master font stacks (`font-family`), system fonts, Google Fonts / `@font-face` loading, line height (`line-height`), and vertical rhythm for maximum readability.",
    canDo:
      "Establish accessible typography scales, load custom web fonts efficiently, and set proportional line-heights for clean readability.",
    teacherNote:
      "Always declare `line-height` as a unitless multiplier (e.g. `line-height: 1.5;` rather than `line-height: 24px;`). Unitless line heights scale automatically when font sizes change in nested child elements.",
    sections: [
      {
        title: "Typography Properties & Best Practices",
        description: "Configuring readable, high-performance web text.",
        table: {
          headers: ["Property", "Recommended Values", "Best Practice"],
          rows: [
            ["font-family", "'Inter', system-ui, sans-serif", "Always end font stacks with a generic fallback (`sans-serif` or `serif`)"],
            ["line-height", "1.4 to 1.6 (unitless)", "Body text requires 1.5 for comfortable reading; headings need tighter 1.1–1.2"],
            ["letter-spacing", "-0.02em (headings), normal (body)", "Slightly tighten large display headings; avoid over-tracking lowercase body copy"],
            ["font-weight", "400 (regular), 600 (semibold), 700 (bold)", "Only load font weights you actually use to reduce page weight"]
          ]
        }
      }
    ],
    practice: [
      {
        question: "Why should `line-height` be set as a unitless number (e.g., `1.5`) rather than a fixed pixel value (e.g., `24px`)?",
        options: [
          "Pixels are not supported by mobile browsers",
          "Unitless line-height scales proportionately if child elements change font size, preventing text overlapping",
          "Unitless numbers download faster",
          "It makes text bold automatically"
        ],
        answer: "Unitless line-height scales proportionately if child elements change font size, preventing text overlapping",
        explanation:
          "Unitless line-heights are inherited as a ratio of the element's own computed font-size, preventing child elements with larger fonts from crashing into each other."
      }
    ]
  }
};
