import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_1_LESSONS: Record<string, LessonContent> = {
  "html-ch1-l1": {
    overview:
      "Every HTML5 web document begins with a standardized skeleton: the <!DOCTYPE html> preamble, the root <html> container, the invisible <head> metadata area, and the visible <body> content zone. Understanding this structure is essential for constructing standards-compliant web applications.",
    canDo:
      "Construct a valid HTML5 document skeleton with the appropriate doctype, root element, character encoding, title, and body containers.",
    teacherNote:
      "In HTML 4.01, the DOCTYPE required an obscure SGML DTD reference. In modern HTML5, the DOCTYPE is simply `<!DOCTYPE html>`. It is case-insensitive, but writing it in uppercase is the recognized industry standard.",
    sections: [
      {
        title: "The Four Structural Pillars of HTML",
        description: "The mandatory tags that define the boundary and context of every web page.",
        table: {
          headers: ["Element / Directive", "Location", "Purpose", "Visual Output"],
          rows: [
            ["<!DOCTYPE html>", "First line of file", "Instructs the browser rendering engine to render in No-Quirks Mode (Standards Mode)", "Invisible"],
            ["<html lang='en'>", "Root wrapper", "Encompasses all document nodes; declares primary natural language for accessibility", "Invisible"],
            ["<head>", "First child of <html>", "Holds document metadata, character sets, title, stylesheets, and scripts", "Invisible"],
            ["<body>", "Second child of <html>", "Contains all visible presentation elements (text, images, interactive controls)", "Visible rendering canvas"]
          ]
        },
        notes: [
          "Always specify the `lang` attribute on the `<html>` tag (e.g., `<html lang='en'>`). This allows screen readers to choose the correct voice engine and pronunciation rules.",
          "Failing to include `<!DOCTYPE html>` triggers browser 'Quirks Mode', which emulates Netscape 4 bugs and breaks modern CSS layout calculations."
        ]
      },
      {
        title: "Minimal HTML5 Boilerplate",
        description: "The complete valid foundation for modern web documents.",
        table: {
          headers: ["Line / Block", "Description"],
          rows: [
            ["<!DOCTYPE html>", "HTML5 Document Type declaration"],
            ["<html lang='en'>", "Root document element with language declaration"],
            ["  <head>", "Document configuration and metadata container"],
            ["    <meta charset='UTF-8'>", "Declares UTF-8 character encoding"],
            ["    <meta name='viewport' content='width=device-width, initial-scale=1.0'>", "Enables responsive viewport scaling on mobile devices"],
            ["    <title>Document Title</title>", "Sets the browser tab title and search engine search result title"],
            ["  </head>", "Closing head tag"],
            ["  <body>", "Visible page body content wrapper"],
            ["    <h1>Hello World</h1>", "Primary page heading"],
            ["  </body>", "Closing body tag"],
            ["</html>", "Closing html root element"]
          ]
        }
      }
    ],
    practice: [
      {
        question: "What happens if an HTML document omits the `<!DOCTYPE html>` declaration?",
        options: [
          "The browser completely refuses to load or render the page",
          "The browser enters 'Quirks Mode', rendering the page using legacy non-standard behavior",
          "JavaScript execution is disabled permanently",
          "The file is downloaded instead of being displayed"
        ],
        answer: "The browser enters 'Quirks Mode', rendering the page using legacy non-standard behavior",
        explanation:
          "Without a modern doctype, browsers switch to Quirks Mode to maintain compatibility with 1990s web pages, disrupting modern CSS Box Model sizing and Flexbox/Grid calculations."
      }
    ]
  },

  "html-ch1-l2": {
    overview:
      "The <head> section houses metadata that controls how browsers parse, scale, and index web documents. Learn how to configure character encoding with UTF-8, mobile viewports for responsive design, SEO descriptions, and social media Open Graph cards.",
    canDo:
      "Configure essential <meta> tags for UTF-8 character encoding, responsive viewport sizing, and search engine optimization.",
    teacherNote:
      "The `<meta charset='UTF-8'>` tag MUST appear within the first 1,024 bytes of the document. If placed too deep in the head, browsers may begin parsing using an incorrect encoding before encountering the charset rule.",
    sections: [
      {
        title: "Crucial <meta> Tags Reference",
        description: "Standard meta tags found in every production web application.",
        table: {
          headers: ["Meta Element", "Attribute / Content", "Functional Impact"],
          rows: [
            ["<meta charset='UTF-8'>", "charset='UTF-8'", "Supports all global languages, emojis, and special symbols without mojibake garbled characters"],
            ["<meta name='viewport'>", "content='width=device-width, initial-scale=1.0'", "Prevents mobile browsers from rendering at desktop 980px width; enables media queries"],
            ["<meta name='description'>", "content='Short summary under 160 chars'", "Provides the snippet snippet displayed in Google search engine result pages (SERPs)"],
            ["<meta name='robots'>", "content='index, follow'", "Controls search engine crawler indexing and link-following permissions"]
          ]
        },
        notes: [
          "The `<title>` tag is the most influential on-page SEO element and determines the label shown on browser tabs and social shares.",
          "Modern web applications also configure `<link rel='icon'>` for browser favicons and `<meta name='theme-color'>` for mobile browser toolbar coloring."
        ]
      }
    ],
    practice: [
      {
        question: "Why is the viewport meta tag `<meta name='viewport' content='width=device-width, initial-scale=1.0'>` mandatory for responsive web design?",
        options: [
          "It forces high-resolution monitors to zoom in by 200%",
          "It instructs mobile devices to set the layout width to the physical device screen width rather than a virtual desktop width",
          "It compresses images for mobile cellular networks",
          "It enables GPS geolocation tracking"
        ],
        answer: "It instructs mobile devices to set the layout width to the physical device screen width rather than a virtual desktop width",
        explanation:
          "Without this viewport tag, mobile mobile browsers assume the page was built for desktop and render it on a 980px virtual canvas, scaling it down and breaking CSS media queries."
      }
    ]
  },

  "html-ch1-l3": {
    overview:
      "HTML is composed of elements, tags, attributes, and text nodes. Understanding the syntactic rules—such as attribute quoting, element nesting hierarchies, void self-closing elements, and character entities—ensures documents validate cleanly across all browsers.",
    canDo:
      "Apply strict syntactic markup rules including attribute value quoting, hierarchical nesting without overlapping tags, and self-closing void elements.",
    teacherNote:
      "Unlike XML/XHTML, HTML5 does not require a closing slash on void elements (e.g. `<img src='pic.jpg'>` is fully valid; `<img src='pic.jpg' />` is also accepted for backward compatibility).",
    sections: [
      {
        title: "Syntax Rules: Elements vs. Void Elements",
        description: "Understanding container elements versus standalone void elements.",
        table: {
          headers: ["Category", "Example Elements", "Closing Tag Required?", "Can Contain Children?"],
          rows: [
            ["Normal Container Elements", "<p>, <div>, <span>, <section>, <h1>", "Yes (e.g. </p>, </div>)", "Yes (text, other elements)"],
            ["Void Elements", "<meta>, <link>, <img>, <br>, <hr>, <input>", "No closing tag allowed", "Never (they cannot have children)"],
            ["Raw Text Elements", "<script>, <style>", "Yes (</script>, </style>)", "Contains raw code, not HTML markup"]
          ]
        },
        notes: [
          "Elements must be cleanly nested: `<strong><em>Text</em></strong>` is correct; `<strong><em>Text</strong></em>` is invalid overlapping.",
          "Reserved characters like `<`, `>`, and `&` in text content must be written as entities: `&lt;`, `&gt;`, and `&amp;`."
        ]
      }
    ],
    practice: [
      {
        question: "Which of the following is a void element that must NOT have a closing tag in HTML5?",
        options: ["<p>", "<br>", "<div>", "<span>"],
        answer: "<br>",
        explanation:
          "`<br>` is a void element that represents a line break. It has no closing tag and cannot contain any child nodes."
      }
    ]
  }
};
