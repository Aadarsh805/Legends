import type { FC } from "react";
import { motion } from "framer-motion";

interface CustomDeckSectionProps {}

const CustomDeckSection: FC<CustomDeckSectionProps> = ({}) => {
  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <div className="bg-[url('../public/deck-bg.png')] bg-no-repeat bg-cover bg-center overflow-hidden rounded-xl text-gray-200 w-[60vw] p-[5rem]">
        <motion.div
          className="flex flex-col gap-5 w-fit "
          initial="hidden"
          whileInView="show"
          transition={{ ease: "easeInOut", delay: 1 }}
        >
          <motion.h2
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-[3rem] leading-[3rem] font-semibold max-w-[24vw]"
          >
            Explore new worlds with your custom decks
          </motion.h2>

          <div className="flex items-center gap-6">
            <motion.button
              transition={{ duration: 1, ease: "easeInOut" }}
              className="bg-[#4521f3] px-5 text-lg uppercase font-bold mt-1 py-3 border border-[#4521f3] rounded-md w-fit"
            >
              View All Cards
            </motion.button>
            <motion.button
              transition={{ duration: 1, ease: "easeInOut" }}
              className=" text-lg uppercase px-5 font-bold py-3 border border-[#4521f3] rounded-lg"
            >
              see deck builder
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CustomDeckSection;
