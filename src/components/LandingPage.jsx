import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textStructure mt-52 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker" key={index}>
              <div className="w-fit flex items-baseline">
                <div>
                    {index=== 1 &&(<div className="mr-[0.5vw] w-[8vw] h-[5.5vw] bg-red-600 rounded-md flex"></div>)}
                </div>
              <h1 className="text-[8vw] uppercase font-bold leading-[6.5vw]">
                {item}
              </h1>
              </div>
            </div>
          ); 
        })}
      </div>
      <div className="border-t-2 border-zinc-800 mt-24 flex justify-between items-center py-6 px-20">
        {[
          "For Public and Private Companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p
              key={index}
              className="text-md font-light tracking-tight leading-none"
            >
              {item}
            </p>
          );
        })}
        <div className="start flex gap-2 items-center">
          <div className="px-5 py-2 border-[1px] border-zinc-700 rounded-full text-base  uppercase font-normal">
            Start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-zinc-700 border-[1px] rounded-full">
            <span className="rotate-45">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
