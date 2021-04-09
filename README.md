# RJHUSS - A simple framework for a modern, sophisticated blog with portfolio elements.

[Next.js](https://nextjs.org/), [AWS Amplify](https://aws.amazon.com/amplify), [Tailwind CSS](https://tailwindcss.com), and [GraphQL](https://graphql.org) are combined to streamline the development and deployment of the app. The project was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) 

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

There is an API route accessible on [http://localhost:3000/api/external-components](http://localhost:3000/api/external-components). This endpoint can be edited in `pages/api/external-components.tsx`.

It queries the GraphQL server for all external components tagged with rjhuss. 

## Learn More
