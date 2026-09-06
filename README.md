# Instructor 🎓

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Turborepo](https://img.shields.io/badge/Monorepo-Turborepo-ef4444.svg)](https://turbo.build/repo)
[![pnpm](https://img.shields.io/badge/Package%20Manager-pnpm-orange.svg)](https://pnpm.io/)
[![Next.js](https://img.shields.io/badge/Next.js-16-black.svg)](https://nextjs.org/)
[![React Native](https://img.shields.io/badge/Expo-SDK%2057-000020.svg)](https://expo.dev/)
[![Express](https://img.shields.io/badge/Express-v5-brightgreen.svg)](https://expressjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-v7-3178c6.svg)](https://www.typescriptlang.org/)

**Instructor** is an end-to-end, cross-platform interactive e-learning ecosystem built with modern web and mobile technologies. Designed to deliver high-quality programming, language, and technology courses, Instructor powers interactive lessons, rich blogs, audio/speech learning, and structured curriculum tracking across Web, iOS, Android, and desktop.

---

## 🌟 Key Highlights & Features

- 📚 **Comprehensive Course Catalog**: Structured curricula spanning programming languages, modern frameworks, prompt engineering, and spoken languages.
  - **German Language**: Multi-level progression (A1, A2, B1, B2, C1/C2) with vocabulary, grammar, and pronunciation.
  - **English Courses**: Practical and conversational English language modules.
  - **Programming & Web**: JavaScript, Python, Java, HTML, CSS, React, and React Native.
  - **AI & Emerging Tech**: Prompt Engineering & AI integration fundamentals.
- 💻 **Modern Web Experience (`apps/web`)**:
  - Built with **Next.js 16** (App Router) and **React 19**.
  - Styled with **Tailwind CSS v4** and Lucide icons.
  - Dynamic course viewer supporting nested slugs (`/courses/[id]/[...slug]`), lesson navigation, and reading progress.
  - Interactive blog feed and educational articles (`/blogs`).
- 📱 **Native Mobile App (`apps/mobile`)**:
  - Powered by **React Native 0.86** and **Expo SDK 57** with **Expo Router**.
  - Smooth 60/120fps animations powered by **React Native Reanimated 4** and **Gesture Handler**.
  - High-performance lists using **Shopify FlashList**.
  - Native features: Text-to-Speech (`expo-speech`), Mesh Gradients, Glassmorphism, Offline Storage (`expo-sqlite` & `@react-native-async-storage/async-storage`).
- ⚡ **High-Performance REST API (`apps/api`)**:
  - **Express 5** backend written in **TypeScript**.
  - Production-ready observability with **Winston** and **Morgan** logging.
  - Standardized responses and robust error handling via `ApiResponse` and `ApiError` utilities.
  - Modular routing for courses, lessons, blogs, and system health checks.
- 📦 **Monorepo Architecture**:
  - Orchestrated with **Turborepo** and **pnpm** workspaces for lightning-fast incremental builds and caching.
  - Shared UI library (`@repo/ui`) and unified TypeScript and ESLint standards.

---

## 🏗️ Repository Architecture

```text
instructor/
├── apps/
│   ├── api/                  # Express 5 REST API backend (TypeScript)
│   │   ├── src/
│   │   │   ├── controllers/  # Request handlers (courses, blogs, health)
│   │   │   ├── data/         # Curriculum datasets & structured lesson content
│   │   │   ├── logger/       # Winston and Morgan logging configurations
│   │   │   ├── middlewares/  # Error handling and validation middlewares
│   │   │   ├── routes/       # API endpoints (/api/v1/courses, /api/v1/blogs, etc.)
│   │   │   └── utils/        # ApiError, ApiResponse, and asyncHandler utilities
│   ├── docs/                 # Documentation platform built with Next.js
│   ├── mobile/               # Cross-platform mobile app (React Native & Expo SDK 57)
│   │   ├── app/              # Expo Router file-based screens and tabs
│   │   └── components/       # Native UI components & widgets
│   └── web/                  # Web application (Next.js 16, React 19, Tailwind CSS v4)
│       └── app/              # Landing page, courses catalog, lesson viewer, blogs
├── packages/
│   ├── eslint-config/        # Monorepo-wide shared ESLint presets
│   ├── typescript-config/    # Shared tsconfig configurations
│   └── ui/                   # Shared React component library
├── package.json              # Monorepo root scripts & dev dependencies
├── pnpm-workspace.yaml       # pnpm workspace definition
└── turbo.json                # Turborepo task pipeline configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your development machine:

- [Node.js](https://nodejs.org/) `>= 24.0.0`
- [pnpm](https://pnpm.io/) `>= 11.0.0` (Install with `npm install -g pnpm` or `corepack enable pnpm`)
- [Git](https://git-scm.com/)
- *(Optional for mobile development)*: [Expo Go](https://expo.dev/go) or Android Studio / Xcode

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ichshakib/instructor.git
   cd instructor
   ```

2. **Install all dependencies**:
   ```bash
   pnpm install
   ```

3. **Start the development servers**:
   ```bash
   pnpm dev
   ```
   Turborepo will concurrently start development servers across all workspace apps:
   - **Web App**: [http://localhost:3000](http://localhost:3000)
   - **API Server**: [http://localhost:5000](http://localhost:5000) (or configured port)
   - **Mobile**: Expo CLI with QR code for device testing

---

## 🛠️ Available Scripts

Run any script across the entire workspace from the root:

| Command | Action |
| :--- | :--- |
| `pnpm dev` | Starts dev servers for all apps concurrently |
| `pnpm build` | Builds all apps and packages for production |
| `pnpm lint` | Lints all packages with ESLint |
| `pnpm format` | Formats the codebase using Prettier |
| `pnpm check-types` | Performs TypeScript type checking across all packages |

### Running Individual Applications

Use `--filter` to target specific packages:

```bash
# Web application
pnpm --filter web dev

# Backend API
pnpm --filter api dev

# Mobile application
pnpm --filter mobile start
pnpm --filter mobile android
pnpm --filter mobile ios

# Documentation
pnpm --filter docs dev
```

---

## 📖 API Documentation & Endpoints

The API is structured around RESTful principles:

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/v1/health` | Health check endpoint |
| `GET` | `/api/v1/courses` | Retrieve list of all available courses |
| `GET` | `/api/v1/courses/:id` | Retrieve course details and lessons by ID |
| `GET` | `/api/v1/blogs` | Retrieve educational articles and blog posts |
| `GET` | `/api/v1/blogs/:id` | Retrieve single blog post by ID |

---

## 🤝 Contributing

We welcome contributions from the community! Please see our:
- [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines, branch conventions, and PR workflow.
- [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for community standards.

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.
