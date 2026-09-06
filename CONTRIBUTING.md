# Contributing to Instructor

Thank you for your interest in contributing to **Instructor**! We welcome contributions from developers, educators, designers, and testers of all skill levels.

This guide provides instructions on how to set up the project locally, the monorepo architecture, our coding standards, and how to submit a pull request.

---

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Monorepo Architecture](#monorepo-architecture)
3. [Prerequisites](#prerequisites)
4. [Getting Started](#getting-started)
5. [Development Commands](#development-commands)
6. [Working with Specific Apps](#working-with-specific-apps)
7. [Branching & Commit Guidelines](#branching--commit-guidelines)
8. [Submitting a Pull Request](#submitting-a-pull-request)
9. [Reporting Bugs & Requesting Features](#reporting-bugs--requesting-features)

---

## Code of Conduct

All contributors are expected to adhere to our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it before participating in discussions or submitting contributions.

---

## Monorepo Architecture

The repository is structured as a **Turborepo** monorepo managed with **pnpm**:

```text
instructor/
├── apps/
│   ├── api/       # Express 5 REST API with TypeScript, Winston & Morgan logging
│   ├── docs/      # Documentation platform powered by Next.js
│   ├── mobile/    # Cross-platform mobile app built with React Native & Expo SDK 57
│   └── web/       # Web application built with Next.js 16, React 19, & Tailwind CSS v4
├── packages/
│   ├── eslint-config/      # Shared ESLint configuration presets
│   ├── typescript-config/  # Shared tsconfig configurations
│   └── ui/                 # Shared React component library
├── package.json   # Root workspace scripts and dev dependencies
├── pnpm-workspace.yaml # Workspace definitions
└── turbo.json     # Turborepo task pipeline configuration
```

---

## Prerequisites

Before contributing, ensure you have the following installed on your machine:

- **Node.js**: `v24.x` or higher
- **pnpm**: `v11.x` or higher (`corepack enable pnpm` or `npm install -g pnpm`)
- **Git**: Latest version
- *(For Mobile Development)*: **Expo Go** app on your physical device, or an iOS Simulator / Android Emulator configured.

---

## Getting Started

1. **Fork the repository** on GitHub:
   Visit [https://github.com/ichshakib/instructor](https://github.com/ichshakib/instructor) and click **Fork**.

2. **Clone your fork locally**:
   ```bash
   git clone https://github.com/<your-username>/instructor.git
   cd instructor
   ```

3. **Install dependencies**:
   ```bash
   pnpm install
   ```

4. **Start the development servers**:
   ```bash
   pnpm dev
   ```
   This will run `turbo run dev`, spinning up development environments for the configured apps concurrently.

---

## Development Commands

All tasks can be run from the root directory using Turborepo:

| Command | Description |
| :--- | :--- |
| `pnpm dev` | Starts all apps in development mode with live reloading |
| `pnpm build` | Builds all apps and packages for production |
| `pnpm lint` | Runs ESLint across all workspaces |
| `pnpm format` | Formats code across the monorepo with Prettier |
| `pnpm check-types` | Validates TypeScript types across all workspaces |

---

## Working with Specific Apps

You can filter commands to run tasks only for specific apps or packages:

### Web App (`apps/web`)
```bash
pnpm --filter web dev        # Starts Next.js dev server on http://localhost:3000
pnpm --filter web build      # Creates production build
pnpm --filter web lint       # Lints web codebase
```

### API Service (`apps/api`)
```bash
pnpm --filter api dev        # Runs TypeScript compiler watch and starts Express server
pnpm --filter api build      # Compiles TypeScript into dist/
pnpm --filter api start      # Runs compiled server from dist/
```

### Mobile App (`apps/mobile`)
```bash
pnpm --filter mobile start   # Launches Expo development server
pnpm --filter mobile android # Runs on Android emulator or connected device
pnpm --filter mobile ios     # Runs on iOS simulator (macOS only)
pnpm --filter mobile web     # Runs Expo app in web mode
```

### Docs App (`apps/docs`)
```bash
pnpm --filter docs dev       # Starts Docs app dev server
```

---

## Branching & Commit Guidelines

### Branch Naming
Create descriptive branch names using standard conventions:
- `feat/feature-name` — for new features or enhancements
- `fix/bug-fix-name` — for bug fixes
- `docs/documentation-update` — for documentation changes
- `refactor/code-improvement` — for refactoring without changing functionality
- `test/test-name` — for adding or updating tests

### Commit Messages
We encourage [Conventional Commits](https://www.conventionalcommits.org/):
```text
feat(web): add course progress indicator
fix(api): handle missing lesson slug gracefully
docs: update monorepo setup instructions in contributing guide
chore(deps): upgrade dependencies
```

---

## Submitting a Pull Request

1. **Verify your code passes all checks**:
   ```bash
   pnpm check-types
   pnpm lint
   pnpm format
   pnpm build
   ```
2. **Commit your changes**:
   ```bash
   git add .
   git commit -m "feat(scope): concise description of changes"
   ```
3. **Push to your fork**:
   ```bash
   git push origin feat/your-feature-name
   ```
4. **Open a Pull Request**:
   - Go to your repository on GitHub and click **Compare & pull request**.
   - Provide a clear title and description explaining what changes you made and why.
   - Link any related issues (e.g. `Fixes #12`).
   - A maintainer will review your pull request shortly!

---

## Reporting Bugs & Requesting Features

- **Bug Reports**: Open an issue detailing steps to reproduce, expected vs. actual behavior, and environment details.
- **Feature Requests**: Describe the problem you're trying to solve and your suggested feature or improvement.

Thank you for helping make **Instructor** better!
