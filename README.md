# BookNook

A small React app: browse a book catalog (search, filter, favorites), add
books to a cart, switch between light/dark theme, read about the project,
and send a message through a validated contact form.

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
  main.jsx                 mounts <App />, wraps it in the Redux Provider and ThemeProvider, pulls in bootstrap + the global stylesheet
  App.jsx                  sets up BrowserRouter and the routes, reads theme to set the root class
  data/
    books.js                the sample data (array of book objects)
  context/
    ThemeContext.jsx         light/dark theme - Context API, exposes a useTheme() hook
  redux/
    store.js                 the Redux store
    slices/
      cartSlice.js             the shopping cart - items, add/remove/quantity reducers
  hooks/
    useFavorites.js          custom hook - tracks starred books, saves them to localStorage
    useDebounce.js            custom hook - delays a value until typing pauses
  styles/
    index.css                 the main stylesheet, including the dark theme overrides
  pages/
    HomePage.jsx               the book catalog - search, category filter, favorites
    AboutPage.jsx                a couple paragraphs about the project
    ContactPage.jsx               the contact/register form with validation
    CartPage.jsx                   shows what's in the cart, lets you change quantities
    NotFoundPage.jsx               shown for any route that doesn't match
  components/
    Header.jsx                title + live book count, shown on every page
    NavBar.jsx                  Home / About / Contact / Cart links, cart badge, theme toggle
    CategoryFilter.jsx           row of category buttons
    SearchBar.jsx                  search input, styled with a CSS module
    SearchBar.module.css
    FavoritesToggle.jsx            "favorites only" button, built with styled-components
    FavoriteButton.jsx              the star on each card, styled inline
    BookCard.jsx                     single book, one reusable card, now with an Add to Cart button
    BookList.jsx                      renders the grid of BookCard components
    Footer.jsx                         copyright line, shown on every page
```

## State management

Two different pieces of global state, managed two different ways, on purpose
(this was the point of the assignment):

- **Theme (Context API)** - `ThemeContext.jsx` holds `theme` (`"light"` or
  `"dark"`) and a `toggleTheme` function, using plain `useState` inside a
  `ThemeProvider`. Any component can read it with the `useTheme()` hook
  instead of theme getting passed down as props through every level.
  `NavBar` uses it for the toggle button, `App.jsx` uses it to set the root
  class that the dark-mode CSS hooks into.

- **Cart (Redux Toolkit)** - `cartSlice.js` holds an array of cart items with
  `addToCart`, `removeFromCart`, `decreaseQuantity` and `clearCart` reducers.
  `BookCard` dispatches `addToCart` when you click the button. `NavBar` uses
  `useSelector` to show the item count as a badge. `CartPage` uses both -
  `useSelector` to list the items and `useDispatch` to change quantities or
  remove things.

## Routing (still true from last time)

- `/` - Home, the book catalog
- `/about` - About, static info about the project
- `/contact` - Contact / Register form
- `/cart` - the shopping cart
- anything else - 404 page, with a link back home

## What was already there

- **Search & favorites** - `useDebounce` and `useFavorites` custom hooks.
- **Four styling approaches** - inline (`FavoriteButton`), CSS stylesheet
  (`styles/index.css`), CSS Modules (`SearchBar.module.css`), and Styled
  Components (`FavoritesToggle`).
- **Bootstrap** - imported in `main.jsx`, used for layout and form controls.
- **Contact form** - controlled inputs, validation, success message.

## Notes / things you could change if asked

- Cart items only store `id`, `title`, `price` and `quantity` - no images or
  descriptions, since none of that was needed for this assignment.
- The `+` button on the cart page re-dispatches `addToCart` with the same
  item, which is a little bit of a shortcut (it re-finds the item by id and
  bumps the quantity) rather than having a separate "increase" action.
- `booknook-standalone.html` is the old single-file version from way before
  this had routing, forms, or state management - just kept around from the
  first version of the project.
