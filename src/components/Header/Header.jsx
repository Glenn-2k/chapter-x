import React from "react";

const Header = () => {
  return (
    <header className="bg-black p-4">
      <div className="container mx-auto flex flex-row justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src="src/assets/ChapterXlogo.png"
            alt="ChapterX"
            className="w-16 h-auto"
          />
          <h1 className="text-white">Chapter X</h1>
        </div>
        <nav className="flex-grow">
          <ul className="flex flex-row justify-end space-x-4">
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
