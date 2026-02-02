# Funko Courses Site - AI Coding Agent Instructions

## Project Overview
**funko-courses-site** is a web application for Funko-related educational courses. This is an early-stage project with minimal structure - use these guidelines to maintain consistency as the codebase grows.

## Architecture & Structure
- **Project Stage**: Initial setup - establish patterns now that will scale
- **Expected Structure** (to be implemented):
  - Frontend: Client-side course UI and user interactions
  - Backend: API for course content, user management, and progress tracking
  - Database: Store course data and user progress
  - Consider separation of concerns: content management, user authentication, course enrollment

## Tech Stack Guidelines
- **To be determined**: Specify technology choices early (React/Vue for frontend, Node/Python for backend, etc.)
- Once established, document preferred frameworks and their rationale
- Keep dependencies minimal and documented

## Development Workflows
- **No build system yet**: Plan CI/CD early with tests, linting, and deployment scripts
- **Git Strategy**: Follow conventional commits when structure is established
  - Example: `feat: add course enrollment endpoint`, `fix: correct progress calculation`
- **Key tasks to implement**:
  - Unit tests framework and coverage requirements
  - Linting and code formatting standards
  - Deployment pipeline and environment setup

## Code Patterns (To Establish)
- **API Design**: Plan RESTful endpoints (or GraphQL) with consistent naming
  - Example pattern: `/api/courses`, `/api/courses/:id`, `/api/users/:id/progress`
- **Error Handling**: Establish consistent error response formats
- **Authentication**: Define approach (JWT, OAuth, sessions) early
- **State Management**: If frontend-heavy, choose appropriate state solution

## File & Naming Conventions
- **Directories**: Use kebab-case for folder names (`src/course-data/`, `src/user-management/`)
- **Files**: 
  - Components: PascalCase (`CourseCard.js`)
  - Utilities: camelCase (`courseHelper.js`)
  - Tests: `*.test.js` or `*.spec.js`
- **Environment Files**: `.env.example` for documentation, `.env` in gitignore

## Integration Points
- **Course Content**: Plan how content is stored, versioned, and delivered
- **User Progress**: Design data persistence for tracking user advancement
- **External Services**: Define contracts early (payment processing, notifications, etc.)

## Before Making Major Changes
1. Establish tech stack and project structure
2. Create foundational tooling (testing, linting, build)
3. Document architectural decisions in ADRs (Architecture Decision Records)
4. Use this file to capture patterns as they emerge

---
**Last Updated**: February 2, 2026 | **Status**: Initial template for early-stage project
