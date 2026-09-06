import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_3_LESSONS: Record<string, LessonContent> = {
  "html-ch3-l7": {
    overview:
      "The hyperlink (`<a>`) is the foundational connective tissue of the World Wide Web. Learn how to configure absolute and relative URLs, fragment jump links, mailto/tel protocols, and essential security attributes like `rel='noopener noreferrer'`.",
    canDo:
      "Create accessible links to external pages, internal documents, page section anchors, email clients, and downloadable files with proper security attributes.",
    teacherNote:
      "Whenever using `target='_blank'` to open links in a new tab, always include `rel='noopener noreferrer'`. Without this, the opened page gains access to your window object via `window.opener`, posing a reverse tabnabbing security vulnerability.",
    sections: [
      {
        title: "Anchor Tag Attributes Reference",
        description: "Key attributes that configure link behavior.",
        table: {
          headers: ["Attribute", "Value Example", "Description"],
          rows: [
            ["href", "https://example.com or #section", "The URL or fragment target of the link"],
            ["target", "_blank, _self, _top", "Where to open the linked URL (_blank opens new tab)"],
            ["rel", "noopener noreferrer nofollow", "Relationship between current page and linked URL (Security & SEO)"],
            ["download", "report.pdf", "Prompts the browser to download the file rather than navigate to it"]
          ]
        }
      }
    ],
    practice: [
      {
        question: "Why should `rel='noopener'` always accompany `target='_blank'`?",
        options: [
          "To speed up the network download speed",
          "To prevent the newly opened tab from controlling the parent window via `window.opener`",
          "To force the link to open in full screen",
          "To tell search engines to ignore the link"
        ],
        answer: "To prevent the newly opened tab from controlling the parent window via `window.opener`",
        explanation:
          "Without `noopener`, the target page can execute malicious code in the opening page via the `window.opener` API."
      }
    ]
  },

  "html-ch3-l8": {
    overview:
      "Embedding graphics is crucial for modern web development. Understand the `<img>` element, mandatory `alt` text for screen readers, intrinsic sizing, the responsive `<picture>` element, and semantic `<figure>`/`<figcaption>` groupings.",
    canDo:
      "Embed responsive images with proper aspect ratio attributes, alternative descriptions for accessibility, and multiple resolution sources via `<picture>` and `srcset`.",
    teacherNote:
      "Always include `width` and `height` attributes on `<img>` tags (e.g. `<img width='800' height='450'>`). Browsers use these attributes to compute the aspect ratio before the image downloads, completely eliminating Cumulative Layout Shift (CLS).",
    sections: [
      {
        title: "Modern Image Best Practices",
        description: "Comparison of image embedding approaches.",
        table: {
          headers: ["Pattern", "Syntax Example", "Key Advantage"],
          rows: [
            ["Standard Image", "<img src='logo.svg' alt='Company Logo'>", "Basic graphic embedding with required alt text"],
            ["Prevent Layout Shift", "<img src='photo.jpg' alt='Landscape' width='800' height='600'>", "Reserves space before network download completes"],
            ["Lazy Loading", "<img src='photo.jpg' alt='' loading='lazy'>", "Defers offscreen image loading until user scrolls near"],
            ["Semantic Figure", "<figure><img src='chart.png' alt='Sales'><figcaption>Q3 Sales</figcaption></figure>", "Pairs graphic with an accessible visible caption"]
          ]
        }
      }
    ],
    practice: [
      {
        question: "What is the primary purpose of adding explicit `width` and `height` attributes to an `<img>` tag?",
        options: [
          "It forces the image to download faster over 4G",
          "It allows the browser to calculate the aspect ratio and reserve layout space, eliminating layout shift",
          "It converts JPG images to WebP automatically",
          "It makes the image accessible to screen readers"
        ],
        answer: "It allows the browser to calculate the aspect ratio and reserve layout space, eliminating layout shift",
        explanation:
          "Explicit dimension attributes allow browsers to calculate the aspect ratio before image assets download, preventing Cumulative Layout Shift (CLS)."
      }
    ]
  },

  "html-ch3-l9": {
    overview:
      "HTML5 eliminated the need for third-party browser plugins like Flash by introducing native `<audio>` and `<video>` elements. Learn how to configure media sources, playback controls, poster frames, and accessible `<track>` subtitles.",
    canDo:
      "Embed native audio and video players with multi-format `<source>` fallbacks, custom poster images, and accessibility captions.",
    teacherNote:
      "Always provide multiple `<source>` formats (e.g. MP4/H.264 and WebM) to guarantee cross-browser compatibility across Safari, Chrome, and Firefox.",
    sections: [
      {
        title: "Media Attributes and Controls",
        description: "Core attributes for `<audio>` and `<video>` tags.",
        table: {
          headers: ["Attribute", "Type", "Functionality"],
          rows: [
            ["controls", "Boolean", "Displays the browser native play/pause, volume, and seek bar"],
            ["autoplay", "Boolean", "Starts playing automatically (modern browsers require `muted` as well)"],
            ["muted", "Boolean", "Mutes the audio track by default"],
            ["loop", "Boolean", "Restarts playback automatically upon reaching the end"],
            ["poster", "URL", "Specifies a preview image to display before video playback begins"]
          ]
        }
      }
    ],
    practice: [
      {
        question: "Why do modern browsers block video autoplay unless the `muted` attribute is also specified?",
        options: [
          "To save video processing power on CPUs",
          "To protect users from loud, unwanted audio playback upon page load",
          "Because video files are too large without muting",
          "Due to patent restrictions on audio decoders"
        ],
        answer: "To protect users from loud, unwanted audio playback upon page load",
        explanation:
          "User experience policies in all major browsers require videos with `autoplay` to also be `muted` to prevent startling users."
      }
    ]
  }
};
