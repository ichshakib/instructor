import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_7_LESSONS: Record<string, LessonContent> = {
  "py-ch7-l19": {
    overview:
      "Object-Oriented Programming (OOP) is a foundational paradigm for organizing state and behavior in Python. Combining Eric Matthes' class walkthroughs with Mark Lutz's comprehensive OOP architecture, this lesson breaks down the class statement, instantiating objects, initializing instance state using the `__init__` constructor method, and understanding the explicit `self` reference.",
    canDo:
      "Can declare custom classes, initialize instance attributes inside `__init__`, explain why `self` must be explicitly passed in method signatures, and create multiple instances with independent state.",
    teacherNote:
      "In languages like C++ or Java, `this` is an implicit hidden parameter. In Python, explicit is better than implicit: `self` is explicitly declared as the first parameter of every instance method, but Python automatically passes the calling instance when you invoke `obj.method()`.",
    sections: [
      {
        title: "1. Classes, Instances & The __init__ Lifecycle",
        description: "Declaring object factories and binding instance state:",
        table: {
          headers: ["Component", "Declaration Syntax", "Purpose", "Execution Detail"],
          rows: [
            [
              "Class Definition",
              "class UserAccount:",
              "Defines the blueprint and shared namespace for instances.",
              "Evaluated when module loads; creates a class object in memory.",
            ],
            [
              "Constructor (__init__)",
              "def __init__(self, username, email):",
              "Initializes instance attributes on freshly created objects.",
              "Invoked automatically immediately after __new__ allocates the instance.",
            ],
            [
              "Explicit self",
              "self.username = username",
              "Binds attributes to the specific instance being created.",
              "When calling u.login(), Python translates it to UserAccount.login(u).",
            ],
          ],
        },
      },
      {
        title: "2. Defining Instance Methods",
        description: "Methods operate on instance state through self:",
        items: [
          {
            term: "Instance Method",
            meaning: "A function defined inside a class that takes self as its first parameter",
            example: "class BankAccount:\n    def __init__(self, owner, balance=0.0):\n        self.owner = owner\n        self.balance = balance\n\n    def deposit(self, amount):\n        if amount <= 0:\n            raise ValueError('Amount must be positive')\n        self.balance += amount\n        return self.balance",
          },
          {
            term: "Multiple Instances",
            meaning: "Each instance maintains its own distinct dictionary of attributes in __dict__",
            example: "acc1 = BankAccount('Alice', 100)\nacc2 = BankAccount('Bob', 50)\n# acc1.balance and acc2.balance are completely independent",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Why must `self` be included as the first parameter of instance methods in Python?",
        options: [
          "It is a required keyword that prevents syntax errors",
          "Because Python passes the calling instance explicitly to the method as its first argument",
          "It designates the method as a static utility",
          "It forces the method to run in a background thread",
        ],
        answer: "Because Python passes the calling instance explicitly to the method as its first argument",
        explanation:
          "In Python, calling obj.method(arg) is syntactic sugar for Class.method(obj, arg). Therefore, the instance itself is passed as the first parameter, conventionally named 'self'.",
      },
      {
        question: "What is the primary responsibility of the `__init__` method?",
        options: [
          "Allocating raw memory for the object",
          "Initializing attributes and setting up the object's initial state",
          "Garbage collecting the object when done",
          "Serializing the object to disk",
        ],
        answer: "Initializing attributes and setting up the object's initial state",
        explanation:
          "__init__ is the initializer method called after the object is allocated by __new__. It sets up instance attributes and state on self.",
      },
    ],
  },

  "py-ch7-l20": {
    overview:
      "Effective OOP requires controlling access to internal state. In this lesson, informed by Mark Lutz's managed attributes analysis and Guido van Rossum's Python philosophy, we examine class attributes versus instance attributes, privacy and encapsulation conventions (single underscore `_` and double underscore `__` name mangling), and Python's `@property` decorator for pythonic getters and setters.",
    canDo:
      "Can differentiate between class-level and instance-level attributes, protect attributes using private conventions and name mangling, and implement getters and setters using @property.",
    teacherNote:
      "Python does not have true access modifiers like `private` or `public` from Java or C++. As the community motto says, 'We are all consenting adults here.' A single leading underscore (`_variable`) signifies an internal implementation detail, while double leading underscores (`__variable`) trigger name mangling (`_ClassName__variable`) to prevent subclass collisions.",
    sections: [
      {
        title: "1. Class Attributes vs Instance Attributes",
        description: "Shared state across all instances vs per-instance state:",
        table: {
          headers: ["Attribute Scope", "Where Defined", "Access Syntax", "Key Behavior"],
          rows: [
            [
              "Class Attribute",
              "Directly inside class body, outside any def",
              "ClassName.attr or instance.attr",
              "Shared across ALL instances. If mutated on the class, all instances see the change.",
            ],
            [
              "Instance Attribute",
              "Inside __init__ or methods attached to self",
              "self.attr",
              "Unique to each individual object. Modifying it affects only that single instance.",
            ],
          ],
        },
      },
      {
        title: "2. The @property Decorator (Pythonic Encapsulation)",
        description: "Providing attribute-like access while executing validation logic behind the scenes:",
        items: [
          {
            term: "@property (Getter)",
            meaning: "Allows a method to be accessed like an attribute without parentheses",
            example: "class Product:\n    def __init__(self, price):\n        self._price = price\n\n    @property\n    def price(self):\n        return self._price",
          },
          {
            term: "@prop_name.setter (Setter)",
            meaning: "Runs validation logic when the attribute is assigned with =",
            example: "    @price.setter\n    def price(self, new_price):\n        if new_price < 0:\n            raise ValueError('Price cannot be negative')\n        self._price = new_price",
          },
          {
            term: "Double Underscore Name Mangling (__attr)",
            meaning: "CPython rewrites __attr to _ClassName__attr to prevent accidental overriding in subclasses",
            example: "class Safe:\n    def __init__(self):\n        self.__pin = '1234'  # Mangled to _Safe__pin",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What does the @property decorator allow you to do in Python?",
        options: [
          "Make an attribute accessible across different operating systems",
          "Access a method like a normal attribute without calling parentheses, while adding getter/setter logic",
          "Encrypt the attribute with AES-256",
          "Prevent any changes to the entire class",
        ],
        answer: "Access a method like a normal attribute without calling parentheses, while adding getter/setter logic",
        explanation:
          "@property turns a method into a read-only attribute getter, allowing clean obj.attribute syntax while preserving the ability to validate or compute values dynamically.",
      },
      {
        question: "If an attribute is named `__secret` inside a class named `Vault`, what does CPython mangle its name to?",
        options: ["__secret_Vault", "_Vault__secret", "Vault.__secret", "__Vault_secret__"],
        answer: "_Vault__secret",
        explanation:
          "CPython applies name mangling by prepending a single underscore and the class name to any identifier with at least two leading underscores and at most one trailing underscore, resulting in _Vault__secret.",
      },
    ],
  },

  "py-ch7-l21": {
    overview:
      "Inheritance enables classes to specialize, extend, and reuse behavior from parent classes. Drawing from Eric Matthes' 'Python Crash Course' and Mark Lutz's inheritance tree mechanics, this lesson covers single inheritance, method overriding, invoking parent implementations safely using `super()`, checking types with `isinstance()` and `issubclass()`, and Python's Method Resolution Order (MRO).",
    canDo:
      "Can derive child classes from base classes, override parent methods while preserving base functionality via super(), check object hierarchies with isinstance(), and inspect the MRO.",
    teacherNote:
      "Always use `super().__init__(...)` rather than hardcoding the parent class name (`ParentClass.__init__(self, ...)`). `super()` dynamically navigates the Method Resolution Order (MRO), which is essential for cooperative multiple inheritance and maintainability.",
    sections: [
      {
        title: "1. Inheritance & The super() Built-In",
        description: "Extending parent capabilities without duplicating logic:",
        table: {
          headers: ["Concept", "Code Pattern", "Role", "Best Practice"],
          rows: [
            [
              "Subclass Declaration",
              "class Developer(Employee):",
              "Inherits all attributes and methods of Employee.",
              "Model 'is-a' relationships cleanly.",
            ],
            [
              "Invoking Superclass Init",
              "super().__init__(name, salary)",
              "Executes parent initialization logic before adding subclass-specific state.",
              "Always delegate to super() first inside subclass __init__.",
            ],
            [
              "Method Overriding",
              "def calculate_bonus(self):",
              "Replaces parent implementation with specialized child logic.",
              "Maintain consistent signature with parent method.",
            ],
          ],
        },
      },
      {
        title: "2. Type Introspection & MRO",
        description: "Verifying object lineage and method dispatch order:",
        items: [
          {
            term: "isinstance(object, ClassInfo)",
            meaning: "Returns True if object is an instance of ClassInfo or any subclass thereof",
            example: "dev = Developer('Alice', 120000)\nisinstance(dev, Employee)  # True\nisinstance(dev, Developer) # True",
          },
          {
            term: "issubclass(SubClass, BaseClass)",
            meaning: "Checks if a class directly or indirectly inherits from another class",
            example: "issubclass(Developer, Employee)  # True",
          },
          {
            term: "Method Resolution Order (Class.__mro__)",
            meaning: "The linearized tuple of classes CPython searches when looking up an attribute or method (C3 Linearization algorithm)",
            example: "print(Developer.__mro__)  # (Developer, Employee, object)",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What is the recommended way to call a parent class constructor inside a child class in Python 3?",
        options: [
          "parent.__init__(self)",
          "super().__init__(...)",
          "this.parent(...)",
          "inherit.constructor(...)",
        ],
        answer: "super().__init__(...)",
        explanation:
          "In Python 3, super().__init__(...) returns a proxy object delegating method calls to the next class in the Method Resolution Order without needing explicit self passing.",
      },
      {
        question: "Why does isinstance(dev, Employee) return True when dev is an instance of Developer(Employee)?",
        options: [
          "Because isinstance() only checks variable names",
          "Because Developer inherits from Employee, satisfying the 'is-a' relationship",
          "It only returns True if they have the exact same memory ID",
          "It is a known Python bug",
        ],
        answer: "Because Developer inherits from Employee, satisfying the 'is-a' relationship",
        explanation:
          "isinstance() honors the inheritance hierarchy: an instance of a subclass is considered an instance of its parent and ancestor classes.",
      },
    ],
  },
};
