import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_3_LESSONS: Record<string, LessonContent> = {
  "java-ch3-l7": {
    overview:
      "Classes are the fundamental building blocks of object-oriented Java systems, defining attributes (state) and methods (behavior). Based on Y. Daniel Liang's Chapter 9 and David J. Eck's OOP introduction, this lesson explores class definitions, instantiating objects with `new`, declaring constructors, and overloading constructors with differing parameter lists.",
    canDo:
      "Can declare custom Java classes, write default and parameterized constructors, instantiate objects with the new keyword, and manage instance variables.",
    teacherNote:
      "If you declare NO constructors in your class, Java automatically provides a default zero-argument constructor. However, the moment you declare ANY constructor (even one taking parameters), the compiler stops providing the default constructor!",
    sections: [
      {
        title: "1. Class Structure & Constructor Lifecycle",
        description: "Anatomy of class declarations and initialization:",
        table: {
          headers: ["Element", "Syntax Example", "Role", "Memory Behavior"],
          rows: [
            ["Instance Variable", "private String username;", "Represents object state.", "Allocated per instance on the heap."],
            ["Constructor", "public User(String u) { ... }", "Initializes instance fields.", "Executes immediately after memory allocation."],
            ["Instantiation", "User u = new User(\"alice\");", "Allocates heap memory and returns pointer.", "Variable u on stack points to heap object."],
          ],
        },
      },
      {
        title: "2. Constructor Overloading",
        description: "Providing multiple initialization pathways for callers:",
        items: [
          {
            term: "Constructor Overloading",
            meaning: "Multiple constructors with distinct parameter lists within the same class",
            example: "public class Account {\n    private String id;\n    private double balance;\n\n    public Account(String id) {\n        this(id, 0.0); // Constructor chaining\n    }\n    public Account(String id, double balance) {\n        this.id = id;\n        this.balance = balance;\n    }\n}",
          },
        ],
      },
    ],
    practice: [
      {
        question: "When does the Java compiler automatically generate a default no-argument constructor for a class?",
        options: [
          "Always, for every class",
          "Only when the class explicitly defines no constructors of any kind",
          "Only when the class is marked abstract",
          "Only when the class implements Serializable",
        ],
        answer: "Only when the class explicitly defines no constructors of any kind",
        explanation:
          "The compiler synthesizes a default no-arg constructor only if the programmer has defined zero constructors. If any constructor is defined, the default is not provided.",
      },
      {
        question: "Where are Java objects stored in memory when created using the `new` operator?",
        options: ["Call Stack", "CPU Registers", "Garbage-collected Heap", "Disk Cache"],
        answer: "Garbage-collected Heap",
        explanation:
          "In Java, all objects created via the 'new' keyword are dynamically allocated on the memory heap and managed by the Garbage Collector.",
      },
    ],
  },

  "java-ch3-l8": {
    overview:
      "The `this` keyword in Java is a reference to the current object executing the method or constructor. In this lesson, we study resolving variable shadowing (distinguishing field names from parameter names), constructor chaining using `this(...)`, and passing the current instance as a callback argument.",
    canDo:
      "Can resolve identifier shadowing between method parameters and fields using this.field, chain overloaded constructors with this(), and prevent state corruption.",
    teacherNote:
      "When using `this(...)` to chain constructors, it MUST be the very first statement in the constructor body! Placing any code before `this(...)` results in a compilation error.",
    sections: [
      {
        title: "1. Resolving Variable Shadowing",
        description: "Disambiguating local parameters from class fields:",
        table: {
          headers: ["Problem", "Example Code", "Solution with this"],
          rows: [
            [
              "Shadowing without this",
              "public void setName(String name) {\n    name = name; // Bug: assigns parameter to itself!\n}",
              "public void setName(String name) {\n    this.name = name; // Correct: assigns to field\n}",
            ],
          ],
        },
      },
      {
        title: "2. Constructor Chaining with this()",
        description: "Reusing initialization logic across multiple constructors:",
        items: [
          {
            term: "this(args)",
            meaning: "Invokes another constructor in the same class to centralize setup",
            example: "public Rectangle() {\n    this(1.0, 1.0); // Defaults to 1x1 square; must be 1st statement\n}\npublic Rectangle(double w, double h) {\n    this.width = w;\n    this.height = h;\n}",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Where must `this(...)` be placed inside a constructor when chaining to another constructor?",
        options: [
          "Anywhere in the constructor body",
          "As the very first statement",
          "As the final return statement",
          "Inside a try block",
        ],
        answer: "As the very first statement",
        explanation:
          "Java language rules mandate that constructor invocation via this(...) must be the very first statement in the constructor.",
      },
      {
        question: "What does `this.title = title` accomplish inside a setter method?",
        options: [
          "Declares a global variable",
          "Assigns the local parameter 'title' to the instance field 'title' of the current object",
          "Creates a copy of the object",
          "Invokes the garbage collector",
        ],
        answer: "Assigns the local parameter 'title' to the instance field 'title' of the current object",
        explanation:
          "'this.title' refers explicitly to the instance field on the current object, disambiguating it from the local parameter named 'title'.",
      },
    ],
  },

  "java-ch3-l9": {
    overview:
      "Encapsulation is the OOP pillar that bundles data and methods while restricting direct access to internal state. Drawing from Liang's encapsulation chapters, this lesson details Java's 4 access modifiers (private, default/package-private, protected, public), package organization, and constructing idiomatic JavaBean getters and setters with validation.",
    canDo:
      "Can apply access modifiers according to the principle of least privilege, organize classes into hierarchical packages, and write validated getters and setters.",
    teacherNote:
      "Always declare instance variables `private` unless there is an overwhelming architectural justification otherwise. Provide public getter/setter methods with domain validation to protect object invariants.",
    sections: [
      {
        title: "1. Java's 4 Access Modifiers",
        description: "Visibility levels from most restrictive to most permissive:",
        table: {
          headers: ["Modifier", "Same Class", "Same Package", "Subclass (Different Pkg)", "World (Anywhere)"],
          rows: [
            ["private", "Yes", "No", "No", "No"],
            ["(default / package-private)", "Yes", "Yes", "No", "No"],
            ["protected", "Yes", "Yes", "Yes", "No"],
            ["public", "Yes", "Yes", "Yes", "Yes"],
          ],
        },
      },
      {
        title: "2. JavaBean Encapsulation Standard",
        description: "Convention for reliable domain models:",
        items: [
          {
            term: "Getter / Setter Pattern",
            meaning: "Accessors and mutators that enforce domain rules before mutating state",
            example: "public class Employee {\n    private double salary;\n\n    public double getSalary() {\n        return this.salary;\n    }\n    public void setSalary(double salary) {\n        if (salary < 0) throw new IllegalArgumentException(\"Negative salary\");\n        this.salary = salary;\n    }\n}",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Which access modifier allows access from within the same class and same package, but denies access to non-subclasses in other packages?",
        options: ["private", "default (no modifier)", "public", "protected"],
        answer: "default (no modifier)",
        explanation:
          "Package-private (the default when no modifier is written) grants access to any class inside the same package, but is invisible outside the package.",
      },
      {
        question: "Why should instance fields be marked `private` in object-oriented design?",
        options: [
          "To make them run faster in memory",
          "To enforce encapsulation and prevent unauthorized or invalid mutations from external classes",
          "Because Java requires all fields to be private",
          "To allow automatic JSON serialization",
        ],
        answer: "To enforce encapsulation and prevent unauthorized or invalid mutations from external classes",
        explanation:
          "Private fields encapsulate state, requiring external callers to interact through validated methods and preserving data integrity.",
      },
    ],
  },
};
