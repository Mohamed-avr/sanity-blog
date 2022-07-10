import React, { useRef } from "react";
import { Link } from "react-router-dom";

function Header() {
  const navBarRef = useRef();


  window.onscroll =  function() {
    if(window.scrollY > 50) {
      navBarRef.current.classList.add('shadow-2xl')
    } else {
      navBarRef.current.classList.remove('shadow-2xl')
    }
  }

  return (
    <div
      className="px-3 shadow-black/10   w-screen fixed z-10 top-0 left-0 bg-white"
      ref={navBarRef}
    >
      <header className="flex justify-around  align-middle items-center ">
        <Link to="/" className="flex justify-between flex-row items-center ">
          <h2 className="text-xl font-bold text-right text-black/80 ">
            {" "}
            مدونة صميم
          </h2>
        </Link>

        <nav className=" py-4   ">
          <ul className="flex  space-x-3 justify-end ">
            <li>
              <Link className="text-black/80" to="/">
                عن صميم ؟
              </Link>
            </li>

            <li>
              <Link className="mr-4 text-black/80" to="/Blog">
                المدونة
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
