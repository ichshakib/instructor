import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_5_LESSONS: Record<string, LessonContent> = {
  "java-ch5-l13": {
    overview:
      "Interfaces in Java define 100% abstract behavioral contracts that unrelated classes can implement. Synthesizing Y. Daniel Liang's Chapter 13 and David J. Eck's interface patterns, this lesson covers the `interface` and `implements` keywords, multiple interface implementation, loose coupling, and programming to an interface rather than an implementation.",
    canDo:
      "Can declare interfaces, implement multiple interfaces in a single class, use interfaces as polymorphic reference types, and decouple software modules.",
    teacherNote:
      "The golden design rule in enterprise Java: 'Program to an interface, not an implementation!' Declare your references as `List<String> list = new ArrayList<>();` rather than `ArrayList<String> list = new ArrayList<>();`. This allows you to swap in a LinkedList later without breaking dependent code.",
    sections: [
      {
        title: "1. Interfaces & Multiple Implementation",
        description: "Enabling multi-behavior contracts in single-inheritance Java:",
        table: {
          headers: ["Capability", "Class Inheritance", "Interface Implementation"],
          rows: [
            ["Multiplicity", "Single only (`extends Parent`)", "Multiple allowed (`implements Serializable, Cloneable, Comparable`)"],
            ["Fields", "Can have instance fields with mutable state", "All fields are implicitly `public static final` constants"],
            ["Default Access", "Package-private if unspecified", "Methods are implicitly `public abstract` (unless default/static)"],
          ],
        },
      },
      {
        title: "2. The Comparable Interface Example",
        description: "Enabling natural sorting on custom domain objects:",
        items: [
          {
            term: "implements Comparable<T>",
            meaning: "Mandates the compareTo(T other) method to enable automatic sorting via Collections.sort()",
            example: "public class Student implements Comparable<Student> {\n    private int id;\n    private String name;\n\n    @Override\n    public int compareTo(Student other) {\n        return Integer.compare(this.id, other.id);\n    }\n}",
          },
        ],
      },
    ],
    practice: [
      {
        question: "How many interfaces can a single Java class implement?",
        options: ["Only 1", "Up to 2", "As many as needed (unlimited)", "Zero"],
        answer: "As many as needed (unlimited)",
        explanation:
          "Java allows a class to implement any number of interfaces separated by commas: 'class MyClass implements InterfaceA, InterfaceB, InterfaceC'.",
      },
      {
        question: "Why is `List<String> items = new ArrayList<>();` considered superior to `ArrayList<String> items = new ArrayList<>();`?",
        options: [
          "It allocates less heap memory",
          "It programs to the List interface, allowing easy substitution of alternative implementations without modifying client code",
          "The Java compiler requires it",
          "It runs in a separate thread",
        ],
        answer: "It programs to the List interface, allowing easy substitution of alternative implementations without modifying client code",
        explanation:
          "Programming to the interface creates loose coupling. Any method accepting List<String> can receive an ArrayList, LinkedList, or ImmutableList without changes.",
      },
    ],
  },

  "java-ch5-l14": {
    overview:
      "Since Java 8, interfaces can contain concrete method implementations using the `default` and `static` keywords. This lesson explores backward-compatible interface evolution, default method resolution rules, resolving diamond default method collisions with `InterfaceName.super.method()`, and utility static methods on interfaces.",
    canDo:
      "Can declare default and static interface methods, evolve existing interfaces without breaking legacy implementers, and resolve multiple-interface default method collisions.",
    teacherNote:
      "Default methods were introduced in Java 8 specifically to allow the Java architect team to add new methods like `.stream()`, `.forEach()`, and `.removeIf()` to the core `Collection` interface without breaking millions of existing third-party Java collections written over the prior 15 years!",
    sections: [
      {
        title: "1. Default & Static Interface Methods",
        description: "Providing implementations directly within interface files:",
        table: {
          headers: ["Method Type", "Declaration Keyword", "Has Body?", "Invoked On"],
          rows: [
            ["Abstract Method", "(none)", "No (semicolon)", "Instance of implementing class"],
            ["Default Method", "default", "Yes", "Instance of implementing class (can be overridden)"],
            ["Static Method", "static", "Yes", "Interface name directly (`MyInterface.helper()`)"],
          ],
        },
      },
      {
        title: "2. Resolving Default Method Conflicts",
        description: "What happens when two interfaces provide conflicting default implementations:",
        items: [
          {
            term: "Explicit Resolution via Interface.super",
            meaning: "When a class implements two interfaces with the same default method signature, it MUST override the method and choose or combine them",
            example: "public class Robot implements Walker, Driver {\n    @Override\n    public void move() {\n        Walker.super.move(); // Disambiguates explicitly\n    }\n}",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Why were `default` methods added to Java interfaces in Java 8?",
        options: [
          "To completely replace abstract classes",
          "To allow existing interfaces to be extended with new methods without breaking backwards compatibility with existing implementations",
          "To improve performance of multithreaded locks",
          "To allow private variables inside interfaces",
        ],
        answer: "To allow existing interfaces to be extended with new methods without breaking backwards compatibility with existing implementations",
        explanation:
          "Default methods provide a concrete fallback implementation so that new methods (like .forEach) could be added to legacy interfaces without forcing all implementing classes to rewrite code.",
      },
      {
        question: "How does an implementing class resolve identical default methods from two different interfaces?",
        options: [
          "Java automatically chooses the first one listed",
          "The class must explicitly override the conflicting method and specify which one to invoke (e.g. InterfaceA.super.method())",
          "It is impossible and causes a fatal crash",
          "Java deletes both methods",
        ],
        answer: "The class must explicitly override the conflicting method and specify which one to invoke (e.g. InterfaceA.super.method())",
        explanation:
          "When two interfaces define conflicting default methods, the implementing class must override the method explicitly to resolve ambiguity.",
      },
    ],
  },

  "java-ch5-l15": {
    overview:
      "Functional interfaces (interfaces containing exactly one abstract method) form the bedrock of functional programming in Java. In this lesson, we study the `@FunctionalInterface` annotation, lambda expressions `(args) -> body`, target typing, capturing effectively final variables, method references (`Class::method`), and the standard functional interfaces in `java.util.function` (Predicate, Function, Consumer, Supplier).",
    canDo:
      "Can write lambda expressions and method references, implement custom functional interfaces, and utilize Predicate, Function, Consumer, and Supplier.",
    teacherNote:
      "Lambdas in Java can capture local variables from outer scopes, but those variables MUST be final or 'effectively final' (never modified after assignment). You cannot modify an outer local variable inside a lambda body!",
    sections: [
      {
        title: "1. Core Standard Functional Interfaces",
        description: "The primary building blocks in java.util.function:",
        table: {
          headers: ["Interface", "SAM Signature", "Role", "Lambda Example"],
          rows: [
            ["Predicate<T>", "boolean test(T t)", "Tests a condition on an input", "s -> s.length() > 5"],
            ["Function<T, R>", "R apply(T t)", "Transforms an input T into output R", "s -> s.toUpperCase()"],
            ["Consumer<T>", "void accept(T t)", "Performs a side-effect on an input", "item -> System.out.println(item)"],
            ["Supplier<T>", "T get()", "Supplies a value without requiring input", "() -> Math.random()"],
          ],
        },
      },
      {
        title: "2. Method References (:: operator)",
        description: "Shorthand syntax for lambdas that simply call an existing method:",
        items: [
          {
            term: "System.out::println",
            meaning: "Equivalent to lambda: x -> System.out.println(x)",
            example: "names.forEach(System.out::println);",
          },
          {
            term: "String::toUpperCase",
            meaning: "Equivalent to lambda: s -> s.toUpperCase()",
            example: "names.stream().map(String::toUpperCase);",
          },
          {
            term: "ArrayList::new",
            meaning: "Constructor reference equivalent to: () -> new ArrayList<>()",
            example: "Supplier<List<String>> listFactory = ArrayList::new;",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What defines a 'Functional Interface' in Java?",
        options: [
          "An interface that has no methods",
          "An interface containing exactly one abstract method (Single Abstract Method)",
          "Any interface inside java.lang",
          "An interface that extends Serializable",
        ],
        answer: "An interface containing exactly one abstract method (Single Abstract Method)",
        explanation:
          "A functional interface (or SAM type) has exactly one abstract method, which allows it to be satisfied cleanly by a lambda expression or method reference.",
      },
      {
        question: "Which functional interface accepts an argument of type T and returns a boolean?",
        options: ["Function<T, Boolean>", "Consumer<T>", "Predicate<T>", "Supplier<T>"],
        answer: "Predicate<T>",
        explanation:
          "java.util.function.Predicate<T> defines 'boolean test(T t)', representing a boolean-valued function of one argument.",
      },
    ],
  },
};
