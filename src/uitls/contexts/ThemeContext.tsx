import React, { useState, useEffect, createContext } from "react";

type ThemeContextType = "light" | "dark";

interface IProps {
  initialTheme?: ThemeContextType;
  children: React.ReactNode;
}

interface ThemeContextValue {
  theme: ThemeContextType;
  setTheme?: React.Dispatch<React.SetStateAction<ThemeContextType>>;
}

export const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
});

export const ThemeProvider: React.FC<IProps> = ({ initialTheme, children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  const rawSetTheme = (theme: ThemeContextType) => {
    const root = window.document.documentElement;
    const isDark = theme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(theme);

    localStorage.setItem("color-theme", theme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  console.log("helloo-----------", theme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function getInitialTheme(): ThemeContextType {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs as ThemeContextType;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }
  return "light";
}
