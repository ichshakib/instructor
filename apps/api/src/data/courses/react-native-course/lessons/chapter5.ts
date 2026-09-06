import { LessonContent } from "../../../../types/course.types";

export const CHAPTER_5_LESSONS: Record<string, LessonContent> = {
  "rn-ch5-l13": {
    overview:
      "Displaying lists of data on mobile devices requires careful memory management. Grounded in 'Fullstack React Native' Chapter 6, this lesson compares `<ScrollView>` with `<FlatList>`. We study why ScrollView renders all children eagerly in memory (causing crashes for large datasets), whereas FlatList virtualizes elements by lazy loading only visible rows and recycling off-screen views.",
    canDo:
      "Can evaluate when to use ScrollView versus FlatList, render high-performance virtualized lists with FlatList, and prevent mobile out-of-memory crashes.",
    teacherNote:
      "CRITICAL PERFORMANCE RULE: Use `<ScrollView>` ONLY for small, fixed-size layouts (like a settings screen with 10 form fields). For ANY dynamic or unbounded dataset (like a social feed, catalog, or search results with 50+ items), you MUST use `<FlatList>`, which recycles native views off-screen to keep RAM usage constant!",
    sections: [
      {
        title: "1. ScrollView vs FlatList Memory & Rendering Architecture",
        description: "How the two list components handle element lifecycles:",
        table: {
          headers: ["Attribute", "ScrollView", "FlatList"],
          rows: [
            ["Rendering Strategy", "Eager: Renders ALL items simultaneously on mount", "Lazy: Renders only visible items + small render window buffer."],
            ["Memory Consumption", "Grows linearly O(n); crashes RAM on large lists", "Constant O(1) memory bound; recycles off-screen native views."],
            ["Input Data Type", "Direct JSX children (`<ScrollView>{items.map(...)}</ScrollView>`)", "Structured data array (`<FlatList data={items} renderItem={...} />`)."],
            ["Best For", "Static screens, small forms (< 30 elements)", "Feeds, search results, chat history, infinite collections."],
          ],
        },
      },
      {
        title: "2. FlatList Basic Implementation",
        description: "Standard FlatList anatomy:",
        items: [
          {
            term: "FlatList Core Props",
            meaning: "data, renderItem, and keyExtractor are the required triad",
            example: "<FlatList\n  data={products}\n  keyExtractor={item => item.id}\n  renderItem={({ item }) => <ProductCard product={item} />}\n/>",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Why does using `<ScrollView>` to render 5,000 items cause a mobile app to lag and crash?",
        options: [
          "Because ScrollView is only supported on iOS",
          "Because ScrollView eagerly instantiates and measures all 5,000 native view widgets simultaneously in memory on mount, exhausting mobile RAM",
          "Because ScrollView cannot scroll vertically",
          "Because JavaScript cannot store 5,000 items",
        ],
        answer: "Because ScrollView eagerly instantiates and measures all 5,000 native view widgets simultaneously in memory on mount, exhausting mobile RAM",
        explanation:
          "ScrollView renders all its child elements at once. For thousands of elements, this exhausts device memory and freezes the UI thread.",
      },
      {
        question: "How does `<FlatList>` achieve high performance on large datasets?",
        options: [
          "By deleting items when scrolled past",
          "By virtualizing the list: lazily rendering only the visible viewport items and recycling views that scroll off-screen",
          "By running on a separate GPU server",
          "By converting elements into low-resolution images",
        ],
        answer: "By virtualizing the list: lazily rendering only the visible viewport items and recycling views that scroll off-screen",
        explanation:
          "FlatList renders only items within the active render window, unmounting and recycling off-screen views to maintain low, steady memory usage.",
      },
    ],
  },

  "rn-ch5-l14": {
    overview:
      "Tuning FlatList parameters transforms a sluggish, jumpy scroll into a buttery 60/120 FPS experience. In this lesson, based on 'Mastering React Native', we cover `getItemLayout` (skipping dynamic measurement when items have fixed heights), `keyExtractor` performance, tuning `windowSize`, and `initialNumToRender`.",
    canDo:
      "Can skip layout measurement calculations using getItemLayout, configure windowSize and maxToRenderPerBatch, and eliminate blank spaces during fast fling scrolls.",
    teacherNote:
      "If your list items have a fixed, known height (e.g. 80px), ALWAYS provide `getItemLayout={(data, index) => ({ length: 80, offset: 80 * index, index })}`! This allows FlatList to completely bypass asynchronous native layout measurement, enabling instant scroll-to-index and silky smooth 120 FPS scrolling.",
    sections: [
      {
        title: "1. The getItemLayout Optimization",
        description: "Bypassing asynchronous native layout calculation:",
        table: {
          headers: ["Measurement Mode", "How FlatList Operates", "Performance Impact"],
          rows: [
            ["Default (Without getItemLayout)", "FlatList must asynchronously measure each row's height as it renders into view.", "Causes scroll jumps and blank spaces during fast scrolling."],
            ["Optimized (With getItemLayout)", "Developer specifies row height; FlatList computes all offsets mathematically instantly.", "Zero layout calculation lag; instant scrollToIndex jumps."],
          ],
        },
      },
      {
        title: "2. FlatList Tuning Props",
        description: "Balancing memory vs fast scroll rendering:",
        items: [
          {
            term: "windowSize (Default: 21)",
            meaning: "Measurement in viewports of the render window (e.g. 5 = 2 above, 1 visible, 2 below)",
            example: "Lower to 5 or 7 on memory-constrained devices to save RAM.",
          },
          {
            term: "initialNumToRender",
            meaning: "Number of items to render in the initial batch on mount",
            example: "Set exactly to the number of items that fit on screen (e.g. 8) to optimize time-to-interactive.",
          },
        ],
      },
    ],
    practice: [
      {
        question: "When should you provide `getItemLayout` to a `<FlatList>`?",
        options: [
          "Only when using Expo",
          "Whenever list items have a known, fixed height or width, allowing FlatList to compute scroll offsets instantly without measuring",
          "When the list contains fewer than 3 items",
          "To translate the list into another language",
        ],
        answer: "Whenever list items have a known, fixed height or width, allowing FlatList to compute scroll offsets instantly without measuring",
        explanation:
          "Providing getItemLayout tells FlatList the exact pixel dimensions of each item, skipping costly async layout measurements.",
      },
      {
        question: "What does the `initialNumToRender` prop control in a FlatList?",
        options: [
          "The maximum number of items allowed in the database",
          "The number of items to render on the very first mount pass, ensuring fast initial screen display",
          "The font size of the first item",
          "The number of columns",
        ],
        answer: "The number of items to render on the very first mount pass, ensuring fast initial screen display",
        explanation:
          "initialNumToRender defines how many items render immediately on mount so the user sees content instantly without waiting for the full list buffer.",
      },
    ],
  },

  "rn-ch5-l15": {
    overview:
      "Modern mobile feeds require grouped sections, pull-to-refresh gestures, and infinite scroll pagination. In this lesson, we cover `<SectionList>` for grouped contact lists or calendar schedules, integrating `<RefreshControl>` for native pull-to-refresh spinners, and implementing infinite scrolling with `onEndReached` and `onEndReachedThreshold`.",
    canDo:
      "Can organize categorized data with SectionList, implement native pull-to-refresh with RefreshControl, and build infinite pagination feeds.",
    teacherNote:
      "In infinite scrolling, always use a loading guard boolean inside `onEndReached`! If `loading` is already true, return immediately, or multiple fast scroll events will trigger duplicate network requests for the same page of data.",
    sections: [
      {
        title: "1. SectionList vs FlatList",
        description: "Grouped headers with sticky scrolling:",
        table: {
          headers: ["Feature", "FlatList", "SectionList"],
          rows: [
            ["Data Structure", "Flat array: `data={[item1, item2, ...]}`", "Grouped array: `sections={[{ title: 'A', data: [...] }, ...]}`"],
            ["Section Headers", "Not supported natively", "Renders sticky native headers (`renderSectionHeader={...}`)"],
            ["Sticky Headers", "Optional stickyHeaderIndices", "Built-in stickySectionHeadersEnabled by default"],
          ],
        },
      },
      {
        title: "2. Infinite Scroll with onEndReached",
        description: "Loading subsequent pages seamlessly:",
        items: [
          {
            term: "Pagination Trigger Pattern",
            meaning: "Fires when user scrolls within threshold distance from the bottom",
            example: "<FlatList\n  data={items}\n  onEndReachedThreshold={0.5} // Trigger when halfway from bottom\n  onEndReached={() => {\n    if (!loading && hasMore) fetchNextPage();\n  }}\n  ListFooterComponent={loading ? <ActivityIndicator /> : null}\n  refreshControl={\n    <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />\n  }\n/>",
          },
        ],
      },
    ],
    practice: [
      {
        question: "Which component should you use to render grouped data with sticky letter headers (like a Contacts directory)?",
        options: ["ScrollView", "FlatList", "SectionList", "GroupView"],
        answer: "SectionList",
        explanation:
          "SectionList is designed specifically for nested, categorized sections, rendering sticky headers above each grouped data array.",
      },
      {
        question: "What does `onEndReachedThreshold={0.5}` specify on a FlatList?",
        options: [
          "It triggers the end-reached callback when the scroll position is within half a visible screen length from the end of the content",
          "It loads 50% of the images",
          "It divides the list into two parts",
          "It delays scrolling by 0.5 seconds",
        ],
        answer: "It triggers the end-reached callback when the scroll position is within half a visible screen length from the end of the content",
        explanation:
          "onEndReachedThreshold defines the distance from the bottom (in visible viewport lengths) where onEndReached fires to load more data before the user hits the bottom.",
      },
    ],
  },
};
