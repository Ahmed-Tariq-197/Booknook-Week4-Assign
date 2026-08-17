import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

// wraps the app and holds the current theme - anything inside can
// read/change it through useTheme() instead of getting it passed as props
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// small wrapper around useContext so components don't have to import
// ThemeContext directly everywhere
export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme has to be used inside a ThemeProvider");
  }

  return context;
}
