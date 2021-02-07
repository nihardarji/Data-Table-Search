## Available Scripts

In the project directory, you can run:

### `npm install && npm install --prefix frontend`

To install all the dependencies in both frontend and backend

### `npm run dev`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Libraries used(Backend)

1. express
2. config
3. mongoose

## Libraries used(Frontend)

1. react
2. material-ui
3. axios

## Limitations

1. There is a probablity of time lag in getting response when the search query is typed fast
2. Searching doesn't check for parentheses

## Assumptions/Methodology

1. The search functionality is implemented only for the `Title` field
2. Regex is used to implement search functionality
3. Database is used to store data
