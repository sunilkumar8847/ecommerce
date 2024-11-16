import React from "react";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { FaGift } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { CiLineHeight } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-around items-center p-4">
        <div className="text-2xl font-bold text-orange-500 cursor-pointer">Sunil</div>
        <div className="text-gray-500 font-bold flex cursor-pointer hover:bg-gray-300 transition duration-300 p-2 rounded-full">
          <CiLineHeight className="pt-1 text-lg " />
          <a href="#" >Categories</a>
        </div>
        <div className="flex w-96">
          <input
            type="text"
            placeholder="Search products"
            className="border border-black rounded-l-full p-2 w-full text-black"
          />
          <button className="bg-orange-500 text-white rounded-r-full p-4">
            <FaSearch />
          </button>
        </div>
        <div>
          <a href="#" className="text-gray-600 font-bold rounded-full hover:bg-gray-300 transition duration-300 p-2">Signin</a>
        </div>
        <div className="flex space-x-6 items-center ">
          <div className="rounded-full hover:bg-blue-300 transition duration-300 p-2">
            <FaGift className="text-orange-500 text-2xl" />
          </div>
          <div className="rounded-full hover:bg-blue-300 transition duration-300 p-2">
            <FiHeart className="text-gray-600 text-2xl" />
          </div>
          <div className="rounded-full hover:bg-blue-300 transition duration-300 p-2">
            <FiShoppingCart className="text-gray-600 text-2xl" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
