import React from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";



export default function HomePage() {
  return (
    <>
      <Header />
      <div className=" mx-2 mt-24">
        <div className="mt-10">
          <h2 className="font-bold text-xl text-black/80 "> عن المدونة</h2>
          <h3 className=" mt-3 text-normal text-black/50 text-right ">
            مرحبا بكم في مدونة الـمصمم التي تهتم بتصميم تجربة المستخدم و واجهة
            المستخدم بالإظافة الى برمجة الواجهات الأمامية للمواقع
          </h3>
          <h3 className="text-normal text-black/50 text-right mt-5">
            يتم النشر أسبوعيا و باللغة العربية , حول التصميم و البرمجة
          </h3>
        </div>
        {/* <hr className='mt-10' /> */}
        <div className="mt-14  text-center bg-gray-200/30 py-4 rounded-xl">
          <h3 className=" font-bold  text-black/80 my-4 "> أين تجدني</h3>
          <div className="flex justify-center flex-row flex-wrap mt-2   ">
          
            <div className="bg-blue-400   mt-2 mx-2 w-full sm:w-[18rem]  rounded-xl overflow-hidden  ">
              <a  className="items-center flex justify-around   h-20 rounded-lg" href="https://www.behance.net/mohmdvrtl">
                <img
                  className="w-10 h-10  text-white  "
                  alt="behance"
                  src="/Images/icons8-behance-1.svg"
                />
            
              <h4 className="text-white"> behance</h4>
              </a>
            </div>
            <div className="bg-blue-400   mt-2 mx-2 w-full sm:w-[18rem]  rounded-xl overflow-hidden ">
              <a
                className="items-center flex justify-around   h-20 rounded-lg"
                href="https://www.facebook.com/profile.php?id=100014856492651"
              >
                <img
                  className="w-10 h-10  text-white  "
                  alt="behance"
                  src="/Images/fb.svg"
                />
                <h4 className="text-white"> facebook</h4>
              </a>
            </div>
            <div className="bg-blue-400   mt-2 mx-2 w-full sm:w-[18rem]  rounded-xl overflow-hidden">
              <a
                className="items-center flex justify-around   h-20 rounded-lg"
                href="https://twitter.com/MohamedBoukhan5"
              >
               {" "}
                <img
                  className="w-10 h-10  text-white  "
                  alt="behance"
                  src="./Images/icons8-twitter.svg"
                />
                <h4 className="text-white"> twitter</h4>
              </a>
            </div>

            <div className="bg-blue-400  hover:bg-blue-400/70  mt-2 mx-2 w-full sm:w-[18rem]  rounded-xl overflow-hidden">
              <a
                className="items-center flex justify-around   h-20 rounded-lg"
                href="https://twitter.com/MohamedBoukhan5"
              >
   
                <img
                  className="w-10 h-10  text-white  "
                  alt="behance"
                  src="./Images/email.png"
                />
                <h4 className="text-white"> email</h4>
              </a>
            </div>
         
            {/*  src="./Images/email.png" */}
          </div>
        </div>
      </div>
    </>
  );
}
