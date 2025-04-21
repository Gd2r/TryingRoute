# TryingRoute - React Router Practice

**🚀 Live Deployment:** [https://trying-route-qezl.vercel.app](https://trying-route-qezl.vercel.app)

An application built to learn and practice modern routing in React using **Tanstack Router**.

## Features

- File-based routing setup (Home, About, Contact, Posts pages) using `@tanstack/react-router` and `@tanstack/router-vite-plugin`.
- Root layout defined in `src/routes/__root.tsx`.
- Data loading example on the `/posts` route using Tanstack Router loaders and `fetch`.
- Type-safe navigation with `<Link />`.
- Basic component structure (`src/components`, `src/routes`, `src/styles`).
- 404 Not Found page handling integrated into the router.
- Shared layout and footer components.
- Simple CSS styling.

## Technologies Used

- React
- TypeScript
- Vite
- **`@tanstack/react-router`**
- **`@tanstack/router-vite-plugin`**
- CSS

## Running Locally

1.  **Clone the repository (if you haven't already):**
    ```bash
    git clone git@github.com:Gd2r/TryingRoute.git
    cd TryingRoute
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application should now be running on `http://localhost:5173` (or the next available port).

## Deployment

This application is suitable for deployment on static hosting platforms like Netlify, Vercel, or GitHub Pages.

## Tanstack Router Implementation Notes

This project demonstrates:

- Replacing `react-router-dom` with `@tanstack/react-router`.
- Configuring the Vite plugin for file-based routing.
- Structuring routes in the `src/routes` directory (`index.tsx`, `about.tsx`, `__root.tsx`, `posts.tsx`).
- Defining a root route (`__root.tsx`) to manage the overall layout and `<Outlet />`.
- Implementing a basic loader function in `posts.tsx` to fetch data before the component renders.
- Using `useLoaderData` to access loader data in the component.
- Using `pendingComponent` and `errorComponent` for better UX during data loading.
- Organizing shared UI elements into `src/components`.
