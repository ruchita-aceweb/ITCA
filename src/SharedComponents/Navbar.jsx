import React, { useState, useEffect } from "react";
import Img from "../Images/logo-white.png";
import { Link, NavLink } from "react-router-dom";
import { CgMenuGridO, CgClose } from "react-icons/cg";


import { aboutusdata, eventdata, professiondata,publicationdata,memberdata,newsdata,forumsdata} from "../Dataadded/Datanav";
import "../Styles/Navstyle.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    setIsSticky(window.scrollY > 0);
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    setNavbar(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isSticky ? "sticky" : ""}`}>
      <nav className="w-full shadow-md bg-black">
      <div className="items-center lg:justify-between max-w-full md:flex  lg:px-24">
          <div className="flex items-center justify-between py-1 md:py-5 md:block">
            <Link to="/home">
              <h2 className="text-2xl font-bold text-white">
                <img src={Img} alt="Logo" className="w-16 h-14 lg:ml-0 ml-4" />
              </h2>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-white rounded-md outline-none focus:border-white focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <CgClose className="w-6 h-6 text-white" />
                ) : (
                  <CgMenuGridO className="w-8 text-white h-7" />
                )}
              </button>
            </div>
          </div>
          <div className={`md:block ${navbar ? "block" : "hidden"}`}>
            <ul className="flex flex-col md:flex-row md:space-x-1 md:space-y-0">
              <li>
                <NavLink
                  to="/home"
                  className="block px-4 py-2  text-white font-bold no-underline hover:rounded-md hover:bg-gray-800 hover:text-white "
                  onClick={handleLinkClick}
                >
                  Home
                </NavLink>
              </li>
              <li className="relative group">
    <div className="block px-4 py-2 text-white dropdown-container hover:rounded-md hover:bg-gray-800 hover:text-white font-bold">
        About
        <div
            className="absolute left-0 z-50 invisible py-2 bg-white border-gray-300 rounded shadow-lg top-10 group-hover:visible text-sm"
            style={{ width: "18rem" }}
        >
            {aboutusdata.map((item, index) => (
                <div className="px-4 py-2" key={index}>
                    <NavLink
                        to={item.link}
                        className="p-2 text-black no-underline font-bold hover:rounded-md hover:bg-gray-800 hover:text-white"
                        onClick={handleLinkClick}
                    >
                        {item.title}
                    </NavLink>
               
                    {item.subItems && (
                        <div className="mt-2 ml-4">
                            {item.subItems.map((subItem, subIndex) => (
                                <NavLink
                                    to={subItem.link}
                                    className="p-2  text-black no-underline font-bold hover:rounded-md hover:bg-gray-800 hover:text-white ml-4"
                                    onClick={handleLinkClick}
                                    key={subIndex}
                                >
                                    {subItem.title}
                                </NavLink>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    </div>
</li>

              <li className="relative group">
                <div className="block px-4 py-2 text-white dropdown-container hover:rounded-md hover:bg-gray-800 hover:text-white font-bold">
                Event
                  <div
                    className="absolute left-0 z-50 invisible  py-2 bg-white border-gray-300 rounded shadow-lg top-10 group-hover:visible text-sm"
                    style={{ width: "12rem" }}
                  >
                    {eventdata.map((items, index) => (
                      <div className="px-4 py-2 " key={index}>
                        <NavLink
                          to={items.link}
                          className="p-2 text-black no-underline font-bold hover:rounded-md hover:bg-gray-800 hover:text-white"
                          onClick={handleLinkClick}
                        >
                          {items.title}
                        </NavLink>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
             
              <li className="relative group">
                <div className="block px-4 py-2 text-white dropdown-container hover:rounded-md hover:bg-gray-800 hover:text-white font-bold">
                Professional
                  <div
                    className="absolute left-0 z-50 invisible  py-2 bg-white border-gray-300 rounded shadow-lg top-10 group-hover:visible text-sm"
                    style={{ width: "15rem" }}
                  >
                    {professiondata.map((items, index) => (
                      <div className="px-4 py-2 " key={index}>
                        <NavLink
                          to={items.link}
                          className="p-2 text-black no-underline font-bold hover:rounded-md hover:bg-gray-800 hover:text-white"
                          onClick={handleLinkClick}
                        >
                          {items.title}
                        </NavLink>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
             
              <li className="relative group">
                <div className="block px-4 py-2 text-white dropdown-container hover:rounded-md hover:bg-gray-800 hover:text-white font-bold">
                Membership
                  <div
                    className="absolute left-0 z-50 invisible  py-2 bg-white border-gray-300 rounded shadow-lg top-10 group-hover:visible text-sm"
                    style={{ width: "14rem" }}
                  >
                    {memberdata.map((items, index) => (
                      <div className="px-4 py-2 " key={index}>
                        <NavLink
                          to={items.link}
                          className="p-2 text-black no-underline font-bold hover:rounded-md hover:bg-gray-800 hover:text-white"
                          onClick={handleLinkClick}
                        >
                          {items.title}
                        </NavLink>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
              <li className="relative group">
                <div className="block px-4 py-2 text-white dropdown-container hover:rounded-md hover:bg-gray-800 hover:text-white font-bold">
                Forums
                  <div
                    className="absolute left-0 z-50 invisible  py-2 bg-white border-gray-300 rounded shadow-lg top-10 group-hover:visible text-sm"
                    style={{ width: "14rem" }}
                  >
                    {forumsdata.map((items, index) => (
                      <div className="px-4 py-2 " key={index}>
                        <NavLink
                          to={items.link}
                          className="p-2 text-black no-underline font-bold hover:rounded-md hover:bg-gray-800 hover:text-white"
                          onClick={handleLinkClick}
                        >
                          {items.title}
                        </NavLink>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
              
              <li className="relative group">
                <div className="block px-4 py-2 text-white dropdown-container hover:rounded-md hover:bg-gray-800 hover:text-white font-bold">
                Publication
                  <div
                    className="absolute left-0 z-50 invisible  py-2 bg-white border-gray-300 rounded shadow-lg top-10 group-hover:visible text-sm"
                    style={{ width: "15rem" }}
                  >
                    {publicationdata.map((items, index) => (
                      <div className="px-4 py-2 " key={index}>
                        <NavLink
                          to={items.link}
                          className="p-2 text-black no-underline font-bold hover:rounded-md hover:bg-gray-800 hover:text-white"
                          onClick={handleLinkClick}
                        >
                          {items.title}
                        </NavLink>
                      </div>
                    ))}
                  </div>
                </div>
              </li>

             
              
             
             
            
              <li>
                <NavLink
                  to="/"
                  className="block px-4 py-2  text-white font-bold no-underline hover:rounded-md hover:bg-gray-800 hover:text-white "
                  onClick={handleLinkClick}
                >
             75 Satelliate
                </NavLink>
              </li>
             
             
            
              
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
