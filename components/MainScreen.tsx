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
    <section className="min-w-screen min-h-screen ">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        transition={{ ease: "easeInOut" }}
        className="bg-[url('../public/homebg.png')] bg-no-repeat bg-contain bg-right-top bg-[#070614]"
      >
        <div className="text-white min-h-[100vh] max-w-[40vw] flex flex-col justify-center p-[5rem] gap-[1rem] ">
          <div className="overflow-hidden">
            <motion.h1
              variants={item}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="text-5xl font-semibold"
            >
              Beautiful Game, Intense reality
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.p
              variants={item}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="text-gray-300"
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
              <button className="bg-[#4521f3] px-4 py-2 border border-[#4521f3] rounded-md">
                Play Now
              </button>
              <button className=" px-4 py-2 border border-[#4521f3] rounded-md">
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="bg-[#070614] p-[5rem] overflow-hidden">
        <motion.div
          initial={{ x: "50%", opacity: 0 }}
          whileInView={{ x: "0%", opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-white  mx-[5rem]  px-[5rem] py-[3rem] flex items-center gap-[8rem]  rounded-lg bg-[url('../public/bg.jpg')] bg-opacity-1 bg-no-repeat bg-cover bg-center bg-[#372e4a] bg-blend-multiply shadow-[0px_0px_20px_20px_#070817] overflow-hidden"
        >
          <motion.div
            className="flex flex-col gap-2 w-fit "
            variants={fromLeft}
            initial="hidden"
            whileInView="show"
            transition={{ ease: "easeInOut", delay: 1 }}
          >
            <motion.h2
              variants={itemFromLeft}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="text-3xl font-semibold max-w-[24vw]"
            >
              Synergy of light update is live now
            </motion.h2>
            <motion.p
              variants={itemFromLeft}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="text-gray-200 max-w-[30vw]"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas a
              dolores sapiente placeat accusamu.
            </motion.p>
            <motion.button
              variants={itemFromLeft}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="bg-[#4521f3] px-4 py-2 border border-[#4521f3] rounded-md w-fit"
            >
              Play Now
            </motion.button>
          </motion.div>
          <motion.div
            className="flex  items-center gap-2 h-fit "
            variants={container}
            initial="hidden"
            whileInView="show"
            transition={{ ease: "easeInOut", delay: 2 }}
          >
            <motion.div
              variants={item}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="bg-[#090715] p-2 rounded-[1rem] border-2 border-gray-900 mt-[2rem]"
            >
              <Image
                src={symbol2}
                alt="water symbol"
                className="rounded-full"
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
                className="rounded-full"
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
                className="rounded-full"
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
                className="rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default MainScreen;
