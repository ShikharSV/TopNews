import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div>
        <nav className="px-4  py-4 flex items-center justify-between">
          <div className="logo flex items-center">
            {/* <img className="w-14 ml-8 pb-1" src={logo} alt="" /> */}
            <h1 className="text-3xl mx-2 font-bold text-slate-700">TOP NEWS</h1>
          </div>
          <div className="items">
            <ul className="flex items-center text-slate">
              <li className="link-underline px-2 mx-2 py-1 text-slate-500 hover:text-black transition-all ease-in-out duration-100">
                <Link to="/">Home</Link>
              </li>
              <li className="link-underline px-2 mx-2 py-1 text-slate-500 hover:text-black transition-all ease-in-out duration-100">
                <Link to="/">General</Link>
              </li>
              <li className="link-underline px-2 mx-2 py-1 text-slate-500 hover:text-black transition-all ease-in-out duration-100">
                <Link to="/business">Business</Link>
              </li>
              <li className="link-underline px-2 mx-2 py-1 text-slate-500 hover:text-black transition-all ease-in-out duration-100">
                <Link to="/entertainment">Entertainment</Link>
              </li>
              <li className="link-underline px-2 mx-2 py-1 text-slate-500 hover:text-black transition-all ease-in-out duration-100">
                <Link to="/health">Health</Link>
              </li>
              <li className="link-underline px-2 mx-2 py-1 text-slate-500 hover:text-black transition-all ease-in-out duration-100">
                <Link to="/sports">Sports</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
