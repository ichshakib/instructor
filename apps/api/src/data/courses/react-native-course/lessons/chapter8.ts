import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_8_LESSONS: Record<string, LessonContent> = {
  "rn-ch8-l22": {
    overview:
      "Fluid 60/120 FPS animations are essential for professional mobile applications. In this lesson, based on 'Fullstack React Native' Chapter 9 and 'Mastering React Native', we cover the native `Animated` library: `Animated.Value`, interpolation (`interpolate({ inputRange, outputRange })`), animation curves (`Animated.timing`, `Animated.spring`, `Animated.decay`), and offloading animation drivers to the native UI thread using `useNativeDriver: true`.",
    canDo:
      "Can construct fluid mobile animations using Animated.Value, interpolate numeric values into colors and rotation degrees, and offload calculations to the UI thread with useNativeDriver: true.",
    teacherNote:
      "ALWAYS set `useNativeDriver: true` whenever animating non-layout properties (opacity, transform: translateX, translateY, scale, rotate)! This serializes the animation curve once to the native UI thread, allowing animations to run buttery-smooth even if the JavaScript thread is blocked with heavy business logic!",
    sections: [
      {
        title: "1. The useNativeDriver Engine",
        description: "Why offloading to the native thread eliminates dropped frames:",
        table: {
          headers: ["Driver Mode", "Execution Thread", "Frame Rate under JS Load", "Supported Properties"],
          rows: [
            ["useNativeDriver: false", "JavaScript Thread", "Drops frames if JS thread does heavy computation", "All properties (width, height, top, colors, opacity)."],
            ["useNativeDriver: true", "Native UI Thread (C++ / iOS / Android)", "Locked at 60 / 120 FPS regardless of JS workload", "opacity, transform (scale, translate, rotate)."],
          ],
        },
      },
      {
        title: "2. Spring Animation Pattern",
        description: "Natural physical spring physics without fixed durations:",
        items: [
          {
            term: "Animated.spring()",
            meaning: "Simulates real-world spring physics (friction, tension, bounciness)",
            example: "const scale = useRef(new Animated.Value(0)).current;\n\nfunction handlePop() {\n  Animated.spring(scale, {\n    toValue: 1,\n    friction: 5,\n    tension: 100,\n    useNativeDriver: true,\n  }).start();\n}",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Why should you set `useNativeDriver: true` in React Native animations whenever animating `opacity` or `transform`?",
        options: [
          "It makes the image smaller",
          "It offloads the animation to execute directly on the native OS UI thread, ensuring fluid 60/120 FPS motion even if the JavaScript thread is busy",
          "It allows animations to run when the phone is powered off",
          "It is required by TypeScript",
        ],
        answer: "It offloads the animation to execute directly on the native OS UI thread, ensuring fluid 60/120 FPS motion even if the JavaScript thread is busy",
        explanation:
          "useNativeDriver: true sends the entire animation curve to the native UI thread before it starts, eliminating frame drops caused by JavaScript thread bottlenecks.",
      },
      {
        question: "What does `interpolate()` do on an `Animated.Value`?",
        options: [
          "It deletes the animation",
          "It maps an input range (e.g. [0, 1]) to an output range of different units or types (e.g. ['0deg', '360deg'] or colors)",
          "It slows down the animation speed",
          "It repeats the animation infinitely",
        ],
        answer: "It maps an input range (e.g. [0, 1]) to an output range of different units or types (e.g. ['0deg', '360deg'] or colors)",
        explanation:
          "Interpolation allows a single animated progress value (0 to 1) to drive rotation, scale, position, or color transitions simultaneously.",
      },
    ],
  },

  "rn-ch8-l23": {
    overview:
      "Interactive drag, swipe-to-dismiss, and pinch-to-zoom gestures require handling continuous touch events. In this lesson, we study `PanResponder` and modern gesture handling using `react-native-gesture-handler` and `react-native-reanimated`, tracking delta coordinates (dx, dy), fling velocities, and building swipeable card decks.",
    canDo:
      "Can build drag-and-drop and swipeable interactions with PanResponder, calculate gesture bounds and velocity thresholds, and handle gesture release states.",
    teacherNote:
      "In modern production apps, combine `react-native-gesture-handler` with `react-native-reanimated`! They process multi-touch gestures and physics directly on the UI thread without crossing the JavaScript thread, enabling TikTok-style or Tinder-style swipe physics with zero latency.",
    sections: [
      {
        title: "1. The PanResponder Lifecycle",
        description: "How React Native grants gesture responder status:",
        table: {
          headers: ["Callback Method", "When Invoked", "Decision / Action"],
          rows: [
            ["onStartShouldSetPanResponder", "User touches the screen", "Return true to claim responder status on initial touch."],
            ["onMoveShouldSetPanResponder", "User moves finger across screen", "Return true to claim responder status on drag/swipe."],
            ["onPanResponderMove", "Continuous finger drag", "Provides gestureState containing dx, dy, vx, vy."],
            ["onPanResponderRelease", "User lifts finger from screen", "Executes snap-back animation or triggers action if swipe threshold exceeded."],
          ],
        },
      },
      {
        title: "2. Swipeable Card Deck Pattern",
        description: "Tracking gesture deltas and animating cards:",
        items: [
          {
            term: "Swipe-to-Dismiss Threshold",
            meaning: "Snapping card off-screen if drag distance exceeds width threshold",
            example: "if (gestureState.dx > 120) {\n  // Swiped right\n  Animated.timing(pan, { toValue: { x: 500, y: 0 }, useNativeDriver: true }).start(onDismiss);\n} else {\n  // Snap back\n  Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: true }).start();\n}",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Which callback in `PanResponder` is invoked continuously as the user drags their finger across the screen?",
        options: ["onPanResponderMove", "onPanResponderStart", "onPanResponderRelease", "onPanResponderTerminate"],
        answer: "onPanResponderMove",
        explanation:
          "onPanResponderMove fires on every touch move event, providing current delta positions (gestureState.dx and dy) and velocities.",
      },
      {
        question: "Why is `react-native-gesture-handler` often used instead of PanResponder in modern complex applications?",
        options: [
          "Because it is written in Python",
          "Because it hooks directly into native platform gesture recognizers (like UIPanGestureRecognizer on iOS), enabling native touch physics and zero-latency response",
          "Because PanResponder was removed from React Native",
          "To make the app smaller",
        ],
        answer: "Because it hooks directly into native platform gesture recognizers (like UIPanGestureRecognizer on iOS), enabling native touch physics and zero-latency response",
        explanation:
          "react-native-gesture-handler executes directly on the native platform thread via native gesture recognizers, providing superior smoothness.",
      },
    ],
  },

  "rn-ch8-l24": {
    overview:
      "The final milestone in mobile software engineering is compiling, signing, and deploying standalone production binaries (.ipa for iOS App Store and .aab / .apk for Google Play). In this capstone lesson, we cover EAS Build (Expo Application Services), generating cryptographic signing credentials (keystores and provisioning profiles), configuring release channels, Over-The-Air (OTA) updates, and submitting to store review.",
    canDo:
      "Can configure EAS Build, manage iOS certificates and Android keystores, build release binaries (.aab and .ipa), and deploy instant OTA updates.",
    teacherNote:
      "Android uses the `.aab` (Android App Bundle) format for Google Play distribution, NOT `.apk`! Google Play uses the app bundle to generate optimized APKs tailored to each specific device's CPU architecture and screen density, cutting download size by up to 50%.",
    sections: [
      {
        title: "1. The Production Binary Pipeline (EAS Build)",
        description: "Compiling standalone mobile binaries in the cloud:",
        table: {
          headers: ["Platform", "Artifact Format", "Signing Credential", "Distribution Channel"],
          rows: [
            ["iOS", ".ipa (iOS App Archive)", "Apple Distribution Certificate + Provisioning Profile", "Apple App Store / TestFlight"],
            ["Android", ".aab (Android App Bundle)", "Android Keystore (JKS / PKCS12)", "Google Play Console"],
          ],
        },
      },
      {
        title: "2. EAS Configuration & Build Commands",
        description: "CLI commands to trigger automated cloud builds:",
        items: [
          {
            term: "eas build -p android --profile production",
            meaning: "Triggers a cloud Android production build generating a signed .aab bundle ready for Google Play upload",
            example: "eas build -p ios --profile production  # Builds signed .ipa for App Store",
          },
          {
            term: "Over-The-Air (OTA) Updates with EAS Update",
            meaning: "Pushes critical JavaScript and asset bugfixes directly to users' phones without waiting for app store review",
            example: "eas update --branch production --message \"Fix checkout crash\"",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What is the standard production package format required by Google Play for modern Android app submissions?",
        options: [".exe", ".apk", ".aab (Android App Bundle)", ".zip"],
        answer: ".aab (Android App Bundle)",
        explanation:
          "Google Play mandates the Android App Bundle (.aab) format, which allows Google to generate device-optimized APKs for download.",
      },
      {
        question: "What capability does Over-The-Air (OTA) updates (like EAS Update) provide to mobile developers?",
        options: [
          "It modifies the phone's hardware camera",
          "It deploys critical JavaScript and asset updates directly to users' installed apps instantly, bypassing days of app store review for non-native changes",
          "It changes the phone's battery capacity",
          "It deletes all app data",
        ],
        answer: "It deploys critical JavaScript and asset updates directly to users' installed apps instantly, bypassing days of app store review for non-native changes",
        explanation:
          "OTA updates allow developers to patch JavaScript code and assets in live production apps without submitting a new binary for store review.",
      },
    ],
  },
};
