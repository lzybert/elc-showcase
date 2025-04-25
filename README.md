# Demo of a Vite/React/Express application

## Screenshots

![Alt text](https://i.postimg.cc/rwGqfstn/Screenshot-2025-04-25-at-14-33-41.png "Screenshot")





## Description

Application based on Vite/React/Express/TS stack, styled with Styled Components. Application is showcasing World Heritage Sites.
- Front end layer contains 3 working pages ( home with sites carousel, site of the day page which promotes one site throughout the day, and sites detail page), favorites page turned out to be too time consuming.
- File based routing with Vite Pages.
- API data comes from provided csv file, converted to JSON format.
- API has three endpoints:
  - /api/v1/sites - returnes paginated results, supports different languages with fallback to english
  - /api/v1/sites/:id - used to obtain single site of a given id
  - /api/v1/promo - returnes single site for site of the day section
- Unit test has been written for custom hook.
- All written in Typescript
- Boilerplate from https://github.com/bfeist/vite-express-ts

### TODO:

- Implement Favorites page and session/local storage

## Installation

1. Clone repository then run `npm install` inside cloned folder.
2. Then create a `.env` file and add `VITE_GOOGLE_API_KEY` to it.
3. Run `npm run dev` to start local server for API and FE. Servers should start at `https://localhost:9000` and `https://localhost:9001` for API.


### Build

To build the application for production:

```bash
npm run build
```

This script builds both the frontend and backend parts of the application. The result is put in `.local/vite/dist`and `.local/express/dist` respectively.

### Start Production Server

After building, start the production server with:

```bash
npm run start
```

This runs a simple `node ./.local/express/dist/api.js` command to start the express server that serves the `/api/v1` endpoints.

