import React, { useState } from "react";

const SearchComponent = (props: any) => {
  return (
    <form>
      <label
        htmlFor="search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only "
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="search"
          {...props}
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-defaultColor focus:border-defaultColor  placeholder:text-stone-800 outline-defaultColor"
          placeholder="Search by tag..."
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-defaultColor hover:bg-defaultColor/80 focus:ring-4 focus:outline-none focus:ring-defaultColor/20 font-medium rounded-lg text-sm px-4 py-2 "
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchComponent;
