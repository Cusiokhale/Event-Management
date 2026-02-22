# Architectural Layout — Services Resource (N.E.)

This document explains the hook service repository architecture used for the Services resource.

# Directory Structure (My Contribution)

- src/types/service.ts
- src/repositories/serviceRepository.ts
- src/services/serviceService.ts
- src/hooks/useServices.ts
- src/components/pages/ServicesPage.tsx

This follows the architecture:

Component → Hook → Service → Repository

# 1. Repository — serviceRepository

## 1. What does it do?
The repository simulates an external resource by storing ServiceItem objects in memory.  
It provides CRUD methods:

- getAll()
- getById(id)
- create(name, category)
- update(id, updatedFields)
- delete(id)

## 2. Why is this logic here?
The repository handles data access and persistence logic.  
Keeping storage logic here ensures that UI components never directly manipulate stored data.

If a real backend API is introduced later, only the repository needs to change.

## 3. Where is it used?
It is used by serviceService, which calls repository methods after validation.

# 2. Service — serviceService

## 1. What does it do?
The service layer:
- Validates input data
- Applies business rules
- Calls repository CRUD methods

## 2. Why is this logic here?
The service separates business logic from both UI components and raw data storage.  
This keeps components clean and prevents duplication of validation logic.

## 3. Where is it used?
It is used inside `useServices` to:
- Load services
- Add new services
- Remove services

# 3. Hook — useServices

## 1. What does it do?
The custom hook:
- Maintains services state
- Loads data on component mount
- Exposes addService() and removeService()

## 2. Why is this logic here?
The hook manages UI state and lifecycle behavior.  
This allows ServicesPage to remain focused on rendering only.

## 3. Where is it used?
It is used in `ServicesPage.tsx`.

The flow is:

ServicesPage  
→ useServices  
→ serviceService  
→ serviceRepository  

# 4. Component — ServicesPage

## 1. What does it do?
The page:
- Renders the service form
- Displays the services list
- Calls hook methods on user actions

## 2. Why is logic minimal here?
The component is responsible only for UI rendering and user interaction.

All business logic and data logic are delegated to hook/service/repository layers.

## 3. How is architecture used here?
ServicesPage imports `useServices`, which internally uses:
- serviceService
- serviceRepository

This satisfies the requirement that a component invokes:
- a custom hook
- a service
- a repository method

# Summary

This architecture improves:

- Separation of concerns
- Maintainability
- Scalability
- Ease of backend replacement in future modules

The design ensures each layer has a single responsibility.