import { Course, Chapter } from "../../../types/course.types";
import { ALL_PYTHON_LESSONS_CONTENT } from "./lessons";

const PYTHON_RAW_CHAPTERS: Chapter[] = [
  {
    id: "py-ch1",
    title: "Chapter 1: Getting Started, Execution Model & Python Fundamentals",
    lessons: [
      {
        id: "py-ch1-l1",
        title: "Lesson 1: The Python Execution Model: Bytecode, CPython & Virtual Environments",
        description: "CPython runtime mechanics, bytecode compilation (.pyc), the Python Virtual Machine, and venv isolation.",
      },
      {
        id: "py-ch1-l2",
        title: "Lesson 2: Syntactic Style, Comments & PEP 8 Standards",
        description: "Significant 4-space indentation, docstrings, variable casing conventions, and clean code aesthetics.",
      },
      {
        id: "py-ch1-l3",
        title: "Lesson 3: The Zen of Python, Dynamic Typing & Object References",
        description: "Core design philosophy (import this), pointers to heap objects, and identity (is) versus equality (==).",
      },
    ],
  },
  {
    id: "py-ch2",
    title: "Chapter 2: Numbers, Booleans & Modern String Processing",
    lessons: [
      {
        id: "py-ch2-l4",
        title: "Lesson 4: Numeric Types, Operators & Arithmetic Precisions",
        description: "Arbitrary-precision integers, IEEE-754 float limitations, floor division (//), and the math module.",
      },
      {
        id: "py-ch2-l5",
        title: "Lesson 5: String Fundamentals: Immutability, Indexing & Slicing",
        description: "Zero-based and negative indexing, stride slicing [start:stop:step], immutability, and raw string literals.",
      },
      {
        id: "py-ch2-l6",
        title: "Lesson 6: Modern String Formatting: f-strings & String Transformations",
        description: "Formatted string literals (f-strings), numeric specifiers, padding, and essential methods (split, join, strip).",
      },
    ],
  },
  {
    id: "py-ch3",
    title: "Chapter 3: Ordered Sequences: Lists & Tuples",
    lessons: [
      {
        id: "py-ch3-l7",
        title: "Lesson 7: Lists: In-Place Mutation, Indexing & Resizing",
        description: "Dynamic resizing arrays, appending, popping, removing, and avoiding shallow vs deep copy mutation bugs.",
      },
      {
        id: "py-ch3-l8",
        title: "Lesson 8: List Algorithms: Sorting, Slicing & Sequence Unpacking",
        description: "Timsort with list.sort() vs sorted(), custom key lambdas, reverse ordering, and starred unpacking (*rest).",
      },
      {
        id: "py-ch3-l9",
        title: "Lesson 9: Tuples: Immutability, Memory Efficiency & Data Integrity",
        description: "Immutable sequence guarantees, memory optimization, hashable dictionary keys, and namedtuples.",
      },
    ],
  },
  {
    id: "py-ch4",
    title: "Chapter 4: Key-Value Mappings & Hash Sets: Dictionaries & Sets",
    lessons: [
      {
        id: "py-ch4-l10",
        title: "Lesson 10: Dictionaries: Hash Tables, Keys & Value Retrievals",
        description: "O(1) average lookup, key immutability requirements, safe lookups with .get(), and KeyError prevention.",
      },
      {
        id: "py-ch4-l11",
        title: "Lesson 11: Dictionary Mutation, Iteration & Dictionary Views",
        description: "Iterating keys, values, and items, mutating dictionaries, and merging with the union operator (|).",
      },
      {
        id: "py-ch4-l12",
        title: "Lesson 12: Sets & Frozensets: Mathematical Operations & O(1) Membership",
        description: "Deduplicating collections, set mathematical operations (union, intersection, difference), and frozenset.",
      },
    ],
  },
  {
    id: "py-ch5",
    title: "Chapter 5: Control Flow: Branching Logic & Iteration",
    lessons: [
      {
        id: "py-ch5-l13",
        title: "Lesson 13: Conditional Branching & Boolean Truthiness",
        description: "if, elif, else logic, truthy/falsy evaluation, short-circuiting with and/or, and inline ternary expressions.",
      },
      {
        id: "py-ch5-l14",
        title: "Lesson 14: Structural Pattern Matching (match / case)",
        description: "Modern Python 3.10+ pattern matching, sequence destructuring, wildcard fallbacks, and conditional guards.",
      },
      {
        id: "py-ch5-l15",
        title: "Lesson 15: Iteration Mastery: while, for, range, enumerate & zip",
        description: "Clean traversal with range, enumerate, zip, loop flow control with break/continue, and the loop else clause.",
      },
    ],
  },
  {
    id: "py-ch6",
    title: "Chapter 6: Functions, Scopes & The LEGB Architecture",
    lessons: [
      {
        id: "py-ch6-l16",
        title: "Lesson 16: Function Signatures, Return Values & Type Hints",
        description: "Function definitions, multiple return values via tuple packing, docstrings, and PEP 484 type annotations.",
      },
      {
        id: "py-ch6-l17",
        title: "Lesson 17: Flexible Arguments: *args, **kwargs & Keyword-Only Params",
        description: "Arbitrary positional and keyword args, keyword-only params (*), and the mutable default argument trap.",
      },
      {
        id: "py-ch6-l18",
        title: "Lesson 18: Scopes: The LEGB Rule, Closures & Lambda Expressions",
        description: "Local, Enclosing, Global, Built-in name resolution, nonlocal state rebinding, closures, and lambdas.",
      },
    ],
  },
  {
    id: "py-ch7",
    title: "Chapter 7: Object-Oriented Programming: Classes & State",
    lessons: [
      {
        id: "py-ch7-l19",
        title: "Lesson 19: Classes, Instances, __init__, and self",
        description: "Class declaration blueprints, object instantiation, constructor initialization, and the explicit self argument.",
      },
      {
        id: "py-ch7-l20",
        title: "Lesson 20: Encapsulation, Class vs Instance Attributes & Properties",
        description: "Shared class state vs instance state, naming privacy conventions, and pythonic getters/setters via @property.",
      },
      {
        id: "py-ch7-l21",
        title: "Lesson 21: Inheritance, Method Overriding & super()",
        description: "Specializing classes with single inheritance, method overriding, super() delegation, and the MRO lookup tree.",
      },
    ],
  },
  {
    id: "py-ch8",
    title: "Chapter 8: Dunder Methods, Polymorphism & Protocols",
    lessons: [
      {
        id: "py-ch8-l22",
        title: "Lesson 22: Representation Protocols: __str__ vs __repr__",
        description: "Unambiguous developer representations with __repr__ vs friendly user-facing formatting with __str__.",
      },
      {
        id: "py-ch8-l23",
        title: "Lesson 23: Operator Overloading & Collection Protocols",
        description: "Overloading arithmetic (+, -), comparisons (==, <), and collection protocols (__len__, __getitem__).",
      },
      {
        id: "py-ch8-l24",
        title: "Lesson 24: Context Managers: The with Statement & __enter__ / __exit__",
        description: "Guaranteed resource cleanup, implementing context manager classes, and contextlib.contextmanager.",
      },
    ],
  },
  {
    id: "py-ch9",
    title: "Chapter 9: Advanced Python: Comprehensions, Generators & Decorators",
    lessons: [
      {
        id: "py-ch9-l25",
        title: "Lesson 25: Comprehensions: Lists, Dicts & Sets with Filtering",
        description: "Declarative transformations with list, dict, and set comprehensions, and conditional predicate filtering.",
      },
      {
        id: "py-ch9-l26",
        title: "Lesson 26: Iterators & Generator Functions with yield",
        description: "The iterator protocol (__iter__, __next__), lazy evaluation, streaming big data with yield, and gen expressions.",
      },
      {
        id: "py-ch9-l27",
        title: "Lesson 27: Function Decorators & Metaprogramming Utilities",
        description: "Higher-order function wrappers, the @decorator syntax, functools.wraps, and execution timing/caching.",
      },
    ],
  },
  {
    id: "py-ch10",
    title: "Chapter 10: Error Handling, File I/O & The Python Ecosystem",
    lessons: [
      {
        id: "py-ch10-l28",
        title: "Lesson 28: Robust Exception Handling: try, except, else, finally",
        description: "Intercepting runtime exceptions, safe cleanup with finally, happy path with else, and custom exception classes.",
      },
      {
        id: "py-ch10-l29",
        title: "Lesson 29: File I/O & Data Serialization with json",
        description: "Contextual file reading and writing with open(encoding='utf-8'), and JSON serialization with the json module.",
      },
      {
        id: "py-ch10-l30",
        title: "Lesson 30: Modular Architecture & Standard Library Tour",
        description: "Modules, packages, __init__.py, the if __name__ == '__main__' guard, pathlib, collections, and datetime.",
      },
    ],
  },
];

const PYTHON_CHAPTERS: Chapter[] = PYTHON_RAW_CHAPTERS.map((chapter) => ({
  ...chapter,
  lessons: chapter.lessons.map((lesson) => ({
    ...lesson,
    content: ALL_PYTHON_LESSONS_CONTENT[lesson.id],
  })),
}));

export const pythonCourse: Course = {
  id: "python-complete-course",
  title: "Python Programming: From First Steps to Advanced Engineering",
  category: "Development",
  type: "Full Course",
  typeIcon: "path",
  structureType: "chapters-and-lessons",
  tag1: "Python 3.10+",
  tag2: "Beginner to Advanced",
  badgeCount: "",
  coverVariant: "code-architecture",
  imageUrl: "/course-images/python-course.jpg",
  buttonLabel: "Start",
  description:
    "Master modern Python from foundational syntax to advanced software engineering, based on Eric Matthes' 'Python Crash Course', Mark Lutz's 'Learning Python', and Guido van Rossum's official Python documentation. Covers the Python object model, dynamic typing, data structures, OOP classes, dunder protocols, decorators, generators, error handling, and standard library powerhouses.",
  featured: true,
  totalChapters: PYTHON_CHAPTERS.length,
  totalLessons: PYTHON_CHAPTERS.reduce((acc, ch) => acc + ch.lessons.length, 0),
  progressStatus: {
    type: "status",
    statusText: "New",
  },
  chapters: PYTHON_CHAPTERS,
};
