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