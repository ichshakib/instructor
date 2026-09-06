import { Course, Chapter } from "../../../types/course.types";
import { ALL_JAVA_LESSONS_CONTENT } from "./lessons";

const JAVA_RAW_CHAPTERS: Chapter[] = [
  {
    id: "java-ch1",
    title: "Chapter 1: The JVM Ecosystem & Java Syntax Foundations",
    lessons: [
      {
        id: "java-ch1-l1",
        title: "Lesson 1: The Java Platform Architecture: JDK, JRE, JVM & Bytecode",
        description: "Understanding javac bytecode compilation, JVM execution, platform neutrality, and the main entry point.",
      },
      {
        id: "java-ch1-l2",
        title: "Lesson 2: Java's 8 Primitive Types, Memory Sizes & Type Casting",
        description: "Bit-widths, ranges, implicit widening, explicit narrowing, and preventing integer overflow bugs.",
      },
      {
        id: "java-ch1-l3",
        title: "Lesson 3: Branching Logic, Modern Switch Expressions & Loops",
        description: "if/else logic, Java 14+ arrow switch expressions, while loops, and enhanced for-each iteration.",
      },
    ],
  },
  {
    id: "java-ch2",
    title: "Chapter 2: Methods, Memory Layout & Arrays",
    lessons: [
      {
        id: "java-ch2-l4",
        title: "Lesson 4: Method Declarations, Pass-by-Value & JVM Stack vs Heap",
        description: "Stack activation frames, heap allocation, method overloading signatures, and strict pass-by-value semantics.",
      },
      {
        id: "java-ch2-l5",
        title: "Lesson 5: Single-Dimensional Arrays & The java.util.Arrays Utility",
        description: "Zero-based indexing, heap default initialization, boundary checks, and sorting with Dual-Pivot Quicksort.",
      },
      {
        id: "java-ch2-l6",
        title: "Lesson 6: Multidimensional Arrays & Ragged Matrix Traversal",
        description: "Arrays of arrays in JVM heap, nested iteration, jagged grids, and deep string representations.",
      },
    ],
  },
  {
    id: "java-ch3",
    title: "Chapter 3: Object-Oriented Principles: Classes, State & Encapsulation",
    lessons: [
      {
        id: "java-ch3-l7",
        title: "Lesson 7: Classes, Objects, Fields & Constructor Overloading",
        description: "Class declaration blueprints, instantiating objects with new, and multiple initialization paths.",
      },
      {
        id: "java-ch3-l8",
        title: "Lesson 8: The this Reference, Variable Shadowing & Constructor Chaining",
        description: "Disambiguating fields from parameters, chaining constructors with this(), and passing instance callbacks.",
      },
      {
        id: "java-ch3-l9",
        title: "Lesson 9: Access Modifiers, Packages & JavaBean Encapsulation",
        description: "public, protected, package-private, private visibility, package hierarchies, and validated getters/setters.",
      },
    ],
  },
  {
    id: "java-ch4",
    title: "Chapter 4: Inheritance, Polymorphism & Abstract Classes",
    lessons: [
      {
        id: "java-ch4-l10",
        title: "Lesson 10: Inheritance with extends & Superclass Initialization with super()",
        description: "Modeling 'is-a' relationships, single inheritance guarantees, and top-down constructor execution.",
      },
      {
        id: "java-ch4-l11",
        title: "Lesson 11: Method Overriding, Dynamic Method Dispatch & Pattern Matching instanceof",
        description: "Runtime polymorphism, vtables, the @Override annotation, and modern pattern matching instanceof.",
      },
      {
        id: "java-ch4-l12",
        title: "Lesson 12: Abstract Classes, Incomplete Blueprints & Abstract Method Contracts",
        description: "Enforcing subclass implementation contracts, preventing direct instantiation, and abstract design patterns.",
      },
    ],
  },
  {
    id: "java-ch5",
    title: "Chapter 5: Interfaces & Functional Programming with Lambdas",
    lessons: [
      {
        id: "java-ch5-l13",
        title: "Lesson 13: Interfaces, implements & Multiple Interface Realization",
        description: "100% abstract contracts, multiple interface realization, polymorphic references, and loose coupling.",
      },
      {
        id: "java-ch5-l14",
        title: "Lesson 14: Default Methods, Static Methods & Interface Evolution",
        description: "Evolving API contracts without breaking implementers, and resolving multiple default method collisions.",
      },
      {
        id: "java-ch5-l15",
        title: "Lesson 15: Functional Interfaces, Lambda Expressions & Method References",
        description: "Single Abstract Method types, lambda syntax, effectively final captures, and Class::method references.",
      },
    ],
  },
  {
    id: "java-ch6",
    title: "Chapter 6: The Java Collections Framework",
    lessons: [
      {
        id: "java-ch6-l16",
        title: "Lesson 16: List Hierarchy: ArrayList vs LinkedList (Complexity & Memory)",
        description: "Dynamic array cache locality, linked list node overhead, amortized O(1) appends, and safe removal with Iterator.",
      },
      {
        id: "java-ch6-l17",
        title: "Lesson 17: Set Hierarchy: HashSet, TreeSet & The equals/hashCode Contract",
        description: "Mathematical set uniqueness, O(1) hash lookups, Red-Black trees, and the strict equals/hashCode contract.",
      },
      {
        id: "java-ch6-l18",
        title: "Lesson 18: Map Hierarchy: HashMap Internal Architecture & Collision Trees",
        description: "Bucket arrays, linked-list-to-TreeNode treeification at threshold 8, and modern Map computeIfAbsent methods.",
      },
    ],
  },
  {
    id: "java-ch7",
    title: "Chapter 7: Exception Handling, Generics & Type Safety",
    lessons: [
      {
        id: "java-ch7-l19",
        title: "Lesson 19: Checked vs Unchecked Exceptions & The try-catch-finally Statement",
        description: "The Throwable hierarchy, compiler-enforced recovery, multi-catch syntax, and guaranteed finally cleanup.",
      },
      {
        id: "java-ch7-l20",
        title: "Lesson 20: Leak-Free Resource Management with try-with-resources",
        description: "The AutoCloseable contract, deterministic reverse-order resource closing, and suppressed exception handling.",
      },
      {
        id: "java-ch7-l21",
        title: "Lesson 21: Java Generics: Generic Types, PECS Wildcards & Type Erasure",
        description: "Compile-time type safety, Producer Extends Consumer Super (PECS), bounded types, and runtime type erasure.",
      },
    ],
  },
  {
    id: "java-ch8",
    title: "Chapter 8: Modern Java: Streams API & File I/O",
    lessons: [
      {
        id: "java-ch8-l22",
        title: "Lesson 22: The Stream Pipeline: Intermediate vs Terminal Operations",
        description: "Lazy evaluation pipelines, transforming collections with filter/map, and single-traversal consumption rules.",
      },
      {
        id: "java-ch8-l23",
        title: "Lesson 23: Collectors & Reductions: toList(), groupingBy() and reduce()",
        description: "Aggregating stream data, grouping items into maps, partitioning with predicates, and custom reductions.",
      },
      {
        id: "java-ch8-l24",
        title: "Lesson 24: Modern File I/O with Java NIO.2: Path, Files & Streaming Lines",
        description: "Non-blocking Path abstractions, Files read/write utilities, and streaming large files lazily with Files.lines().",
      },
    ],
  },
];

const JAVA_CHAPTERS: Chapter[] = JAVA_RAW_CHAPTERS.map((chapter) => ({
  ...chapter,
  lessons: chapter.lessons.map((lesson) => ({
    ...lesson,
    content: ALL_JAVA_LESSONS_CONTENT[lesson.id],
  })),
}));

export const javaCourse: Course = {
  id: "java-complete-course",
  title: "Java Programming Masterclass: Object-Oriented Software Engineering",
  category: "Development",
  type: "Full Course",
  typeIcon: "path",
  structureType: "chapters-and-lessons",
  tag1: "Java 17+",
  tag2: "Beginner to Advanced",
  badgeCount: "",
  coverVariant: "code-architecture",
  imageUrl: "/course-images/java-course.jpg",
  buttonLabel: "Start",
  description:
    "Master enterprise Java programming from fundamental JVM bytecode architecture to advanced Streams, Generics, and NIO.2 file handling, based on Y. Daniel Liang's 'Introduction to Java Programming' and David J. Eck's 'javanotes'. Covers OOP encapsulation, inheritance, polymorphism, interfaces, lambdas, the Java Collections Framework, and leak-free resource management.",
  featured: true,
  totalChapters: JAVA_CHAPTERS.length,
  totalLessons: JAVA_CHAPTERS.reduce((acc, ch) => acc + ch.lessons.length, 0),
  progressStatus: {
    type: "status",
    statusText: "New",
  },
  chapters: JAVA_CHAPTERS,
};
