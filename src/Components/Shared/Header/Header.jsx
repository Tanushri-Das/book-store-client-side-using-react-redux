import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import {
  useGetCartQuery,
  useGetWishlistQuery,
} from "../../../features/api/apiSlice";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: carts } = useGetCartQuery();
  const { data: wishlists } = useGetWishlistQuery();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#3944bc] py-2">
      <div className="mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between h-16">
          <NavLink
            to="/"
            className="mr-10 text-xl lg:text-3xl text-white font-mono font-bold flex-shrink-0"
          >
            Books
          </NavLink>
          <div className="flex justify-center items-center">
            <div className="hidden lg:block ml-auto">
              <div className="flex justify-center space-x-4">
                <NavLink to="/" className="links text-white text-xl font-bold">
                  Home
                </NavLink>
                <NavLink
                  to="/books"
                  className="links text-white text-xl font-bold px-5"
                >
                  Books
                </NavLink>
                <NavLink
                  to="/dashboard/mycart"
                  className="flex justify-center items-center"
                >
                  <button className="btn relative">
                    <Link to="/myCart">
                      <FaShoppingCart className="text-2xl text-white" />
                      <div className=" absolute top-[-20px] left-[10px] bg-white w-7 h-7 rounded-full">
                        <p className="text-lg font-semibold">
                          {carts?.length || 0}
                        </p>
                      </div>
                    </Link>
                  </button>
                </NavLink>
                <NavLink
                  to="/dashboard/mycart"
                  className="flex justify-center items-center ps-5"
                >
                  <button className="btn relative">
                    <Link to="/myWishlists">
                      <FaBell className="text-2xl text-white" />
                      <div className=" absolute top-[-20px] left-[10px] bg-white w-7 h-7 rounded-full">
                        <p className="text-lg font-semibold">
                          {wishlists?.length || 0}
                        </p>
                      </div>
                    </Link>
                  </button>
                </NavLink>
              </div>
            </div>
            <div className="-mr-2 flex lg:hidden">
              <a
                onClick={toggleNavbar}
                href="#"
                className="bg-white inline-flex items-center justify-center p-2 rounded-md text-black"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-start">
            <NavLink
              to="/"
              onClick={closeNavbar}
              className="links text-white text-xl px-3 pb-3 font-bold block"
            >
              Home
            </NavLink>
            <NavLink
              onClick={closeNavbar}
              to="/books"
              className="link text-xl text-white px-3 pb-3 font-bold block"
            >
              Books
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
