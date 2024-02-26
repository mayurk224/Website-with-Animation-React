import { motion, useAnimation } from "framer-motion";
import React from "react";

function Featured() {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div className="w-full py-20">
      <div className="w-full px-10 bg-zinc-900 border-b-[1px] pb-20 border-zinc-700">
        <h1 className="text-7xl tracking-tight">Featured Projects</h1>
      </div>
      <div className="px-20">
        <div className="cards flex mt-10 gap-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-1/2 h-[80vh] "
          >
            <h1 className="text-yellow-100 z-[9] leading-none text-8xl absolute flex font-semibold tracking-tighter left-[72%] top-1/2 translate-x-1/2  overflow-hidden -translate-y-1/2">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ease:[0.22,1,0.36,1],delay:index*.05}}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full overflow-hidden rounded-xl h-full">
              <img
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
                className="w-full h-full bg-cover"
              />
            </div>
          </motion.div>

          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-1/2 h-[80vh] "
          >
            <h1 className="text-yellow-100 z-[9] leading-none text-8xl absolute flex  font-semibold tracking-tighter right-[100%] top-1/2 translate-x-1/2 -translate-y-1/2 overflow-hidden">
              {"VISE".split("").map((item, index) => (
                <motion.span
                key={index}
                initial={{ y: "100%" }}
                animate={cards[1]}
                transition={{ease:[0.22,1,0.36,1],delay:index*.05}}
                className="inline-block"
              >
                {item}
              </motion.span>
              ))}
            </h1>
            <div className="card w-full overflow-hidden rounded-xl h-full">
              <img
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
                className="w-full h-full bg-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
