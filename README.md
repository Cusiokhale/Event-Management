# Event Management Website

## Team Name
Ace Stack

## Project Team
- Nkechi Echeta
- Cordelia Usiokhale

## Project General Description
This project is an Event Management website for conferences, weddings, and school events that help users view event details, register to attend, and see event schedules.

## High-Level User Stories
- As a user, I want to view event details (date, time, location, and description), so that I can decide if I want to attend.
- As a user, I want to register for an event, so that I can reserve my spot and receive confirmation.
- As a user, I want to view the event schedule, so that I can plan which sessions or activities to attend.
- As a user, I want to view the available planning services and starting prices, so that I can choose the level of support I need.

## Implemented Components

### EventsCard
- Displays a list of upcoming events
- Shows event name, date, and location
- Event data is rendered iteratively using  .map()

### Services
- Displays a list of event management services
- Shows service name, description, and starting price
- Service data is rendered iteratively using `.map()`

### RSVP
- Allows users to submit event attendance details
- Stores RSVP entries using repository-based architecture
- Displays submitted RSVP entries dynamically

## Architecture Overview

This project follows a **hook → service → repository** architecture pattern.

Each resource is structured as:

Component → Hook → Service → Repository

### Services Resource (NE)
- src/components/pages/ServicesPage.tsx
- src/hooks/useServices.ts
- src/services/serviceService.ts
- src/repositories/serviceRepository.ts

Architecture document:
- docs/architecture-ne.md

### RSVP Resource (CU)
- src/components/pages/RsvpPage.tsx
- src/hooks/useRsvps.ts
- src/services/rsvpService.ts
- src/repositories/rsvpRepository.ts

Architecture document:
- docs/architecture-cu.md

This structure separates:
- UI rendering (components)
- State + orchestration (hooks)
- Business logic (services)
- Data access (repositories)

This design improves maintainability and makes backend integration easier in future modules.

## Team Setup Progress

### T.1: Clerk Authentication Setup
- Integrated Clerk for user authentication
- Enabled email-based login
- Implemented sign in and sign out functionality
- Secured frontend and backend routes using Clerk

### T.2: Vercel Deployment Setup
- Deployed frontend and backend applications using Vercel
- Connected both projects to the GitHub repository
- Configured automatic deployments from the `main` branch
- Ensured consistent behavior between local and production environments


## Local Setup
This project is a full-stack application with a React frontend, Node/Express backend, Clerk authentication, Prisma ORM, and a PostgreSQL database.
Follow the steps below to run the project locally.

### Prerequisites
Make sure you have the following installed:
- Node.js
- npm
- PostgreSQL
- Git

### 1. Clone the Repository

bash
git clone https://github.com/Cusiokhale/Event-Management.git
cd <your project folder>

### 2. Install Dependencies
Install dependencies for both frontend and backend.

#### Frontend
cd frontend
npm install

#### Backend
cd backend
npm install

### 3. Environment Variables
You must create .env files for both frontend and backend.

#### Frontend .env
Create a .env file in the frontend folder:

VITE_CLERK_PUBLISHABLE_KEY=pk_test_aGFybWxlc3MtZmluY2gtNzcuY2xlcmsuYWNjb3VudHMuZGV2JA
VITE_API_BASE_URL=http://localhost:3000

#### Backend .env
Create a .env file in the backend folder:

DATABASE_URL=postgresql://postgres:postgres@localhost:5433/event_management
CLERK_PUBLISHABLE_KEY=pk_test_aGFybWxlc3MtZmluY2gtNzcuY2xlcmsuYWNjb3VudHMuZGV2JA
CLERK_SECRET_KEY=sk_test_1WRSG5hjzaD4dPsFXju1ZMrhRWqM4x4wljVcRRrCF3
PORT=3000

### 4. Database Setup (Prisma)
From the backend folder, run:

npx prisma migrate dev
npx prisma generate

This will:
- Create database tables
- Sync schema
- Generate Prisma client

### 5. Run the Backend
cd backend
npm run dev

Backend runs on:
http://localhost:3000

### 6. Run the Frontend
cd frontend
npm run dev

Frontend runs on:
http://localhost:5173

### 7. Using the Application
- Open the frontend in your browser
- Sign up or log in using Clerk
- Add and remove services
- Data is stored per authenticated user

### Notes
- Ensure PostgreSQL is running before starting the backend
- Ensure your Clerk keys are valid
- Run Prisma migrations again if schema changes
- If something breaks, run npm install again