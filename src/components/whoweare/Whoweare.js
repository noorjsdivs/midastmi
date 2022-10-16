import React from "react";
import { motion } from "framer-motion";
import ReadmoreBtn from "../buttons/ReadmoreBtn";

const Whoweare = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-20">
      <div className="h-full lg:h-[500px] max-w-screen-lg mx-auto bg-bgmap bg-center flex flex-col lgl:flex-row justify-between gap-20 items-center">
        <div className="w-full lgl:w-1/2 flex flex-col gap-4 font-bodyFont">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-t from-[#004165] via-[#772432] to-[#772432]"
          >
            Who We Are
          </motion.h2>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-[#434343] text-base leading-7"
          >
            Midas Toastmaster Club is Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nulla iusto vero possimus eius velit, explicabo
            cupiditate aliquam consequuntur at illum. Lorem ipsum dolor sit amet
            lorem consequer.
          </motion.p>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <ReadmoreBtn />
          </motion.div>
        </div>
        <div className="w-full lgl:w-1/2 relative flex flex-col gap-4 md:flex-row justify-center items-center h-full">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="smallCard1"
          >
            <p className="font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-[#004165] via-[#772432] to-[#772432] leading-8 mb-2">
              20+ <br />
            </p>
            <p className="font-bodyFont text-transparent text-xl font-medium uppercase bg-clip-text bg-gradient-to-r from-[#004165] via-[#772432] to-[#772432] leading-6">
              chartered <br /> members
            </p>
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="smallCard2"
          >
            <p className="font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-[#004165] via-[#772432] to-[#772432] leading-8 mb-2">
              2+ <br />
            </p>
            <p className="font-bodyFont text-transparent text-xl font-medium uppercase bg-clip-text bg-gradient-to-r from-[#004165] via-[#772432] to-[#772432] leading-6">
              Years of
              <br /> Commitement
            </p>
          </motion.div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="smallCard3"
          >
            <p className="font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-[#004165] via-[#772432] to-[#772432] leading-8 mb-2">
              5+ <br />
            </p>
            <p className="font-bodyFont text-transparent text-xl font-medium uppercase bg-clip-text bg-gradient-to-r from-[#004165] via-[#772432] to-[#772432] leading-6">
              times divison
              <br /> winners
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Whoweare;
