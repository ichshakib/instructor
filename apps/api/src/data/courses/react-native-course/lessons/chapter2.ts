import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_2_LESSONS: Record<string, LessonContent> = {
  "rn-ch2-l4": {
    overview:
      "React Native replaces web HTML tags (`<div>`, `<p>`, `<img>`) with native primitives (`<View>`, `<Text>`, `<Image>`). Grounded in 'Fullstack React Native' Chapter 3 and 'Mastering React Native', this lesson covers container layouts with View, text rendering constraints with Text, loading local vs remote network images, and respecting device physical notches using SafeAreaView.",
    canDo:
      "Can structure mobile screens using View, Text, Image, and SafeAreaView, load local and network images, and navigate notch boundaries.",
    teacherNote:
      "CRITICAL REACT NATIVE RULE: All text MUST be wrapped inside a `<Text>` component! You cannot write raw strings inside a `<View>` like `<div>Hello</div>` in HTML. Writing `<View>Hello</View>` will throw a fatal runtime error: 'Text strings must be rendered within a <Text> component'!",
    sections: [
      {
        title: "1. Web HTML vs React Native Core Primitives",
        description: "Direct mapping from web tags to native mobile widgets:",
        table: {
          headers: ["Web HTML Element", "React Native Primitive", "Underlying iOS Widget", "Underlying Android Widget"],
          rows: [
            ["<div>, <section>", "<View>", "UIView", "android.view.ViewGroup"],
            ["<p>, <span>, <h1>", "<Text>", "UILabel / UITextView", "android.widget.TextView"],
            ["<img>", "<Image>", "UIImageView", "android.widget.ImageView"],
            ["N/A (Viewport notch)", "<SafeAreaView>", "Safe area inset layout guide", "Window insets / padding"],
          ],
        },
      },
      {
        title: "2. Image Loading: Local vs Remote",
        description: "Syntax differences for asset bundling vs network URLs:",
        items: [
          {
            term: "Local Image (Bundled Asset)",
            meaning: "Dimensions are determined automatically from file header",
            example: "<Image source={require('./assets/logo.png')} />",
          },
          {
            term: "Remote Network Image",
            meaning: "Explicit width and height styles are MANDATORY, or image renders with 0x0 size!",
            example: "<Image\n  source={{ uri: 'https://example.com/avatar.jpg' }}\n  style={{ width: 100, height: 100, borderRadius: 50 }}\n/>",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What happens if you place a raw text string directly inside a `<View>` without a `<Text>` wrapper?",
        options: [
          "React Native renders it with default styling",
          "A fatal red-screen runtime error is thrown: 'Text strings must be rendered within a <Text> component'",
          "The text is sent to the console only",
          "The text is spoken out loud",
        ],
        answer: "A fatal red-screen runtime error is thrown: 'Text strings must be rendered within a <Text> component'",
        explanation:
          "React Native requires all textual characters to be enclosed within a <Text> component so they can be mapped to native platform label widgets.",
      },
      {
        question: "Why must you specify explicit width and height styles for remote network images in React Native?",
        options: [
          "To speed up the internet download",
          "Because React Native does not know remote image dimensions before downloading, so without explicit sizing it renders with 0x0 pixels",
          "Because CSS requires it",
          "It is optional for all images",
        ],
        answer: "Because React Native does not know remote image dimensions before downloading, so without explicit sizing it renders with 0x0 pixels",
        explanation:
          "Unlike local assets loaded via require(), network images have unknown dimensions at render time and will not appear unless width and height are declared.",
      },
    ],
  },

  "rn-ch2-l5": {
    overview:
      "A great cross-platform app delivers authentic user experiences tailored to the design idioms of each operating system (Human Interface Guidelines for iOS vs Material Design for Android). This lesson covers platform branch logic using the `Platform` module (`Platform.OS`, `Platform.select`), and platform-specific file extensions (`Component.ios.tsx` vs `Component.android.tsx`).",
    canDo:
      "Can branch styling and logic based on operating system using Platform.OS and Platform.select, and utilize platform-specific file extensions for clean component swapping.",
    teacherNote:
      "Metro automatically resolves platform-specific file extensions! If you create `Button.ios.tsx` and `Button.android.tsx`, you simply write `import { Button } from './Button'`. Metro will compile the iOS file for iPhone builds and the Android file for Android builds with ZERO runtime overhead!",
    sections: [
      {
        title: "1. Platform Detection Strategies",
        description: "Tailoring behavior to iOS and Android:",
        table: {
          headers: ["Method", "Syntax Example", "Best Use Case"],
          rows: [
            ["Platform.OS", "if (Platform.OS === 'ios') { ... }", "Imperative logic branching inside functions."],
            ["Platform.select()", "const padding = Platform.select({ ios: 20, android: 12, default: 16 });", "Declaring platform-specific styles and configurations declaratively."],
            ["File Extensions", "Header.ios.tsx and Header.android.tsx", "Completely distinct platform UI components with zero cross-contamination."],
          ],
        },
      },
      {
        title: "2. Platform.select in StyleSheet",
        description: "Applying native visual conventions:",
        items: [
          {
            term: "Platform-Specific Styles",
            meaning: "Selecting shadow properties on iOS and elevation on Android",
            example: "const styles = StyleSheet.create({\n  card: {\n    ...Platform.select({\n      ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2 },\n      android: { elevation: 4 },\n    }),\n  },\n});",
          },
        ],
      },
    ],
    practice: [
      {
        question: "How does Metro handle files named `CustomHeader.ios.tsx` and `CustomHeader.android.tsx` when imported as `import CustomHeader from './CustomHeader'`?",
        options: [
          "It throws a duplicate filename error",
          "It automatically bundles only the .ios file for iOS builds and the .android file for Android builds at compile time",
          "It merges both files together",
          "It ignores both files",
        ],
        answer: "It automatically bundles only the .ios file for iOS builds and the .android file for Android builds at compile time",
        explanation:
          "Metro features built-in platform file extension resolution, bundling the target OS file seamlessly without requiring runtime if-checks.",
      },
      {
        question: "Which method cleanly returns different configuration values for iOS and Android in a single expression?",
        options: ["Platform.select()", "Platform.choose()", "Platform.match()", "Platform.switch()"],
        answer: "Platform.select()",
        explanation:
          "Platform.select({ ios: ..., android: ..., default: ... }) returns the value corresponding to the current running platform.",
      },
    ],
  },

  "rn-ch2-l6": {
    overview:
      "System overlays, native status bars, and activity spinners communicate system state to mobile users. In this lesson, we cover configuring the device status bar using the `<StatusBar />` component (barStyle: 'light-content' | 'dark-content', translucent on Android), displaying native loading indicators with `<ActivityIndicator />`, and building modal overlays.",
    canDo:
      "Can customize device status bar styling across dark and light themes, render platform-native loading spinners with ActivityIndicator, and position status overlays.",
    teacherNote:
      "On Android, the status bar can be made translucent (`<StatusBar translucent backgroundColor='transparent' />`), allowing background images or navigation headers to draw seamlessly behind the clock and battery icons!",
    sections: [
      {
        title: "1. The StatusBar Component",
        description: "Controlling the top system bar:",
        table: {
          headers: ["Prop", "Values", "Platform", "Effect"],
          rows: [
            ["barStyle", "'dark-content' | 'light-content' | 'default'", "All", "Colors the clock, battery, and WiFi icons (dark vs light)."],
            ["backgroundColor", "Color string (e.g. 'transparent', '#111')", "Android only", "Sets the background color of the status bar area."],
            ["translucent", "boolean", "Android only", "Allows app views to draw underneath the status bar."],
            ["hidden", "boolean", "All", "Completely hides the system status bar for full-screen media/games."],
          ],
        },
      },
      {
        title: "2. Native Loading Spinners with ActivityIndicator",
        description: "Displaying platform-native progress indicators:",
        items: [
          {
            term: "ActivityIndicator Component",
            meaning: "Renders UIActivityIndicatorView on iOS and ProgressBar on Android",
            example: "<ActivityIndicator size=\"large\" color=\"#0066cc\" />",
          },
        ],
      },
    ],
    practice: [
      {
        question: "How do you make status bar icons (clock, battery) white on a dark app background in React Native?",
        options: [
          "<StatusBar barStyle='light-content' />",
          "<StatusBar color='white' />",
          "<StatusBar theme='dark' />",
          "<StatusBar icons='light' />",
        ],
        answer: "<StatusBar barStyle='light-content' />",
        explanation:
          "barStyle='light-content' instructs the operating system to draw status bar text and icons in light/white colors, optimal for dark backgrounds.",
      },
      {
        question: "What does the `<ActivityIndicator />` component render on mobile devices?",
        options: [
          "A custom CSS spinning GIF",
          "The genuine platform-native progress spinner (UIActivityIndicatorView on iOS and ProgressBar on Android)",
          "A horizontal progress bar only",
          "An alert dialog",
        ],
        answer: "The genuine platform-native progress spinner (UIActivityIndicatorView on iOS and ProgressBar on Android)",
        explanation:
          "ActivityIndicator leverages native OS spinner widgets, matching authentic platform animations and aesthetics.",
      },
    ],
  },
};
