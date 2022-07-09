import "./App.css";
import Header from "./Components/Header";
import { useState , useEffect  } from "react";
import HomePage from "./Pages/HomePage";
import Blog from "./Pages/Blog";
import SingalPost from "./Pages/SingalPost";
import Error from "./Pages/Error";

import { BrowserRouter, Routes, Route, Router, Link } from "react-router-dom";


function App() {


  return (
    <BrowserRouter>
      <div className="app font-body-04 md:w-3/6 m-auto  sm:px-0 px-0 ">
        {/*  the content  */}
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<SingalPost/>} />
          <Route path="*" element={<Error />} />
        </Routes>
        {/* end  the content  */}
      </div>
    </BrowserRouter>
  );
}

export default App;
