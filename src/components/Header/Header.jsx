import React from "react";

const Header = () => {
  return (
    <header className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src="src/assets/ChapterXlogo.png"
            alt="ChapterX"
            className="w-16 h-auto"
          />
          <h1 className="text-white">Chapter X</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
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
