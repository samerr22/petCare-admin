import React from "react";
import { Link } from "react-router-dom";
import Cat from "../img/cat.jpg";

export default function Schedul() {
  return (
    <div className="h-[600px] relative"> {/* Added relative class */}
        <img src={Cat} alt="" className="w-full h-full object-cover" /> {/* Added object-cover class */}
        
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-10"> 
        <div className="bg-opacity-20 border shadow-xl bg-black rounded-xl">
          <p className="text-white   text-2xl font-serif ml-4  ">
            If the border still doesn't show, ensure that there are no conflicting styles elsewhere
            in your CSS or inline styles that might be overriding this class. 
            Additionally, check that your Tailwind CSS configuration is correctly set up and that you're importing the 
            Tailwind CSS file into your project.
          </p>
          </div>
        </div>


      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center gap-14 mt-5">
     
        <Link to="/Creatsch">
          <button className="bg-blue-500 hover:bg-blue-700  text-white font-serif py-2 px-4 rounded-full">Create schedule</button> {/* Added Tailwind button styles */}
        </Link>
        <Link to="/Viewschedul">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-serif py-2 px-4 rounded-full">View schedule</button> {/* Added Tailwind button styles */}
        </Link>
      </div>
    </div>
  );
}
