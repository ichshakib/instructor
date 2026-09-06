import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_2_LESSONS: Record<string, LessonContent> = {
  "java-ch2-l4": {
    overview:
      "Methods in Java encapsulate reusable procedural logic within classes. Grounded in Y. Daniel Liang's Chapter 6 and David J. Eck's modular programming principles, this lesson explores method signatures, return values, parameters, method overloading, and the critical distinction between stack memory and heap memory during method invocations.",
    canDo:
      "Can declare static and instance methods, overload methods with differing parameter lists, and trace call stacks and local variable activation records.",
    teacherNote:
      "Java is strictly PASS-BY-VALUE for everything! When you pass a primitive, its value is copied. When you pass an object reference, the pointer address itself is copied by value. You cannot reassign caller references to a new object inside a method!",
    sections: [
      {
        title: "1. Method Overloading & Signatures",
        description: "Defining multiple methods with the same name but distinct parameter types:",
        table: {
          headers: ["Signature Element", "Part of Signature?", "Used to Resolve Overloads?"],
          rows: [
            ["Method Name", "Yes", "Yes"],
            ["Parameter Types & Count", "Yes", "Yes (e.g. `add(int, int)` vs `add(double, double)`)"],
            ["Parameter Names", "No", "No (`add(int a)` and `add(int b)` collide)"],
            ["Return Type", "No", "No (cannot overload solely on differing return types)"],
          ],
        },
      },
      {
        title: "2. JVM Stack vs Heap Memory",
        description: "Where variables and objects reside during execution:",
        items: [
          {
            term: "Call Stack (Stack Frames)",
            meaning: "Stores local primitive variables and object reference pointers; frame pushed on call, popped on return",
            example: "int x = 42; // Allocated inside current method's stack frame",
          },
          {
            term: "Memory Heap",
            meaning: "Stores all objects, arrays, and instance variables; managed by the Garbage Collector",
            example: "String s = new String(\"data\"); // Reference on stack; object on heap",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Can two methods in the same Java class share the same name and parameter types if they have different return types?",
        options: [
          "Yes, Java resolves them by return type",
          "No, method overloading requires different parameter counts or types",
          "Only if one is static and the other is not",
          "Only in Java 17+",
        ],
        answer: "No, method overloading requires different parameter counts or types",
        explanation:
          "In Java, the return type is not part of the method signature used for overload resolution. Having identical names and parameter lists with different return types causes a compile error.",
      },
      {
        question: "Is Java pass-by-reference or pass-by-value?",
        options: [
          "Pass-by-reference for objects, pass-by-value for primitives",
          "Always strictly pass-by-value",
          "Always strictly pass-by-reference",
          "Configurable via compiler flags",
        ],
        answer: "Always strictly pass-by-value",
        explanation:
          "Java is strictly pass-by-value. For primitives, the literal value is copied. For objects, the reference (memory address) is copied by value.",
      },
    ],
  },

  "java-ch2-l5": {
    overview:
      "Arrays in Java are fixed-length, contiguous heap objects holding elements of a uniform type. This lesson covers array creation, default values, zero-based indexing, array length, iterating with standard and enhanced for loops, and utility methods from java.util.Arrays.",
    canDo:
      "Can allocate single-dimensional arrays, avoid ArrayIndexOutOfBoundsException, copy and sort arrays using java.util.Arrays, and iterate through elements cleanly.",
    teacherNote:
      "In Java, an array's length is immutable once allocated. To change an array's capacity, you must allocate a brand-new array and copy elements over (or use dynamic collections like `ArrayList`).",
    sections: [
      {
        title: "1. Array Allocation and Default Values",
        description: "How arrays are allocated in heap memory:",
        table: {
          headers: ["Element Type", "Array Declaration Syntax", "Heap Default Value"],
          rows: [
            ["Numeric (int, double)", "int[] nums = new int[5];", "0 (or 0.0)"],
            ["boolean", "boolean[] flags = new boolean[3];", "false"],
            ["char", "char[] letters = new char[4];", "'\\u0000' (null character)"],
            ["Objects / References", "String[] names = new String[10];", "null"],
          ],
        },
      },
      {
        title: "2. The java.util.Arrays Utility Class",
        description: "Essential static algorithms for array manipulation:",
        items: [
          {
            term: "Arrays.toString(array)",
            meaning: "Produces a human-readable string representation of array contents (e.g. '[1, 2, 3]')",
            example: "System.out.println(Arrays.toString(nums));",
          },
          {
            term: "Arrays.sort(array)",
            meaning: "Sorts primitives using Dual-Pivot Quicksort and objects using Timsort in O(n log n)",
            example: "Arrays.sort(scores);",
          },
          {
            term: "Arrays.copyOf(array, newLength)",
            meaning: "Allocates a new array with specified capacity and copies original elements",
            example: "int[] expanded = Arrays.copyOf(nums, nums.length * 2);",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What is the default value of elements in a newly allocated `int[]` array in Java?",
        options: ["null", "0", "-1", "Undefined garbage value"],
        answer: "0",
        explanation:
          "Java automatically initializes array elements in heap memory to default zero values: 0 for numeric types, false for boolean, and null for reference types.",
      },
      {
        question: "What exception is thrown when accessing `arr[arr.length]` in Java?",
        options: [
          "NullPointerException",
          "ArrayIndexOutOfBoundsException",
          "IndexOutOfBoundsException",
          "MemorySegmentationFault",
        ],
        answer: "ArrayIndexOutOfBoundsException",
        explanation:
          "Because Java arrays are 0-indexed, valid indices range from 0 to arr.length - 1. Accessing index arr.length throws an ArrayIndexOutOfBoundsException.",
      },
    ],
  },

  "java-ch2-l6": {
    overview:
      "Multidimensional arrays in Java are arrays of arrays (jagged arrays), allowing rows to possess varying lengths. Drawing from Y. Daniel Liang's Chapter 8, this lesson explores declaring 2D matrices, nested loop traversal, matrix operations, and deep string representations with Arrays.deepToString().",
    canDo:
      "Can allocate and traverse 2D grids, create non-rectangular jagged arrays, and format nested matrices for display.",
    teacherNote:
      "In Java, `int[][] matrix = new int[3][4]` allocates one master array of length 3, where each slot holds a reference to a distinct array of length 4. This enables 'ragged' arrays where `matrix[0]` has 2 items and `matrix[1]` has 10 items!",
    sections: [
      {
        title: "1. 2D Array Memory Structure (Arrays of Arrays)",
        description: "How nested references operate in Java heap:",
        table: {
          headers: ["Pattern", "Code Syntax", "Shape Description"],
          rows: [
            ["Rectangular Matrix", "int[][] grid = new int[3][3];", "3 rows, each containing exactly 3 columns."],
            ["Ragged / Jagged Array", "int[][] triangle = new int[3][];\ntriangle[0] = new int[1];\ntriangle[1] = new int[2];", "Each row points to a sub-array of distinct length."],
          ],
        },
      },
      {
        title: "2. Nested Traversal & Deep Operations",
        description: "Traversing rows and columns safely:",
        items: [
          {
            term: "Nested for Loops",
            meaning: "Outer loop iterates rows, inner loop iterates columns up to row.length",
            example: "for (int r = 0; r < matrix.length; r++) {\n    for (int c = 0; c < matrix[r].length; c++) {\n        System.out.print(matrix[r][c] + \" \");\n    }\n    System.out.println();\n}",
          },
          {
            term: "Arrays.deepToString(grid)",
            meaning: "Recursively formats multi-dimensional arrays into readable strings",
            example: "System.out.println(Arrays.deepToString(grid));",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What is a 'ragged' (jagged) array in Java?",
        options: [
          "An array containing mixed primitives and objects",
          "A two-dimensional array where different rows have different lengths",
          "An array that has not been initialized",
          "An array that cannot be sorted",
        ],
        answer: "A two-dimensional array where different rows have different lengths",
        explanation:
          "Because 2D arrays in Java are arrays of arrays, each row is an independent array object that can be allocated with its own unique length.",
      },
      {
        question: "Which Arrays method prints multi-dimensional arrays without printing memory reference hashes?",
        options: ["Arrays.toString()", "Arrays.deepToString()", "Arrays.format()", "Arrays.printGrid()"],
        answer: "Arrays.deepToString()",
        explanation:
          "Arrays.deepToString() inspects nested arrays recursively, returning clean strings like [[1, 2], [3, 4]], whereas Arrays.toString() on a 2D array merely prints row pointer addresses.",
      },
    ],
  },
};
