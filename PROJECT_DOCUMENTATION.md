## Project Documentation

### 1. Project Overview
This project is a modern web application for [describe purpose, e.g., e-commerce, social networking, task management]. It provides users with [list key features/benefits]. (Placeholder: This project appears to be a versatile company website or platform with a blog, user authentication, and potentially other interactive features.)

### 2. Tech Stack
- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN/UI (assumption based on `components/ui` and common Next.js setups)
- **Linting/Formatting**: ESLint (likely, standard for Next.js projects)

### 3. Project Structure
- **`/app`**: Core of the Next.js application using the App Router.
    - **`/app/(application)`**: Likely contains routes and logic for the authenticated/main application part (e.g., dashboard).
    - **`/app/(site)`**: Contains routes for public-facing pages (e.g., landing page, about, contact, legal pages).
    - **`/app/api`**: API routes built with Next.js API handlers.
    - **`layout.tsx`**: Defines the root layout for the application.
    - **`page.tsx`**: Entry points for different routes.
- **`/components`**: Reusable React components.
    - **`/components/ui`**: Common UI elements, very likely from ShadCN/UI.
    - **`/components/dashboard`**: Components specific to the dashboard or authenticated application section.
    - **`/components/layout`**: Components related to the overall page structure, like headers and footers.
    - **`/components/sections`**: Components used to build specific sections of pages (e.g., hero, features).
- **`/public`**: Static assets like images, fonts, and icons, directly accessible via the base URL.
- **`/data`**: Stores static data used by the application, such as TypeScript modules exporting arrays/objects (e.g., `blogs.ts`, `features.ts`, `faq.ts`).
- **`/lib`**: Utility functions and helper scripts (e.g., `utils.ts`).
- **`/context`**: React Context API for global state management (e.g., `ThemeContext.tsx`).
- **`/hooks`**: Custom React hooks for reusable component logic.
- **`/types`**: TypeScript type definitions and interfaces.

### 4. Routing
- Routing is based on the Next.js App Router conventions (folder-based routing).
- `page.tsx` files define the UI for a route segment.
- `layout.tsx` files define UI that wraps around child pages or layouts.
- Dynamic routes are created using bracket notation (e.g., `app/blogs/[id]/page.tsx`).
- Route groups are used to organize routes without affecting the URL path (e.g., `(application)`, `(site)`).

### 5. Key Components
(Examples based on common project structures and observed filenames)
- **`Header.tsx`, `Footer.tsx` (in `/components/layout`)**: Common layout elements for site navigation and footer content.
- **`BlogCard.tsx` (likely in `/components` or `/components/sections`)**: Component for displaying blog post summaries.
- **`FeatureCard.tsx` (likely in `/components` or `/components/sections`)**: Component for highlighting product/service features.
- **ShadCN/UI components (in `components/ui/`)**: Building blocks like `Button.tsx`, `Card.tsx`, `Dialog.tsx`, `Input.tsx`, etc., used throughout the application.

### 6. Data Management
- Static content (like blog posts, FAQs, features, testimonials) is primarily managed via TypeScript files in the `/data` directory (e.g., `data/blogs.ts`, `data/faq.ts`, `data/features.ts`). These files likely export arrays of objects.
- API routes in `/app/api` handle backend logic or communication with external services. Examples might include:
    - `app/api/auth/...` for user authentication.
    - `app/api/send/...` for functionalities like sending emails (e.g., contact form submissions).

### 7. Styling
- **Tailwind CSS**: Utility-first CSS framework used for styling. Configuration is in `tailwind.config.ts`.
- **Global Styles**: `app/globals.css` is used for base styles, global style definitions, and Tailwind CSS base layer imports.
- **Component-specific styles**: Primarily achieved by applying Tailwind CSS classes directly in the JSX of components. ShadCN/UI components are also styled using Tailwind CSS.

### 8. Getting Started
```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Open http://localhost:3000 in your browser.
```
