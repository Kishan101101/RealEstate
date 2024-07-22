import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className=" mx-auto flex justify-between items-center p-3 max-w-6xl">
        <h1 className="font bold text-sm sm:text-xl flex flex-wrap ">
          <span className="text-slate-500">Kishan</span>
          <span className="text-slate-700">Estate</span>
        </h1>
        <form className="bg-slate-100 rounded-lg flex items-center p-3">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus-outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>
          <Link to="/SignIn">
            <li className="sm:inline text-slate-700 hover:underline">SignIn</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;