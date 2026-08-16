# BookNook

A small React app: browse a book catalog (search, filter, favorites), read a
bit about the project, and send a message through a validated contact form.
Multiple pages, navigated with React Router.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Project structure

```
index.html                entry point Vite loads first
src/
  main.jsx                 mounts <App />, pulls in bootstrap + the global stylesheet
  App.jsx                  sets up BrowserRouter and the four routes, renders Header/NavBar/Footer around them
  data/
    books.js                the sample data (array of book objects)
  hooks/
    useFavorites.js          custom hook - tracks starred books, saves them to localStorage
    useDebounce.js            custom hook - delays a value until typing pauses
  styles/
    index.css                 the main stylesheet
  pages/
    HomePage.jsx               the book catalog - search, category filter, favorites
    AboutPage.jsx                a couple paragraphs about the project
    ContactPage.jsx               the contact/register form with validation
    NotFoundPage.jsx               shown for any route that doesn't match
  components/
    Header.jsx                title + live book count, shown on every page
    NavBar.jsx                  Home / About / Contact links
    CategoryFilter.jsx           row of category buttons
    SearchBar.jsx                  search input, styled with a CSS module
    SearchBar.module.css
    FavoritesToggle.jsx            "favorites only" button, built with styled-components
    FavoriteButton.jsx              the star on each card, styled inline
    BookCard.jsx                     single book, one reusable card
    BookList.jsx                      renders the grid of BookCard components
    Footer.jsx                         copyright line, shown on every page
```

## Routing

- `/` - Home, the book catalog (this is what used to be the whole app)
- `/about` - About, static info about the project
- `/contact` - Contact / Register form
- anything else - 404 page, with a link back home

`NavBar.jsx` uses `NavLink` so the current page gets highlighted automatically
instead of manually tracking which link is active.

## The contact form

Lives in `ContactPage.jsx`. Five fields, all controlled through one
`formData` state object: Full Name, Email, Password, Phone Number, and a
Message textarea. Submitting calls `event.preventDefault()` so it doesn't
reload the page, runs everything through a `validate()` function, and either
shows field-level error messages or, if everything passes, a success message
and resets the form.

## What was already there

- **Search & favorites** - `useDebounce` and `useFavorites` custom hooks,
  still living in `hooks/`, now used from `HomePage.jsx` instead of `App.jsx`.
- **Four styling approaches** - inline (`FavoriteButton`), CSS stylesheet
  (`styles/index.css`), CSS Modules (`SearchBar.module.css`), and Styled
  Components (`FavoritesToggle`).
- **Bootstrap** - imported in `main.jsx`, used for layout and form controls.

## Notes / things you could change if asked

- `App.jsx` no longer holds any book-related state - that all moved into
  `HomePage.jsx` once it became just one page among several, which felt like
  the more sensible place for it.
- Phone number validation is intentionally loose (digits, spaces, `+`, `-`,
  7-15 characters) rather than matching one country's exact format.
- `booknook-standalone.html` is the old single-file version from before this
  was a proper Vite project - it doesn't have routing or the form, it's just
  kept around from earlier.
