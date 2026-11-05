
# SOPHWARE — Security Risk Intelligence Dashboard

A modern, responsive cybersecurity dashboard designed to bring security metrics, risk insights and vulnerability findings together in one clear, accessible interface.

**Live Demo:** [https://sophware-security.vercel.app/](https://sophware-security.vercel.app/)

**GitHub Repository:** [https://github.com/smdevdesigns/DataDashboard](https://github.com/smdevdesigns/DataDashboard)

---

## Overview

SOPHWARE is a cybersecurity dashboard concept built to demonstrate how security-related data can be presented through an intuitive and visually engaging interface.

The dashboard brings together key security indicators, analytics and findings to provide a central overview of an organisation's security posture. It focuses on making complex information easier to understand through visualisations, clear metrics and structured data presentation.

The project was developed with a focus on responsive design, accessibility, performance and a consistent visual experience across desktop and mobile devices.

## Screenshots

### Dashboard Overview
<img width="1345" height="603" alt="image" src="https://github.com/user-attachments/assets/20daeb8b-8e92-472b-b0e1-a7a0ccaa61c6" />
<img width="1321" height="589" alt="image" src="https://github.com/user-attachments/assets/328ffe0d-dcdf-4b72-9130-7f37d668e401" />
<img width="1341" height="608" alt="image" src="https://github.com/user-attachments/assets/f39f4a92-1284-4bde-89f2-994313552265" />
<img width="1364" height="579" alt="image" src="https://github.com/user-attachments/assets/91574257-bbe4-4592-a6a7-c56cf8999815" />


### Security Analytics

<img width="1351" height="590" alt="image" src="https://github.com/user-attachments/assets/160fad8d-8869-43d9-99d4-8750cf6bf130" />


### Security Findings

<img width="1341" height="608" alt="image" src="https://github.com/user-attachments/assets/f39f4a92-1284-4bde-89f2-994313552265" />
<img width="1338" height="565" alt="image" src="https://github.com/user-attachments/assets/88cc4960-bd04-4e3d-b318-172df77667f7" />


### Mobile Responsive View

<img width="286" height="511" alt="image" src="https://github.com/user-attachments/assets/f82354a5-01a3-4c3d-845f-359adc6f32ef" />
<img width="286" height="514" alt="image" src="https://github.com/user-attachments/assets/e00d31cd-bceb-4986-a150-7937b863b763" />
<img width="289" height="514" alt="image" src="https://github.com/user-attachments/assets/0073c5f2-abb9-42ac-9807-d93e9f38990c" />
<img width="291" height="511" alt="image" src="https://github.com/user-attachments/assets/13ba6e7d-5309-4fef-bbea-df8653c5fe21" />
<img width="287" height="515" alt="image" src="https://github.com/user-attachments/assets/490aacc8-4fe2-4681-8745-f5c8f443bc9e" />
<img width="288" height="514" alt="image" src="https://github.com/user-attachments/assets/d3869919-a9b5-455d-872c-028771d8dfa3" />







---

## Features

- **Security Overview** — A centralised dashboard displaying key security metrics and indicators.
- **Security Analytics** — Visual representations of security trends and severity distributions.
- **Risk & Findings Management** — A structured findings table to highlight security issues and areas requiring attention.
- **Collapsible Dashboard Sections** — Expandable and collapsible sections to organise dashboard content.
- **Responsive Interface** — Layouts designed to adapt to desktop, tablet and mobile screen sizes.
- **Interactive Navigation** — Sidebar navigation with a mobile-friendly menu.
- **Dedicated Pages** — Separate Controls and Reports sections.
- **Accessible Design** — Attention to readable contrast, clear navigation and accessible interface elements.

## Technology Stack

| Technology | Purpose |
|---|---|
| React | Component-based user interface |
| TypeScript | Type safety and maintainable code |
| Vite | Development server and build tooling |
| CSS3 | Styling, layouts and responsive design |
| Apache ECharts | Interactive data visualisations |
| Lucide React | Interface icons |
| Vercel | Deployment and hosting |
| Git & GitHub | Version control and source code management |

## Design & User Experience

The interface uses a distinctive visual theme built around:

- Deep royal blue backgrounds.
- Golden yellow headings and key values.
- Vibrant orange accent colours.
- Clear visual hierarchy and consistent spacing.
- Responsive layouts for different screen sizes.

The aim was to create a dashboard that feels modern and professional while keeping important security information easy to scan and interpret.

## Performance & Quality

The project was tested using Google Lighthouse, achieving the following scores:

| Lighthouse Category | Score |
|---|---:|
| Performance | 100 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

<img width="301" height="107" alt="image" src="https://github.com/user-attachments/assets/bc21847b-8c80-4fe1-a2a5-2f1e5220f5ba" />


*Scores reflect the Lighthouse audit results captured during project testing. Results may vary depending on the testing environment.*

## Getting Started

To run SOPHWARE locally, follow these steps.

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (included with Node.js)
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/smdevdesigns/DataDashboard.git
   ```

2. Navigate into the application directory:

   ```bash
   cd DataDashboard/data-dashboard
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal (Vite typically uses `http://localhost:5173`).

### Production Build

Create an optimised production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```text
data-dashboard/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── screenshots/
│   ├── dashboard-overview.png
│   ├── security-analytics.png
│   ├── security-findings.png
│   └── mobile-dashboard.png
├── src/
│   ├── components/
│   │   ├── Charts.tsx
│   │   ├── CollapsibleSection.tsx
│   │   ├── FindingsTable.tsx
│   │   ├── MetricCard.tsx
│   │   └── Sidebar.tsx
│   ├── data/
│   │   └── mockData.ts
│   ├── pages/
│   │   ├── Controls.tsx
│   │   └── Reports.tsx
│   ├── styles/
│   │   ├── components.css
│   │   ├── global.css
│   │   ├── index.css
│   │   ├── layout.css
│   │   └── tokens.css
│   ├── App.tsx
│   └── main.tsx
├── .gitignore
├── README.md
├── package.json
├── package-lock.json
├── tsconfig.json
└── vite.config.ts
```

## Deployment

SOPHWARE is deployed using Vercel.

Visit the live application:

**[https://sophware-security.vercel.app/](https://sophware-security.vercel.app/)**

## Project Purpose

This project was created as a practical demonstration of frontend development skills, combining React, TypeScript, data visualisation and responsive CSS to build a polished cybersecurity dashboard experience.

It explores how a data-heavy interface can be structured to make information more accessible, meaningful and easier to navigate.

---
## Author

**Sophia McGee**  
© 2026 Sophia McGee. All rights reserved.

[GitHub](https://github.com/smdevdesigns) · [Live Project](https://sophware-security.vercel.app/)

**Built with React, TypeScript and a focus on performance, accessibility and user experience.**
