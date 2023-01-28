import Image from "next/image";
import React from "react";
import symbol1 from "public/symbol1.png";
import symbol2 from "public/symbol2.png";
import symbol3 from "public/symbol3.png";
import symbol4 from "public/symbol4.png";
import { motion } from "framer-motion";
import {
  container,
  fromLeft,
  item,
  itemFromLeft,
} from "../animations/animation";

function MainScreen() {
  return (
    <section className="">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        transition={{ ease: "easeInOut" }}
        className="bg-[url('../public/107.png')] bg-black min-h-[100vh] bg-no-repeat bg-contain bg-right-top "
      >
        <div className="text-white max-w-[45vw] h-[80vh] flex items-center justify-center px-[7rem]">
          <div className="flex flex-col gap-8 justify-center mt-44">
            <div className="overflow-hidden">
              <motion.h1
                variants={item}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="text-7xl font-semibold"
              >
                Beautiful Game, Intense reality
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.p
                variants={item}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="text-gray-300 text-lg"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                quis in assumenda amet consectetur adipisicing.
              </motion.p>
            </div>
            <div className="overflow-hidden">
              <motion.div
                variants={item}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="flex gap-3"
              >
                <button className="bg-[#4521f3] text-lg  px-5 py-3 border border-[#4521f3] rounded-lg">
                  Play Now
                </button>
                <button className=" text-lg uppercase px-5 py-3 border border-[#4521f3] rounded-lg">
                  Learn More
                </button>
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ x: "50%", opacity: 0 }}
          whileInView={{ x: "0%", opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-white w-full flex items-center gap-72 px-52 py-72"
        >
          <motion.div
            className="flex flex-col gap-5 w-fit "
            variants={fromLeft}
            initial="hidden"
            whileInView="show"
            transition={{ ease: "easeInOut", delay: 1 }}
          >
            <motion.h2
              variants={itemFromLeft}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="text-[3rem] leading-[3rem] font-semibold max-w-[24vw]"
            >
              Synergy of light update is live now
            </motion.h2>
            <motion.p
              variants={itemFromLeft}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="text-gray-200 text-lg max-w-[30vw]"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas a
              dolores sapiente placeat accusamu.
            </motion.p>
            <div className="flex items-center gap-6">
              <motion.button
                variants={itemFromLeft}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="bg-[#4521f3] px-5 text-lg uppercase font-bold mt-1 py-3 border border-[#4521f3] rounded-md w-fit"
              >
                Play Now
              </motion.button>
              <motion.button
                variants={itemFromLeft}
                transition={{ duration: 1, ease: "easeInOut" }}
                className=" text-lg uppercase px-5 font-bold py-3 border border-[#4521f3] rounded-lg"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center gap-16 h-fit "
            variants={container}
            initial="hidden"
            whileInView="show"
            transition={{ ease: "easeInOut", delay: 2 }}
          >
            <motion.div
              variants={item}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="bg-[#090715] p-2 rounded-[1rem] border-2 border-gray-900 mt-[2rem] "
            >
              <Image
                src={symbol2}
                alt="water symbol"
                className="rounded-full w-20"
              />
            </motion.div>
            <motion.div
              variants={item}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="bg-[#090715] p-2 rounded-[1rem] border-2 border-gray-900"
            >
              <Image
                src={symbol1}
                alt="water symbol"
                className="rounded-full w-20"
              />
            </motion.div>

            <motion.div
              variants={item}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="bg-[#090715] p-2 rounded-[1rem] border-2 border-gray-900 mt-[2rem]"
            >
              <Image
                src={symbol4}
                alt="water symbol"
                className="rounded-full w-20"
              />
            </motion.div>
            <motion.div
              variants={item}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="bg-[#090715] p-2 rounded-[1rem] border-2 border-gray-900"
            >
              <Image
                src={symbol3}
                alt="water symbol"
                className="rounded-full w-20"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default MainScreen;
