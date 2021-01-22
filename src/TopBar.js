import React from "react";
import { useTopBarStore } from "./Store";

const TopBar = () => {
  const { showDropDown, setShowDropDown } = useTopBarStore((state) => ({
    showDropDown: state.showDropDown,
    setShowDropDown: state.setShowDropDown,
  }));
  return (
    <div className="w-full sticky top-0 px-6 py-3 flex items-center justify-between">
      <div className="flex items-center">
        <button className="rounded-full bg-black w-7 h-7 text-white focus:outline-none mr-3">
          <svg
            className="text-xl"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button className="rounded-full bg-black w-7 h-7 text-white focus:outline-none">
          <svg
            className="text-xl"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <div className="relative">
        <button
          onClick={() => setShowDropDown()}
          className="bg-light rounded-full py-2 px-2 flex items-center focus:outline-none"
        >
          <img
            src="https://placekitten.com/200/200"
            className="rounded-full h-6 w-6 mr-2"
            alt=""
          />
          <p className="text-white font-semibold text-xs mr-3">
            Sachin Maharana
          </p>
          <svg
            className="text-white w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {showDropDown && (
          <div className="absolute z-40 bg-light p-2 w-full rounded mt-1">
            <button className="w-full py-2 text-sm text-lightest hover:text-white border-b border-white opacity-75 hover:opacity-100 focus:outline-none">
              Account
            </button>
            <button className="w-full py-2 text-sm text-lightest hover:text-white border-white opacity-75 hover:opacity-100 focus:outline-none">
              Log out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;
