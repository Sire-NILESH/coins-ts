import { useContext } from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import { ThemeContext } from "../../uitls/contexts/ThemeContext";

const ThemeToggle = ({ disableText }: { disableText?: boolean }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="h-full w-full">
      {theme === "dark" ? (
        <div
          className={`flex items-center justify-center ${
            disableText ? "hover:bg-secondary size-12" : "px-4 py-3 size-full"
          }`}
          onClick={() =>
            setTheme && setTheme(theme === "dark" ? "light" : "dark")
          }
        >
          <HiSun className="text-foreground" />{" "}
          {disableText ? "" : <span className="ml-2">Light</span>}
        </div>
      ) : (
        <div
          className={`flex items-center justify-center ${
            disableText ? "hover:bg-secondary size-12" : "px-4 py-3 size-full"
          }`}
          onClick={() =>
            setTheme && setTheme(theme === "light" ? "dark" : "light")
          }
        >
          <HiMoon className="text-foreground" />{" "}
          {disableText ? "" : <span className="ml-2">Dark</span>}
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
