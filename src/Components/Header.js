import React  from "react";
import { Link } from "react-router-dom";


function Header() {


  return (
    <div className="px-3">
      <header className="flex justify-around align-middle  flex-col mt-10  py-2  rounded-lg bg-blue-500 shadow-xl shadow-blue-500/40  ">
        <div className="mt-5 px-4 py-3 bg-white/25 rounded-md mx-3  flex justify-between">
          <Link to="/" className="flex justify-between flex-row items-center ">
            <h2 className="text-2xl font-bold text-right text-white "> مدونة المصمم</h2>
           
          </Link>
           {/* <Darkmode/> */}
        </div>

        <nav className="mt-10 py-4   ">
          <ul className="flex  space-x-3 justify-end ">
           <li>
              <Link className="text-white" to="/">
                الرئيسية
              </Link>
            </li>
          
            <li>
              <Link className="mr-4 text-white" to="/Blog">
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
