import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_3_LESSONS: Record<string, LessonContent> = {
  "rn-ch3-l7": {
    overview:
      "Layouts in React Native are computed by Yoga, a high-performance C++ Flexbox implementation. Drawing from 'Fullstack React Native' Chapter 4, this lesson breaks down the fundamental differences between web CSS Flexbox and React Native Flexbox: `flexDirection: 'column'` by default, unitless density-independent pixel numbers, `alignItems`, `justifyContent`, and `flex: 1` fill behavior.",
    canDo:
      "Can structure responsive mobile layouts using Flexbox, explain why flexDirection defaults to column in mobile, and distribute space with justifyContent and alignItems.",
    teacherNote:
      "BIGGEST WEB-TO-MOBILE DIFFERENCE: In web CSS, `flexDirection` defaults to `row`. In React Native, `flexDirection` defaults to `column` because mobile screens are tall vertical viewports! Also, sizes do NOT take units: write `width: 100`, NOT `width: '100px'`.",
    sections: [
      {
        title: "1. Web CSS vs React Native Flexbox Differences",
        description: "Key deviations from standard web browser styling:",
        table: {
          headers: ["Property", "Web CSS Default", "React Native Default", "Reason"],
          rows: [
            ["flexDirection", "row", "column", "Mobile devices are vertically oriented."],
            ["Units", "px, em, rem, %", "Unitless density-independent points (dp)", "Scaled automatically to device pixel ratio (Retina / @2x / @3x)."],
            ["flexWrap", "nowrap", "nowrap", "Same."],
            ["boxSizing", "content-box", "border-box", "Padding and borders are always included in element size calculations."],
          ],
        },
      },
      {
        title: "2. The flex: 1 Growth Property",
        description: "Expanding views to fill available screen real estate:",
        items: [
          {
            term: "flex: 1 on Root View",
            meaning: "Expands the top-level container to fill 100% of the mobile screen height and width",
            example: "const styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: '#fff',\n    justifyContent: 'center',\n    alignItems: 'center',\n  },\n});",
          },
        ],
      },
    ],
    practice: [
      {
        question: "What is the default `flexDirection` in React Native?",
        options: ["row", "column", "row-reverse", "grid"],
        answer: "column",
        explanation:
          "Because mobile device viewports are oriented vertically, React Native's Flexbox engine sets the primary axis to column by default.",
      },
      {
        question: "How do you specify a width of 250 density-independent pixels in React Native styles?",
        options: ["width: '250px'", "width: 250", "width: '250dp'", "width: '250pt'"],
        answer: "width: 250",
        explanation:
          "React Native dimensions are specified as plain unitless numbers representing density-independent pixels (dp/points).",
      },
    ],
  },

  "rn-ch3-l8": {
    overview:
      "Mobile devices exhibit vast screen size variations—from compact smartphones to large tablets. In this lesson, we cover the `useWindowDimensions` hook for dynamic orientation and resize tracking, calculating responsive grid columns, handling portrait versus landscape mode, and breakpoints.",
    canDo:
      "Can adapt layouts dynamically to orientation changes using useWindowDimensions(), calculate dynamic grid column widths, and build responsive layouts.",
    teacherNote:
      "Always prefer `useWindowDimensions()` over `Dimensions.get('window')`! `Dimensions.get()` is a static snapshot that does NOT update when the user rotates their phone into landscape mode, while `useWindowDimensions()` is a reactive hook that automatically triggers a re-render with the new width and height!",
    sections: [
      {
        title: "1. useWindowDimensions() vs Dimensions.get()",
        description: "Dynamic reactivity vs static measurement:",
        table: {
          headers: ["Method", "Hook?", "Reacts to Screen Rotation?", "Recommended Use"],
          rows: [
            ["Dimensions.get('window')", "No", "No (static snapshot at module load)", "Module-level constants only (discouraged for layout)."],
            ["useWindowDimensions()", "Yes", "Yes (automatically updates state on rotation)", "Modern responsive components (Recommended)."],
          ],
        },
      },
      {
        title: "2. Responsive Grid Calculation Pattern",
        description: "Computing column widths dynamically:",
        items: [
          {
            term: "Multi-Column Responsive Grid",
            meaning: "Adapts column count based on available screen width",
            example: "function ProductGrid() {\n  const { width } = useWindowDimensions();\n  const numColumns = width > 768 ? 4 : 2; // 4 columns on tablets, 2 on phones\n  const itemWidth = (width - 32) / numColumns;\n  return <View style={{ width: itemWidth }}>...</View>;\n}",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Why is `useWindowDimensions()` preferred over `Dimensions.get('window')` for responsive mobile components?",
        options: [
          "It uses less battery",
          "It is a reactive hook that automatically triggers a re-render with updated dimensions when the user rotates the device or splits screen",
          "It supports dark mode",
          "It compiles faster",
        ],
        answer: "It is a reactive hook that automatically triggers a re-render with updated dimensions when the user rotates the device or splits screen",
        explanation:
          "useWindowDimensions automatically updates when device dimensions change (such as during phone rotation or window resizing on foldable screens).",
      },
      {
        question: "How does React Native scale unitless dimensions across different screen pixel densities (e.g. 1x, 2x Retina, 3x Super Retina)?",
        options: [
          "It doesn't scale them",
          "Unitless values represent density-independent points (dp), which the native engine multiplies by the device PixelRatio to yield physical screen pixels",
          "It stretches the entire screen like an image",
          "It requires CSS media queries",
        ],
        answer: "Unitless values represent density-independent points (dp), which the native engine multiplies by the device PixelRatio to yield physical screen pixels",
        explanation:
          "React Native uses density-independent points. On a 3x Retina display, a style of width: 100 is rendered across 300 physical hardware pixels.",
      },
    ],
  },

  "rn-ch3-l9": {
    overview:
      "Creating floating action buttons, badge overlays, and card depth requires mastering absolute positioning and platform shadow systems. In this lesson, we study `position: 'absolute'`, top/bottom/left/right coordinates relative to parent views, zIndex stacking, and bridging iOS shadows (`shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowRadius`) with Android's native `elevation` attribute.",
    canDo:
      "Can position floating buttons and badges with position: 'absolute', manage zIndex stacking, and implement cross-platform box shadows across iOS and Android.",
    teacherNote:
      "In React Native, any element with `position: 'absolute'` is positioned relative to its IMMEDIATE PARENT container by default, WITHOUT needing the parent to have `position: 'relative'`! Also, iOS shadow properties (`shadowColor`, `shadowOpacity`) do NOTHING on Android; you MUST specify `elevation: 5` for Android shadows.",
    sections: [
      {
        title: "1. Cross-Platform Shadows: iOS vs Android",
        description: "The dual shadow systems in React Native:",
        table: {
          headers: ["Platform", "Shadow Properties", "Underlying Technology"],
          rows: [
            ["iOS", "shadowColor, shadowOffset: { width, height }, shadowOpacity, shadowRadius", "CALayer CoreAnimation shadows."],
            ["Android", "elevation: number (e.g. elevation: 4)", "Android Material Elevation rendering system."],
          ],
        },
      },
      {
        title: "2. Absolute Badge Overlay Pattern",
        description: "Positioning badges over icons:",
        items: [
          {
            term: "Notification Badge Positioning",
            meaning: "Pinning a badge to the top-right corner of an icon",
            example: "<View style={{ position: 'relative' }}>\n  <Icon name=\"bell\" size={28} />\n  <View style={{\n    position: 'absolute',\n    top: -4,\n    right: -4,\n    backgroundColor: 'red',\n    borderRadius: 10,\n    width: 18,\n    height: 18,\n    justifyContent: 'center',\n    alignItems: 'center'\n  }}>\n    <Text style={{ color: '#fff', fontSize: 10 }}>3</Text>\n  </View>\n</View>",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Which styling property must you use to create a drop shadow on Android in React Native?",
        options: ["boxShadow", "shadowRadius", "elevation", "androidShadow"],
        answer: "elevation",
        explanation:
          "Android relies on the native Material Design 'elevation' property (e.g. elevation: 5) to project depth and drop shadows.",
      },
      {
        question: "How does `position: 'absolute'` behave relative to parent containers in React Native?",
        options: [
          "It always positions relative to the top of the entire screen",
          "It positions relative to its immediate parent view without requiring the parent to declare position: 'relative'",
          "It disables touch events",
          "It turns the element invisible",
        ],
        answer: "It positions relative to its immediate parent view without requiring the parent to declare position: 'relative'",
        explanation:
          "In React Native, absolutely positioned elements are positioned relative to their direct parent view boundaries automatically.",
      },
    ],
  },
};
