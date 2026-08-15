# BookNook

A small React catalog app: search or filter by category, browse books, mark
favorites, see price, rating and stock status.

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
  App.jsx                  holds state (category, search text, favorites-only) and filters the list
  data/
    books.js                the sample data (array of book objects)
  hooks/
    useFavorites.js          custom hook - tracks starred books, saves them to localStorage
    useDebounce.js            custom hook - delays a value until typing pauses
  styles/
    index.css                 the main stylesheet, most of the app's look lives here
  components/
    Header.jsx                page title + live book count
    CategoryFilter.jsx         row of category buttons
    SearchBar.jsx                search input, styled with a CSS module
    SearchBar.module.css
    FavoritesToggle.jsx          "favorites only" button, built with styled-components
    FavoriteButton.jsx            the star on each card, styled inline
    BookCard.jsx                   single book, one reusable card
    BookList.jsx                    renders the grid of BookCard components
    Footer.jsx                       copyright line
```

## What's new this week

- **Search** - typing in the search box filters by title or author. The actual
  filtering is debounced through `useDebounce` so it's not re-running on every
  single keystroke.
- **Favorites** - click the star on any book to save it. `useFavorites` keeps
  the list in state and mirrors it to `localStorage` with a `useEffect`, so it
  survives a page refresh. The "favorites only" toggle filters the grid down
  to just those.
- **Tab title** - a small `useEffect` in `App.jsx` updates the browser tab
  title with however many books currently match the filters.
- **Bootstrap** - installed and imported in `main.jsx`. Used for the container
  layout and the search input (`form-control`), on top of the existing custom
  CSS rather than replacing it.

## Where each styling approach shows up

- **Inline styling** - `FavoriteButton.jsx`, the star's color depends on state.
- **CSS stylesheet** - `styles/index.css`, still the main styling for most of
  the app (header, cards, filter bar, etc).
- **CSS Modules** - `SearchBar.module.css`, scoped just to the search input.
- **Styled Components** - `FavoritesToggle.jsx`, built with `styled.button`.

## Where each required concept is used (from last week, still true)

- **Reusable components** - `BookCard`, `Header`, `CategoryFilter` and `Footer`
  are all separate components used with different data. `BookCard` in
  particular is one definition rendered once per book with different props.
- **Props** - `App.jsx` passes `books`, `activeCategory`, `title`, etc. down
  to child components; `BookList` passes each `book` object (plus favorite
  state) down to `BookCard`.
- **Ternary operator** - `BookCard.jsx` uses it for the stock label and the
  struck-through price. `BookList.jsx` uses it for the grid vs. empty state.
- **`&&` operator** - `Header.jsx` only shows the count badge when
  `totalBooks > 0`. `BookCard.jsx` only shows the discount ribbon when
  `discount > 0`.
- **`.map()`** - `CategoryFilter.jsx` maps categories into buttons,
  `BookList.jsx` maps books into `BookCard`s.

## Notes / things you could change if asked

- Category list is still built dynamically from the data instead of hardcoded.
- Filtering state (category, search, favorites-only) all lives in `App.jsx`
  and gets passed down - same "lifting state up" pattern as before, just with
  more state now.
- `booknook-standalone.html` is the old single-file version from before this
  was a proper Vite project - it hasn't been updated with this week's changes.
