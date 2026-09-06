import { Course, Chapter } from "../../../types/course.types";
import { ALL_HTML_LESSONS_CONTENT } from "./lessons";

const HTML_RAW_CHAPTERS: Chapter[] = [
  {
    id: "html-ch1",
    title: "Chapter 1: Document Architecture & Foundations of Markup",
    lessons: [
      {
        id: "html-ch1-l1",
        title: "Lesson 1: The Anatomy of a Web Document: <!DOCTYPE>, <html>, <head>, and <body>",
        description: "Standard document skeleton, doctype declarations, root wrappers, and viewable DOM boundaries.",
      },
      {
        id: "html-ch1-l2",
        title: "Lesson 2: Document Metadata, <meta> Charset, Viewport & Search Engines",
        description: "Configuring UTF-8 character encoding, mobile responsive viewports, and essential search metadata.",
      },
      {
        id: "html-ch1-l3",
        title: "Lesson 3: The Rules of Markup: Syntax, Quoting, Nesting & Validation",
        description: "Case-sensitivity conventions, attribute quoting standards, nesting rules, and void self-closing elements.",
      },
    ],
  },
  {
    id: "html-ch2",
    title: "Chapter 2: Semantic Content & Text Structure",
    lessons: [
      {
        id: "html-ch2-l4",
        title: "Lesson 4: Heading Hierarchy (<h1>–<h6>) & Document Outlining",
        description: "Establishing an accessible outline, single h1 rules, and preventing heading level skips.",
      },
      {
        id: "html-ch2-l5",
        title: "Lesson 5: Paragraphs, Text Formatting (<strong>, <em>, <code>) & Quotes",
        description: "Semantic importance versus visual styling, computer code blocks, preformatted text, and highlights.",
      },
      {
        id: "html-ch2-l6",
        title: "Lesson 6: HTML5 Landmarks: <header>, <nav>, <main>, <article>, <section>, <footer>",
        description: "Modern page structure, accessibility landmarks, and eliminating div soup.",
      },
    ],
  },
  {
    id: "html-ch3",
    title: "Chapter 3: Hyperlinks, URLs & Media Embedding",
    lessons: [
      {
        id: "html-ch3-l7",
        title: "Lesson 7: Hyperlinks (<a>), Absolute vs. Relative URLs & Security Attributes",
        description: "Linking strategies, page anchors, mailto/tel protocols, and rel='noopener noreferrer' security.",
      },
      {
        id: "html-ch3-l8",
        title: "Lesson 8: Embedded Images (<img>), Responsive <picture> & Cumulative Layout Shift",
        description: "Image attributes, mandatory alt text, aspect ratio dimensions, and lazy loading performance.",
      },
      {
        id: "html-ch3-l9",
        title: "Lesson 9: Native Multimedia: Audio (<audio>) and Video (<video>) Integration",
        description: "Native media players, multi-source codecs, poster frames, and autoplay/muted policies.",
      },
    ],
  },
  {
    id: "html-ch4",
    title: "Chapter 4: Lists, Tables & Structured Data",
    lessons: [
      {
        id: "html-ch4-l10",
        title: "Lesson 10: Ordered (<ol>), Unordered (<ul>), and Description Lists (<dl>)",
        description: "Semantic groupings for navigation, procedural steps, and dictionary term/definition metadata.",
      },
      {
        id: "html-ch4-l11",
        title: "Lesson 11: Accessible Data Tables: <table>, <caption>, <thead>, <tbody>, and scope",
        description: "Structured tabular datasets, table summaries, row/column scopes, and screen reader headers.",
      },
      {
        id: "html-ch4-l12",
        title: "Lesson 12: Complex Cell Merging with colspan and rowspan",
        description: "Multi-row and multi-column cell spans, balancing grid dimensions, and headers associations.",
      },
    ],
  },
  {
    id: "html-ch5",
    title: "Chapter 5: Modern Interactive Forms & Input Controls",
    lessons: [
      {
        id: "html-ch5-l13",
        title: "Lesson 13: Form Architecture: <form>, Action, Method (GET vs POST), and Enctype",
        description: "HTTP payload mechanisms, query strings vs request bodies, and multipart file upload encoding.",
      },
      {
        id: "html-ch5-l14",
        title: "Lesson 14: Text Inputs, <label> Explicit Bindings, and Autocomplete",
        description: "Accessible label associations, placeholder best practices, and browser autofill hints.",
      },
      {
        id: "html-ch5-l15",
        title: "Lesson 15: Specialized HTML5 Inputs: email, tel, number, range, date, and color",
        description: "Triggering mobile-optimized keyboards, native date pickers, and range sliders.",
      },
      {
        id: "html-ch5-l16",
        title: "Lesson 16: Selection Controls: Checkboxes, Radio Buttons, and <select> Dropdowns",
        description: "Mutually exclusive radio groups, multi-select checkboxes, optgroups, and multi-line textareas.",
      },
      {
        id: "html-ch5-l17",
        title: "Lesson 17: Declarative Form Validation: required, pattern, min/max, and Pseudo-classes",
        description: "Zero-JS client-side validation rules, regular expressions, and CSS :valid/:invalid states.",
      },
    ],
  },
  {
    id: "html-ch6",
    title: "Chapter 6: HTML5 Canvas, SVG & Web Application APIs",
    lessons: [
      {
        id: "html-ch6-l18",
        title: "Lesson 18: Immediate-Mode 2D Graphics with <canvas>",
        description: "HTML5 canvas rendering buffer, 2D context drawing operations, and resolution sizing rules.",
      },
      {
        id: "html-ch6-l19",
        title: "Lesson 19: Retained-Mode Vector Graphics with Inline <svg>",
        description: "Embedding scalable vectors, CSS fill/stroke styling, and Canvas versus SVG architecture.",
      },
      {
        id: "html-ch6-l20",
        title: "Lesson 20: Client Web Storage (localStorage) and Custom Data Attributes (data-*)",
        description: "Persistent browser storage, session lifetimes, and accessing DOM dataset properties.",
      },
    ],
  },
];

const HTML_CHAPTERS: Chapter[] = HTML_RAW_CHAPTERS.map((chapter) => ({
  ...chapter,
  lessons: chapter.lessons.map((lesson) => ({
    ...lesson,
    content: ALL_HTML_LESSONS_CONTENT[lesson.id],
  })),
}));

export const htmlCourse: Course = {
  id: "html-complete-course",
  title: "HTML5 & Web Markup: The Complete Reference",
  category: "Development",
  type: "Full Course",
  typeIcon: "path",
  structureType: "chapters-and-lessons",
  tag1: "HTML5 & Markup",
  tag2: "Beginner to Professional",
  badgeCount: "",
  coverVariant: "code-architecture",
  imageUrl: "/course-images/html-course.jpg",
  buttonLabel: "Start",
  description:
    "The authoritative reference to modern HTML5 and web markup architecture based on Thomas Powell's Complete Reference. Master document anatomy, semantic elements, accessible tables, interactive forms, canvas graphics, and web application APIs.",
  featured: true,
  totalChapters: HTML_CHAPTERS.length,
  totalLessons: HTML_CHAPTERS.reduce((acc, ch) => acc + ch.lessons.length, 0),
  progressStatus: {
    type: "status",
    statusText: "New",
  },
  chapters: HTML_CHAPTERS,
};
