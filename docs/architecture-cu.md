# Architecture Layout (CU) — RSVP Resource

This document describes the RSVP implementation using the **hook → service → repository** architecture.

## Files (Cordelia’s contribution)

- Component: src/components/pages/RsvpPage.tsx
- Hook: src/hooks/useRsvps.ts
- Service: src/services/rsvpService.ts
- Repository: src/repositories/rsvpRepository.ts
- Types: src/types/rsvp.ts
- Test data: src/data/rsvpTestData.ts

## 1) Hook — src/hooks/useRsvps.ts

### What does this hook do?
Provides RSVP state and actions for the UI:
- loads RSVP list
- adds an RSVP
- removes an RSVP
- exposes data/functions needed by RsvpPage

### Why does this belong in a hook?
This keeps React state + side effects out of the page component and provides a reusable RSVP API for any component that needs RSVP data.

### Where is it used?
Used in:
- src/components/pages/RsvpPage.tsx

## 2) Service — src/services/rsvpService.ts

### What does this service do?
Contains RSVP business logic such as:
- validating RSVP inputs (guestName, email)
- building a correct RsvpItem (adds id and createdAt)

Functions include:
- isRsvpInputValid(...)
- buildRsvpItem(...)

### Why does this belong in a service?
Validation + object creation must be consistent across the app. Keeping it in a service prevents duplicated rules and keeps UI components simple.

### Where is it used?
Used by:
- src/hooks/useRsvps.ts (or directly in `RsvpPage.tsx` depending on implementation)

## 3) Repository — `src/repositories/rsvpRepository.ts`

### What does this repository do?
Provides RSVP CRUD access to the app’s data source (currently test data / in-memory):
- getAll, getById
- create, update, delete

### Why does this belong in a repository?
It isolates data access from the UI and business logic, so switching to a real backend later will only require changing repository internals.

### Where is it used?
Used by:
- src/hooks/useRsvps.ts
- (indirectly) the page component through the hook

## 4) Type — src/types/rsvp.ts

### What does this type do?
Defines the RSVP resource contract:
- RsvpStatus (allowed status values)
- RsvpItem (required RSVP fields, including createdAt)

### Why is this important?
It ensures the repository/service/hook/UI all share the same rules and prevents type mismatches (example: "Going" vs`"Attending").

### Where is it used?
Used in:
- src/repositories/rsvpRepository.ts
- src/services/rsvpService.ts
- src/hooks/useRsvps.ts
- src/components/pages/RsvpPage.tsx

## Notes
This architecture makes it easy to replace the test data with database/API calls in the next module by updating only the repository layer.