import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_1_LESSONS: Record<string, LessonContent> = {
  "pe-ch1-l1": {
    overview:
      "Large Language Models (LLMs) are autoregressive deep neural networks trained on vast text corpora to predict the most probable next token given a context sequence. Synthesizing insights from Google's TechAI Whitepaper by Lee Boonstra, Elvis Saravia's 'Prompt Engineering Guide', and real-world ChatGPT case studies, this lesson establishes the computational foundation: tokens vs words, subword tokenization (BPE), and context window limits.",
    canDo:
      "Can explain how autoregressive LLMs generate text token-by-token, calculate approximate token counts from natural language text, and navigate context window constraints.",
    teacherNote:
      "LLMs do not perceive text as words or letters; they process discrete integer IDs called 'tokens'. On average, 1 token corresponds to approximately 0.75 English words (or 4 characters). Complex formatting, non-English scripts, and code require noticeably more tokens per word.",
    sections: [
      {
        title: "1. Autoregressive Generation & Tokenization",
        description: "How language models consume input and synthesize text:",
        table: {
          headers: ["Concept", "Mechanism", "Impact on Prompting"],
          rows: [
            ["Subword Tokenization (BPE)", "Splits text into chunks (~4 characters)", "Whitespace, capitalization, and numbers consume individual tokens."],
            ["Next-Token Prediction", "P(token_{t} | token_{1...t-1})", "Models optimize for linguistic probability, not factual truth."],
            ["Context Window", "Maximum sequence length (prompt + completion)", "Older conversation turns are evicted or truncated once limit is reached."],
          ],
        },
      },
      {
        title: "2. The Token Calculation Rule of Thumb",
        description: "Estimating prompt size and API cost:",
        items: [
          {
            term: "1,000 Tokens Rule",
            meaning: "1,000 tokens ≈ 750 words ≈ 1.5 single-spaced pages of text",
            example: "A 3,000-word essay consumes ~4,000 tokens in the model's context window.",
          },
          {
            term: "Context Saturation",
            meaning: "Performance degrades ('Lost in the Middle' effect) when crucial information is buried in massive contexts",
            example: "Place critical instructions at the very beginning or end of your prompt.",
          },
        ],
      },
    ],
    practice: [
      {
        question: "How do modern autoregressive Large Language Models generate text?",
        options: [
          "By querying a database of pre-written answers",
          "By iteratively predicting the probability distribution of the next token based on all prior tokens",
          "By compiling the prompt into Python bytecode",
          "By executing an SQL search across the internet",
        ],
        answer: "By iteratively predicting the probability distribution of the next token based on all prior tokens",
        explanation:
          "Autoregressive LLMs sample from probability distributions over a token vocabulary, generating text one token at a time based on the preceding context.",
      },
      {
        question: "Approximately how many English words does a 1,000-token prompt contain?",
        options: ["100 words", "750 words", "2,500 words", "5,000 words"],
        answer: "750 words",
        explanation:
          "In English, 1 token is roughly equivalent to 0.75 words (or 4 characters), so 1,000 tokens corresponds to roughly 750 words.",
      },
    ],
  },

  "pe-ch1-l2": {
    overview:
      "Sampling hyperparameters govern how the model chooses the next token from the output probability distribution. Drawing from Google's TechAI Whitepaper Section 3, this lesson explores temperature, Top-P (nucleus sampling), Top-K sampling, and max output tokens, detailing when to enforce deterministic accuracy versus creative variation.",
    canDo:
      "Can configure temperature and Top-P to eliminate hallucinations in factual tasks, and tune parameters for creative, diverse text synthesis.",
    teacherNote:
      "For factual tasks (data extraction, code generation, classification), set Temperature to 0.0 or 0.2 to enforce deterministic, greedy selection. For brainstorming, fiction, or creative copy, increase Temperature to 0.7 - 0.9. Avoid changing both Temperature and Top-P simultaneously!",
    sections: [
      {
        title: "1. Sampling Hyperparameters Compared",
        description: "Controlling randomness, entropy, and vocabulary truncation:",
        table: {
          headers: ["Parameter", "Range", "Default", "Effect when Lowered", "Effect when Raised"],
          rows: [
            ["Temperature", "0.0 - 2.0", "0.7 - 1.0", "Deterministic, focused, repetitive, strict", "Creative, varied, unpredictable, potential hallucinations"],
            ["Top-P (Nucleus)", "0.0 - 1.0", "0.9 - 1.0", "Truncates candidates to smallest set exceeding cumulative probability P", "Expands candidate pool to include low-probability tokens"],
            ["Top-K", "1 - 100+", "40", "Restricts sampling strictly to the K most probable tokens", "Considers wider variety of alternative tokens"],
            ["Max Tokens", "1 - context limit", "Model dependent", "Prematurely cuts off output", "Permits longer, comprehensive outputs"],
          ],
        },
      },
      {
        title: "2. Optimal Parameter Presets by Use Case",
        description: "Recommended configurations for production workloads:",
        items: [
          {
            term: "Code Generation / JSON Parsing",
            meaning: "Temperature: 0.0, Top-P: 0.1",
            example: "Ensures syntax validity and repeatable deterministic output structure.",
          },
          {
            term: "Creative Marketing / Storytelling",
            meaning: "Temperature: 0.85, Top-P: 0.95",
            example: "Encourages diverse figurative language, varied vocabulary, and novel analogies.",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What temperature setting is recommended for automated code generation and JSON data extraction?",
        options: ["1.8", "1.2", "0.0 to 0.2", "0.9"],
        answer: "0.0 to 0.2",
        explanation:
          "Low temperature values (0.0 to 0.2) minimize randomness, ensuring deterministic, syntax-compliant, and predictable code or data outputs.",
      },
      {
        question: "What is Top-P (Nucleus) sampling?",
        options: [
          "Sampling only the single highest probability token",
          "Selecting tokens from the smallest candidate pool whose cumulative probability exceeds P",
          "Selecting exactly P tokens randomly",
          "A parameter that sets the length of the system prompt",
        ],
        answer: "Selecting tokens from the smallest candidate pool whose cumulative probability exceeds P",
        explanation:
          "Top-P samples from the dynamically sized 'nucleus' of tokens that collectively account for the top P probability mass, cutting off the long tail of unlikely words.",
      },
    ],
  },

  "pe-ch1-l3": {
    overview:
      "A prompt is not just a question—it is a programmatic specification that steers generative probability. Based on Elvis Saravia's Prompt Engineering Guide and Google's best practices, this lesson deconstructs the 4 primary components of an effective prompt: Instructions, Context, Input Data, and Output Indicators.",
    canDo:
      "Can compose modular prompts containing clear instructions, background context, labeled input data, and explicit output formatting indicators.",
    teacherNote:
      "Be specific, direct, and explicit. Avoid negative instructions ('Don't do X') because LLMs struggle with negation; state positively what the model SHOULD do ('Only do Y').",
    sections: [
      {
        title: "1. The 4 Modular Prompt Elements",
        description: "Structural anatomy of an enterprise-grade prompt:",
        table: {
          headers: ["Component", "Purpose", "Example Pattern"],
          rows: [
            ["1. Instruction", "Specific task or action the model must execute", "\"Extract all customer phone numbers and order IDs from the text.\""],
            ["2. Context", "External background information, persona, or domain rules", "\"You are an auditor verifying compliance with GDPR standards.\""],
            ["3. Input Data", "The raw payload to be transformed or analyzed", "\"Text: 'Customer John Doe called regarding invoice #992...'\""],
            ["4. Output Indicator", "Exact formatting constraints for the final response", "\"Output ONLY valid JSON adhering to the provided schema.\""],
          ],
        },
      },
      {
        title: "2. Positive vs Negative Prompting",
        description: "Guiding probability toward the desired behavior:",
        items: [
          {
            term: "Ineffective (Negative)",
            meaning: "\"Do not write in an informal tone and don't make it longer than 3 paragraphs.\"",
            example: "The model often fixates on the negated words ('informal').",
          },
          {
            term: "Effective (Positive & Specific)",
            meaning: "\"Write in a formal, executive business tone. Restrict your answer to exactly two paragraphs.\"",
            example: "Gives unambiguous, positive behavioral targets.",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Why should prompt engineers prefer positive instructions over negative constraints ('Don't do X')?",
        options: [
          "Negative words consume double the tokens",
          "Language models attend strongly to mentioned keywords, sometimes triggering the very behavior you asked them to avoid",
          "LLMs throw a syntax error when they read 'not'",
          "It is required by the OpenAPI standard",
        ],
        answer: "Language models attend strongly to mentioned keywords, sometimes triggering the very behavior you asked them to avoid",
        explanation:
          "Stating what TO do provides a direct semantic path for text generation, whereas negative constraints require the model to suppress active token concepts.",
      },
      {
        question: "Which component of a prompt provides the specific payload or source text to be processed?",
        options: ["The Instruction", "The Input Data", "The Output Indicator", "The Hyperparameter"],
        answer: "The Input Data",
        explanation:
          "Input data is the raw text, document, table, or question that the model operates upon according to the prompt's instructions.",
      },
    ],
  },
};
