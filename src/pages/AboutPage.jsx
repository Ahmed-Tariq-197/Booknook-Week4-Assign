function AboutPage() {
  return (
    <section className="page-section">
      <h2>About BookNook</h2>
      <p>
        BookNook started as a small class project to practice building
        reusable React components - a catalog with a few books, a category
        filter, and not much else. It's picked up search, favorites and now
        a couple more pages since then.
      </p>
      <p>
        The "catalog" is really just eight books hardcoded in{" "}
        <code>src/data/books.js</code>. Nothing here talks to a real backend
        yet, but the components don't really care where the data comes from,
        so swapping that file for an API call later wouldn't change much.
      </p>
    </section>
  );
}

export default AboutPage;
