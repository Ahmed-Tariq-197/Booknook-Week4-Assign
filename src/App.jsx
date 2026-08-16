import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import books from "./data/books.js";

function App() {
  return (
    <BrowserRouter>
      <div className="app container">
        <Header
          title="BookNook"
          subtitle="A small catalog of books worth staying up for."
          totalBooks={books.length}
        />

        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <Footer year={2026} />
      </div>
    </BrowserRouter>
  );
}

export default App;
