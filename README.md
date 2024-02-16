This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

---

### This project follows recommended practices for routing and component organization in Next.js 14 using the App Router.

**Key Features:**

- **Clean and scalable structure:** The `app` directory houses all routes and components, promoting easy navigation and maintainability.
- **Dynamic routing:** Leverage dynamic segments ([...slug]) for flexible URL structures.
- **Nested components:** Organize and reuse components within the `components` folder for efficient development.
- **Server actions:** Integrate directly with components for efficient data fetching and logic execution.

**Folder Structure:**

        app/
      - components/
        - Button.tsx
        - Layout.tsx
        - ...
      - [slug].tsx (dynamic routes)
      - index.tsx (root route)
      - routes/
        - [articleId].tsx
        - ...
    components/
      - ... (global components)
    public/
      - static assets
    styles/
      - global styles
    ...

**Component Organization:**

- **Root components:** `app/page.tsx` acts as the main entry point, rendering the top-level layout.
- **Dynamic routes:** Files within the `app` directory define dynamic routes based on their names (e.g., `app/blog/[slug].tsx`).
- **Nested routes:** Use subfolders within `app/routes` to group related routes (e.g., `app/routes/articles/[id].js`).
- **Global components:** Place frequently used components in the `components` folder at the project root.
  _Reference:_ - [Getting Started: Project Structure | Next.js (nextjs.org)](https://nextjs.org/docs/getting-started/project-structure)

**Routing Guidelines:**

- **Route naming:** Use descriptive names for routes and components (e.g., `app/product/[id].js`).
- **Nested layouts:** You can nest layouts by adding `layout.js` inside specific route segments (folders).
- **Server actions:** Utilize `getServerSideProps` or `getStaticProps` within components to fetch data on the server or at build time.
  _Reference:_ - [Building Your Application: Routing | Next.js (nextjs.org)](https://nextjs.org/docs/app/building-your-application/routing)
  _Reference:_ - [Data Fetching: Server Actions and Mutations | Next.js (nextjs.org)](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)

**Code Example (dynamic route):**

    // app/blog/[slug].js
    import { useRouter } from 'next/router';
    import Layout from '../components/Layout';

    export default function BlogPost({ post }) {
      const router = useRouter();

      // Display blog post content using `post` data

      return (
        <Layout>
          {/* Render blog post content */}
        </Layout>
      );
    }

    export async function getServerSideProps({ params }) {
      const response = await fetch(`https://api.example.com/posts/${params.slug}`);
      const post = await response.json();

      return { props: { post } };
    }

**Additional Tips:**

- Use environment variables for sensitive data.
- Leverage code-splitting for performance optimization.
- Consider accessibility best practices when designing components.
- Test your components and routes thoroughly.
