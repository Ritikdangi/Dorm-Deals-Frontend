import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Profile from '../Images/4.jpg';
import { FaSearch, FaPlus, FaCaretDown } from 'react-icons/fa'; // Import the FaCaretDown icon

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav className="bg-gray-900 p-4 flex justify-between items-center">
        {/* Left Section */}
        <div className="text-white text-2xl font-bold ml-8 flex items-center">
          DormDeals<span className="text-red-500 text-3xl">.</span>
        </div>

        {/* Middle Section */}
        <div className="w-1/4 flex">
          <input
            type="text"
            className="w-full px-2 py-1 border rounded-s-2xl"
            placeholder="Search..."
          />
          <button className="px-4 bg-red-600 rounded-e-3xl">
            <FaSearch className="text-white" />
          </button>
        </div>

        {/* Tab Section */}
        <div className="flex justify-center space-x-4 relative">
          {/* Categories Dropdown Button */}
          <button
            onClick={toggleDropdown}
            className="text-white hover:text-red-500 px-4 transition duration-300 ease-in-out flex items-center"
          >
            Categories
            <FaCaretDown className="ml-2" /> {/* Add the arrow icon */}
          </button>
          {isDropdownOpen && (
            <div className="absolute left-0 mt-8 w-48 bg-white border border-gray-300 rounded-lg shadow-md">
              <ul className="py-2">
                <li>
                  <Link to="/dashboard"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Electronics
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Electronics
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Electronics
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Electronics
                  </Link>
                </li>
                {/* Add more categories as needed */}
              </ul>
            </div>
          )}
          <Link to="/about" className="text-white hover:text-red-500 px-4 transition duration-300 ease-in-out">
            About us
          </Link>
          <Link to="/sell" className="text-white bg-red-500 rounded-3xl hover:text-red-500 px-4 transition duration-300 ease-in-out">
            Sell
          </Link>
        </div>

        {/* Right Section */}
        <div className="text-white flex items-center">
          <div className="rounded-full overflow-hidden h-8 w-8 mr-2">
            <img
              src={Profile} // Replace with the path to your image
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>
          <Link to="/profile" className="hover:underline">
            My Account
          </Link>
        </div>
      </nav>
      <div className="bg-red-500 h-0.5"></div>
    </>
  );
};

export default Navbar;