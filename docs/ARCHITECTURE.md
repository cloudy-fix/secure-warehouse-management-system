# Secure Warehouse Management System Architecture

## Purpose

Secure warehouse management application with frontend, backend, and database layers.

## Stack

Java Spring Boot, Angular, SQL, JWT security

## System Context

```mermaid
flowchart LR
    User["Warehouse users and admin actions"] --> App["Angular UI and Spring Boot API"]
    App --> Data["SQL schema, users, products, orders, tracking records"]
    App --> Output["Authenticated warehouse workflows"]
    Data --> Output
```
## Runtime Workflow

```mermaid
flowchart TD
    S1["User authenticates"] --> S2["Frontend calls backend API"]
    S2["Frontend calls backend API"] --> S3["Backend validates role and request"]
    S3["Backend validates role and request"] --> S4["Database stores transaction"]
    S4["Database stores transaction"] --> S5["UI displays warehouse state"]
```
## Production Readiness Notes

- Keep secrets in environment variables and commit only .env.example templates.
- Keep generated files, dependency folders, caches, and local databases out of version control.
- Run the GitHub Actions workflow before presenting or deploying changes.
- Update this document when the source layout, dependencies, or deployment model changes.

## Review Checklist

- Architecture diagram matches current source files.
- Workflow diagram matches the main user or data path.
- README links to this architecture document.
- CI workflow validates the project on every push and pull request.

