# My Project

A full-stack application using SvelteKit, Hono, and MySQL.

## Tech Stack

### Frontend
- SvelteKit
- Vite
- TypeScript

### Backend
- Hono (Web Framework)
- Drizzle ORM
- Zod (Validation)
- MySQL
- Bun Runtime

## Getting Started

1. Install dependencies:
```bash
# Frontend
cd frontend && bun install

# Backend
cd backend && bun install
```

2. Set up the database:
```bash
# Start the database
docker-compose up db -d

# Run migrations
cd backend && bun run db:migrate
```

3. Start the development servers:
```bash
# Start all services
docker-compose up

# Or start individually:
# Frontend
cd frontend && bun run dev

# Backend
cd backend && bun run dev
```

## Development

- Frontend runs on: http://localhost:3000
- Backend runs on: http://localhost:8000
- MySQL runs on: localhost:3306

## Docker

To build and run all services:
```bash
docker-compose up --build
```

## Project Structure

```
myproject/
├── frontend/  # SvelteKit application
├── backend/   # Hono + Drizzle API
└── docker-compose.yml
```

```
myproject/
├── README.md
├── docker-compose.yml
├── frontend/
│   ├── .gitignore
│   ├── package.json
│   ├── svelte.config.js
│   ├── vite.config.js
│   ├── tsconfig.json
│   └── src/
│       ├── routes/
│       │   └── +page.svelte
│       ├── lib/
│       └── app.d.ts
└── backend/
    ├── .gitignore
    ├── package.json
    ├── tsconfig.json
    ├── drizzle.config.ts
    └── src/
        ├── index.ts
        ├── db/
        │   ├── schema.ts
        │   └── migrate.ts
        ├── routes/
        │   └── index.ts
        └── middleware/
            └── validate.ts
```