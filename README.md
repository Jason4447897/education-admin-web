# Education Administration Management System

A modern administrative web application built with **Vue 3** and **TypeScript**. The project demonstrates frontend architecture for authentication, role-based access control, dynamic routing, API integration, centralized state management, and dashboard visualization.

> **Open-source attribution:** This project was developed and customized using the open-source **Art Design Pro** admin template as a foundation. The original MIT license is retained in this repository. Upstream project: https://github.com/Daymychen/art-design-pro

## Highlights

- User authentication and account management
- Role-based access control (RBAC)
- User, role, and menu management
- Dynamic routes and permission validation
- Axios-based API integration
- Pinia state management
- ECharts dashboard visualizations
- Responsive UI with Element Plus and Tailwind CSS
- Internationalization with Vue I18n
- Light/dark theme support

## Tech Stack

- Vue 3
- TypeScript
- Vite
- Element Plus
- Pinia
- Vue Router
- Axios
- ECharts
- Tailwind CSS
- Vue I18n

## Project Structure

```text
src/
├── api/          # API modules
├── components/   # Reusable UI components
├── router/       # Static/dynamic routing and permissions
├── store/        # Pinia stores
├── views/        # Application pages
├── locales/      # Internationalization resources
└── utils/        # Shared utilities
```

## Local Setup

### Requirements

- Node.js >= 20.19
- pnpm >= 8.8

### Install and run

```bash
pnpm install
cp .env.example .env
pnpm dev
```

The included `.env.example` contains only public placeholder values. Replace the API endpoint with your own backend or mock service if needed.

## Build

```bash
pnpm build
```

## Security / Privacy

- No production API keys, access tokens, database credentials, or private user data are included.
- Environment files are ignored by Git; only `.env.example` is committed.
- All visible account details in the repository are demo data.
- Variables prefixed with `VITE_` are browser-visible and should never contain real secrets.

## What This Repository Demonstrates

This repository is intended as a portfolio project demonstrating work with modern TypeScript/Vue application architecture, including permissions, routing, state management, API-driven interfaces, and dashboard components.

## License and Attribution

The upstream Art Design Pro project is licensed under the MIT License. The original `LICENSE` file is preserved. See the upstream repository for its original source and documentation:

- https://github.com/Daymychen/art-design-pro
- https://www.artd.pro
