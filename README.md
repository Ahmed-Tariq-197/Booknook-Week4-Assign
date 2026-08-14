# BookNook

A small React catalog app: pick a category, browse books, see price, rating and stock status.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Project structure

```
src/
  main.jsx              entry point, mounts <App />
  App.jsx                holds state (selected category) and filters the book list
  index.css              all styling
  data/
    books.js              the sample data (array of book objects)
  components/
    Header.jsx             page title + live book count
    CategoryFilter.jsx      row of category buttons
    BookCard.jsx             single book, one reusable card
    BookList.jsx             renders the grid of BookCard components
    Footer.jsx               copyright line
```

## Where each required concept is used

- **Reusable components** — `BookCard`, `Header`, `CategoryFilter` and `Footer` are all separate components used with different data. `BookCard` in particular is one definition rendered 8 times with different props.
- **Props** — `App.jsx` passes `books`, `activeCategory`, `title`, etc. down to child components; `BookList` passes each `book` object down to `BookCard`.
- **Ternary operator** — `BookCard.jsx` uses it to pick the stock label ("In stock" / "Out of stock") and to decide whether to show a struck-through original price. `BookList.jsx` uses it to show either the grid or an empty-state message.
- **`&&` operator** — `Header.jsx` only shows the count badge when `totalBooks > 0`. `BookCard.jsx` only renders the discount ribbon when `discount > 0`.
- **`.map()`** — `CategoryFilter.jsx` maps the categories array into buttons. `BookList.jsx` maps the books array into `BookCard` components.

## Notes / things you could change if asked

- Category list is built dynamically from the data (`new Set(...)`) instead of hardcoded, so adding a book in a new category updates the filter bar automatically.
- Filtering state (`activeCategory`) lives in `App.jsx` and is passed down — a common beginner pattern called "lifting state up".
