import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_1_LESSONS: Record<string, LessonContent> = {
  "rn-ch1-l1": {
    overview:
      "React Native empowers developers to build truly native iOS and Android mobile applications using JavaScript and React. Synthesizing concepts from 'Fullstack React Native' by Devin Abbott et al. and 'Mastering React Native', this lesson covers the evolution of React Native's architecture: comparing the legacy asynchronous JSON Bridge with the New Architecture featuring the JavaScript Interface (JSI), the Fabric rendering engine, and TurboModules for direct C++ host memory access.",
    canDo:
      "Can explain how React Native renders real native platform UI widgets (UIView on iOS, android.view.View on Android), contrast the legacy Bridge with the JSI New Architecture, and describe thread separation.",
    teacherNote:
      "React Native does NOT render inside a WebView! Unlike Cordova or Ionic which wrap a browser, React Native maps your JSX components directly to native UIKit widgets on iOS and Android Views on Android, achieving genuine native performance and gesture physics.",
    sections: [
      {
        title: "1. The React Native Architecture Evolution",
        description: "From the legacy Bridge to the modern JSI engine:",
        table: {
          headers: ["Architecture Layer", "Legacy Bridge Architecture", "Modern Architecture (JSI / Fabric)"],
          rows: [
            ["Communication Channel", "Asynchronous JSON messages serialized over a C++ queue", "Direct synchronous / asynchronous C++ object pointers via JSI."],
            ["UI Renderer", "Shadow Tree serializing layout batches to Main Thread", "Fabric C++ renderer; thread-safe, synchronous layout calculations."],
            ["Native Modules", "Pre-registered modules loaded greedily on startup", "TurboModules loaded lazily on demand, reducing app startup time."],
            ["Type Safety", "Manual runtime parsing of arguments", "Codegen automatically generates C++ types from TypeScript specs."],
          ],
        },
      },
      {
        title: "2. The 3 Core Threads in React Native",
        description: "How tasks are scheduled across operating system threads:",
        items: [
          {
            term: "1. UI / Main Thread",
            meaning: "Native platform thread managing touch events, animations, and host view rendering",
            example: "Must never be blocked; dropped frames here cause visible UI lag.",
          },
          {
            term: "2. JavaScript Thread",
            meaning: "Executes your React business logic, API network calls, and state updates (Hermes engine)",
            example: "Processes component functions and computes VDOM diffs.",
          },
          {
            term: "3. Shadow / Background Thread",
            meaning: "Computes Flexbox layouts using the Yoga C++ layout engine before passing coordinates to UI",
            example: "Calculates exact pixel positions and sizes for all views.",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Does React Native render user interfaces inside a hidden browser WebView?",
        options: [
          "Yes, it is an HTML5 wrapper",
          "No, React Native maps JSX components directly to native platform UI widgets (e.g. UIView on iOS and android.view.View on Android)",
          "Only on Android",
          "Only in development mode",
        ],
        answer: "No, React Native maps JSX components directly to native platform UI widgets (e.g. UIView on iOS and android.view.View on Android)",
        explanation:
          "React Native renders genuine native operating system views, not web pages, delivering authentic platform styling, gestures, and performance.",
      },
      {
        question: "What is the role of the JavaScript Interface (JSI) in React Native's New Architecture?",
        options: [
          "It displays alert dialogs",
          "It allows JavaScript to hold direct references to host C++ objects, enabling direct synchronous communication without JSON serialization",
          "It connects to internet WiFi",
          "It compiles JavaScript into Swift",
        ],
        answer: "It allows JavaScript to hold direct references to host C++ objects, enabling direct synchronous communication without JSON serialization",
        explanation:
          "JSI replaces the old asynchronous serialized JSON bridge with direct C++ shared pointers, enabling instant inter-thread method calls.",
      },
    ],
  },

  "rn-ch1-l2": {
    overview:
      "Developers can choose between two main development environments: the Expo managed workflow or the bare React Native Community CLI. In this lesson, based on 'Fullstack React Native', we compare Expo (pre-configured native toolchains, OTA updates, universal APIs) with Bare CLI (direct Xcode / Android Studio native code editing), detailing Prebuild (Continuous Native Generation).",
    canDo:
      "Can evaluate when to choose Expo versus Bare CLI, configure app.json manifests, and use Expo Prebuild to generate native iOS/Android project folders on demand.",
    teacherNote:
      "Modern Expo (SDK 50+) is no longer restricted to pure JavaScript! With Expo Prebuild (Continuous Native Generation) and Config Plugins, you can use any custom native iOS/Android library while maintaining a clean, easily upgradable git repository without committing bloated Xcode or Gradle folders.",
    sections: [
      {
        title: "1. Expo Managed vs Bare React Native CLI",
        description: "Choosing the optimal development toolchain:",
        table: {
          headers: ["Feature", "Expo Managed Workflow", "Bare React Native CLI"],
          rows: [
            ["Initial Setup", "Zero native setup; run on iOS/Android via Expo Go app", "Requires Xcode, Android Studio, CocoaPods, Java SDK installed."],
            ["Native Code Customization", "Via Config Plugins and `npx expo prebuild`", "Directly modify Objective-C, Swift, Java, Kotlin, and Gradle files."],
            ["Over-The-Air (OTA) Updates", "Built-in via EAS Update", "Requires third-party integrations (e.g. CodePush)."],
            ["Cloud Builds", "EAS Build (generates .ipa and .aab without macOS)", "Requires local macOS machine for iOS builds."],
          ],
        },
      },
      {
        title: "2. The app.json Configuration Manifest",
        description: "Universal mobile project configuration:",
        items: [
          {
            term: "app.json Manifest",
            meaning: "Single source of truth for app name, icon, splash screen, bundle identifier, and permissions",
            example: "{\n  \"expo\": {\n    \"name\": \"MobileApp\",\n    \"slug\": \"mobile-app\",\n    \"version\": \"1.0.0\",\n    \"ios\": { \"bundleIdentifier\": \"com.company.app\" },\n    \"android\": { \"package\": \"com.company.app\" }\n  }\n}",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Can developers building with modern Expo use custom native iOS/Android code and third-party native libraries?",
        options: [
          "No, Expo only supports JavaScript",
          "Yes, using Expo Config Plugins and Expo Prebuild (Continuous Native Generation)",
          "Only on jailbroken devices",
          "Only in production",
        ],
        answer: "Yes, using Expo Config Plugins and Expo Prebuild (Continuous Native Generation)",
        explanation:
          "Modern Expo supports any native module through Config Plugins and `npx expo prebuild`, which generates custom native Xcode and Gradle projects automatically.",
      },
      {
        question: "Which cloud service allows building iOS binaries (.ipa) without owning a physical Mac computer?",
        options: ["Expo Application Services (EAS Build)", "npm publish", "Docker Hub", "Google Drive"],
        answer: "Expo Application Services (EAS Build)",
        explanation:
          "EAS Build compiles native iOS and Android binaries in cloud virtual machines, allowing Windows and Linux developers to generate production iOS builds without a local Mac.",
      },
    ],
  },

  "rn-ch1-l3": {
    overview:
      "The developer experience in React Native is driven by the Metro Bundler and Fast Refresh. This lesson covers how Metro packages assets and JavaScript modules, how Fast Refresh preserves component state during code edits, running apps on physical devices via Wi-Fi QR codes, and debugging using React Native DevTools and Flipper.",
    canDo:
      "Can configure Metro bundler, inspect mobile logs, leverage Fast Refresh without losing state, and debug layout/network calls using React Native DevTools.",
    teacherNote:
      "Fast Refresh combines Hot Reloading with Live Reloading. When you edit a component that exports only React components, Fast Refresh updates the code in-place preserving its state! If you edit non-component files (like constants), Fast Refresh performs a clean re-mount.",
    sections: [
      {
        title: "1. Metro Bundler Pipeline",
        description: "How Metro transforms modern source files into mobile runtime assets:",
        table: {
          headers: ["Stage", "Process", "Output"],
          rows: [
            ["1. Resolution", "Resolves all import paths starting from index.js", "Dependency Graph"],
            ["2. Transformation", "Transpiles TypeScript and modern JSX through Babel/Hermes", "Optimized ES5/ES6 modules"],
            ["3. Serialization", "Packages modules into a single JavaScript bundle file", "index.bundle (delivered over HTTP to device)"],
          ],
        },
      },
      {
        title: "2. Mobile Debugging Shortcuts",
        description: "Essential commands for developer iteration:",
        items: [
          {
            term: "In-App Developer Menu",
            meaning: "Shake physical device or press `Ctrl + M` (Android emulator) / `Cmd + D` (iOS simulator)",
            example: "Provides access to reload, toggle element inspector, and start performance monitors.",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What is the official JavaScript bundler used by React Native?",
        options: ["Webpack", "Metro", "Vite", "Turbopack"],
        answer: "Metro",
        explanation:
          "Metro is the dedicated, high-speed JavaScript bundler created by Meta specifically for React Native projects.",
      },
      {
        question: "How do you open the developer menu on an Android emulator?",
        options: ["Ctrl + M (or Cmd + M on Mac)", "Press F5", "Double click the screen", "Type exit"],
        answer: "Ctrl + M (or Cmd + M on Mac)",
        explanation:
          "Pressing Ctrl+M (or Cmd+M) brings up the in-app React Native Developer Menu with options to reload, inspect elements, and profile performance.",
      },
    ],
  },
};
