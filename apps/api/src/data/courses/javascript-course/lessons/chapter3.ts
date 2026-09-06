import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_3_LESSONS: Record<string, LessonContent> = {
  "js-ch3-l7": {
    overview:
      "Control flow dictates the decision-making pathways of a computer program. In this lesson based on Chapter 4 of 'JavaScript from Beginner to Professional', you will master if, else if, and else branching, evaluate JavaScript's truthy and falsy values, and construct concise ternary operators for conditional inline expressions.",
    canDo:
      "Can construct conditional execution trees, evaluate truthiness, and replace simple if-else blocks with clean ternary expressions.",
    teacherNote:
      "Memorize the 8 falsy values in JavaScript: `false`, `0`, `-0`, `0n` (BigInt zero), `''` (empty string), `null`, `undefined`, and `NaN`. Every other value in JavaScript—including empty arrays `[]` and empty objects `{}`—evaluates to TRUTHY!",
    sections: [
      {
        title: "1. The if, else if, and else Structure",
        description: "Branching code paths based on Boolean conditions:",
        table: {
          headers: ["Branch", "Syntax Pattern", "Evaluation Rule", "Example"],
          rows: [
            ["if statement", "if (condition) { ... }", "Executes only if the expression evaluates to truthy", "if (age >= 18) { grantAccess(); }"],
            ["else if branch", "} else if (cond2) { ... }", "Evaluates sequentially if preceding conditions are falsy", "else if (age >= 13) { allowTeen(); }"],
            ["else fallback", "} else { ... }", "Catch-all branch executed when all prior conditions fail", "else { denyAccess(); }"],
          ],
        },
      },
      {
        title: "2. Truthy vs. Falsy & The Ternary Operator",
        description: "How values evaluate in boolean contexts:",
        table: {
          headers: ["Concept", "Definition / Value List", "Example Syntax", "Result"],
          rows: [
            ["Falsy Values", "false, 0, -0, 0n, '', null, undefined, NaN", "if ('') { ... }", "Block is skipped (falsy)"],
            ["Truthy Values", "Everything else (including [], {}, 'false', '0')", "if ([]) { ... }", "Block executes! (truthy)"],
            ["Ternary Operator", "condition ? exprIfTrue : exprIfFalse", "const status = age >= 18 ? 'Adult' : 'Minor';", "Returns 'Adult' or 'Minor'"],
          ],
        },
      },
    ],
    practice: [
      {
        question: "Which of the following values is considered TRUTHY in a JavaScript if condition?",
        options: ["0", "'' (empty string)", "[] (empty array)", "null"],
        answer: "[] (empty array)",
        explanation:
          "In JavaScript, all objects and arrays (even empty ones `[]` and `{}`) evaluate to truthy.",
      },
      {
        question: "What is the equivalent ternary operator for: `let msg; if (isLoggedIn) { msg = 'Welcome'; } else { msg = 'Login'; }`?",
        options: [
          "const msg = isLoggedIn ? 'Welcome' : 'Login';",
          "const msg = isLoggedIn : 'Welcome' ? 'Login';",
          "const msg = if (isLoggedIn) 'Welcome' : 'Login';",
          "const msg = isLoggedIn ?? 'Welcome' || 'Login';",
        ],
        answer: "const msg = isLoggedIn ? 'Welcome' : 'Login';",
        explanation:
          "The ternary operator syntax is `condition ? expressionIfTrue : expressionIfFalse`.",
      },
      {
        question: "How many falsy values exist in modern JavaScript?",
        options: ["2 (true and false)", "5", "8", "Unlimited"],
        answer: "8",
        explanation:
          "There are exactly 8 falsy values: false, 0, -0, 0n, '', null, undefined, and NaN.",
      },
    ],
  },

  "js-ch3-l8": {
    overview:
      "When comparing a single expression against many possible discrete values, long chains of `else if` statements become verbose and hard to maintain. In this lesson based on Chapter 4 of 'JavaScript from Beginner to Professional', you will learn how to use the 'switch' statement, leverage the 'break' statement to prevent unintended fallthrough, and use 'default' for fallback handling.",
    canDo:
      "Can replace repetitive conditional chains with clean switch statements, apply break statements correctly, and handle grouping cases.",
    teacherNote:
      "Switch statements use strict equality (`===`) when matching cases! A case value of `5` will not match the string `'5'`. Remember to include `break;` at the end of each case block unless you intentionally desire fallthrough behavior.",
    sections: [
      {
        title: "1. The switch Statement Architecture",
        description: "Components of multi-branch switching:",
        table: {
          headers: ["Component", "Syntax", "Purpose", "Gotcha / Best Practice"],
          rows: [
            ["switch (expr)", "switch (day) { ... }", "Evaluates expression once and matches against case values", "Uses strict equality (`===`) for matching"],
            ["case value:", "case 'Monday':", "A potential branch target", "Executes all subsequent code until a `break` is reached!"],
            ["break;", "break;", "Terminates the switch statement and jumps past the closing brace", "Missing `break` causes 'case fallthrough' bugs"],
            ["default:", "default: ... break;", "Fallback branch executed when no cases match", "Acts like the final `else` in an if-statement chain"],
          ],
        },
      },
      {
        title: "2. Intentional Fallthrough & Grouping Cases",
        description: "Stacking cases to share logic across multiple values:",
        items: [
          {
            term: "Case Grouping (OR behavior)",
            meaning: "Omitting break between sequential cases allows them to share identical execution code",
            example: "switch(day) {\n  case 'Saturday':\n  case 'Sunday':\n    console.log('Weekend!');\n    break;\n}",
          },
          {
            term: "switch (true) Pattern",
            meaning: "Advanced pattern evaluating boolean expressions in each case clause",
            example: "switch(true) {\n  case score >= 90: grade = 'A'; break;\n  case score >= 80: grade = 'B'; break;\n}",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What happens if you omit the `break;` statement in a matching `case` block?",
        options: [
          "JavaScript throws a SyntaxError",
          "Execution falls through into the next case block regardless of whether its condition matches",
          "The switch immediately exits",
          "The default block executes twice",
        ],
        answer: "Execution falls through into the next case block regardless of whether its condition matches",
        explanation:
          "Without a `break`, execution continues into the subsequent case statements unconditionally (known as 'case fallthrough').",
      },
      {
        question: "What equality check does `switch(x)` use when matching `case y:`?",
        options: ["Loose equality (`==`)", "Strict equality (`===`)", "Object.is()", "Regex matching"],
        answer: "Strict equality (`===`)",
        explanation:
          "JavaScript switch statements always compare case clauses using strict equality (`===`), so types must match exactly.",
      },
      {
        question: "What is the role of `default:` in a switch statement?",
        options: [
          "It is required at the top of the switch statement",
          "It executes when none of the specified `case` values match the expression",
          "It resets all variables to 0",
          "It converts the switch to a loop",
        ],
        answer: "It executes when none of the specified `case` values match the expression",
        explanation:
          "`default:` acts as the fallback branch, running when all preceding case checks have failed.",
      },
    ],
  },

  "js-ch3-l9": {
    overview:
      "Repetitive tasks require automated iteration loops. In this lesson based on Chapter 5 of 'JavaScript from Beginner to Professional', you will master the classic 'for' loop, conditional 'while' and 'do-while' loops, modern collection iteration with 'for...of' and 'for...in', and loop control statements 'break' and 'continue'.",
    canDo:
      "Can select the appropriate loop construct for any scenario, iterate over arrays and object keys, and control loop execution flow with `break` and `continue`.",
    teacherNote:
      "Remember this crucial distinction: Use `for...of` to iterate over VALUES of iterable collections (like Arrays, Strings, Sets, and Maps). Use `for...in` to iterate over the KEYS (properties) of an Object. Using `for...in` on arrays is an anti-pattern!",
    sections: [
      {
        title: "1. Core Loop Types in JavaScript",
        description: "Selecting the optimal loop structure:",
        table: {
          headers: ["Loop Type", "Structure Syntax", "When to Use", "Guaranteed Runs"],
          rows: [
            [
              "for loop",
              "for (let i = 0; i < n; i++)",
              "When the exact number of iterations or an index counter is known",
              "0 or more times",
            ],
            [
              "while loop",
              "while (condition) { ... }",
              "When looping until an unknown dynamic condition becomes false",
              "0 or more times",
            ],
            [
              "do-while loop",
              "do { ... } while (condition);",
              "When the loop body must execute AT LEAST ONCE before evaluating the condition",
              "1 or more times (Guaranteed!)",
            ],
            [
              "for...of (ES6)",
              "for (const item of array)",
              "Clean, readable iteration over array elements and iterables",
              "0 or more times",
            ],
            [
              "for...in",
              "for (const key in object)",
              "Iterates over enumerable property keys of an object",
              "0 or more times",
            ],
          ],
        },
      },
      {
        title: "2. Loop Control: break vs. continue",
        description: "Altering the execution course of a loop:",
        items: [
          {
            term: "break",
            meaning: "Immediately terminates the loop and resumes execution after the loop's closing brace",
            example: "for (let i = 0; i < 10; i++) { if (i === 5) break; } // Stops at 5",
          },
          {
            term: "continue",
            meaning: "Skips the rest of the current iteration and jumps directly to the next iteration step",
            example: "for (let i = 0; i < 10; i++) { if (i % 2 === 0) continue; } // Skips evens",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Which loop construct guarantees that its block will execute AT LEAST ONCE regardless of the condition?",
        options: ["for loop", "while loop", "do-while loop", "for...of loop"],
        answer: "do-while loop",
        explanation:
          "`do-while` loops evaluate the condition at the end of the block, ensuring the body runs at least once.",
      },
      {
        question: "What is the recommended modern loop to iterate directly over the values of an array `['a', 'b', 'c']`?",
        options: ["for...in", "for...of", "while...do", "loop...until"],
        answer: "for...of",
        explanation:
          "`for...of` is the standard ES6 construct for iterating over the values of iterable objects like arrays.",
      },
      {
        question: "What does the `continue;` statement do inside a loop?",
        options: [
          "Exits the loop entirely",
          "Skips the rest of the current iteration and advances to the next loop cycle",
          "Restarts the loop from index 0",
          "Pauses execution for 1 second",
        ],
        answer: "Skips the rest of the current iteration and advances to the next loop cycle",
        explanation:
          "`continue` bypasses remaining statements in the current iteration and moves immediately to the next iteration.",
      },
    ],
  },
};
