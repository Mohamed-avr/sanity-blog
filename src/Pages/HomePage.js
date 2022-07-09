import React from "react";
import Header from "../Components/Header";

export default function HomePage() {
  return (
    <div className="mt-10 ">
      <Header />
      <div className=" mx-4">
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

        <div className="mt-10">
          <h3 className=" font-bold  text-neutral-500 "> تجدني في</h3>
          <div className="flex justify-around mt-5 flex-row flex-wrap  items-center align-middle space-y-2"> 
            <div className="bg-blue-500 sm:w-2/6 w-3/4 h-20"> </div>
            <div className="bg-blue-500 sm:w-2/6 w-3/4 h-20"> </div>
            <div className="bg-blue-500 sm:w-2/6 w-3/4 h-20"> </div>
          </div>
        </div>
      </div>
    </div>
  );
}
