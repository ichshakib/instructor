import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_3_LESSONS: Record<string, LessonContent> = {
  "pe-ch3-l7": {
    overview:
      "Complex multi-step arithmetic, logic, and planning tasks cause standard LLM prompting to fail because autoregressive models attempt to jump immediately from question to final answer without allocating intermediate compute tokens. Chain-of-Thought (CoT) prompting, pioneered by Wei et al. and detailed in the Google TechAI Whitepaper, forces the model to generate intermediate reasoning steps before arriving at a conclusion.",
    canDo:
      "Can implement Zero-Shot CoT ('Let's think step by step') and Few-Shot CoT with demonstration reasoning chains, dramatically boosting accuracy on math and logic benchmarks.",
    teacherNote:
      "Kojima et al.'s landmark discovery: simply appending 'Let's think step by step' to any reasoning prompt increases GSM8K grade-school math accuracy from 17.7% to 78.7%! Generating intermediate tokens gives the model 'working memory' to compute intermediate state.",
    sections: [
      {
        title: "1. CoT Paradigms: Zero-Shot vs Few-Shot",
        description: "Allocating computation tokens for intermediate reasoning:",
        table: {
          headers: ["Paradigm", "Trigger Mechanism", "Reasoning Token Burden", "Accuracy Gains"],
          rows: [
            ["Zero-Shot CoT", "Append: \"Let's think step by step.\"", "Low setup; generates intermediate tokens organically", "Massive leap over raw zero-shot."],
            ["Few-Shot CoT", "Provide 2-4 demonstration exemplars showing step-by-step reasoning", "Moderate prompt token overhead", "Highest precision on domain-specific calculations."],
          ],
        },
      },
      {
        title: "2. Exemplar Chain Construction",
        description: "Drafting sound reasoning chains:",
        items: [
          {
            term: "Few-Shot CoT Exemplar Template",
            meaning: "Explicitly breaking down calculations in demonstrations",
            example: "Q: Roger has 5 tennis balls. He buys 2 more cans of tennis balls. Each can has 3 balls. How many tennis balls does he have now?\nA: Roger starts with 5 balls. 2 cans of 3 balls each is 2 * 3 = 6 tennis balls. 5 + 6 = 11. The answer is 11.",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Why does Chain-of-Thought (CoT) prompting improve an LLM's accuracy on multi-step reasoning problems?",
        options: [
          "It connects the model directly to Wolfram Alpha",
          "It forces the model to generate intermediate reasoning tokens, giving the transformer computational steps to store and reference partial states",
          "It increases the model's parameter count permanently",
          "It switches the model into low-temperature mode automatically",
        ],
        answer: "It forces the model to generate intermediate reasoning tokens, giving the transformer computational steps to store and reference partial states",
        explanation:
          "Because transformers generate tokens sequentially, producing intermediate reasoning steps allows subsequent tokens to attend back to verified partial calculations rather than guessing.",
      },
      {
        question: "What simple phrase acts as the canonical Zero-Shot Chain-of-Thought trigger?",
        options: [
          "\"Give me the fastest answer.\"",
          "\"Let's think step by step.\"",
          "\"Run in high precision mode.\"",
          "\"Output as JSON.\"",
        ],
        answer: "\"Let's think step by step.\"",
        explanation:
          "Kojima et al. (2022) proved that adding 'Let's think step by step' prompts the LLM into generating its reasoning trajectory prior to emitting the final answer.",
      },
    ],
  },

  "pe-ch3-l8": {
    overview:
      "When faced with difficult, detail-heavy questions, humans often step back to identify underlying first principles before attempting a solution. Step-Back Prompting (Zheng et al. / Google DeepMind) instructs the model to first formulate and answer a high-level abstraction question before tackling the specific target question. This lesson covers Step-Back prompting and Least-to-Most task decomposition.",
    canDo:
      "Can apply Step-Back prompting to derive abstract physics/logic principles first, and decompose compound tasks using Least-to-Most decomposition.",
    teacherNote:
      "Step-Back prompting solves the common failure mode where an LLM gets bogged down in surface-level numerical details. By asking: 'What are the underlying physical laws or principles involved in this situation?', the model primes its attention heads with relevant equations before doing the math.",
    sections: [
      {
        title: "1. Step-Back Prompting vs Direct Answering",
        description: "Two-stage abstraction workflow:",
        table: {
          headers: ["Stage", "Prompt Focus", "Example Query", "Benefit"],
          rows: [
            ["1. Step-Back Query", "High-level principle or concept", "\"What physical law governs ideal gas pressure when volume decreases?\"", "Retrieves Boyle's Law and P1V1 = P2V2 formula into context."],
            ["2. Target Query", "Specific instance with raw numbers", "\"A 2L container at 300K has 5atm... what is the pressure at 1L?\"", "Directly grounds computation using the principle retrieved in Stage 1."],
          ],
        },
      },
      {
        title: "2. Least-to-Most Decomposition",
        description: "Breaking compound questions into sequential sub-problems:",
        items: [
          {
            term: "Least-to-Most Prompting",
            meaning: "Decomposes a hard problem into smaller sub-problems, solving each sequentially and feeding previous answers as context",
            example: "Sub-problem 1: What was company revenue in 2023?\nSub-problem 2: What was revenue in 2024?\nFinal: What was the percentage growth between 2023 and 2024?",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What is the primary mechanism behind 'Step-Back Prompting'?",
        options: [
          "Asking the model to repeat the user's prompt backward",
          "Prompting the model to first identify and explain the high-level concept or principle before answering the specific detailed question",
          "Decreasing the model's top-p parameter to 0.1",
          "Translating the question into Latin first",
        ],
        answer: "Prompting the model to first identify and explain the high-level concept or principle before answering the specific detailed question",
        explanation:
          "Step-back prompting abstracts away noisy specific details first to retrieve foundational principles, which are then used to ground the final answer.",
      },
      {
        question: "How does 'Least-to-Most' prompting operate?",
        options: [
          "It orders prompts from shortest to longest",
          "It decomposes a complex problem into a sequence of simpler sub-problems, using each solution to solve the next",
          "It selects the cheapest model first",
          "It sorts words alphabetically",
        ],
        answer: "It decomposes a complex problem into a sequence of simpler sub-problems, using each solution to solve the next",
        explanation:
          "Least-to-most prompting tackles problems in order of increasing complexity, passing intermediate answers forward to solve the larger task.",
      },
    ],
  },

  "pe-ch3-l9": {
    overview:
      "Because generative models are probabilistic, a single Chain-of-Thought reasoning path can wander into an arithmetic slip or invalid premise. Self-Consistency (Wang et al., Google Research) samples multiple distinct reasoning trajectories at temperature > 0 and takes the majority vote among their final answers, dramatically boosting reliability.",
    canDo:
      "Can design self-consistency evaluation pipelines, extract consensus answers across multiple generation paths, and quantify model confidence.",
    teacherNote:
      "Self-Consistency replaces greedy decoding with ensemble sampling. Instead of generating 1 path at Temperature 0, you generate 5 to 10 paths at Temperature 0.7, extract the final answers, and select the mode (most common answer). This filters out random arithmetic hallucinations!",
    sections: [
      {
        title: "1. The Self-Consistency Pipeline",
        description: "Majority voting across diverse reasoning paths:",
        table: {
          headers: ["Step", "Action", "Configuration"],
          rows: [
            ["1. Generation", "Sample N independent reasoning paths (e.g. N=5)", "Temperature = 0.7, CoT prompt"],
            ["2. Parsing", "Extract final candidate answer from each path", "Regex / Output indicator matching"],
            ["3. Aggregation", "Select the answer with the highest frequency count (Mode)", "Majority voting consensus"],
          ],
        },
      },
      {
        title: "2. Confidence Scoring via Agreement",
        description: "Using voting margins as reliability metrics:",
        items: [
          {
            term: "Agreement Ratio",
            meaning: "Percentage of sampled paths that reached the consensus answer",
            example: "If 9 out of 10 paths arrive at 'x = 42', confidence is 90%. If 3 paths say 'A', 3 say 'B', 4 say 'C', confidence is low.",
          },
        ],
      },
    ],
    practice: [
      {
        question: "How does Self-Consistency improve reasoning accuracy over standard Chain-of-Thought?",
        options: [
          "By querying multiple different LLM providers simultaneously",
          "By generating multiple reasoning paths at non-zero temperature and taking the majority vote of the final answers",
          "By increasing the GPU clock speed",
          "By training new neural layers",
        ],
        answer: "By generating multiple reasoning paths at non-zero temperature and taking the majority vote of the final answers",
        explanation:
          "Self-Consistency leverages diversity in reasoning. Independent paths may make random calculation slips, but the correct answer is usually the most frequent consensus.",
      },
      {
        question: "What temperature setting is required for Self-Consistency sampling to work?",
        options: [
          "Strictly 0.0",
          "A non-zero temperature (e.g. 0.5 to 0.7) to allow diverse reasoning paths",
          "Temperature = 2.5",
          "Negative temperature",
        ],
        answer: "A non-zero temperature (e.g. 0.5 to 0.7) to allow diverse reasoning paths",
        explanation:
          "At Temperature 0, every sample would be identical. A moderate non-zero temperature allows the model to explore slightly different valid reasoning trajectories.",
      },
    ],
  },
};
