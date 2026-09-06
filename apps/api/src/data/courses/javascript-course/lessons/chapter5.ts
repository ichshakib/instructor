import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_5_LESSONS: Record<string, LessonContent> = {
  "js-ch5-l13": {
    overview:
      "Object-Oriented Programming (OOP) organizes software design around data objects rather than standalone functions. In modern JavaScript (ES6+), classes provide a clean, declarative syntax built over JavaScript's prototypal inheritance system. In this lesson based on Chapter 7 of 'JavaScript from Beginner to Professional', you will learn to declare classes, initialize state via the constructor method, and instantiate objects using the 'new' keyword.",
    canDo:
      "Can define ES6 classes, implement constructors to initialize instance properties, and instantiate multiple object instances using the `new` operator.",
    teacherNote:
      "Unlike function declarations, JavaScript classes are NOT hoisted! You cannot instantiate an object from a class before the line where that class is declared in code.",
    sections: [
      {
        title: "1. The Anatomy of an ES6 Class",
        description: "Declaring blueprints and instantiating objects:",
        table: {
          headers: ["Component", "Syntax Example", "Role / Execution Timing", "Best Practice"],
          rows: [
            [
              "class Declaration",
              "class Person { ... }",
              "Defines the blueprint schema for objects",
              "PascalCase naming convention (e.g. UserAccount, BankAccount)",
            ],
            [
              "constructor()",
              "constructor(name, age) { this.name = name; this.age = age; }",
              "Special method called automatically when invoking `new Person(...)`",
              "Initializes instance properties onto the newly created `this` context",
            ],
            [
              "new Operator",
              "const user1 = new Person('Maya', 28);",
              "Allocates memory, creates empty object, binds `this`, returns instance",
              "Always required when creating class instances",
            ],
          ],
        },
      },
      {
        title: "2. Instance Properties vs. Methods",
        description: "Organizing state and behavior inside a class:",
        items: [
          {
            term: "Instance Properties",
            meaning: "Unique data values attached to each individual object created from the class",
            example: "this.username = username; // Set inside constructor",
          },
          {
            term: "Instance Methods",
            meaning: "Shared functions defined on the prototype, accessible to all instances",
            example: "greet() { return `Hello, I am ${this.name}`; }",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Which keyword is used to create a new instance of an ES6 class in JavaScript?",
        options: ["create", "new", "instantiate", "make"],
        answer: "new",
        explanation:
          "The `new` keyword instantiates a new object, sets its prototype to the class prototype, and runs the constructor.",
      },
      {
        question: "What is the purpose of the `constructor()` method inside a class?",
        options: [
          "To destroy the class after execution",
          "To initialize instance properties when a new object is created",
          "To export the class to another file",
          "To convert the class into JSON",
        ],
        answer: "To initialize instance properties when a new object is created",
        explanation:
          "The `constructor()` is a special lifecycle method that executes automatically when `new ClassName()` is invoked, initializing the new object's state.",
      },
      {
        question: "Are ES6 class declarations hoisted like traditional function declarations?",
        options: [
          "Yes, they can be instantiated anywhere before their definition",
          "No, classes are hoisted into the Temporal Dead Zone and cannot be used before declaration",
          "Only in non-strict mode",
          "Only when exported",
        ],
        answer: "No, classes are hoisted into the Temporal Dead Zone and cannot be used before declaration",
        explanation:
          "Classes follow `let`/`const` lexical rules and throw a ReferenceError if accessed before their declaration in code.",
      },
    ],
  },

  "js-ch5-l14": {
    overview:
      "Beyond basic methods, modern classes support Getter and Setter accessors to intercept property reads and writes, providing encapsulation and data validation. In this lesson based on Chapter 7 of 'JavaScript from Beginner to Professional', you will master declaring instance methods, static utility methods, and implementing get/set accessors.",
    canDo:
      "Can implement methods on classes, write getters for computed properties, create setters for validation, and use static methods for class-level utilities.",
    teacherNote:
      "Getters and Setters look like methods in code (`get fullName() { ... }`), but are accessed like normal properties WITHOUT parentheses (`console.log(user.fullName)`). Do not name the internal backing property the exact same as the getter/setter name, or an infinite recursion loop will occur!",
    sections: [
      {
        title: "1. Methods, Getters, and Setters",
        description: "Controlling access and computation in classes:",
        table: {
          headers: ["Feature", "Syntax Example", "How to Access", "Benefit"],
          rows: [
            [
              "Instance Method",
              "calculateArea() { return this.w * this.h; }",
              "rect.calculateArea()",
              "Reusable action on instance data",
            ],
            [
              "Getter (get)",
              "get area() { return this.w * this.h; }",
              "rect.area (No parentheses!)",
              "Provides dynamic computed properties with clean property syntax",
            ],
            [
              "Setter (set)",
              "set score(val) { if (val < 0) throw Error(); this._score = val; }",
              "game.score = 10 (Assignment syntax)",
              "Validates and sanitizes incoming data before setting internal state",
            ],
            [
              "Static Method",
              "static compare(a, b) { return a.age - b.age; }",
              "Person.compare(p1, p2) (On class, not instance!)",
              "Utility functions tied to the class namespace without needing an instance",
            ],
          ],
        },
      },
    ],
    practice: [
      {
        question: "How do you access a getter property defined as `get fullName() { return ...; }` on an instance named `person`?",
        options: [
          "person.fullName()",
          "person.fullName",
          "person.get('fullName')",
          "person->fullName",
        ],
        answer: "person.fullName",
        explanation:
          "Getters are accessed as standard properties without parentheses (`person.fullName`).",
      },
      {
        question: "What is a `static` method in a JavaScript class?",
        options: [
          "A method that cannot be called by any part of the program",
          "A method called on the class itself rather than on instances of the class",
          "A method that only works on static HTML pages",
          "A method that cannot return numbers",
        ],
        answer: "A method called on the class itself rather than on instances of the class",
        explanation:
          "Static methods (`ClassName.staticMethod()`) belong to the class constructor function directly, not to individual instantiated objects.",
      },
      {
        question: "Why do developers often use an underscore prefix (e.g. `this._age`) when writing a setter `set age(value)`?",
        options: [
          "It is required by the JavaScript compiler for all numbers",
          "To avoid infinite recursion between setting the property and triggering the setter again",
          "It makes the property run faster",
          "To automatically convert strings to booleans",
        ],
        answer: "To avoid infinite recursion between setting the property and triggering the setter again",
        explanation:
          "If a setter assigns to `this.age`, it invokes the setter recursively in an infinite loop. Using a distinct backing variable like `this._age` prevents this.",
      },
    ],
  },

  "js-ch5-l15": {
    overview:
      "Inheritance enables classes to derive functionality from parent classes, promoting clean code reuse. In modern JavaScript (ES6+), the 'extends' keyword establishes inheritance, 'super()' invokes parent constructors and methods, and private fields ('#') provide true language-level encapsulation. In this lesson based on Chapter 7 of 'JavaScript from Beginner to Professional', you will master OOP hierarchies and privacy.",
    canDo:
      "Can establish class inheritance using `extends`, pass arguments to parent constructors with `super()`, override methods, and protect sensitive state with private fields (`#`).",
    teacherNote:
      "In a derived subclass constructor, you MUST call `super(...)` BEFORE referencing `this`! Forgetting to call `super()` in a subclass constructor causes a ReferenceError.",
    sections: [
      {
        title: "1. Class Inheritance with extends & super",
        description: "Specializing child classes from parent blueprints:",
        table: {
          headers: ["Concept", "Syntax Example", "Rule / Purpose"],
          rows: [
            [
              "Subclass Declaration",
              "class Dog extends Animal { ... }",
              "Inherits all public methods and prototypes from the parent Animal class",
            ],
            [
              "super() in Constructor",
              "constructor(name, breed) { super(name); this.breed = breed; }",
              "Must be called first in derived constructor to instantiate the parent `this` context",
            ],
            [
              "Method Overriding",
              "speak() { super.speak(); console.log('Woof!'); }",
              "Child class defines its own version of a method, optionally calling `super.method()`",
            ],
            [
              "Private Fields (#)",
              "class Bank { #balance = 0; getBalance() { return this.#balance; } }",
              "Fields prefixed with `#` are strictly inaccessible outside the class body (SyntaxError)",
            ],
          ],
        },
      },
    ],
    practice: [
      {
        question: "What happens if a child class constructor attempts to access `this.property` before calling `super()`?",
        options: [
          "It assigns the property to the parent class",
          "It throws a ReferenceError: Must call super constructor in derived class before accessing 'this'",
          "It silently converts the property to null",
          "JavaScript automatically invokes `super()` in the background",
        ],
        answer: "It throws a ReferenceError: Must call super constructor in derived class before accessing 'this'",
        explanation:
          "In subclasses, the `this` context is initialized by the parent constructor; therefore, `super()` must be invoked before `this` can be referenced.",
      },
      {
        question: "Which syntax designates a private class field that cannot be accessed from outside the class in modern JavaScript?",
        options: [
          "private myField = 10;",
          "_myField = 10;",
          "#myField = 10;",
          "__myField__ = 10;",
        ],
        answer: "#myField = 10;",
        explanation:
          "The hash symbol `#` declares true private class fields enforced at the language syntax level.",
      },
      {
        question: "Which keyword specifies that a class inherits from another class?",
        options: ["inherits", "extends", "implements", "prototype"],
        answer: "extends",
        explanation:
          "The `extends` keyword is used in class declarations to create a child class of another class.",
      },
    ],
  },
};
