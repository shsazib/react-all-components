import React from "react";
import "./not-found.css";
import Img from "./img/undraw_notify_re_65on.svg";

const NotFound = () => {
  return (
    <>
      <div className="flex  items-center justify-center md:p-10">
        <div className="container flex flex-col-reverse gap-5 md:gap-2 text-center md:text-left md:flex-row items-center justify-center p-5 text-gray-700">
          <div className=" max-w-md">
            <div className="text-3xl md:text-5xl font-dark font-bold">
              Product Not Found
            </div>
            <p className="text-2xl md:text-3xl font-light leading-normal">
              Sorry we couldn't find this Froduct.
            </p>
            <p className="mb-8">
              But don't worry, you can find plenty of other things on our
              homepage.
            </p>

            <button className="px-4 inline py-3 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">
              Back to Homepage
            </button>
          </div>
          <div className="max-w-lg">
            <img src={Img} alt="img"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
