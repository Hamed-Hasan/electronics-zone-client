import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import { auth } from '../../firebase.init';
import useNav from '../../hooks/useNav';
import './Nav.css'
const Nav = () => {
    const [user] = useAuthState(auth);

    const { navbar, navBarLogo } = useNav();

    return (


        <nav
        as={Link}
        className={`border-gray-200 px-2 sm:px-8 py-2.5 fixed w-full top-0 z-50 transition-all ${
          navbar && "bg-white shadow-lg set-border"
        }`}
      >
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="https://simple-portfolio-pages.netlify.app/" target='_blank' className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              {navBarLogo}
            </span>
          </a>
          <div className="flex md:order-2">
            <button
              type="button"
              className="text-white bg-[#F59E0B] hover:bg-[#166549] focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:focus:ring-blue-800"
            >
              {user ? (
                <span className="text-white" onClick={() => signOut(auth)}>
                  Logout
                </span>
              ) : (
                <Link to="/login" className="text-white">
                  Login
                </Link>
              )}
            </button>
            <button
              data-collapse-toggle="mobile-menu-4"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-4"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fillRule="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fillRule="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-4"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              {/* <Link href="home#services">Services</Link> */}

              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  Blog
                </NavLink>
              </li>
              
         {
           user &&    <li>
           <NavLink
             to="/manageservice"
             className={({ isActive }) =>
               isActive ? "active" : "inactive"
             }
           >
             Manage Service
           </NavLink>
         </li>
         }
         {
           user &&    <li>
           <NavLink
             to="/addItem"
             className={({ isActive }) =>
               isActive ? "active" : "inactive"
             }
           >
             AddItem
           </NavLink>
         </li>
         }
            </ul>
          </div>
        </div>
      </nav>




    );
};

export default Nav;