# Swajay Business Solutions — Frontend

The official website for **Swajay Business Solutions**, built as a modern, animated React + TypeScript single-page application. The site showcases the company's services in AI automation, mortgage technology, BFSI/healthcare, and enterprise consulting.

---

## 🚀 Tech Stack

| Tool | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI framework |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Vite 7](https://vitejs.dev/) | Build tool & dev server |
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations & page transitions |
| [React Router v7](https://reactrouter.com/) | Client-side routing |

---

## 📁 Project Structure

```
swajay-frontend/
├── public/                 # Static assets (logo, favicon)
├── src/
│   ├── assets/             # Images (team photos, etc.)
│   ├── components/         # Shared/reusable components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── PageHero.tsx
│   │   ├── Breadcrumbs.tsx
│   │   ├── CoreValues.tsx
│   │   ├── CTASection.tsx
│   │   └── WhyChooseUs.tsx
│   ├── pages/              # Route-level page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── AI.tsx
│   │   ├── Solutions.tsx
│   │   ├── CaseStudies.tsx
│   │   ├── Contact.tsx
│   │   ├── Blog.tsx
│   │   ├── PrivacyPolicy.tsx
│   │   └── TermsOfService.tsx
│   ├── App.tsx             # Root component with routing
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

---

## 🗺️ Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | Home | Landing page with hero, value props, and CTA |
| `/about` | About | Company mission, vision, stats, and leadership |
| `/services` | Services | Mortgage & technology service offerings (tabbed) |
| `/ai` | AI | AI & automation capabilities |
| `/solutions` | Solutions | Industry-specific solutions |
| `/case-studies` | Case Studies | Client success stories |
| `/contact` | Contact | Contact form and office details |
| `/blog` | Blog | Articles and insights |
| `/privacy-policy` | Privacy Policy | Legal privacy information |
| `/terms-of-service` | Terms of Service | Legal terms |

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (bundled with Node.js)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd "Swajay Solutions/swajay-frontend"

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Opens the app at `http://localhost:5173` with hot module replacement.

### Build for Production

```bash
npm run build
```

Output is placed in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## ✨ Key Features

- **Animated page transitions** — smooth fade/slide animations on every route change via Framer Motion's `AnimatePresence`
- **Scroll-to-top on navigation** — automatically scrolls to the top on page change (respects hash anchors)
- **Dynamic breadcrumbs** — context-aware breadcrumb trail in every page's hero section
- **Responsive design** — mobile-first layout using Tailwind CSS
- **Animated counters** — viewport-triggered count-up stats using Framer Motion
- **3D flip cards** — interactive team/leadership cards with CSS 3D transform on hover
- **Tabbed services** — deep-linkable tabbed interface for Mortgage and Technology service categories
- **Legal pages** — Privacy Policy and Terms of Service pages

---

## 🏢 About Swajay

Swajay Business Solutions delivers intelligent automation and AI solutions to organizations in the **Mortgage**, **BFSI/Healthcare**, **Commerce**, and **Legal** domains. The company's mission is to make advanced AI solutions useful and affordable—shipped quickly, run responsibly, and scaled with customers.

---

## 📝 License

All rights reserved. © Swajay Business Solutions.
