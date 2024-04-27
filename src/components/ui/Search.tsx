import React, { useRef } from "react";
import appIcons from "./../../config/appIcons";

interface IProps {
  setSearch: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const Search: React.FC<IProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.setSearch(inputRef.current?.value.trim());
  };

  const formResetHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (inputRef.current?.value) {
      inputRef.current.value = "";
    }

    props.setSearch(undefined);
  };

  return (
    <form
      className="flex items-center w-full sm:max-w-sm"
      onSubmit={formSubmitHandler}
    >
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          {inputRef.current?.value && inputRef.current?.value.length > 0 ? (
            <button
              type="button"
              onClick={(e) => formResetHandler(e)}
              className="bg-blue-700 rounded-full border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {appIcons.close}
              <span className="sr-only">Reset</span>
            </button>
          ) : null}
        </div>
        <input
          type="text"
          ref={inputRef}
          name="search-input"
          id="simple-search"
          className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
        />
      </div>

      <button
        type="submit"
        className="p-2 ml-2 text-sm font-medium text-white bg-blue-700 rounded-full border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <appIcons.Search className="text-white w-6 h-6" />

        <span className="sr-only">Search</span>
      </button>
    </form>
  );
};

export default Search;
