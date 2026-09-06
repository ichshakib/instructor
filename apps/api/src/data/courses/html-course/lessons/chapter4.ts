import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_4_LESSONS: Record<string, LessonContent> = {
  "html-ch4-l10": {
    overview:
      "Lists are the primary semantic vehicle for groupings of related items. Master unordered bulleted lists (<ul>), ordered sequential lists (<ol>), and definition/description lists (<dl>, <dt>, <dd>) for glossaries, metadata pairs, and dictionary terms.",
    canDo:
      "Select and code the appropriate list structure for menus, procedural steps, and key-value metadata pairs.",
    teacherNote:
      "Navigation bars should almost always be marked up as `<nav><ul><li><a>...` because screen readers announce 'Navigation, list of 4 items', allowing visually impaired users to know how many options exist.",
    sections: [
      {
        title: "HTML List Types Comparison",
        description: "Three standard list elements in modern markup.",
        table: {
          headers: ["List Type", "Primary Element", "Child Elements", "Semantic Purpose"],
          rows: [
            ["Unordered List", "<ul>", "<li>", "Collections where sequence order does not matter (features, menus)"],
            ["Ordered List", "<ol>", "<li>", "Sequences where order is significant (recipes, step-by-step guides)"],
            ["Description List", "<dl>", "<dt> (term), <dd> (description)", "Key-value pairs, glossaries, metadata specifications"]
          ]
        }
      }
    ],
    practice: [
      {
        question: "Which HTML elements are used to construct a description or definition list?",
        options: [
          "<dl>, <dt>, and <dd>",
          "<ol>, <li>, and <def>",
          "<ul>, <li>, and <val>",
          "<dict>, <term>, and <desc>"
        ],
        answer: "<dl>, <dt>, and <dd>",
        explanation:
          "`<dl>` is the description list container, `<dt>` represents the term/key, and `<dd>` represents the description/value."
      }
    ]
  },

  "html-ch4-l11": {
    overview:
      "HTML tables must be reserved exclusively for tabular data (financials, schedules, statistics), never for visual layout. Learn how to structure clean, accessible tables using <table>, <caption>, <thead>, <tbody>, <tfoot>, and <th> with scope attributes.",
    canDo:
      "Construct accessible tabular datasets with distinct headers, captions, column scopes, and row headers for screen readers.",
    teacherNote:
      "Never use tables for page layouts. CSS Flexbox and Grid have replaced legacy table-based designs. Tables in HTML are strictly for data matrices.",
    sections: [
      {
        title: "Anatomy of an Accessible Data Table",
        description: "The core semantic components of a compliant table.",
        table: {
          headers: ["Element", "Role", "Required Attribute", "Screen Reader Impact"],
          rows: [
            ["<caption>", "Table title and summary", "None (Must be first child of <table>)", "Announced immediately when table is encountered"],
            ["<thead>", "Header container", "None", "Separates column definitions from data rows"],
            ["<tbody>", "Main data container", "None", "Groups repeating data cells"],
            ["<tfoot>", "Summary / totals row", "None", "Presented as concluding calculation row"],
            ["<th>", "Header cell", "scope='col' or scope='row'", "Associates data cells with their respective header"]
          ]
        }
      }
    ],
    practice: [
      {
        question: "What is the primary function of the `scope='col'` attribute on a `<th>` element?",
        options: [
          "It sets the width of the column in pixels",
          "It explicitly declares that the header applies to all cells in the column for assistive tech",
          "It highlights the column with a CSS background color",
          "It enables sorting on the column"
        ],
        answer: "It explicitly declares that the header applies to all cells in the column for assistive tech",
        explanation:
          "`scope='col'` provides an explicit association between the header and all cells in that vertical column for screen-reader speech synthesis."
      }
    ]
  },

  "html-ch4-l12": {
    overview:
      "Real-world data often requires cells spanning multiple columns or rows. Learn how to safely implement `colspan` and `rowspan` without distorting the table matrix or breaking accessibility.",
    canDo:
      "Construct complex multi-dimensional tables using cell merging while keeping the underlying grid geometry mathematically balanced.",
    teacherNote:
      "When using `rowspan='2'`, remember that the row immediately below MUST omit that cell in its HTML markup. Forgetting to omit the cell pushes adjacent cells rightward, breaking the layout.",
    sections: [
      {
        title: "Cell Merging Attributes",
        description: "Controlling column and row span across table cells.",
        table: {
          headers: ["Attribute", "Valid Elements", "Value", "Effect"],
          rows: [
            ["colspan", "<th>, <td>", "Integer (e.g. 2, 3)", "Stretches cell horizontally across N columns"],
            ["rowspan", "<th>, <td>", "Integer (e.g. 2, 3)", "Stretches cell vertically across N rows"],
            ["headers", "<td>", "Space-separated ID list", "Manually links complex merged cells to arbitrary <th> ids"]
          ]
        }
      }
    ],
    practice: [
      {
        question: "If a `<td>` in Row 1 has `rowspan='2'`, what must you do in Row 2?",
        options: [
          "Add another `<td>` with `rowspan='2'`",
          "Omit one `<td>` in Row 2 to account for the spanned cell from Row 1",
          "Add an empty `<td null>` in Row 2",
          "Nothing; the browser automatically shifts cells"
        ],
        answer: "Omit one `<td>` in Row 2 to account for the spanned cell from Row 1",
        explanation:
          "Because the cell from Row 1 extends down into Row 2, Row 2 must have one fewer `<td>` element in its markup to maintain grid alignment."
      }
    ]
  }
};
