import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_5_LESSONS: Record<string, LessonContent> = {
  "html-ch5-l13": {
    overview:
      "Web forms are the primary mechanism for collecting user input and sending data to servers. Learn the core mechanics of the `<form>` element, HTTP methods (GET vs. POST), encoding types (`enctype`), and server action endpoints.",
    canDo:
      "Configure web forms with the correct HTTP submission method and encoding type for both standard text data and binary file uploads.",
    teacherNote:
      "Never use `method='GET'` for passwords, credit cards, or sensitive information. GET parameters are appended to the URL query string and saved in browser histories, server logs, and web caches.",
    sections: [
      {
        title: "HTTP Form Submission Methods",
        description: "Differences between GET and POST in web forms.",
        table: {
          headers: ["Method", "Data Payload", "URL Visibility", "Ideal Use Case"],
          rows: [
            ["GET", "Appended to URL query string (?key=value)", "Visible in address bar and browser history", "Search queries, filters, pageable parameters"],
            ["POST", "Sent in HTTP request body", "Hidden from URL address bar", "User logins, registrations, payments, state changes"]
          ]
        },
        notes: [
          "When allowing users to upload files via `<input type='file'>`, you MUST specify `enctype='multipart/form-data'` on the `<form>` tag."
        ]
      }
    ],
    practice: [
      {
        question: "Which `enctype` attribute value is required on a `<form>` to permit file uploads?",
        options: [
          "application/x-www-form-urlencoded",
          "multipart/form-data",
          "text/plain",
          "application/json"
        ],
        answer: "multipart/form-data",
        explanation:
          "`multipart/form-data` encodes file contents as separate binary parts within the HTTP POST request payload."
      }
    ]
  },

  "html-ch5-l14": {
    overview:
      "Text inputs and labels form the backbone of form user interfaces. Learn how to establish explicit `<label for='...'>` bindings with `<input id='...'>` to optimize accessibility, click targets, and keyboard navigation.",
    canDo:
      "Create fully accessible text fields with explicit label associations, placeholders, names, and auto-completion hints.",
    teacherNote:
      "Placeholders are NOT substitutes for labels. Placeholders disappear once a user starts typing, which degrades usability and causes accessibility violations. Always include a visible `<label>`.",
    sections: [
      {
        title: "Form Input Attributes Reference",
        description: "Essential attributes for text input controls.",
        table: {
          headers: ["Attribute", "Purpose", "Example", "Accessibility Importance"],
          rows: [
            ["id", "Unique element identifier", "id='user-email'", "Target of `<label for='user-email'>`"],
            ["name", "Field name submitted in HTTP payload", "name='email'", "Required for backend server parsing"],
            ["placeholder", "Temporary visual hint", "placeholder='you@example.com'", "Should not contain required instructions"],
            ["autocomplete", "Assists browser autofill", "autocomplete='username'", "Greatly speeds up checkout/login conversion"]
          ]
        }
      }
    ],
    practice: [
      {
        question: "How do you explicitly connect a `<label>` to an `<input>` field?",
        options: [
          "Set the label's `for` attribute to match the input's `id` attribute",
          "Set the label's `name` attribute to match the input's `name` attribute",
          "Place them on the same line of code",
          "Wrap both inside a <div> with class='form-group'"
        ],
        answer: "Set the label's `for` attribute to match the input's `id` attribute",
        explanation:
          "`<label for='xyz'>` links directly to `<input id='xyz'>`. Clicking the label will automatically focus the input."
      }
    ]
  },

  "html-ch5-l15": {
    overview:
      "HTML5 introduced specialized input types that provide native mobile keyboard adaptation, client-side format sanitization, and built-in controls (date pickers, color wheels, number spinners).",
    canDo:
      "Utilize specialized HTML5 input types (`email`, `tel`, `number`, `range`, `date`, `color`) to trigger mobile-optimized keyboards and native UI pickers.",
    teacherNote:
      "On mobile smartphones (iOS and Android), `<input type='email'>` automatically brings up an on-screen keyboard with `@` and `.com` keys, while `<input type='tel'>` opens a numeric keypad.",
    sections: [
      {
        title: "Modern HTML5 Input Types",
        description: "Specialized input types and mobile behaviors.",
        table: {
          headers: ["type='...'", "Native UI Control", "Mobile Keyboard Triggered", "Sanitization Rule"],
          rows: [
            ["email", "Text field with email validation", "Keyboard with @ and period", "Validates presence of @ and domain"],
            ["tel", "Telephone field", "Telephone numeric keypad", "No strict pattern; allows international symbols (+, -)"],
            ["number", "Input with step increment/decrement arrows", "Numeric keypad", "Restricts characters to numbers, min, max, step"],
            ["range", "Horizontal slider bar", "Touch draggable slider", "Returns numeric value between min and max"],
            ["date", "Calendar dropdown picker", "Native OS date scroller", "Returns ISO standard YYYY-MM-DD string"],
            ["color", "Color picker swatch", "Color wheel/eyedropper modal", "Returns 7-character hexadecimal string (#RRGGBB)"]
          ]
        }
      }
    ],
    practice: [
      {
        question: "What mobile advantage does `<input type='tel'>` provide over a standard text input?",
        options: [
          "It encrypts the telephone number automatically",
          "It activates the phone's hardware camera",
          "It opens the numeric telephone keypad rather than the full QWERTY keyboard",
          "It dials the number immediately when entered"
        ],
        answer: "It opens the numeric telephone keypad rather than the full QWERTY keyboard",
        explanation:
          "Mobile operating systems detect `type='tel'` and present a specialized numeric keypad with large digit buttons."
      }
    ]
  },

  "html-ch5-l16": {
    overview:
      "Explore non-textual input mechanisms: boolean checkboxes for multiple selection, mutually exclusive radio button groups, searchable `<select>` dropdowns, and multi-line `<textarea>` inputs.",
    canDo:
      "Implement cohesive groups of radio buttons, checkboxes, dropdown select menus with grouped options (`<optgroup>`), and configurable textareas.",
    teacherNote:
      "To make radio buttons mutually exclusive (allowing only one selection at a time), they MUST share the exact same `name` attribute value.",
    sections: [
      {
        title: "Selection Controls Guide",
        description: "Attributes and structures for selection components.",
        table: {
          headers: ["Control", "Syntax", "Grouping Mechanism", "Selected State Attribute"],
          rows: [
            ["Checkbox", "<input type='checkbox'>", "Individual or array names", "checked"],
            ["Radio Button", "<input type='radio'>", "Shared `name='...'` attribute", "checked"],
            ["Dropdown", "<select><option>...</select>", "<optgroup label='Category'>", "selected"],
            ["Multiline Text", "<textarea rows='4'></textarea>", "name attribute", "Value placed between tags"]
          ]
        }
      }
    ],
    practice: [
      {
        question: "How do you ensure that only one radio button in a group can be selected at any given time?",
        options: [
          "Give each radio button the exact same `id`",
          "Give each radio button the exact same `name` attribute",
          "Add the `exclusive` attribute to each input",
          "Wrap them inside an `<only-one>` tag"
        ],
        answer: "Give each radio button the exact same `name` attribute",
        explanation:
          "Radio buttons that share the same `name` form a mutually exclusive group; selecting one unchecks the others."
      }
    ]
  },

  "html-ch5-l17": {
    overview:
      "HTML5 provides declarative, zero-JavaScript client-side validation using attributes like `required`, `pattern`, `minlength`, `maxlength`, `min`, and `max`. Learn how to leverage native browser error tooltips and CSS pseudoclasses (`:valid` and `:invalid`).",
    canDo:
      "Implement declarative form validation with regex patterns, required field enforcement, and custom error validation states.",
    teacherNote:
      "Never rely solely on client-side HTML validation for security. Users can disable browser validation or craft raw HTTP requests. Always re-validate all submitted data on your backend API server.",
    sections: [
      {
        title: "Declarative Validation Attributes",
        description: "Built-in validation rules executed natively by the browser.",
        table: {
          headers: ["Attribute", "Applicable Inputs", "Behavior", "CSS Pseudo-class"],
          rows: [
            ["required", "All input controls", "Blocks submission if field is empty", ":valid / :invalid"],
            ["pattern", "text, search, url, tel, email", "Validates against a JavaScript regular expression", ":valid / :invalid"],
            ["minlength / maxlength", "Textual inputs", "Enforces character count boundaries", ":valid / :invalid"],
            ["min / max", "number, date, range", "Enforces minimum and maximum allowable numeric values", ":out-of-range"],
            ["step", "number, range", "Enforces value granularity (e.g. step='0.01' for currency)", ":valid / :invalid"]
          ]
        }
      }
    ],
    practice: [
      {
        question: "Why must server-side validation always accompany HTML5 client-side validation?",
        options: [
          "Because client-side validation is slow",
          "Because client-side validation can be bypassed easily by disabling JavaScript or submitting direct HTTP calls",
          "Because HTML5 validation only works on Chrome",
          "Because servers cannot read HTML attributes"
        ],
        answer: "Because client-side validation can be bypassed easily by disabling JavaScript or submitting direct HTTP calls",
        explanation:
          "Client-side validation enhances user experience by giving immediate feedback, but backend server validation is required for security and data integrity."
      }
    ]
  }
};
