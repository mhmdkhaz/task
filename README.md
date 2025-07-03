# Rewards Management Dashboard
A high-performance dashboard for managing user rewards programs, built with modern web technologies and architectural best practices.

## ✨ Key Features

- **Rewards Tracking System**
  - Interactive data visualizations (Chart.js/Recharts)
  - Tier-based progression system
  - Points redemption workflow

- **Benefits Management**
  - Real-time claim status
  - Benefit expiration handling
  - Category-based filtering

- **Enterprise-Grade UI**
  - Adaptive color schemes (dark/light/system)
  - Responsive layout (mobile-first)
  - Optimized rendering (memoization/virtualization)
  - Micro-interactions (Framer Motion)

## 🛠 Tech Stack

| Category          | Technologies                          |
|-------------------|---------------------------------------|
| Core              | React 18, TypeScript 5, Vite 4       |
| Styling           | Tailwind CSS, ShadCN UI, CSS Modules  |
| State Management  | Zustand, React Query 5                |
| API               | Axios, MSW, Zod Schema Validation     |
| Testing           | Jest, React Testing Library, Cypress  |
| DevOps            | Docker, GitHub Actions, Vercel        |

## 🏗 Project Structure

```bash
src/
├── api/                  # API services and types
├── assets/               # Static assets
├── components/           # Reusable components
│   ├── charts/           # Data visualization
│   ├── rewards/          # Reward-specific UI
│   └── ui/               # Generic UI primitives
├── hooks/                # Custom hooks
├── layouts/              # App layouts
├── pages/                # Route-based pages
├── stores/               # State management
├── styles/               # Global styles
├── types/                # Type definitions
├── utils/                # Utility functions
└── mocks/                # API mocking