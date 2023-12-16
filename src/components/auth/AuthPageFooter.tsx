import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle";

const AuthPageFooter = () => {
  return (
    <div className="border-t mt-12 text-gray-500 dark:border-gray-800">
      <div className="space-x-4 text-center">
        <span>&copy; Sire</span>
        <Link
          to="/"
          className="text-sm hover:text-sky-900 dark:hover:text-gray-300"
        >
          Contact
        </Link>
        <Link
          to="/"
          className="text-sm hover:text-sky-900 dark:hover:text-gray-300"
        >
          Privacy & Terms
        </Link>
      </div>
      <ThemeToggle />
    </div>
  );
};

export default AuthPageFooter;
