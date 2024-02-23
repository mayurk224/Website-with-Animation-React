import React from "react";

function Featured() {
  return (
    <div className="w-full py-20">
      <div className="w-full px-10 bg-zinc-900 border-b-[1px] pb-20 border-zinc-700">
        <h1 className="text-7xl tracking-tight">Featured Projects</h1>
      </div>
      <div className="px-20">
        <div className="cards flex mt-10 gap-10">

          <div className="cardcontainer relative w-1/2 h-[80vh] ">
            <h1 className="text-yellow-100 z-[9] leading-none text-8xl absolute font-semibold tracking-tighter left-full top-1/2 -translate-x-1/2 -translate-y-1/2">
            {"FYDE".split('').map((item,index)=>{
                <span className="">{item}</span>
              })}
            </h1>
            <div className="card w-full overflow-hidden rounded-xl h-full">
              <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" srcset="" className="w-full h-full bg-cover"/>
            </div>
          </div>

          <div className="cardcontainer relative w-1/2 h-[80vh] ">
            <h1 className="text-yellow-100 z-[9] leading-none text-8xl absolute font-semibold tracking-tighter right-full top-1/2 translate-x-1/2 -translate-y-1/2">
              {"VISE".split('').map((item,index)=>{
                <span className="">{item}</span>
              })}
              </h1>
            <div className="card w-full overflow-hidden rounded-xl h-full">
              <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" srcset="" className="w-full h-full bg-cover"/>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Featured;
