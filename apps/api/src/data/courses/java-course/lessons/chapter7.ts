import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_7_LESSONS: Record<string, LessonContent> = {
  "java-ch7-l19": {
    overview:
      "Exception handling separates error detection from error mitigation. Synthesizing Y. Daniel Liang's Chapter 12 and David J. Eck's robust programming guidelines, this lesson covers the Throwable class hierarchy, the fundamental distinction between checked exceptions (mandated by the compiler) and unchecked exceptions (RuntimeException / Error), and multi-catch blocks.",
    canDo:
      "Can differentiate checked from unchecked exceptions, implement try-catch-finally blocks, create custom exception classes, and propagate errors with throws.",
    teacherNote:
      "Rule of thumb: Checked exceptions (subclasses of `Exception` that do not inherit from `RuntimeException`, e.g. `IOException`, `SQLException`) represent recoverable external failures that the compiler forces you to handle or declare in your `throws` clause. Unchecked exceptions (`NullPointerException`, `IllegalArgumentException`) represent programmer bugs.",
    sections: [
      {
        title: "1. The Throwable Class Hierarchy",
        description: "How Java organizes errors and exceptions:",
        table: {
          headers: ["Class", "Parent", "Compiler Enforced?", "Typical Examples"],
          rows: [
            ["Error", "Throwable", "Unchecked", "OutOfMemoryError, StackOverflowError (JVM fatal)"],
            ["Exception", "Throwable", "Checked", "IOException, SQLException, ClassNotFoundException"],
            ["RuntimeException", "Exception", "Unchecked", "NullPointerException, ArrayIndexOutOfBoundsException, IllegalArgumentException"],
          ],
        },
      },
      {
        title: "2. The try-catch-finally Construct",
        description: "Controlling abnormal execution flow:",
        items: [
          {
            term: "finally Block",
            meaning: "Always executes, whether an exception occurred, was caught, or the try block executed a return statement",
            example: "try {\n    processFile();\n} catch (IOException | SQLException e) { // Multi-catch\n    logger.error(\"Operation failed\", e);\n} finally {\n    cleanupTempFiles();\n}",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Which of the following is an UNCHECKED exception in Java?",
        options: ["IOException", "SQLException", "NullPointerException", "ClassNotFoundException"],
        answer: "NullPointerException",
        explanation:
          "NullPointerException inherits from RuntimeException, making it an unchecked exception that the compiler does not mandate declaring in a throws clause.",
      },
      {
        question: "When does a `finally` block execute in Java?",
        options: [
          "Only when an exception is thrown",
          "Only when no exception is thrown",
          "Always, even if a return statement is encountered in the try or catch block",
          "Only if System.exit(0) is called",
        ],
        answer: "Always, even if a return statement is encountered in the try or catch block",
        explanation:
          "A finally block is guaranteed to execute after try/catch, even if a return statement was executed, unless the JVM itself crashes or System.exit() terminates the process.",
      },
    ],
  },

  "java-ch7-l20": {
    overview:
      "Introduced in Java 7, the `try-with-resources` statement guarantees automatic, deterministic closure of system resources like database connections, files, and network sockets. This lesson explores the `AutoCloseable` interface, suppressed exceptions, and migrating away from verbose legacy finally cleanup boilerplate.",
    canDo:
      "Can manage operating system resources using try-with-resources, build custom resource classes implementing AutoCloseable, and inspect suppressed exceptions.",
    teacherNote:
      "Any resource class passed into `try (...)` MUST implement `java.lang.AutoCloseable` (or its sub-interface `java.io.Closeable`). Java will automatically call `close()` in reverse order of resource declaration at the end of the block!",
    sections: [
      {
        title: "1. Modern try-with-resources Syntax",
        description: "Clean, leak-free resource lifecycle management:",
        table: {
          headers: ["Pattern", "Code Example", "Cleanup Guarantee"],
          rows: [
            [
              "try-with-resources",
              "try (BufferedReader br = new BufferedReader(new FileReader(\"data.txt\"))) {\n    return br.readLine();\n}",
              "Compiler automatically generates code that calls br.close() even if readLine() throws an exception.",
            ],
            [
              "Multiple Resources",
              "try (InputStream in = openInput();\n     OutputStream out = openOutput()) {\n    in.transferTo(out);\n}",
              "Both resources are closed automatically in reverse order of their declaration.",
            ],
          ],
        },
      },
      {
        title: "2. The AutoCloseable Interface",
        description: "Making custom domain components resource-safe:",
        items: [
          {
            term: "public void close() throws Exception",
            meaning: "Single abstract method required to qualify for try-with-resources statements",
            example: "public class DatabaseConnection implements AutoCloseable {\n    @Override\n    public void close() {\n        System.out.println(\"Connection closed cleanly.\");\n    }\n}",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What interface must an object implement to be declared within a `try-with-resources` statement header?",
        options: ["Serializable", "AutoCloseable", "Cloneable", "Runnable"],
        answer: "AutoCloseable",
        explanation:
          "The try-with-resources statement requires any declared resource to implement java.lang.AutoCloseable, which defines the void close() method.",
      },
      {
        question: "In what order are multiple resources closed when declared in a single try-with-resources statement?",
        options: [
          "In the reverse order of their declaration",
          "In the same order as declared",
          "In random order based on thread priority",
          "Simultaneously in parallel",
        ],
        answer: "In the reverse order of their declaration",
        explanation:
          "Java closes resources in the reverse order of their creation, ensuring dependent downstream resources are closed before the primary resources they depend on.",
      },
    ],
  },

  "java-ch7-l21": {
    overview:
      "Java Generics enable strong compile-time type safety for classes, interfaces, and methods while avoiding dangerous runtime type casting. In this lesson, based on Liang's Chapter 19, we explore generic classes (`Box<T>`), bounded type parameters (`<T extends Number>`), wildcards (`? super T` and `? extends T` following PECS: Producer Extends, Consumer Super), and JVM Type Erasure.",
    canDo:
      "Can implement generic classes and methods, apply bounded type parameters, apply the PECS wildcard guideline, and explain why generic type parameters are erased at runtime.",
    teacherNote:
      "REMEMBER PECS: Producer Extends, Consumer Super! If a parameterized collection produces items (you read from it), use `<? extends T>`. If a collection consumes items (you write to it), use `<? super T>`. Also remember Type Erasure: at runtime, the JVM strips away generic types `<T>` and replaces them with their bound (or `Object`), which is why `new T()` is illegal in Java!",
    sections: [
      {
        title: "1. Generic Type Parameters & PECS Rule",
        description: "Understanding bounds and wildcard covariance/contravariance:",
        table: {
          headers: ["Wildcard Syntax", "Name", "Access Permitted", "PECS Role"],
          rows: [
            ["<? extends Number>", "Upper Bounded Wildcard", "Can read Number; CANNOT write/add new items (read-only)", "Producer (produces data)"],
            ["<? super Integer>", "Lower Bounded Wildcard", "Can write/add Integer; read returns Object", "Consumer (consumes data)"],
            ["<?>", "Unbounded Wildcard", "Read returns Object; only null can be added", "Unknown type"],
          ],
        },
      },
      {
        title: "2. Type Erasure & Runtime Implications",
        description: "How Java maintains backwards compatibility with pre-generics bytecode:",
        items: [
          {
            term: "Type Erasure",
            meaning: "Compiler removes all generic type info during compilation, inserting casts automatically into bytecode",
            example: "List<String> and List<Integer> both compile down to raw List in JVM bytecode! Thus, list instanceof List<String> is a compile error.",
          },
        ],
      },
    ],
    practice: [
      {
        question: "According to the PECS guideline, when should you use `? extends T`?",
        options: [
          "When you only want to add (write) items to the collection",
          "When the collection is a Producer from which you only read items of type T",
          "When the class is an abstract class",
          "When working with primitive integers",
        ],
        answer: "When the collection is a Producer from which you only read items of type T",
        explanation:
          "PECS stands for Producer Extends, Consumer Super. If your method reads (produces) items from the collection, use <? extends T>.",
      },
      {
        question: "Why is `new T()` not permitted inside a generic class `MyClass<T>` in Java?",
        options: [
          "Because T is always immutable",
          "Because Java uses Type Erasure, meaning the actual type of T is unknown to the JVM at runtime",
          "Because constructors cannot be public in generics",
          "It is permitted in Java 17+",
        ],
        answer: "Because Java uses Type Erasure, meaning the actual type of T is unknown to the JVM at runtime",
        explanation:
          "Due to type erasure, the type parameter T is replaced with Object (or its upper bound) at runtime, so the JVM cannot know which constructor to allocate.",
      },
    ],
  },
};
