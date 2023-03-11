import React from "react";
import "./not-found.css";
import Img from "./img/undraw_notify_re_65on.svg";

const NotFound = () => {
  return (
    <>
      <div className="flex items-center justify-center p-10">
        <div className="container flex flex-col md:flex-row items-center justify-center p-5 text-gray-700">
          <div className="max-w-md">
            <div className="text-5xl font-dark font-bold">
              Product Not Found
            </div>
            <p className="text-2xl md:text-3xl font-light leading-normal">
              Sorry we couldn't find this Froduct.{" "}
            </p>
            <p className="mb-8">
              But don't worry, you can find plenty of other things on our
              homepage.
            </p>

            <button className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">
              Back to Homepage
            </button>
          </div>
          <div className="max-w-lg">
            <img src={Img} alt="img"></img>
          </div>
        </div>
      </div>

      {/* 
      <div className="flex items-center h-full sm:p-16 dark:bg-gray-900 dark:text-gray-100">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-40 h-40 dark:text-gray-600"
          >
            <path
              fill="currentColor"
              d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
            ></path>
            <rect
              width="176"
              height="32"
              x="168"
              y="320"
              fill="currentColor"
            ></rect>
            <polygon
              fill="currentColor"
              points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"
            ></polygon>
            <polygon
              fill="currentColor"
              points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"
            ></polygon>
          </svg>
          <p className="text-3xl">
            Looks like our services are currently offline
          </p>
          <a
            rel="noopener noreferrer"
            href="#"
            className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
          >
            Back to homepage
          </a>
        </div>
      </div> */}
    </>
  );
};

export default NotFound;
