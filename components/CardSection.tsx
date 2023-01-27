import Image from "next/image";
import type { FC } from "react";
import card1 from "public/card1.png";
import card2 from "public/card2.png";
import bg from "public/bg.png";
import { motion } from "framer-motion";

interface CardSectionProps {}

const CardSection: FC<CardSectionProps> = ({}) => {
  return (
    <div className="flex flex-col w-full items-center justify-center py-32 gap-16 overflow-hidden">
      <Image src={bg} alt="bg" className="absolute w-full h-full" />
      <div className="flex flex-col gap-6 text-center">
        <motion.h2
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.75 }}
          className="text-6xl font-bold text-white "
        >
          Master 4 base hero classes
        </motion.h2>
        <motion.p
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.75 }}
          className="text-lg leading-5 text-white opacity-70"
        >
          Start playing Legends using starter docs it can help new <br />
          players to make first steps and get base skills
        </motion.p>
      </div>

      <div className="flex gap-10 items-center">
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: "40%", opacity: 0 }}
          transition={{ duration: 0.75, delay: 0 }}
        >
          <Image src={card1} alt="card" className="w-72" />
        </motion.div>
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: "40%", opacity: 0 }}
          transition={{ duration: 0.75, delay: 0.25 }}
        >
          <Image src={card2} alt="card" className="w-72" />
        </motion.div>
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: "40%", opacity: 0 }}
          transition={{ duration: 0.75, delay: 0.5 }}
        >
          <Image src={card1} alt="card" className="w-72" />
        </motion.div>
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: "40%", opacity: 0 }}
          transition={{ duration: 0.75, delay: 0.75 }}
        >
          <Image src={card2} alt="card" className="w-72" />
        </motion.div>
      </div>
    </div>
  );
};

export default CardSection;
