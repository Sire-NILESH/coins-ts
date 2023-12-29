import React from "react";
import appIcons from "../../config/appIcons";

interface IProps {
  currentPage: number;
  pageSetter: (page: number) => void;
  pageEnteries: number;
  totalPages: number;
  totalEnteries: number;
}

const Pagination: React.FC<IProps> = (props) => {
  const pageStart = (props.currentPage - 1) * props.pageEnteries + 1;

  const pageEnd =
    (props.currentPage - 1) * props.pageEnteries + props.pageEnteries;

  return (
    <div className="flex flex-col items-center">
      {/*  Help text  */}
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Showing{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {pageStart}
        </span>{" "}
        to{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {pageEnd > props.totalEnteries ? props.totalEnteries : pageEnd}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {props.totalEnteries}
        </span>{" "}
        Entries
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        {/*  Buttons */}
        <button
          className="cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          disabled={props.currentPage === 1 ? true : false}
          onClick={(e) => {
            e.preventDefault();
            props.pageSetter(props.currentPage - 1);
          }}
        >
          {appIcons.arrowLeft}
          Prev
        </button>
        <button
          className="cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          disabled={props.currentPage === props.totalPages ? true : false}
          onClick={(e) => {
            e.preventDefault();
            props.pageSetter(props.currentPage + 1);
          }}
        >
          Next
          {appIcons.arrowRight}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
