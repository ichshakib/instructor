import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_4_LESSONS: Record<string, LessonContent> = {
  "pe-ch4-l10": {
    overview:
      "Autonomous agents require both cognitive deliberation and external environmental interaction. The ReAct (Reasoning + Acting) framework (Yao et al., Google Research / Princeton) interleaves verbal reasoning traces with external action calls in a cyclic loop: Thought -> Action -> Observation -> Thought. This lesson masters building ReAct agents capable of solving real-world research and coding tasks.",
    canDo:
      "Can structure ReAct agent loops, implement Thought/Action/Observation execution cycles, and empower LLMs to interact with search engines and APIs.",
    teacherNote:
      "Without reasoning traces ('Thought'), an agent acts blindly and struggles to adjust when tools return unexpected data. Without actions ('Action'), an agent hallucinates facts beyond its training cutoff. ReAct synergizes internal memory and external observation!",
    sections: [
      {
        title: "1. The ReAct Execution Loop",
        description: "The 4-stage cyclical pattern governing autonomous LLM agents:",
        table: {
          headers: ["Stage", "Actor", "Purpose", "Example Output"],
          rows: [
            ["Thought", "LLM", "Deliberates on current state and decides what info is needed", "\"Thought: I need to check Apple's current stock price using the market API.\""],
            ["Action", "LLM", "Emits a structured tool call command", "\"Action: get_stock_quote(symbol='AAPL')\""],
            ["Observation", "Tool / Environment", "Returns real-world data from tool execution back into context", "\"Observation: {'symbol': 'AAPL', 'price': 225.40, 'change': '+1.2%'}\""],
            ["Thought (Next)", "LLM", "Integrates observation and synthesizes the next step or final answer", "\"Thought: Now that I have the price, I can answer the user's inquiry.\""],
          ],
        },
      },
      {
        title: "2. ReAct Agent Prompt Template",
        description: "Standard system prompt for tool-calling agents:",
        items: [
          {
            term: "Canonical ReAct Prompt Format",
            meaning: "Instructs model to follow the strict sequence",
            example: "You have access to the following tools: [search_web, run_python, query_sql].\nUse the following format:\nQuestion: the input question you must answer\nThought: you should always think about what to do\nAction: the action to take, should be one of [search_web, run_python, query_sql]\nAction Input: the input to the action\nObservation: the result of the action\n... (this Thought/Action/Observation can repeat N times)\nThought: I now know the final answer\nFinal Answer: the final answer to the original question",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What does 'ReAct' stand for in autonomous AI agent architecture?",
        options: ["Reactive Activation", "Reasoning and Acting", "Recursive Action", "Real-time Actor"],
        answer: "Reasoning and Acting",
        explanation:
          "ReAct stands for Reasoning and Acting, combining internal chain-of-thought reasoning with external tool actions and environmental observations.",
      },
      {
        question: "In the ReAct framework, where does the 'Observation' content come from?",
        options: [
          "The LLM generates it from internal memory",
          "The external environment or tool returns it after executing the model's Action",
          "The user types it manually every time",
          "It is generated randomly",
        ],
        answer: "The external environment or tool returns it after executing the model's Action",
        explanation:
          "The model emits the Action, an external execution engine runs the tool, and the environment feeds the result back to the model as the Observation.",
      },
    ],
  },

  "pe-ch4-l11": {
    overview:
      "Integrating LLMs into production software requires machine-readable, schema-valid data outputs (like JSON). In this lesson, based on Google TechAI and modern frontier model features, we explore prompt-based JSON enforcement, TypeScript/JSON Schema specifications, and model-level JSON mode / Structured Outputs guarantees.",
    canDo:
      "Can formulate prompts that reliably produce parseable JSON, provide explicit JSON schemas, and implement fallback sanitization routines.",
    teacherNote:
      "Never say 'Return JSON'. Models will wrap the output in conversational prose ('Here is your JSON:') or markdown backticks (` ```json `). Explicitly mandate: 'Output ONLY raw, valid JSON. Do not include markdown formatting, backticks, or explanatory text.' Better yet, use API-level response_format: { type: 'json_object' }!",
    sections: [
      {
        title: "1. Prompting for Structured JSON",
        description: "Techniques for zero-defect JSON extraction:",
        table: {
          headers: ["Strategy", "Code/Prompt Example", "Reliability Rating"],
          rows: [
            ["Markdown Code Block Extraction", "\"Wrap your output in ```json ... ```\"", "Moderate (requires regex parsing in backend)"],
            ["Raw JSON Only Prompt", "\"Respond ONLY with valid JSON. No conversational preamble.\"", "High"],
            ["JSON Schema Definition", "\"Adhere strictly to this JSON Schema: { 'type': 'object', ... }\"", "Very High"],
            ["API Native Structured Outputs", "response_format={ 'type': 'json_schema', 'schema': ... }", "100% Guaranteed (Constrained decoding)"],
          ],
        },
      },
      {
        title: "2. The One-Shot Schema Example",
        description: "Providing an exact exemplar of the desired JSON structure:",
        items: [
          {
            term: "Demonstration Output Template",
            meaning: "Showing the exact keys and data types expected",
            example: "{\n  \"sentiment\": \"positive\" | \"neutral\" | \"negative\",\n  \"confidence\": 0.0 to 1.0,\n  \"extracted_entities\": [\"string\"],\n  \"summary\": \"string\"\n}",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Why should prompt engineers provide an explicit JSON Schema when requesting structured outputs?",
        options: [
          "It allows the model to choose key names dynamically",
          "It eliminates ambiguity by defining the exact required keys, allowed enum values, and nesting hierarchy",
          "JSON schemas make the prompt 10x cheaper",
          "It prevents the prompt from using tokens",
        ],
        answer: "It eliminates ambiguity by defining the exact required keys, allowed enum values, and nesting hierarchy",
        explanation:
          "Providing a strict schema gives the model an exact structural blueprint, ensuring reliable key names and types that client applications can parse immediately.",
      },
      {
        question: "What is 'Constrained Decoding' in modern structured output APIs?",
        options: [
          "Turning off the LLM's safety filters",
          "Modifying the model's token sampling mask so that only tokens that satisfy the grammar/schema can be generated",
          "Running Python after the prompt finishes",
          "Encrypting JSON payloads with RSA",
        ],
        answer: "Modifying the model's token sampling mask so that only tokens that satisfy the grammar/schema can be generated",
        explanation:
          "Constrained decoding dynamically masks invalid tokens at every step of generation, mathematically guaranteeing that the output adheres 100% to the specified JSON schema.",
      },
    ],
  },

  "pe-ch4-l12": {
    overview:
      "Function calling enables LLMs to serve as the reasoning brains of complex applications by generating valid tool arguments. In this lesson, drawn from Google Gemini Function Calling and OpenAI specifications, we cover declaring tool definitions, passing JSON schemas of functions, parsing function call requests, and feeding tool execution responses back into the dialog loop.",
    canDo:
      "Can author function declarations with descriptive docstrings and parameter schemas, parse tool call requests, and complete the tool response loop.",
    teacherNote:
      "In function calling, the LLM DOES NOT execute the code itself! The model detects that a tool is needed, formulates the arguments in JSON, and pauses. Your backend server runs the function, captures the return value, and sends it back to the LLM to complete its answer.",
    sections: [
      {
        title: "1. The 4-Step Function Calling Architecture",
        description: "How LLMs safely interact with backend tools:",
        table: {
          headers: ["Step", "Entity", "Payload", "Action"],
          rows: [
            ["1. Tool Definition", "Developer", "List of tools with JSON parameter schemas", "Sent alongside user prompt to LLM."],
            ["2. Tool Selection", "LLM", "{ name: 'book_flight', arguments: { dest: 'NYC' } }", "Model halts text generation and requests tool invocation."],
            ["3. Tool Execution", "Backend Server", "Executes real API / SQL call on local infrastructure", "Captures output data securely."],
            ["4. Final Synthesis", "LLM", "Consumes tool output and formulates natural language answer", "Delivers verified response to user."],
          ],
        },
      },
      {
        title: "2. Writing High-Quality Tool Descriptions",
        description: "The importance of clear docstrings in function schemas:",
        items: [
          {
            term: "Docstring Clarity",
            meaning: "The model relies entirely on the tool's description to decide WHEN to call it",
            example: "\"description\": \"Search current financial filings submitted to the SEC. Use this whenever the user asks for official 10-K or 10-Q revenue numbers.\"",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Does the Large Language Model itself execute the code when function calling is invoked?",
        options: [
          "Yes, it executes code inside the GPU",
          "No, the LLM only generates the function name and structured JSON arguments; your backend server executes the code",
          "Only if the function is written in JavaScript",
          "Only in open-source models",
        ],
        answer: "No, the LLM only generates the function name and structured JSON arguments; your backend server executes the code",
        explanation:
          "The LLM is a reasoning and parsing engine. It decides which function to call and formulates the arguments, but client code handles execution securely.",
      },
      {
        question: "Why are parameter descriptions inside function calling schemas crucial?",
        options: [
          "They are ignored by the model",
          "They tell the model what format, constraints, and semantics are expected for each argument",
          "They determine the pricing of the API",
          "They make the tool synchronous",
        ],
        answer: "They tell the model what format, constraints, and semantics are expected for each argument",
        explanation:
          "The model reads parameter descriptions as in-context instructions to determine what valid values look like (e.g. ISO-8601 date formats, enum choices).",
      },
    ],
  },
};
