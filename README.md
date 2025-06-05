# Headless CMS with Next.js, GraphQL, and microCMS

This project demonstrates how to build a headless frontend using [Next.js](https://nextjs.org/) and fetch content from different CMS backends using GraphQL and REST APIs.

## Features

- Fetches blog content from [microCMS](https://microcms.io/) using REST API
- Example integration with public GraphQL APIs (e.g., SpaceX, WPGraphQL)
- Renders content dynamically with Next.js
- TypeScript support
- Prettier and ESLint configured for code quality

## Resources Used

- **Next.js** – React framework for server-side rendering and static site generation
- **microCMS** – Headless CMS with REST API
- **WPGraphQL** – WordPress GraphQL API (demo: <https://demo.wpgraphql.com/graphql>)
- **SpaceX GraphQL API** – Public GraphQL endpoint: <https://spacex-production.up.railway.app/>
- **Prettier** – Code formatter
- **ESLint** – Linting for JavaScript/TypeScript

## How to Fetch Data from microCMS

Example (in `/src/app/page.tsx`):

```ts
const res = await fetch('https://YOUR-SERVICE.microcms.io/api/v1/blogs', {
  method: 'GET',
  headers: {
    'X-MICROCMS-API-KEY': process.env.NEXT_PUBLIC_MICROCMS_KEY || '',
  },
});
const data = await res.json();
```

## How to Fetch Data from a GraphQL API

Example (SpaceX):

```ts
const res = await fetch('https://spacex-production.up.railway.app/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query: `
      {
        launchesPast(limit: 5) {
          mission_name
          launch_date_utc
        }
      }
    `
  }),
});
const json = await res.json();
```

## Setup

1. Clone this repo
2. Install dependencies:

   ```sh
   npm install
   ```

3. Add your microCMS API key to `.env.local`:

   ```
   NEXT_PUBLIC_MICROCMS_KEY=your_microcms_api_key
   ```

4. Run the development server:

   ```sh
   npm run dev
   ```

## Formatting

To format your codebase, run:

```sh
npm run format
```

---

Feel free to explore and modify for your own headless CMS experiments!
