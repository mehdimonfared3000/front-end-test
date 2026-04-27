# Agent Skills

This project has repo-local Codex skills for building the React and TypeScript application. Invoke them explicitly when a task benefits from a specialist role:

-   `$product-tech-lead`: Requirements breakdown, task routing, acceptance criteria, API contract planning, and delivery sequencing.
-   `$react-frontend-developer`: React UI, TypeScript components, routing, styling, accessibility, responsive behavior, and frontend tests.
-   `$typescript-backend-developer`: TypeScript APIs, server logic, validation, persistence, auth, integrations, and backend tests.
-   `$qa-test-engineer`: Test planning, unit/component/integration/end-to-end coverage, failure investigation, and regression validation.
-   `$code-review-engineer`: Defect-focused review of frontend, backend, tests, config, security, accessibility, and regression risk.

For feature work, prefer this sequence:

1. Use the product tech lead skill to break broad requirements into scoped tasks and acceptance criteria.
2. Use the backend skill when API contracts, persistence, validation, or server behavior are needed.
3. Use the frontend skill to build the user-facing flow against the agreed contract.
4. Use the QA skill to cover the changed behavior at the most useful test level.
5. Use the review skill before merging substantial changes.

Keep agent work scoped. Each specialist should inspect the existing codebase before editing, follow local conventions, and report changed files plus verification commands.
