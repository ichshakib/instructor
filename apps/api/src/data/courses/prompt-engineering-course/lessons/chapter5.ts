import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_5_LESSONS: Record<string, LessonContent> = {
  "pe-ch5-l13": {
    overview:
      "Retrieval-Augmented Generation (RAG) grounds language model outputs in verified external knowledge bases, overcoming training cutoff dates and eliminating factual hallucinations. Synthesizing concepts from the Google TechAI Whitepaper and production RAG patterns, this lesson explains dense vector embeddings, vector databases (Pinecone, Chroma, pgvector), and cosine similarity search.",
    canDo:
      "Can explain the core RAG architecture, convert text into floating-point dense vector embeddings, calculate cosine similarity, and ground generative answers in retrieved facts.",
    teacherNote:
      "Embeddings convert text into dense high-dimensional vectors (e.g. 768 or 1536 dimensions) where semantic similarity corresponds to geometric proximity (cosine angle). Sentences with identical meanings like 'The dog barked' and 'A hound yapped' map to near-identical vector coordinates!",
    sections: [
      {
        title: "1. The RAG Pipeline Architecture",
        description: "How external data is retrieved and injected into generative contexts:",
        table: {
          headers: ["Stage", "Process", "Data Structure", "Component"],
          rows: [
            ["1. Ingestion", "Document parsing & text chunking", "Clean text chunks (~500 tokens)", "Parser / TextSplitter"],
            ["2. Embedding", "Vector generation via embedding model", "Dense float array (e.g. [0.024, -0.891, ...])", "text-embedding-3 / Gemini Embeddings"],
            ["3. Indexing", "Storing vectors with metadata", "HNSW / IVFFlat indexed graph", "Vector Database (Pinecone, Chroma)"],
            ["4. Retrieval", "Query vector similarity search", "Top-K most relevant chunks", "k-Nearest Neighbors (k-NN)"],
            ["5. Generation", "Injecting chunks into context prompt", "Augmented prompt -> Final answer", "Frontier LLM (GPT-4 / Gemini)"],
          ],
        },
      },
      {
        title: "2. Vector Similarity Metrics",
        description: "Measuring semantic distance:",
        items: [
          {
            term: "Cosine Similarity",
            meaning: "Measures cosine of the angle between two vectors; ranges from -1 to 1 (1 = identical orientation)",
            example: "Normalized dot product: cos(θ) = (A · B) / (||A|| ||B||)",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What is the primary problem solved by Retrieval-Augmented Generation (RAG)?",
        options: [
          "It lowers the electricity consumption of the GPU",
          "It eliminates hallucinations and knowledge cutoffs by grounding answers in retrieved external documents",
          "It makes the model run without internet",
          "It replaces the need for an LLM completely",
        ],
        answer: "It eliminates hallucinations and knowledge cutoffs by grounding answers in retrieved external documents",
        explanation:
          "RAG dynamically retrieves verified facts from an external knowledge base and injects them into the prompt, ensuring outputs are grounded in proprietary or recent truth.",
      },
      {
        question: "What does an embedding model output when given a text paragraph?",
        options: [
          "A summary paragraph",
          "A high-dimensional vector (array of floating-point numbers) representing semantic meaning",
          "A cryptographic hash (SHA-256)",
          "An SQL table schema",
        ],
        answer: "A high-dimensional vector (array of floating-point numbers) representing semantic meaning",
        explanation:
          "Embedding models encode the semantic concepts of text into high-dimensional geometric coordinates suitable for mathematical similarity comparison.",
      },
    ],
  },

  "pe-ch5-l14": {
    overview:
      "Garbage in, garbage out: the success of any RAG system depends on chunking strategy and retrieval precision. In this lesson, we study splitting strategies (fixed-size, sentence-boundary, semantic chunking, markdown chunking), chunk overlap to preserve context across boundaries, and selecting the optimal Top-K retrieval count.",
    canDo:
      "Can implement chunking strategies with sliding window overlap, evaluate chunk sizes for target domains, and tune retrieval Top-K.",
    teacherNote:
      "Always configure an overlap (e.g. chunk size 500 tokens with 50-token overlap). If a critical piece of information (like a sentence or definition) is sliced across an arbitrary chunk boundary, the semantic meaning is broken unless overlap is preserved!",
    sections: [
      {
        title: "1. Chunking Strategies Compared",
        description: "Techniques for segmenting documents for vector search:",
        table: {
          headers: ["Strategy", "Chunk Boundary", "Best For", "Pros & Cons"],
          rows: [
            ["Fixed Character/Token", "Every N characters/tokens with overlap", "Raw unstructured text", "Fast and simple; may split words or sentences awkwardly."],
            ["Recursive / Sentence", "Paragraphs -> Sentences -> Words", "Articles, books, documentation", "Preserves grammatical thoughts cleanly."],
            ["Markdown / Semantic", "Header tags (#, ##, ###) and sections", "Technical docs, knowledge bases", "Highest semantic coherence; chunks vary in length."],
          ],
        },
      },
      {
        title: "2. The Top-K Tradeoff",
        description: "Balancing context richness against noise and cost:",
        items: [
          {
            term: "Top-K Selection",
            meaning: "The number of chunks retrieved from the vector database to inject into the prompt",
            example: "Top-K = 3 to 5 is typical. Setting Top-K too high (e.g. 30) dilutes attention ('Lost in the Middle') and inflates token cost.",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Why is 'chunk overlap' essential when splitting long documents for vector search?",
        options: [
          "To duplicate data for backup purposes",
          "To prevent sentences and contextual thoughts from being severed across chunk boundaries",
          "To make the vector database larger",
          "Because embedding models require overlapping tokens",
        ],
        answer: "To prevent sentences and contextual thoughts from being severed across chunk boundaries",
        explanation:
          "Overlap guarantees that facts appearing near a split point are preserved with their immediate context in at least one chunk.",
      },
      {
        question: "What happens if you set Top-K retrieval too high (e.g., Top-K = 50)?",
        options: [
          "The search speed becomes faster",
          "The prompt becomes bloated with irrelevant chunks, increasing cost and confusing model attention (Lost in the Middle)",
          "The model fails to generate any text",
          "It forces the model to return JSON",
        ],
        answer: "The prompt becomes bloated with irrelevant chunks, increasing cost and confusing model attention (Lost in the Middle)",
        explanation:
          "Injecting too many chunks dilutes model attention with low-relevance noise, increasing latency and error rates.",
      },
    ],
  },

  "pe-ch5-l15": {
    overview:
      "Formatting the augmented context and guiding the model to cite sources is the final mile of RAG. In this lesson, we explore prompt templates for context injection, cross-encoder re-ranking (Cohere Rerank) to filter noisy chunks, strict grounding instructions ('Answer ONLY using the provided documents'), and generating verifiable inline citations.",
    canDo:
      "Can author robust RAG grounding prompts, integrate re-ranking pipelines, instruct models to refuse out-of-context inquiries, and format inline source citations.",
    teacherNote:
      "To prevent hallucinations when external documents lack the answer, you must provide an explicit fallback escape hatch: 'If the provided context does not contain enough information to answer the question, state: \"I do not have sufficient information to answer this based on the provided documents.\" Do not extrapolate.'",
    sections: [
      {
        title: "1. The Canonical RAG Prompt Template",
        description: "Template that enforces factual grounding and citations:",
        items: [
          {
            term: "Production Grounded Prompt",
            meaning: "Explicitly constrains the model to provided sources",
            example: "You are a factual research assistant.\nAnswer the user's question relying ONLY on the context snippets provided below.\nIf the answer cannot be found in the context, reply: \"I cannot answer based on the provided documents.\"\nDo NOT use outside knowledge.\nCite the chunk ID [Source X] for every factual claim.\n\n<context>\n[Source 1]: {{CHUNK_1_TEXT}}\n[Source 2]: {{CHUNK_2_TEXT}}\n</context>\n\n<question>\n{{USER_QUESTION}}\n</question>",
          },
        ],
      },
      {
        title: "2. Two-Stage Retrieval with Cross-Encoder Re-ranking",
        description: "Improving precision before prompt injection:",
        table: {
          headers: ["Stage", "Model Type", "Candidate Count", "Latency"],
          rows: [
            ["1. Bi-Encoder Retrieval", "Vector Embedding search (cosine)", "Retrieve top 25 chunks", "Ultra-fast (5-10ms)"],
            ["2. Cross-Encoder Re-Ranker", "Deep sequence comparison (Cohere / BGE)", "Score and filter to top 4 purest chunks", "Fast (30-50ms)"],
          ],
        },
      },
    ],
    practice: [
      {
        question: "What instruction must be included in a RAG prompt to prevent the model from guessing when context is missing?",
        options: [
          "\"Guess the closest answer.\"",
          "\"If the provided context does not contain the answer, explicitly state that you cannot answer based on the documents.\"",
          "\"Search Google silently.\"",
          "\"Set temperature to 1.0.\"",
        ],
        answer: "\"If the provided context does not contain the answer, explicitly state that you cannot answer based on the documents.\"",
        explanation:
          "Providing an explicit fallback instruction prevents the model from relying on parametric memory hallucinations when external context lacks the required data.",
      },
      {
        question: "What is the role of a 'Re-ranker' in advanced RAG architectures?",
        options: [
          "It sorts the database by date only",
          "It uses a cross-encoder model to re-score and re-order the retrieved chunks by semantic relevance, selecting only the highest quality context for the prompt",
          "It translates the prompt into English",
          "It compresses the prompt using gzip",
        ],
        answer: "It uses a cross-encoder model to re-score and re-order the retrieved chunks by semantic relevance, selecting only the highest quality context for the prompt",
        explanation:
          "Re-rankers evaluate query and document pairs jointly with full cross-attention, filtering out false positives from initial embedding search.",
      },
    ],
  },
};
