import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Assest/logo.png"; // Adjust the path if needed

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function toggleDropdown() {
    setIsDropdownOpen(!isDropdownOpen);
  }

  function handlLogOut() {
    window.localStorage.removeItem("email");
    window.location.pathname = "/home";
  }

  return (
    <header className="bg-primary-color shadow-lg px-12 py-4 flex justify-between items-center sticky top-0 z-[1000] border-b-2 border-blue-100 backdrop-blur-md transition-all duration-300">
      <div className="logo flex items-center">
        <Link to="/" className="block">
          <img
            src={Logo}
            alt="Logo"
            className="h-[100px] w-auto object-contain transition-transform duration-200 hover:scale-105"
          />
        </Link>
      </div>
      <ul className="flex gap-10 list-none m-0 p-0 text-[18px] text-secondary-color">
        <li className="relative">
          <Link
            to="/"
            className="font-medium py-2 relative transition-colors duration-200 hover:text-blue-500 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-blue-700 after:transition-all after:duration-300 hover:after:w-full"
          >
            HOME
          </Link>
        </li>
        <li className="relative">
          <Link
            to="/about"
            className=" font-medium py-2 relative transition-colors duration-200 hover:text-blue-500 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-blue-700 after:transition-all after:duration-300 hover:after:w-full"
          >
            ABOUTUS
          </Link>
        </li>
        <li className="relative">
          <Link
            to="/servic"
            className=" font-medium py-2 relative transition-colors duration-200 hover:text-blue-500 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-blue-700 after:transition-all after:duration-300 hover:after:w-full"
          >
            SERVICES
          </Link>
        </li>
        <li className="relative">
          <Link
            to="/profile"
            className=" font-medium py-2 relative transition-colors duration-200 hover:text-blue-500 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-blue-700 after:transition-all after:duration-300 hover:after:w-full"
          >
            PROFILE
          </Link>
        </li>
        <li className="relative">
          <div
            className="font-medium py-2 relative transition-colors duration-200 hover:text-blue-500 cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-blue-700 after:transition-all after:duration-300 hover:after:w-full"
            onClick={toggleDropdown}
          >
            PAGES
          </div>
          {isDropdownOpen && (
            <ul className="absolute left-0 mt-2 bg-white shadow-md rounded-md w-40 z-10">
              <li className="p-2 hover:bg-gray-100">
                <Link to="/pagesStudent" className="block text-gray-800">
                  pagesStudent 
                </Link>
              </li>
              <li className="p-2 hover:bg-gray-100">
                <Link to="/pagesSick" className="block text-gray-800">
                  pagesSick 
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
      <div className="header-buttons flex gap-4 items-center">
        <button
          type="button"
          className="semsir bg-transparent border-none text-gray-600 text-xl cursor-pointer p-2"
        ></button>
        {!window.localStorage.getItem("email") ? (
          <>
            <Link
              to="/register"
              className="register px-6 py-3 bg-secondary-color text-white rounded-md font-medium transition-all duration-300 shadow-md hover:scale-105 hover:shadow-lg hover:from-blue-600 hover:to-blue-800"
            >
              SignUp
            </Link>
            <Link
              to="/login"
              className="register px-6 py-3 bg-secondary-color text-white rounded-md font-medium transition-all duration-300 shadow-md hover:scale-105 hover:shadow-lg hover:from-blue-600 hover:to-blue-800"
            >
              Login
            </Link>
          </>
        ) : (
          <button
            type="button"
            className="register px-6 py-3 bg-secondary-color text-white rounded-md font-medium transition-all duration-300 shadow-md hover:scale-105 hover:shadow-lg hover:from-blue-600 hover:to-blue-800"
            onClick={handlLogOut}
          >
            LogOut
          </button>
        )}
      </div>
    </header>
  );
}