## ALX Project 0x01 Setup

This repository contains the foundational setup for the ALX Project 0x01 — a full-stack Next.js application built with TypeScript and Tailwind CSS. The project demonstrates modern web development practices including component architecture, API integration, and responsive design.

### ✅ Completed Setup

- Initialized with `create-next-app@latest` using:
  - TypeScript
  - Tailwind CSS
  - ESLint
  - Default import alias (`@/*`)
- Configured global styles with Tailwind directives
- Created landing page with centered welcome message
- Established folder structure:
  - `components/common`, `components/layout`
  - `pages/posts`, `pages/users`
  - `interfaces`, `public/assets/images`
- Added basic functional components:
  - `Button`, `PostCard`, `Header`, `Footer`
  - `PostsPage`, `UsersPage`

### 🔜 Next Steps

- Implement navigation system with dynamic routing
- Fetch and display data from JSONPlaceholder API
- Add modal components for creating posts and users
- Apply atomic design principles and type-safe interfaces

### ✅ Navigation System

- Implemented `Header` component with links to Home, Posts, and Users
- Integrated client-side routing using Next.js `<Link>` component
- Verified seamless navigation without page reloads

### ✅ Posts Page

- Defined `PostProps` interface in `interfaces/index.ts`
- Created reusable `PostCard` component with styled layout
- Fetched post data from JSONPlaceholder using `getStaticProps`
- Rendered posts in a responsive grid on `/posts` page

### ✅ Users Page

- Defined `UserProps` interface with nested address and company data
- Created dynamic `UserCard` component styled with Tailwind CSS
- Fetched user data from JSONPlaceholder using `getStaticProps`
- Rendered users in a responsive grid on `/users` page

### ✅ User Modal

- Defined `UserData` and `UserModalProps` interfaces for type-safe user creation
- Created `UserModal` component with controlled inputs and styled layout
- Integrated modal into `/users` page with local state and toggle logic
- Enabled users to simulate adding new users via form submission