import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_4_LESSONS: Record<string, LessonContent> = {
  "java-ch4-l10": {
    overview:
      "Inheritance establishes an 'is-a' relationship between a general superclass and a specialized subclass. Guided by Y. Daniel Liang's Chapter 11 and David J. Eck's inheritance tutorials, this lesson covers the `extends` keyword, subclass constructor execution, and delegating to parent constructors using `super(...)`.",
    canDo:
      "Can construct class hierarchies with extends, invoke superclass constructors using super(), and describe single inheritance in Java.",
    teacherNote:
      "Java does NOT support multiple class inheritance (a class cannot `extends A, B`). This avoids the deadly diamond problem found in C++. Instead, Java provides single class inheritance combined with multiple interface implementation.",
    sections: [
      {
        title: "1. The extends Keyword & super() Constructor Invocation",
        description: "How subclasses inherit and initialize parent state:",
        table: {
          headers: ["Concept", "Code Syntax", "Execution Rule"],
          rows: [
            ["Subclass Declaration", "public class Dog extends Animal", "Dog inherits all non-private fields and methods of Animal."],
            ["Super Constructor", "super(name, age);", "Must be the 1st statement in the subclass constructor."],
            ["Implicit super()", "super(); (automatic)", "If no super() is written, compiler inserts no-arg super() automatically."],
          ],
        },
      },
      {
        title: "2. Constructor Execution Order",
        description: "Tracing initialization up the inheritance tree:",
        items: [
          {
            term: "Top-Down Initialization",
            meaning: "java.lang.Object constructor executes first, then superclasses down to child class",
            example: "class Animal { Animal() { System.out.println(\"Animal\"); } }\nclass Dog extends Animal { Dog() { System.out.println(\"Dog\"); } }\n// new Dog() prints:\n// Animal\n// Dog",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Does Java allow a single class to extend multiple superclasses directly (e.g. `class C extends A, B`)?",
        options: [
          "Yes, Java supports multiple inheritance of classes",
          "No, Java permits extending only a single superclass",
          "Only if all superclasses are abstract",
          "Only if enabled in module-info.java",
        ],
        answer: "No, Java permits extending only a single superclass",
        explanation:
          "Java strictly enforces single class inheritance to prevent ambiguity and multiple-inheritance conflicts (the Diamond Problem).",
      },
      {
        question: "What happens if a subclass constructor does not explicitly call `super(...)`?",
        options: [
          "The program will not compile",
          "Java automatically calls the superclass's no-argument constructor `super()`",
          "The superclass fields are deleted",
          "The object is treated as an interface",
        ],
        answer: "Java automatically calls the superclass's no-argument constructor `super()`",
        explanation:
          "If a subclass constructor contains no explicit super() or this() call, the compiler implicitly inserts super() as its first statement.",
      },
    ],
  },

  "java-ch4-l11": {
    overview:
      "Polymorphism allows objects of different classes to be treated as instances of a common superclass while executing specialized subclass behavior at runtime. In this lesson, we study method overriding, the `@Override` annotation, upcasting, downcasting, runtime `ClassCastException`, and dynamic method dispatch via virtual tables (vtables).",
    canDo:
      "Can override methods cleanly, safeguard downcasting with the instanceof operator and pattern matching (Java 16+), and explain dynamic method dispatch.",
    teacherNote:
      "Always apply the `@Override` annotation! It instructs the compiler to verify that the method actually overrides a superclass method, catching subtle spelling or parameter mismatches at compile time rather than failing silently at runtime.",
    sections: [
      {
        title: "1. Dynamic Binding (Runtime Polymorphism)",
        description: "How the JVM dispatches method calls to the actual object type:",
        table: {
          headers: ["Reference Type", "Actual Object Type", "Method Invoked: animal.speak()"],
          rows: [
            ["Animal a = new Animal();", "Animal", "Executes Animal.speak()"],
            ["Animal a = new Dog();", "Dog (Upcasted)", "Executes Dog.speak() (resolved at runtime via vtable!)"],
            ["Animal a = new Cat();", "Cat (Upcasted)", "Executes Cat.speak()"],
          ],
        },
      },
      {
        title: "2. Pattern Matching for instanceof (Java 16+)",
        description: "Safely inspecting types and casting in a single step:",
        items: [
          {
            term: "Pattern Matching instanceof",
            meaning: "Tests type and binds to a scoped variable automatically, eliminating boilerplate casting",
            example: "// Modern Java:\nif (obj instanceof String s) {\n    System.out.println(s.toUpperCase()); // s is already cast to String!\n}\n// Legacy Java required:\n// if (obj instanceof String) { String s = (String) obj; ... }",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Why should you always annotate an overriding method with `@Override`?",
        options: [
          "To allow the method to be accessed across packages",
          "To have the compiler verify that the method correctly overrides a parent method signature",
          "To prevent other classes from calling the method",
          "To force the method to run asynchronously",
        ],
        answer: "To have the compiler verify that the method correctly overrides a parent method signature",
        explanation:
          "@Override informs the compiler of your intent. If the method name or parameter types do not match a parent method exactly, the compiler raises an immediate error.",
      },
      {
        question: "Given `Animal a = new Dog();`, which method is called when `a.makeSound()` is executed?",
        options: [
          "Always Animal's method because the reference is Animal",
          "Dog's overridden method because Java uses dynamic runtime dispatch based on the actual object",
          "Neither, it throws a ClassCastException",
          "Both methods sequentially",
        ],
        answer: "Dog's overridden method because Java uses dynamic runtime dispatch based on the actual object",
        explanation:
          "Java uses dynamic method dispatch: method calls on instances are resolved at runtime based on the actual object created in heap memory (Dog), not the declared reference type (Animal).",
      },
    ],
  },

  "java-ch4-l12": {
    overview:
      "Abstract classes define incomplete blueprints intended to be subclassed rather than instantiated directly. Based on Liang's Chapter 13, this lesson explores abstract classes, abstract methods (method headers without bodies), concrete methods in abstract classes, and enforcing design contracts across subclasses.",
    canDo:
      "Can declare abstract classes and methods, mandate behavior implementation in subclasses, and recognize when to use abstract classes over concrete classes.",
    teacherNote:
      "You CANNOT instantiate an abstract class using `new Shape()`! However, an abstract class CAN have constructors, which are called by subclass constructors via `super()` to initialize inherited fields.",
    sections: [
      {
        title: "1. Abstract Classes vs Concrete Classes",
        description: "Structural and behavioral differences:",
        table: {
          headers: ["Attribute", "Concrete Class", "Abstract Class"],
          rows: [
            ["Instantiation with new", "Allowed (`new Car()`)", "Forbidden (`new Vehicle()` -> compile error)"],
            ["Can have abstract methods?", "No (all methods must have bodies)", "Yes (can declare methods with no body ending in semicolon)"],
            ["Can have concrete methods?", "Yes", "Yes (can provide shared default implementation)"],
            ["Can have constructors?", "Yes", "Yes (invoked via super() by child constructors)"],
          ],
        },
      },
      {
        title: "2. Abstract Contract Implementation",
        description: "Enforcing method implementations in child classes:",
        items: [
          {
            term: "Abstract Method Declaration",
            meaning: "A method header ending in a semicolon that child classes MUST implement",
            example: "public abstract class GeometricShape {\n    public abstract double calculateArea(); // No body\n}\npublic class Circle extends GeometricShape {\n    private double radius;\n    @Override\n    public double calculateArea() {\n        return Math.PI * radius * radius;\n    }\n}",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Can an abstract class in Java have constructors?",
        options: [
          "No, abstract classes cannot have constructors",
          "Yes, they can have constructors invoked by subclasses via super()",
          "Only if the constructors are marked private",
          "Only if the class has no abstract methods",
        ],
        answer: "Yes, they can have constructors invoked by subclasses via super()",
        explanation:
          "Abstract classes can define constructors to initialize superclass fields; these constructors are invoked by subclasses via super().",
      },
      {
        question: "What happens if a non-abstract child class fails to implement an abstract method from its parent?",
        options: [
          "The program throws a RuntimeException on startup",
          "The code fails to compile",
          "Java inserts an empty dummy method automatically",
          "The method returns null",
        ],
        answer: "The code fails to compile",
        explanation:
          "A concrete subclass extending an abstract class must implement all inherited abstract methods, or else the subclass itself must be declared abstract, otherwise compilation fails.",
      },
    ],
  },
};
