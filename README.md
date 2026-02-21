# Learning Support Provider Directory

A responsive React application that allows parents to browse and find learning support providers for children with learning difficulties across the UAE.
---

## Live Demo

> https://project-directory-seven.vercel.app

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI library |
| Vite | Build tool & dev server |
| Tailwind CSS v4 | Styling |
| React Router v6 | Client-side routing |
| Lucide React | Icons |

---

## Features

- Browse a directory of 7 learning support providers
- Search and filter providers by name or specialization in real time
- View detailed information for each provider
- Simulated async API data fetching with loading skeletons
- Error handling for invalid provider IDs
- Fully responsive across mobile, tablet, and desktop
- CSS custom properties for consistent theming

---

## Project Structure
```
src/
├── components/
│   ├── Navbar.jsx           # Sticky top navigation bar
│   ├── ProviderCard.jsx     # Provider summary card
│   ├── SearchBar.jsx        # Search/filter input
│   ├── RatingStars.jsx      # Reusable star rating display
│   ├── LoadingSkeleton.jsx  # Skeleton loader for loading state
│   └── ErrorMessage.jsx     # Error display with retry option
├── pages/
│   ├── ProviderListPage.jsx    # /providers — listing page
│   └── ProviderDetailPage.jsx  # /providers/:id — detail page
├── hooks/
│   └── useProviders.js      # Custom hooks for data fetching simulation
├── data/
│   └── providers.json       # Dummy provider data
├── App.jsx                  # Root component with routing setup
├── main.jsx                 # React DOM entry point
└── index.css                # Global styles and CSS variables
```

---

## Getting Started

### Prerequisites

- Node.js v18 or higher
- npm v9 or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/provider-directory.git
cd provider-directory
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

---

## Design Decisions

- **Bottom-up component development** — Built reusable components first, then composed them into pages for clean separation of concerns
- **Custom hooks** — `useProviders` and `useProviderById` simulate real async API calls with loading and error states
- **useMemo for filtering** — Search filter uses `useMemo` to avoid unnecessary recomputation on every render
- **Error boundaries** — Invalid provider IDs show a friendly error state instead of crashing

---

## Author

Nihal Gavandi
