import { Course, Chapter } from "../../../types/course.types";
import { ALL_PROMPT_ENGINEERING_LESSONS_CONTENT } from "./lessons";

const PROMPT_ENGINEERING_RAW_CHAPTERS: Chapter[] = [
  {
    id: "pe-ch1",
    title: "Chapter 1: Foundations of Large Language Models (LLMs)",
    lessons: [
      {
        id: "pe-ch1-l1",
        title: "Lesson 1: How LLMs Work: Transformers, Next-Token Prediction & Context Windows",
        description: "Autoregressive generation, Byte-Pair Encoding (BPE), token arithmetic, and avoiding context saturation.",
      },
      {
        id: "pe-ch1-l2",
        title: "Lesson 2: Controlling LLM Generation: Temperature, Top-P, Top-K & Max Tokens",
        description: "Sampling hyperparameters, controlling stochasticity, nucleus sampling, and parameter presets by use case.",
      },
      {
        id: "pe-ch1-l3",
        title: "Lesson 3: The Anatomy of a Prompt: Instructions, Context, Input Data & Output Indicators",
        description: "Modular prompt architecture, positive target instructions, and avoiding ambiguous negative constraints.",
      },
    ],
  },
  {
    id: "pe-ch2",
    title: "Chapter 2: Core Prompting Strategies",
    lessons: [
      {
        id: "pe-ch2-l4",
        title: "Lesson 4: Zero-Shot vs Few-Shot Prompting: Designing Effective Exemplars",
        description: "Conditioning in-context learning, selecting diverse edge cases, and eliminating exemplar frequency bias.",
      },
      {
        id: "pe-ch2-l5",
        title: "Lesson 5: System Prompts, Role Assignment & Establishing Personas",
        description: "Persistent conversational steering, audience calibration, and domain vocabulary priming through expert roles.",
      },
      {
        id: "pe-ch2-l6",
        title: "Lesson 6: Structuring Complex Prompts: Delimiters, Markdown & XML Tags",
        description: "Syntactic encapsulation with XML tags, hierarchical instructions, and preventing data/instruction leakage.",
      },
    ],
  },
  {
    id: "pe-ch3",
    title: "Chapter 3: Advanced Reasoning Paradigms",
    lessons: [
      {
        id: "pe-ch3-l7",
        title: "Lesson 7: Chain-of-Thought (CoT) Prompting: Zero-Shot vs Manual Demonstrations",
        description: "Allocating intermediate compute tokens, 'Let's think step by step', and crafting reasoning demonstrations.",
      },
      {
        id: "pe-ch3-l8",
        title: "Lesson 8: Step-Back Prompting & Least-to-Most Decomposition",
        description: "Deriving first principles before detail execution, and breaking compound questions into sequential sub-tasks.",
      },
      {
        id: "pe-ch3-l9",
        title: "Lesson 9: Self-Consistency & Ensembling Multiple Reasoning Paths",
        description: "Sampling diverse reasoning paths, majority voting consensus, and confidence margin estimation.",
      },
    ],
  },
  {
    id: "pe-ch4",
    title: "Chapter 4: Agentic Frameworks & Function Calling",
    lessons: [
      {
        id: "pe-ch4-l10",
        title: "Lesson 10: The ReAct Framework: Interleaving Reasoning and Action",
        description: "The Thought -> Action -> Observation cycle, empowering models with live external tools and APIs.",
      },
      {
        id: "pe-ch4-l11",
        title: "Lesson 11: Structured Output Generation: Enforcing JSON Schemas",
        description: "Zero-defect JSON extraction, JSON Schema prompting, and constrained decoding guarantees.",
      },
      {
        id: "pe-ch4-l12",
        title: "Lesson 12: Function Calling & Tool Invocation Architecture",
        description: "Declaring tool parameter schemas, handling tool call pauses, and completing multi-step agent loops.",
      },
    ],
  },
  {
    id: "pe-ch5",
    title: "Chapter 5: Retrieval-Augmented Generation (RAG)",
    lessons: [
      {
        id: "pe-ch5-l13",
        title: "Lesson 13: Grounding LLMs: Understanding RAG & Vector Embeddings",
        description: "Dense vector embeddings, geometric cosine similarity, vector databases, and eliminating training cutoffs.",
      },
      {
        id: "pe-ch5-l14",
        title: "Lesson 14: Chunking Strategies, Semantic Search & Retrieval Top-K",
        description: "Document segmentation, sliding window overlap, semantic chunking, and balancing Top-K attention.",
      },
      {
        id: "pe-ch5-l15",
        title: "Lesson 15: Context Injection, Re-Ranking & Hallucination Mitigation",
        description: "Grounded prompt templates, cross-encoder re-ranking pipelines, source citations, and fallback escape hatches.",
      },
    ],
  },
  {
    id: "pe-ch6",
    title: "Chapter 6: Adversarial Robustness, Safety & Production Prompts",
    lessons: [
      {
        id: "pe-ch6-l16",
        title: "Lesson 16: Prompt Injections, Jailbreaking & Indirect Injections",
        description: "Threat vectors, indirect web/email injection attacks, data exfiltration, and OWASP Top 10 for LLMs.",
      },
      {
        id: "pe-ch6-l17",
        title: "Lesson 17: Defense-in-Depth: Defensive System Prompts & Input Sanitization",
        description: "The Sandwich Defense, canary tokens, XML boundaries, and dual-LLM moderation guardrail filters.",
      },
      {
        id: "pe-ch6-l18",
        title: "Lesson 18: Prompt Evaluation, Testing Suites & Benchmarking LLM Outputs",
        description: "Golden test suites, G-Eval automated LLM-as-a-Judge scoring, and measuring prompt regressions in CI/CD.",
      },
    ],
  },
];

const PROMPT_ENGINEERING_CHAPTERS: Chapter[] = PROMPT_ENGINEERING_RAW_CHAPTERS.map((chapter) => ({
  ...chapter,
  lessons: chapter.lessons.map((lesson) => ({
    ...lesson,
    content: ALL_PROMPT_ENGINEERING_LESSONS_CONTENT[lesson.id],
  })),
}));

export const promptEngineeringCourse: Course = {
  id: "prompt-engineering-course",
  title: "Prompt Engineering & Generative AI Mastery",
  category: "AI & Data",
  type: "Full Course",
  typeIcon: "path",
  structureType: "chapters-and-lessons",
  tag1: "Generative AI",
  tag2: "Beginner to Advanced",
  badgeCount: "",
  coverVariant: "code-architecture",
  imageUrl: "/course-images/prompt-engineering-course.jpg",
  buttonLabel: "Start",
  description:
    "Master prompt engineering and production Generative AI architectures based on Google's TechAI Whitepaper, Elvis Saravia's Prompt Engineering Guide, and real-world ChatGPT applications. Covers LLM token mechanics, zero/few-shot prompting, Chain-of-Thought, ReAct agents, function calling, RAG vector search, adversarial injection defenses, and automated LLM-as-a-Judge evaluation.",
  featured: true,
  totalChapters: PROMPT_ENGINEERING_CHAPTERS.length,
  totalLessons: PROMPT_ENGINEERING_CHAPTERS.reduce((acc, ch) => acc + ch.lessons.length, 0),
  progressStatus: {
    type: "status",
    statusText: "New",
  },
  chapters: PROMPT_ENGINEERING_CHAPTERS,
};
