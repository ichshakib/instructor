import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_1_LESSONS: Record<string, LessonContent> = {
  "java-ch1-l1": {
    overview:
      "Java is a statically typed, class-based, object-oriented programming language designed around the write-once-run-anywhere (WORA) philosophy. Drawing from Y. Daniel Liang's 'Introduction to Java Programming' and David J. Eck's 'javanotes5', this lesson examines the Java execution pipeline: compiling source code (.java) into platform-independent bytecode (.class) via javac, and executing it within the Java Virtual Machine (JVM).",
    canDo:
      "Can explain the difference between JDK, JRE, and JVM, compile source code with javac, execute programs with java, and formulate a valid public static void main method signature.",
    teacherNote:
      "The main method signature `public static void main(String[] args)` is rigid in classic Java: `public` allows JVM access, `static` enables invocation without class instantiation, `void` specifies no return value, and `String[] args` captures command-line arguments.",
    sections: [
      {
        title: "1. The Java Platform Architecture (JDK vs JRE vs JVM)",
        description: "Components that comprise the Java developer and execution runtime:",
        table: {
          headers: ["Layer", "Acronym", "Contains", "Primary Role"],
          rows: [
            ["Java Development Kit", "JDK", "javac compiler, jar archiver, javadoc, JRE", "Complete toolset required to write and compile Java code."],
            ["Java Runtime Environment", "JRE", "JVM, Java Core Class Libraries, rt.jar", "Execution environment needed to run compiled Java applications."],
            ["Java Virtual Machine", "JVM", "Class Loader, Bytecode Verifier, Execution Engine (JIT + GC)", "Abstract computing machine translating bytecode to host CPU instructions."],
          ],
        },
      },
      {
        title: "2. Compilation and Execution Commands",
        description: "Standard terminal operations to build and execute Java applications:",
        items: [
          {
            term: "javac App.java",
            meaning: "Compiles source text into App.class containing platform-neutral bytecode instructions",
            example: "javac HelloWorld.java",
          },
          {
            term: "java App",
            meaning: "Launches the JVM, loads App.class, verifies bytecode, and invokes the main method",
            example: "java HelloWorld  # Note: do NOT append .class",
          },
          {
            term: "public static void main(String[] args)",
            meaning: "Standard entry point mandated by the JVM runtime",
            example: "public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Java!\");\n    }\n}",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Which tool compiles `.java` source files into portable `.class` bytecode files?",
        options: ["javac", "java", "jvm", "javadoc"],
        answer: "javac",
        explanation:
          "javac is the Java Compiler included in the JDK that translates human-readable .java source code into JVM bytecode (.class).",
      },
      {
        question: "Why must the main entry method in Java be declared `static`?",
        options: [
          "To allow JVM to invoke it without creating an instance of the class first",
          "To prevent variables inside it from changing",
          "To make it run faster in multithreaded mode",
          "Because Java does not support classes",
        ],
        answer: "To allow JVM to invoke it without creating an instance of the class first",
        explanation:
          "The JVM needs an entry point before any objects exist in memory. Marking main as static allows the runtime to execute it directly on the class.",
      },
    ],
  },

  "java-ch1-l2": {
    overview:
      "Java enforces strong static typing where variable types must be declared at compile time. This lesson covers Java's 8 primitive data types (byte, short, int, long, float, double, char, boolean), their exact bit widths and ranges, variable declaration conventions, and arithmetic operators.",
    canDo:
      "Can select appropriate primitive types based on value ranges, avoid integer overflow, declare variables with explicit types, and perform arithmetic operations.",
    teacherNote:
      "Java does not have unsigned numeric primitives (except `char` which is an unsigned 16-bit Unicode value). `int` is always a 32-bit signed two's complement integer (-2^31 to 2^31-1). Always append 'L' for long literals (e.g. `10000000000L`) and 'f' for float literals (`3.14f`).",
    sections: [
      {
        title: "1. The 8 Java Primitive Types",
        description: "Fixed-size value types stored directly on the execution stack:",
        table: {
          headers: ["Primitive", "Size", "Range / Format", "Default Value"],
          rows: [
            ["byte", "8 bits", "-128 to 127", "0"],
            ["short", "16 bits", "-32,768 to 32,767", "0"],
            ["int", "32 bits", "-2,147,483,648 to 2,147,483,647", "0"],
            ["long", "64 bits", "-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807", "0L"],
            ["float", "32 bits", "IEEE 754 single-precision (approx 7 decimal digits)", "0.0f"],
            ["double", "64 bits", "IEEE 754 double-precision (approx 15 decimal digits)", "0.0d"],
            ["char", "16 bits", "0 to 65,535 (Single 16-bit Unicode character: '\\u0000')", "'\\u0000'"],
            ["boolean", "1 bit (logical)", "true or false", "false"],
          ],
        },
      },
      {
        title: "2. Type Casting: Widening vs Narrowing",
        description: "Converting values between compatible primitive types:",
        items: [
          {
            term: "Widening Casting (Implicit)",
            meaning: "Converting a smaller type to a larger type without data loss",
            example: "int count = 100;\ndouble rate = count; // Automatic widening: 100.0",
          },
          {
            term: "Narrowing Casting (Explicit)",
            meaning: "Converting larger type to smaller type with potential data truncation; requires (type) cast",
            example: "double price = 99.95;\nint truncated = (int) price; // Explicit narrowing: 99",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Which Java primitive type stores a 64-bit signed integer?",
        options: ["int", "long", "double", "short"],
        answer: "long",
        explanation:
          "In Java, long is a 64-bit two's complement integer, declared with an optional 'L' suffix (e.g. 5000000000L).",
      },
      {
        question: "What is the result of casting `(int) 7.89` in Java?",
        options: ["8", "7", "7.0", "Compile error"],
        answer: "7",
        explanation:
          "Explicitly casting a floating-point double to an int truncates the fractional portion towards zero, leaving 7.",
      },
    ],
  },

  "java-ch1-l3": {
    overview:
      "Conditional branching and repetitive iteration govern algorithmic logic in Java. In this lesson, we study if, else if, else branches, switch statements (including Java 14+ enhanced switch expressions), while loops, do-while loops, and standard counted for loops.",
    canDo:
      "Can structure branching logic using modern switch expressions with arrow syntax (->), implement counted and conditional loops, and control execution with break and continue.",
    teacherNote:
      "In modern Java (Java 14+), switch expressions allow arrow syntax (`case MONDAY -> 1;`), eliminating the notorious missing-break fallthrough bug and allowing switch blocks to yield values directly into variables!",
    sections: [
      {
        title: "1. Modern Switch Expressions (Java 14+)",
        description: "Clean pattern branching with arrow syntax and return values:",
        table: {
          headers: ["Syntax Style", "Example", "Fallthrough Risk", "Can Return Value?"],
          rows: [
            ["Traditional switch", "case 1:\n    System.out.println(\"One\");\n    break;", "High (requires break on every case)", "No"],
            ["Enhanced Arrow switch", "case 1 -> System.out.println(\"One\");", "None (isolated execution)", "Yes (assignment directly to variable)"],
          ],
        },
      },
      {
        title: "2. Loop Constructs in Java",
        description: "Standard iteration loops and loop controls:",
        items: [
          {
            term: "Standard for Loop",
            meaning: "Pre-checked loop with initialization, condition, and increment",
            example: "for (int i = 0; i < 5; i++) {\n    System.out.println(\"Index: \" + i);\n}",
          },
          {
            term: "Enhanced for-each Loop",
            meaning: "Clean traversal over arrays and Iterable collections",
            example: "int[] scores = {90, 85, 95};\nfor (int score : scores) {\n    System.out.println(score);\n}",
          },
          {
            term: "do-while Loop",
            meaning: "Post-checked loop guaranteed to execute its body at least once",
            example: "int choice;\ndo {\n    choice = readMenuSelection();\n} while (choice != 0);",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Which loop construct guarantees that the loop body will execute at least once?",
        options: ["for loop", "while loop", "do-while loop", "for-each loop"],
        answer: "do-while loop",
        explanation:
          "In a do-while loop, the condition is evaluated at the bottom after the loop body has already run at least once.",
      },
      {
        question: "What keyword immediately skips the remainder of the current loop iteration and proceeds to the next iteration test?",
        options: ["break", "continue", "skip", "pass"],
        answer: "continue",
        explanation:
          "The 'continue' statement immediately jumps to the next iteration of the loop, skipping any statements remaining in the current iteration.",
      },
    ],
  },
};
