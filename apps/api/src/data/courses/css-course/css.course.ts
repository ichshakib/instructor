import { Course, Chapter } from "../../../types/course.types";
import { ALL_CSS_LESSONS_CONTENT } from "./lessons";

const CSS_RAW_CHAPTERS: Chapter[] = [
  {
    id: "css-ch1",
    title: "Chapter 1: The Cascading Paradigm, Selectors & Specificity",
    lessons: [
      {
        id: "css-ch1-l1",
        title: "Lesson 1: How CSS Works: Rules, Syntax & Three Inclusion Methods",
        description: "Separation of concerns, rule declarations, external link stylesheets, and embedded style blocks.",
      },
      {
        id: "css-ch1-l2",
        title: "Lesson 2: Core Selectors: Universal, Type, Class, ID, and Combinators",
        description: "Targeting elements, child combinators, descendant relationships, and attribute selectors.",
      },
      {
        id: "css-ch1-l3",
        title: "Lesson 3: The Cascade, Specificity Weighting, and Inheritance",
        description: "Calculating specificity vectors (A,B,C,D), cascade resolution, and property inheritance.",
      },
      {
        id: "css-ch1-l4",
        title: "Lesson 4: Pseudo-classes (:hover, :focus) and Pseudo-elements (::before, ::after)",
        description: "Dynamic user interface states, keyboard focus accessibility, and virtual DOM content injection.",
      },
    ],
  },
  {
    id: "css-ch2",
    title: "Chapter 2: The CSS Box Model, Sizing & Units",
    lessons: [
      {
        id: "css-ch2-l5",
        title: "Lesson 5: Deconstructing the Box Model: Content, Padding, Border, Margin",
        description: "The four concentric layers, vertical margin collapse, and dimensional debugging.",
      },
      {
        id: "css-ch2-l6",
        title: "Lesson 6: The box-sizing: border-box Paradigm & Universal Reset",
        description: "Eliminating padding/border sizing overflow bugs with modern border-box calculations.",
      },
      {
        id: "css-ch2-l7",
        title: "Lesson 7: Absolute vs. Relative Length Units: px, rem, em, %, vh, vw",
        description: "Scalable accessibility units, root-relative rem measurements, and viewport geometry.",
      },
      {
        id: "css-ch2-l8",
        title: "Lesson 8: Overflow Management (visible, hidden, scroll, auto) & Focus Outlines",
        description: "Container scrolling, clipping overflows, and non-layout-shifting outline focus rings.",
      },
    ],
  },
  {
    id: "css-ch3",
    title: "Chapter 3: Visual Presentation: Colors, Backgrounds & Typography",
    lessons: [
      {
        id: "css-ch3-l9",
        title: "Lesson 9: Color Models in Modern CSS: Hex, RGB, HSL & Design Tokens",
        description: "HSL color wheels, alpha transparency channels, and CSS custom property variables.",
      },
      {
        id: "css-ch3-l10",
        title: "Lesson 10: Background Styling: Gradients, Cover Sizing & Parallax",
        description: "Multi-stop linear gradients, responsive background-size: cover, and position centering.",
      },
      {
        id: "css-ch3-l11",
        title: "Lesson 11: Web Typography: Font Stacks, @font-face & Line Heights",
        description: "Font hierarchy, performance loading of web fonts, and unitless line-height scaling.",
      },
    ],
  },
  {
    id: "css-ch4",
    title: "Chapter 4: Modern One-Dimensional Layouts with Flexbox",
    lessons: [
      {
        id: "css-ch4-l12",
        title: "Lesson 12: Flexbox Architecture: The Flex Container & Axis Orientation",
        description: "Main Axis versus Cross Axis geometry, flex-direction row vs column, and item alignment.",
      },
      {
        id: "css-ch4-l13",
        title: "Lesson 13: Flex Container Alignment: justify-content, align-items & gap",
        description: "Centering UI components, distributing nav links with space-between, and gutter spacing.",
      },
      {
        id: "css-ch4-l14",
        title: "Lesson 14: Flex Item Sizing: flex-grow, flex-shrink, flex-basis & order",
        description: "Dynamic space allocation, preventing image squishing with flex-shrink: 0, and reordering.",
      },
    ],
  },
  {
    id: "css-ch5",
    title: "Chapter 5: Two-Dimensional Page Composition with CSS Grid",
    lessons: [
      {
        id: "css-ch5-l15",
        title: "Lesson 15: Grid Foundations: Display Grid, Explicit vs Implicit Tracks",
        description: "Two-dimensional layout grid containers, defining column tracks, and grid gap spacing.",
      },
      {
        id: "css-ch5-l16",
        title: "Lesson 16: Grid Sizing Power: Fractional Units (fr), repeat(), and minmax()",
        description: "Allocating free grid space with fr units, repeating track definitions, and minmax boundaries.",
      },
      {
        id: "css-ch5-l17",
        title: "Lesson 17: Responsive Grids without Media Queries: auto-fit vs auto-fill",
        description: "Automated multi-column wrapping, grid-template-areas, and self-responsive card catalogs.",
      },
    ],
  },
  {
    id: "css-ch6",
    title: "Chapter 6: Responsive Web Design & Media Queries",
    lessons: [
      {
        id: "css-ch6-l18",
        title: "Lesson 18: Mobile-First Responsive Design Principles & Viewports",
        description: "Progressive enhancement, mobile base styles, and min-width media query architecture.",
      },
      {
        id: "css-ch6-l19",
        title: "Lesson 19: Media Query Syntax, Width Breakpoints & Dark Mode",
        description: "Standard viewport thresholds (sm, md, lg, xl) and prefers-color-scheme detection.",
      },
      {
        id: "css-ch6-l20",
        title: "Lesson 20: Fluid Typography (clamp()) & Modern Container Queries",
        description: "Mathematical fluid scaling with clamp() and parent-aware component container queries.",
      },
    ],
  },
  {
    id: "css-ch7",
    title: "Chapter 7: Dynamic Effects: Transforms, Transitions & Animations",
    lessons: [
      {
        id: "css-ch7-l21",
        title: "Lesson 21: CSS Transforms: 2D & 3D GPU-Accelerated Manipulations",
        description: "Translating, rotating, and scaling elements on the GPU compositor without reflows.",
      },
      {
        id: "css-ch7-l22",
        title: "Lesson 22: Smooth State Transitions: Duration, Timing Curves & Delays",
        description: "Crafting polished hover and focus transitions with explicit property targeting.",
      },
      {
        id: "css-ch7-l23",
        title: "Lesson 23: Keyframe Choreography: @keyframes, Infinite Loops & Accessibility",
        description: "Multi-step timeline animations, animation-fill-mode: forwards, and prefers-reduced-motion.",
      },
    ],
  },
];

const CSS_CHAPTERS: Chapter[] = CSS_RAW_CHAPTERS.map((chapter) => ({
  ...chapter,
  lessons: chapter.lessons.map((lesson) => ({
    ...lesson,
    content: ALL_CSS_LESSONS_CONTENT[lesson.id],
  })),
}));

export const cssCourse: Course = {
  id: "css-complete-course",
  title: "CSS & CSS3 Styling: The Complete Reference",
  category: "Development",
  type: "Full Course",
  typeIcon: "path",
  structureType: "chapters-and-lessons",
  tag1: "CSS3 & Styling",
  tag2: "Beginner to Professional",
  badgeCount: "",
  coverVariant: "layout-wireframe",
  imageUrl: "/course-images/css-course.jpg",
  buttonLabel: "Start",
  description:
    "Master modern web styling from first principles to advanced CSS3 based on Thomas Powell's Complete Reference. Comprehensive coverage of specificity, the Box Model, Flexbox, CSS Grid, custom properties, responsive design, and fluid transitions.",
  featured: true,
  totalChapters: CSS_CHAPTERS.length,
  totalLessons: CSS_CHAPTERS.reduce((acc, ch) => acc + ch.lessons.length, 0),
  progressStatus: {
    type: "status",
    statusText: "New",
  },
  chapters: CSS_CHAPTERS,
};
