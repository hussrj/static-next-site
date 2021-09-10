# RJHUSS - A blog style website with markdown support created using Next.js, Tailwind CSS, and AWS amplify.

[Next.js](https://nextjs.org/), [AWS Amplify](https://aws.amazon.com/amplify), [Tailwind CSS](https://tailwindcss.com), and [GraphQL](https://graphql.org) are combined to streamline development and deployment The project was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

Posts are added to the _posts directory. Navigation buttons are defined in lib/navigation-buttons.tsx.

[API routes](https://nextjs.org/docs/api-routes/introduction) 

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

There is an API route accessible on [http://localhost:3000/api/external-components](http://localhost:3000/api/external-components). This endpoint can be edited in `pages/api/external-components.tsx`.

It queries the GraphQL server for all external components tagged with rjhuss. 

## Learn More
[Next.js](https://nextjs.org/docs)
[Amplify Framework](https://docs.amplify.aws/)
[Tailwind CSS](https://tailwindcss.com/docs)
[React](https://reactjs.org/docs/react-api.html)