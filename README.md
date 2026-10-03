# OpenProject AI Copilot — PM Dashboard

A modern, high-performance Project Manager Dashboard for **OpenProject AI Copilot**, built strictly with **Next.js (App Router), React 19, TypeScript, and Tailwind CSS**.

The visual design is derived with 1:1 fidelity from [Figma Node 1:135](https://www.figma.com/design/X4QQe4pyvqwYYieBvXTgEk/OpenProject-AI-Copilot-%25E2%2580%2594-PM-Dashboard?node-id=1-135).

---

## 🎯 Core Architectural Principles

1. **OpenProject is the System of Record**: All canonical project data, work packages, milestones, and relations reside in OpenProject.
2. **AI-Assisted Intelligence**: AI generates grounded daily narratives, scheduling recommendations, and dependency impact analyses.
3. **Strict Zero-Automated-Writes Guardrail**: AI never automatically writes changes to OpenProject.
4. **Explicit PM Confirmation**: Every schedule creation, deadline shift, or status transition requires explicit PM diff inspection and approval before write-back.

---

## ✨ Features & Component Breakdown

- **Midnight Navy Sidebar (`#0B1528`)**:
  - Logo lockup with cyan badge (`#06B6D4`), "Project Copilot", and "AI-assisted execution".
  - Active `Overview` navigation tab (`#162544` fill + cyan accent indicator).
  - Connected sync status indicator (`● Connected · Last sync 2 min ago`).
  - Authorized PM user profile avatar (`K · Project Manager`).
- **Header Section**:
  - Breadcrumb navigation (`Workspace / Overview`).
  - Title and delivery health subtitle.
  - Multi-project switcher dropdown.
  - Primary CTA button `+ Ask Copilot` (`#0284C7`).
- **4 Key Performance Indicator (KPI) Metric Cards**:
  - **OVERDUE TASKS**: Count `12` with `● Needs review` (Red).
  - **PROJECT PROGRESS**: `72%` with `● Across active work` (Emerald).
  - **BLOCKED ITEMS**: Count `4` with `● 2 need attention` (Amber).
  - **UPCOMING MILESTONES**: Count `7` with `● Next 14 days` (Blue).
- **Middle Intelligence Row**:
  - **AI Daily Status Summary Card**: Grounded narrative highlighting delivery velocity and critical path bottlenecks, with a `View work packages` drawer trigger.
  - **Project Health Card**: AMBER status pill, 72% progress bar, `12 overdue · 4 blocked · 7 upcoming` breakdown, and stability indicator.
- **Overdue Exceptions Table**:
  - Comprehensive table with columns: `TASK`, `OWNER`, `AGE`, `STATUS`, `PROGRESS`, and `REVIEW`.
  - Interactive `[Review]` action triggers for overdue work packages (`Payment API Integration`, `UAT test data`, `Auth middleware`, `Dashboard QA`).
- **Bottom AI Copilot Dock**:
  - Accent-bordered dock (`border-l-4 border-cyan-500`) with quick prompt input.
  - System grounding disclaimer:
    `OpenProject remains the system of record · AI recommendations require explicit confirmation before write-back.`
- **Interactive Modals & Drawers**:
  - **RescheduleImpactModal**: Side-by-side visual diff (Current vs AI Proposed State) with explicit `[Confirm & Write Back]` button.
  - **ScheduleReviewModal**: Full project scope milestone decomposition with `[Approve & Push to OpenProject]`.
  - **WorkPackagesDrawer**: Slide-in panel displaying work packages completed today and active exceptions.

---

## 🚀 Getting Started

### Prerequisites
- Node.js `v20+` or `v24+`
- npm `10+` or `11+`

### Installation
```bash
# Clone the repository
git clone -b dev https://github.com/Karunakaran2006-gct/Frontend.git
cd Frontend

# Install dependencies
npm install

# Start the local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Production
```bash
# Build the production bundle
npm run build

# Start the production server
npm start
```

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16+ (App Router)
- **UI & Core**: React 19, TypeScript
- **Styling**: Tailwind CSS v4 with custom design tokens
- **Icons**: Lucide React
- **State Management**: Zustand
- **Class Utilities**: `clsx`, `tailwind-merge`
