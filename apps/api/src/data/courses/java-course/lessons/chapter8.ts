import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_8_LESSONS: Record<string, LessonContent> = {
  "java-ch8-l22": {
    overview:
      "The Stream API (introduced in Java 8) revolutionized data processing in Java, replacing imperative loops with declarative pipelines. Grounded in functional programming principles, this lesson unpacks stream pipelines: data sources, lazy intermediate operations (`filter`, `map`, `distinct`, `sorted`, `flatMap`), and terminal operations (`collect`, `forEach`, `count`, `reduce`).",
    canDo:
      "Can construct declarative stream pipelines, explain lazy evaluation, transform data using map() and filter(), and recognize intermediate vs terminal operations.",
    teacherNote:
      "Streams are NOT data structures: they do not store elements! Streams are lazy computation pipelines. Intermediate operations (like `filter` or `map`) execute ZERO code until a terminal operation (like `collect` or `findFirst`) is invoked on the stream.",
    sections: [
      {
        title: "1. Intermediate vs Terminal Stream Operations",
        description: "Anatomy of an efficient stream pipeline:",
        table: {
          headers: ["Operation Category", "Examples", "Return Type", "Execution Behavior"],
          rows: [
            ["Intermediate Operations", "filter(), map(), flatMap(), sorted(), distinct(), limit()", "Stream<T>", "Lazy; pipeline stages are fused and deferred until terminal trigger."],
            ["Terminal Operations", "collect(), forEach(), toList(), count(), anyMatch(), reduce()", "Concrete value or Collection", "Eager; triggers execution of the entire pipeline and consumes the stream."],
          ],
        },
      },
      {
        title: "2. The Stream Pipeline in Action",
        description: "Declarative transformations over collections:",
        items: [
          {
            term: "Declarative Filtering & Mapping",
            meaning: "Extracting, transforming, and collecting items without manual loops",
            example: "List<String> activeUsernames = users.stream()\n    .filter(User::isActive)\n    .map(User::getUsername)\n    .sorted()\n    .toList(); // Modern Java 16+ concise terminal collector",
          },
        ],
      },
    ],
    practice: [
      {
        question: "When do intermediate operations like `filter()` and `map()` actually execute in a Java Stream pipeline?",
        options: [
          "Immediately when the method is invoked",
          "Only when a terminal operation (like collect or toList) is called on the stream",
          "When the Garbage Collector runs",
          "When the stream is closed",
        ],
        answer: "Only when a terminal operation (like collect or toList) is called on the stream",
        explanation:
          "Java streams are lazily evaluated. Intermediate operations are queued into an execution plan and are only traversed when a terminal operation is called.",
      },
      {
        question: "Can a single Java Stream instance be reused for a second terminal operation after it has already been consumed?",
        options: [
          "Yes, streams can be consumed unlimited times",
          "No, a stream cannot be reused once operated upon and will throw an IllegalStateException",
          "Only if marked with @Reopen",
          "Only if the source collection is immutable",
        ],
        answer: "No, a stream cannot be reused once operated upon and will throw an IllegalStateException",
        explanation:
          "A Stream in Java can only be traversed once. Attempting to invoke another terminal operation on a consumed stream throws an IllegalStateException.",
      },
    ],
  },

  "java-ch8-l23": {
    overview:
      "Terminal reductions summarize stream elements into scalar values or complex collections. In this lesson, we study the `Collectors` utility class: gathering to collections (`toList()`, `toSet()`, `toCollection()`), grouping data by category (`groupingBy()`), partitioning (`partitioningBy()`), string concatenation with `joining()`, and custom numeric reductions with `reduce()`.",
    canDo:
      "Can aggregate stream elements with Collectors.groupingBy(), partition data with boolean predicates, and accumulate values using stream reduce().",
    teacherNote:
      "Since Java 16, you can simply call `.toList()` directly on any `Stream` to produce an unmodifiable list, replacing the verbose legacy `Collectors.toList()`. Use `Collectors.groupingBy()` whenever you need to categorize data into a `Map<Category, List<Item>>`.",
    sections: [
      {
        title: "1. High-Impact Collectors Utilities",
        description: "Transforming stream outputs into rich data structures:",
        table: {
          headers: ["Collector Method", "Return Type", "Primary Use Case", "Example"],
          rows: [
            ["stream.toList()", "List<T> (Unmodifiable)", "Standard list gathering", "items.stream().filter(...).toList()"],
            ["Collectors.groupingBy(classifier)", "Map<K, List<T>>", "Categorizing objects by key/attribute", "transactions.stream().collect(Collectors.groupingBy(Tx::getCurrency))"],
            ["Collectors.partitioningBy(predicate)", "Map<Boolean, List<T>>", "Splitting elements into true/false lists", "students.stream().collect(Collectors.partitioningBy(s -> s.getScore() >= 60))"],
            ["Collectors.joining(delimiter)", "String", "Concatenating strings cleanly", "names.stream().collect(Collectors.joining(\", \"))"],
          ],
        },
      },
      {
        title: "2. The reduce() Terminal Operation",
        description: "Custom mathematical and object aggregations:",
        items: [
          {
            term: "stream.reduce(identity, accumulator)",
            meaning: "Folds all elements into a single value using a binary operator",
            example: "int sum = numbers.stream().reduce(0, (acc, n) -> acc + n);\n// Equivalent to: numbers.stream().reduce(0, Integer::sum);",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Which collector groups stream elements into a `Map<K, List<T>>` based on a classification function?",
        options: [
          "Collectors.toMap()",
          "Collectors.groupingBy()",
          "Collectors.partitioningBy()",
          "Collectors.categorize()",
        ],
        answer: "Collectors.groupingBy()",
        explanation:
          "Collectors.groupingBy() applies a classification function to each element and collects matching elements into lists mapped to the resulting key.",
      },
      {
        question: "What does `Stream.of(\"A\", \"B\", \"C\").collect(Collectors.joining(\"-\"))` return?",
        options: ["[\"A\", \"B\", \"C\"]", "\"A-B-C\"", "\"A, B, C\"", "\"ABC\""],
        answer: "\"A-B-C\"",
        explanation:
          "Collectors.joining(\"-\") concatenates the elements in order separated by the specified delimiter, yielding \"A-B-C\".",
      },
    ],
  },

  "java-ch8-l24": {
    overview:
      "Modern Java file operations rely on Java NIO.2 (`java.nio.file`), which supersedes legacy `java.io.File` with non-blocking capabilities, rich metadata, and cross-platform path handling. In this capstone lesson, we cover `Path`, `Paths`, `Files` helper methods, streaming file contents with `Files.lines()`, and atomic file operations.",
    canDo:
      "Can manipulate paths using java.nio.file.Path, read and write files with Files utility methods, and stream multi-gigabyte files efficiently with Files.lines().",
    teacherNote:
      "NEVER use `Files.readAllLines(path)` on large files! It reads the ENTIRE file into heap memory at once, risking an OutOfMemoryError. Instead, use `Files.lines(path)` inside a try-with-resources statement to lazily stream lines one by one without memory bloat!",
    sections: [
      {
        title: "1. Modern Java NIO.2 Architecture (Path vs Files)",
        description: "High-performance filesystem operations:",
        table: {
          headers: ["Class", "Role", "Core Methods", "Key Benefit"],
          rows: [
            ["Path", "Object-oriented representation of a file or directory path", "path.resolve(), path.getParent(), path.getFileName()", "Cross-platform path normalization across Windows/Linux."],
            ["Files", "Static utility class for file system operations", "Files.readString(), Files.writeString(), Files.exists(), Files.delete()", "Standardized operations with detailed NoSuchFileException errors."],
          ],
        },
      },
      {
        title: "2. Streaming File Content Lazily with Files.lines()",
        description: "Processing massive text files with constant RAM:",
        items: [
          {
            term: "Files.lines(Path) Pipeline",
            meaning: "Opens file as a lazy Stream<String>; lines are read on demand and closed automatically",
            example: "Path logPath = Path.of(\"server.log\");\ntry (Stream<String> lines = Files.lines(logPath)) {\n    long errorCount = lines\n        .filter(line -> line.contains(\"FATAL\"))\n        .count();\n    System.out.println(\"Fatal errors: \" + errorCount);\n}",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Why should `Files.lines(Path)` be enclosed in a `try-with-resources` statement?",
        options: [
          "To speed up compilation",
          "Because the underlying Stream<String> holds an open operating system file handle that must be closed",
          "Because Java requires all streams to be in try blocks",
          "To encrypt the file",
        ],
        answer: "Because the underlying Stream<String> holds an open operating system file handle that must be closed",
        explanation:
          "Unlike in-memory collection streams, file-backed streams hold an open OS file descriptor. Enclosing in try-with-resources ensures the file is closed cleanly upon stream completion or exception.",
      },
      {
        question: "Which modern NIO.2 method writes a String directly to a file using UTF-8 in a single call?",
        options: [
          "Files.writeString(Path, CharSequence)",
          "File.writeText(String)",
          "Path.save(String)",
          "System.out.saveFile()",
        ],
        answer: "Files.writeString(Path, CharSequence)",
        explanation:
          "Files.writeString(Path, CharSequence) was introduced in Java 11 to write string content directly to a file with UTF-8 encoding by default.",
      },
    ],
  },
};
