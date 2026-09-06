import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_4_LESSONS: Record<string, LessonContent> = {
  "css-ch4-l12": {
    overview:
      "Flexbox (Flexible Box Layout) revolutionized one-dimensional CSS page layouts. Understand the relationship between the Flex Container (`display: flex`) and Flex Items, and the foundational Main Axis vs. Cross Axis geometry.",
    canDo:
      "Establish a flex container, switch between row and column orientations using `flex-direction`, and manage automatic sizing of flex items.",
    teacherNote:
      "The Main Axis is determined by `flex-direction`. When `flex-direction: row` (the default), the main axis runs horizontally. When `flex-direction: column`, the main axis runs vertically, flipping how alignment properties behave.",
    sections: [
      {
        title: "Flexbox Axes & Direction",
        description: "How axis orientation governs Flexbox layout calculations.",
        table: {
          headers: ["flex-direction", "Main Axis Direction", "Cross Axis Direction", "Default Alignment Rule"],
          rows: [
            ["row (Default)", "Horizontal (Left to Right)", "Vertical (Top to Bottom)", "Items line up side by side in a row"],
            ["row-reverse", "Horizontal (Right to Left)", "Vertical (Top to Bottom)", "Items line up in reverse horizontal order"],
            ["column", "Vertical (Top to Bottom)", "Horizontal (Left to Right)", "Items stack vertically in a column"],
            ["column-reverse", "Vertical (Bottom to Top)", "Horizontal (Left to Right)", "Items stack vertically in reverse order"]
          ]
        }
      }
    ],
    practice: [
      {
        question: "When `flex-direction: column` is set on a flex container, which axis does `justify-content` align along?",
        options: [
          "The horizontal axis",
          "The vertical axis (which is now the main axis)",
          "Both axes simultaneously",
          "It is ignored in column mode"
        ],
        answer: "The vertical axis (which is now the main axis)",
        explanation:
          "`justify-content` ALWAYS aligns along the Main Axis. When `flex-direction: column` is active, the vertical axis is the Main Axis."
      }
    ]
  },

  "css-ch4-l13": {
    overview:
      "Flexbox provides powerful alignment controls on the container: `justify-content` (main axis distribution), `align-items` (cross axis alignment), and `gap` (clean gutters between items without margins).",
    canDo:
      "Center items perfectly with `justify-content: center` and `align-items: center`, distribute navigation menus with `space-between`, and create gutters using `gap`.",
    teacherNote:
      "Before the `gap` property was supported in Flexbox, developers had to use complex negative margin hacks (`margin-right: -15px`). Today, `gap: 1.5rem` cleanly spaces flex items with zero margin collateral damage.",
    sections: [
      {
        title: "Flex Container Alignment Properties",
        description: "Controlling distribution and alignment of child items.",
        table: {
          headers: ["Property", "Axis Controlled", "Common Values", "Common Application"],
          rows: [
            ["justify-content", "Main Axis", "flex-start, center, flex-end, space-between, space-around", "Distributing header navbar links or card buttons"],
            ["align-items", "Cross Axis", "stretch, center, flex-start, flex-end, baseline", "Centering icons with text or stretching card heights"],
            ["gap", "Both Axes", "1rem, 20px, 1rem 2rem", "Clean gutters between items (both row and column gutters)"],
            ["flex-wrap", "Wrapping", "nowrap, wrap, wrap-reverse", "Allows items to break onto multi-line rows on smaller screens"]
          ]
        }
      }
    ],
    practice: [
      {
        question: "How do you achieve absolute horizontal and vertical centering of a child item inside a flex container?",
        options: [
          "display: flex; justify-content: center; align-items: center;",
          "display: flex; margin: auto center;",
          "display: flex; text-align: center; vertical-align: middle;",
          "display: flex; center: true;"
        ],
        answer: "display: flex; justify-content: center; align-items: center;",
        explanation:
          "Combining `justify-content: center` (main axis) with `align-items: center` (cross axis) centers child items perfectly in both dimensions."
      }
    ]
  },

  "css-ch4-l14": {
    overview:
      "Flex items have dynamic sizing behaviors configured via `flex-grow`, `flex-shrink`, `flex-basis`, or the consolidated `flex` shorthand. Learn how to allocate available free space and control item expansion.",
    canDo:
      "Configure flex items to expand into remaining space (`flex-grow: 1`), resist shrinking (`flex-shrink: 0`), and control visual reordering via `order`.",
    teacherNote:
      "Always use the shorthand `flex: 1` instead of specifying `flex-grow: 1` alone. `flex: 1` sets `flex: 1 1 0%`, ensuring items expand equally regardless of their initial content length.",
    sections: [
      {
        title: "Flex Item Sizing Properties",
        description: "How individual flex children react to container space changes.",
        table: {
          headers: ["Property", "Role", "Default Value", "Practical Use Case"],
          rows: [
            ["flex-grow", "Growth factor into free space", "0 (does not grow)", "Stretching search bar to fill remaining header width"],
            ["flex-shrink", "Shrinking factor when overflowing", "1 (shrinks equally)", "Setting `flex-shrink: 0` on avatar icons to prevent squishing"],
            ["flex-basis", "Initial starting size before flexing", "auto", "Setting starting width of sidebar or column"],
            ["flex (Shorthand)", "Combines grow, shrink, basis", "0 1 auto", "`flex: 1` makes all sibling cards equally wide"],
            ["order", "Alters visual sequence", "0", "Reordering mobile elements without changing HTML DOM order"]
          ]
        }
      }
    ],
    practice: [
      {
        question: "Why would you apply `flex-shrink: 0` to a profile avatar icon inside a flex row?",
        options: [
          "To make the avatar round",
          "To prevent the image from being squished when adjacent text expands in tight viewports",
          "To make the avatar fill the entire screen",
          "To disable CSS animations"
        ],
        answer: "To prevent the image from being squished when adjacent text expands in tight viewports",
        explanation:
          "`flex-shrink: 0` guarantees the item retains its exact dimensions and refuses to shrink below its `flex-basis`."
      }
    ]
  }
};
