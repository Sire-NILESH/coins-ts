import { useContext } from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import { ThemeContext } from "../../uitls/contexts/ThemeContext";

const ThemeToggle = ({ disableText }: { disableText?: boolean }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="h-full w-full">
      {theme === "dark" ? (
        <button
          className={`flex items-center justify-center cursor-pointer px-4 py-3 h-full w-full rounded-full ${
            disableText ? "hover:bg-gray-400 dark:hover:bg-gray-700" : ""
          }`}
          onClick={() =>
            setTheme && setTheme(theme === "dark" ? "light" : "dark")
          }
        >
          <HiSun className="text-primary mr-1" /> {disableText ? "" : "Light"}
        </button>
      ) : (
        <button
          className="flex items-center justify-center cursor-pointer px-4 py-3 h-full w-full"
          onClick={() =>
            setTheme && setTheme(theme === "light" ? "dark" : "light")
          }
        >
          <HiMoon className="text-primary mr-1" /> {disableText ? "" : "Dark"}
        </button>
      )}
    </div>
  );
};

export default ThemeToggle;
