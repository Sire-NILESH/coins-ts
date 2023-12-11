import { useContext } from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import { ThemeContext } from "../../uitls/contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="h-full w-full">
      {theme === "dark" ? (
        <div
          className="flex items-center justify-center cursor-pointer  px-4 py-3 h-full w-full"
          onClick={() =>
            setTheme && setTheme(theme === "dark" ? "light" : "dark")
          }
        >
          <HiSun className="text-primary mr-1" /> Light
        </div>
      ) : (
        <div
          className="flex items-center justify-center cursor-pointer  px-4 py-3 h-full w-full"
          onClick={() =>
            setTheme && setTheme(theme === "light" ? "dark" : "light")
          }
        >
          <HiMoon className="text-primary mr-1" /> Dark
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
