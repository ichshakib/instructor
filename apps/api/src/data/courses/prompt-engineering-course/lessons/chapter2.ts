import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_2_LESSONS: Record<string, LessonContent> = {
  "pe-ch2-l4": {
    overview:
      "Few-shot prompting provides the model with explicit input-output demonstration pairs within the prompt context, dramatically outperforming zero-shot prompting on specialized classification, formatting, and stylistic tasks. Grounded in Elvis Saravia's guide and the Google Whitepaper, this lesson explores designing representative exemplars, preventing recency and frequency bias, and ordering few-shot demonstrations.",
    canDo:
      "Can construct few-shot prompts with high-quality demonstration exemplars, select diverse edge cases, and eliminate prediction bias caused by imbalanced examples.",
    teacherNote:
      "Ensure your few-shot demonstrations are balanced! If you provide 4 positive sentiment examples and only 1 negative example, the model develops a strong statistical bias toward predicting positive sentiment regardless of input.",
    sections: [
      {
        title: "1. Zero-Shot vs One-Shot vs Few-Shot",
        description: "Conditioning the model's in-context learning:",
        table: {
          headers: ["Strategy", "Demonstration Count", "Best Use Case", "Tradeoff"],
          rows: [
            ["Zero-Shot", "0 examples", "General knowledge, common tasks, broad summarization", "Lowest token cost; may deviate from desired format."],
            ["One-Shot", "1 example", "Demonstrating specific output syntax or tone", "Minimal token overhead; clarifies ambiguity."],
            ["Few-Shot", "3 - 5 examples", "Complex classification, obscure schemas, nuanced tone", "Highest consistency; consumes context window tokens."],
          ],
        },
      },
      {
        title: "2. Exemplar Quality Guidelines",
        description: "Best practices for choosing few-shot demonstration pairs:",
        items: [
          {
            term: "Diverse Representation",
            meaning: "Include edge cases, mixed labels, and varying input lengths across examples",
            example: "In a sentiment classifier, include neutral, sarcastic, and ambiguous sentences.",
          },
          {
            term: "Consistent Format Delimiters",
            meaning: "Use clear, uniform labels for inputs and outputs (e.g. Input: ... Output: ...)",
            example: "Input: 'Battery died within 1 hour' -> Classification: Negative\nInput: 'Works flawlessly' -> Classification: Positive",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What is 'in-context learning' in the context of few-shot prompting?",
        options: [
          "Fine-tuning the model's weights permanently on a GPU cluster",
          "The model adapting its behavior and output format based solely on demonstration pairs provided inside the prompt",
          "Downloading Wikipedia into memory",
          "Storing prompts in a relational SQL database",
        ],
        answer: "The model adapting its behavior and output format based solely on demonstration pairs provided inside the prompt",
        explanation:
          "In-context learning refers to the model's ability to recognize patterns and formatting from examples included directly in the prompt context window without modifying underlying model weights.",
      },
      {
        question: "What risk arises if your few-shot classification prompt includes 5 positive examples and 0 negative examples?",
        options: [
          "The model throws an OutOfMemoryError",
          "The model develops an inductive bias toward predicting the positive class",
          "The temperature is forced to 0",
          "The prompt fails schema validation",
        ],
        answer: "The model develops an inductive bias toward predicting the positive class",
        explanation:
          "Imbalanced exemplars create frequency bias, causing the LLM to statistically favor the majority label shown in the demonstrations.",
      },
    ],
  },

  "pe-ch2-l5": {
    overview:
      "System prompts establish the overarching operational persona, behavioral boundaries, voice, and safety rules for an entire conversation. In this lesson, drawn from ChatGPT: 100+ Examples and Google TechAI, we explore persona conditioning, setting role-specific terminology, enforcing negative constraints safely through persona definition, and maintaining consistent voice across multi-turn sessions.",
    canDo:
      "Can write effective system prompts establishing domain personas, tune vocabulary to match target audiences, and bind conversational boundaries.",
    teacherNote:
      "A role prompt ('Act as a Principal Software Engineer with 20 years of distributed systems experience') changes the model's sampling trajectory toward expert technical jargon, architectural considerations, and defensive programming patterns that general-purpose prompts miss!",
    sections: [
      {
        title: "1. The Anatomy of a System Prompt",
        description: "Core sections that define model behavior:",
        table: {
          headers: ["Section", "Role", "Example Formulation"],
          rows: [
            ["Persona & Identity", "Establishes expertise, viewpoint, and authoritative scope", "\"You are a senior financial analyst specializing in SaaS unit economics.\""],
            ["Target Audience", "Calibrates complexity, tone, and readability", "\"Explain concepts to a non-technical C-suite executive.\""],
            ["Operational Guardrails", "Defines boundaries, topics to refuse, and fallback behaviors", "\"If financial data is insufficient, state 'Insufficient data' rather than guessing.\""],
          ],
        },
      },
      {
        title: "2. Audience Calibration via Personas",
        description: "Shifting explanation depth through role instructions:",
        items: [
          {
            term: "Layperson Persona",
            meaning: "\"Explain like I'm 10 years old, using everyday physical analogies\"",
            example: "Compares database indexes to a library catalog or book index.",
          },
          {
            term: "Specialist Persona",
            meaning: "\"Answer from the perspective of an ACM Fellow in Computer Science\"",
            example: "Discusses B+ Tree page splits, branch factors, and disk seek latency.",
          },
        ],
      },
    ],
    practice: [
      {
        question: "How does assigning an expert persona (e.g. 'Act as a Senior Database Administrator') alter LLM responses?",
        options: [
          "It searches paid internal database documentation",
          "It shifts the model's vocabulary and probability distribution toward domain-specific concepts, technical depth, and trade-offs",
          "It lowers the API cost by 50%",
          "It activates a special internal Python interpreter",
        ],
        answer: "It shifts the model's vocabulary and probability distribution toward domain-specific concepts, technical depth, and trade-offs",
        explanation:
          "Role and persona conditioning activates associative latent representations learned during pre-training, focusing outputs on specialized vocabulary and professional considerations.",
      },
      {
        question: "What is the primary architectural purpose of a system prompt?",
        options: [
          "To provide user input data",
          "To establish persistent rules, tone, persona, and behavioral boundaries for the conversation",
          "To reset the server's cache",
          "To define the model's price per token",
        ],
        answer: "To establish persistent rules, tone, persona, and behavioral boundaries for the conversation",
        explanation:
          "System prompts serve as the root governing instructions that steer how the model interprets all subsequent user messages in the interaction.",
      },
    ],
  },

  "pe-ch2-l6": {
    overview:
      "Formatting ambiguity is one of the leading causes of LLM failures. Delimiters (triple backticks, XML tags, Markdown headers) delineate prompt components cleanly, preventing input data from bleeding into instructions. Based on Google's prompt architecture and Anthropic's XML prompting guidelines, this lesson masters structural encapsulation, tag hierarchy, and preventing accidental prompt injection.",
    canDo:
      "Can encapsulate unstructured input data using XML tags (<text>...</text>) and triple quotes, build unambiguous prompt layouts, and prevent instruction-data confusion.",
    teacherNote:
      "XML tags (e.g., `<context>`, `<documents>`, `<instructions>`) are universally recognized by frontier LLMs (Claude, GPT-4, Gemini). They provide rigid semantic boundaries that make it impossible for the model to confuse user text with instructions.",
    sections: [
      {
        title: "1. Delimiter Types & Best Practices",
        description: "Separating data from instructions with clear syntactic boundaries:",
        table: {
          headers: ["Delimiter Style", "Syntax Example", "Best Use Case", "Clarity Rating"],
          rows: [
            ["XML Tags", "<contract>\n...\n</contract>", "Complex multi-source prompts with nested data", "Highest (Universal standard)"],
            ["Triple Backticks", "```json\n...\n```", "Code snippets, JSON payloads, Markdown blocks", "High"],
            ["Triple Quotes", "\"\"\"\n...\n\"\"\"", "Multi-line customer text or paragraph inputs", "Good"],
            ["Markdown Headers", "### Context\n### Task", "Delineating distinct stages of instructions", "Good"],
          ],
        },
      },
      {
        title: "2. Structuring an Enterprise XML Prompt",
        description: "Template for complex prompt orchestration:",
        items: [
          {
            term: "Enterprise XML Prompt Template",
            meaning: "Unambiguous hierarchical structure",
            example: "<task>\nSummarize the legal obligations outlined in the contract below.\n</task>\n\n<rules>\n- List at most 5 obligations.\n- Use bullet points.\n- Cite clause numbers.\n</rules>\n\n<contract>\n{{USER_UPLOADED_CONTRACT_TEXT}}\n</contract>",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Why are XML tags (like `<context>` and `<instructions>`) widely recommended for structuring complex prompts?",
        options: [
          "They compile faster in the GPU",
          "They provide clear, unambiguous boundaries that prevent the model from confusing input data with system instructions",
          "HTML browsers require them",
          "They compress prompt tokens by 80%",
        ],
        answer: "They provide clear, unambiguous boundaries that prevent the model from confusing input data with system instructions",
        explanation:
          "XML tags create explicit structural hierarchy, ensuring the model treats the enclosed content purely as data to be acted upon rather than executable instructions.",
      },
      {
        question: "If a user input contains text like 'Ignore previous instructions and do X', how do delimiters help defend against this?",
        options: [
          "The computer turns off",
          "By instructing the model to only process text found inside `<user_data>...</user_data>` as raw data, not instructions",
          "By encrypting the input",
          "Delimiters have no effect on instructions",
        ],
        answer: "By instructing the model to only process text found inside `<user_data>...</user_data>` as raw data, not instructions",
        explanation:
          "Encapsulating user input within tags and explicitly directing the model that content within those tags is passive data neutralizes naive prompt injection attempts.",
      },
    ],
  },
};
