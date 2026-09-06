import { Course, Chapter } from "../../../types/course.types";
import { ALL_REACT_NATIVE_LESSONS_CONTENT } from "./lessons";

const REACT_NATIVE_RAW_CHAPTERS: Chapter[] = [
  {
    id: "rn-ch1",
    title: "Chapter 1: React Native Architecture & Setup",
    lessons: [
      {
        id: "rn-ch1-l1",
        title: "Lesson 1: The React Native Architecture: Old Bridge vs Modern Fabric & TurboModules",
        description: "Mapping to real platform widgets (UIView/ViewGroup), the JSI interface, Fabric C++ rendering, and OS threads.",
      },
      {
        id: "rn-ch1-l2",
        title: "Lesson 2: Project Tooling: Expo Managed Workflow vs Bare React Native CLI",
        description: "Continuous Native Generation (Prebuild), app.json manifests, and cloud compiling via EAS Build.",
      },
      {
        id: "rn-ch1-l3",
        title: "Lesson 3: Metro Bundler, Fast Refresh & Debugging Tools",
        description: "The Metro bundling pipeline, preserving state during live edits with Fast Refresh, and in-app developer menus.",
      },
    ],
  },
  {
    id: "rn-ch2",
    title: "Chapter 2: Core Mobile Components & Platform Separation",
    lessons: [
      {
        id: "rn-ch2-l4",
        title: "Lesson 4: Essential UI Primitives: View, Text, Image & SafeAreaView",
        description: "Native mobile containers, mandatory Text wrapping, local vs network images, and notch safe areas.",
      },
      {
        id: "rn-ch2-l5",
        title: "Lesson 5: Platform-Specific Logic: Platform.OS, Platform.select & File Extensions",
        description: "Tailoring code to iOS HIG vs Android Material, and zero-runtime platform file extension bundling.",
      },
      {
        id: "rn-ch2-l6",
        title: "Lesson 6: The StatusBar, ActivityIndicator & Status Overlays",
        description: "Styling the device status bar across light/dark themes, native loading spinners, and translucent overlays.",
      },
    ],
  },
  {
    id: "rn-ch3",
    title: "Chapter 3: Mobile Layouts & Flexbox Mastery",
    lessons: [
      {
        id: "rn-ch3-l7",
        title: "Lesson 7: Flexbox in React Native: Column-by-Default & Alignments",
        description: "Yoga C++ layout calculations, vertical mobile orientation, density-independent points, and flex: 1 expansion.",
      },
      {
        id: "rn-ch3-l8",
        title: "Lesson 8: Dimensions, useWindowDimensions & Responsive Breakpoints",
        description: "Dynamic orientation adaptation, computing responsive grid columns, and foldable screen support.",
      },
      {
        id: "rn-ch3-l9",
        title: "Lesson 9: Absolute Positioning, Shadows (iOS shadow vs Android elevation) & Z-Index",
        description: "Relative-to-parent absolute positioning, floating action buttons, and cross-platform drop shadows.",
      },
    ],
  },
  {
    id: "rn-ch4",
    title: "Chapter 4: User Touch Interactions & Inputs",
    lessons: [
      {
        id: "rn-ch4-l10",
        title: "Lesson 10: Touch Gestures: Pressable vs TouchableOpacity & Hit Slops",
        description: "Custom touch feedback functions, expanding interactive thumb hitboxes using hitSlop, and long press gestures.",
      },
      {
        id: "rn-ch4-l11",
        title: "Lesson 11: Text Inputs, Keyboard Types, Auto-Correction & Form Submissions",
        description: "Configuring email and numeric keyboards, disabling rogue autocorrection, password masking, and next-field focus.",
      },
      {
        id: "rn-ch4-l12",
        title: "Lesson 12: KeyboardAvoidingView & Handling Virtual Keyboard Occlusion",
        description: "Preventing virtual keyboards from covering form submit buttons, padding vs height adjustments, and tap dismissal.",
      },
    ],
  },
  {
    id: "rn-ch5",
    title: "Chapter 5: High-Performance Scrollable Lists",
    lessons: [
      {
        id: "rn-ch5-l13",
        title: "Lesson 13: ScrollView vs FlatList: Windowing & Memory Management",
        description: "Eager rendering memory traps vs virtualized viewport recycling, and avoiding out-of-memory crashes on mobile.",
      },
      {
        id: "rn-ch5-l14",
        title: "Lesson 14: FlatList Optimization: keyExtractor, getItemLayout & windowSize",
        description: "Bypassing asynchronous layout calculations with getItemLayout, window sizing, and silky smooth 120 FPS scrolls.",
      },
      {
        id: "rn-ch5-l15",
        title: "Lesson 15: SectionList, Pull-to-Refresh & Infinite Scroll Loading",
        description: "Categorized sticky headers with SectionList, native RefreshControl spinners, and threshold pagination.",
      },
    ],
  },
  {
    id: "rn-ch6",
    title: "Chapter 6: React Navigation Architecture",
    lessons: [
      {
        id: "rn-ch6-l16",
        title: "Lesson 16: Navigation Foundations: NavigationContainer & Native Stack Navigator",
        description: "Screen stack push/pop models, native platform view controllers (UINavigationController), and header styling.",
      },
      {
        id: "rn-ch6-l17",
        title: "Lesson 17: Bottom Tab Navigators & Custom Icon Bars",
        description: "Thumb-friendly bottom tab bars, dynamic active icon switching, notification badges, and nested stack patterns.",
      },
      {
        id: "rn-ch6-l18",
        title: "Lesson 18: Passing Screen Parameters, Deep Linking & Route Headers",
        description: "Type-safe route params with useRoute(), dynamic header titles, and universal deep linking from web URLs.",
      },
    ],
  },
  {
    id: "rn-ch7",
    title: "Chapter 7: Native Device APIs & Persistent Storage",
    lessons: [
      {
        id: "rn-ch7-l19",
        title: "Lesson 19: Persistent Offline Storage: AsyncStorage & SecureStore",
        description: "Offline SQLite key-value persistence vs hardware-encrypted Keychain/Keystore token storage.",
      },
      {
        id: "rn-ch7-l20",
        title: "Lesson 20: Camera, Photo Library & Media Permissions",
        description: "Hardware permission lifecycles, launching native photo pickers, image cropping, and privacy declarations.",
      },
      {
        id: "rn-ch7-l21",
        title: "Lesson 21: Location Services, Geocoding & Network Info Detection",
        description: "Foreground GPS coordinates, address reverse geocoding, and detecting live offline/online network transitions.",
      },
    ],
  },
  {
    id: "rn-ch8",
    title: "Chapter 8: Mobile Animations & Binary Deployment",
    lessons: [
      {
        id: "rn-ch8-l22",
        title: "Lesson 22: The Animated API: Animated.Value, timing, spring & decay",
        description: "Hardware-accelerated UI thread animations with useNativeDriver: true, physical spring dynamics, and interpolation.",
      },
      {
        id: "rn-ch8-l23",
        title: "Lesson 23: PanResponder & React Native Gesture Handler",
        description: "Multi-touch drag responders, swipe-to-dismiss velocity thresholds, and 60 FPS gesture tracking.",
      },
      {
        id: "rn-ch8-l24",
        title: "Lesson 24: Building Standalone iOS (.ipa) and Android (.apk / .aab) Binaries with EAS",
        description: "Generating release app bundles (.aab), managing signing keystores and certificates, and Over-The-Air (OTA) updates.",
      },
    ],
  },
];

const REACT_NATIVE_CHAPTERS: Chapter[] = REACT_NATIVE_RAW_CHAPTERS.map((chapter) => ({
  ...chapter,
  lessons: chapter.lessons.map((lesson) => ({
    ...lesson,
    content: ALL_REACT_NATIVE_LESSONS_CONTENT[lesson.id],
  })),
}));

export const reactNativeCourse: Course = {
  id: "react-native-course",
  title: "React Native: Cross-Platform iOS & Android Mobile Development",
  category: "Development",
  type: "Full Course",
  typeIcon: "path",
  structureType: "chapters-and-lessons",
  tag1: "React Native / Expo",
  tag2: "Beginner to Advanced",
  badgeCount: "",
  coverVariant: "code-architecture",
  imageUrl: "/course-images/react-native-course.jpg",
  buttonLabel: "Start",
  description:
    "Master cross-platform native mobile engineering for iOS and Android using React Native and modern Expo, based on 'Fullstack React Native' and 'Mastering React Native'. Covers the JSI/Fabric architecture, mobile Flexbox layout, Pressable gestures, virtualized FlatLists, React Navigation (Native Stack & Tabs), hardware device APIs, Animated UI driver physics, and EAS cloud binary builds.",
  featured: true,
  totalChapters: REACT_NATIVE_CHAPTERS.length,
  totalLessons: REACT_NATIVE_CHAPTERS.reduce((acc, ch) => acc + ch.lessons.length, 0),
  progressStatus: {
    type: "status",
    statusText: "New",
  },
  chapters: REACT_NATIVE_CHAPTERS,
};
