import React from "react";
import { motion } from "framer-motion";
import { FiGlobe } from "react-icons/fi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BsMegaphone } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";

const Whatwedo = () => {
  return (
    <div className="w-full h-auto py-6">
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.4,
          y: { type: "spring", stiffness: 60 },
          opacity: { duration: 0.2 },
          ease: "easeIn",
          duration: 1,
        }}
        className="font-bold font-bodyFont text-center text-transparent text-4xl bg-clip-text bg-gradient-to-t from-[#004165] via-[#772432] to-[#772432]"
      >
        Who We Do
      </motion.h2>
      <div className="max-w-screen-xl mx-auto flex flex-col md:px-10 lg:flex-row gap-10 lg:gap-0 xl:gap-10 px-2 xl:px-0 py-16">
        <motion.div className="flex flex-col gap-3 px-10 md:px-20 lg:px-4 xl:px-6 py-8 hover:shadow-2xl cursor-pointer hover:scale-105 xl:hover:scale-110 transition ease-in-out duration-500 rounded-xl group">
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <FiGlobe className="text-[50px] text-[#772432] group-hover:text-[#004165]" />
          </motion.p>
          <motion.h3
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-xl font-titleFont font-semibold text-[#004165] group-hover:text-[#772432]"
          >
            Personal Development
          </motion.h3>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-base text-justify text-[#434343]"
          >
            Lorem ipsum dolor sit constur, adipisicing elitment. Repellendus
            reiciendis placeat ipsam veritatis est modi dolorem odio eum ad
            adipisci amet iure eos, quisquam nesciunt voltibus exercitationem
            quidem mollitia fugit.
          </motion.p>
        </motion.div>
        <div className="flex flex-col gap-3 px-6 py-8 hover:shadow-2xl cursor-pointer hover:scale-110 transition ease-in-out duration-500 rounded-xl group">
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <FaChalkboardTeacher className="text-[50px] text-[#772432] group-hover:text-[#004165]" />
          </motion.p>
          <motion.h3
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-xl font-titleFont font-semibold text-[#004165] group-hover:text-[#772432]"
          >
            Mentorship
          </motion.h3>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-base text-justify text-[#434343]"
          >
            Lorem ipsum dolor sit constur, adipisicing elitment. Repellendus
            reiciendis placeat ipsam veritatis est modi dolorem odio eum ad
            adipisci amet iure eos, quisquam nesciunt voltibus exercitationem
            quidem mollitia fugit.
          </motion.p>
        </div>
        <div className="flex flex-col gap-3 px-6 py-8 hover:shadow-2xl cursor-pointer hover:scale-110 transition ease-in-out duration-500 rounded-xl group">
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.6,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <BsMegaphone className="text-[50px] text-[#772432] group-hover:text-[#004165]" />
          </motion.p>
          <motion.h3
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.6,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-xl font-titleFont font-semibold text-[#004165] group-hover:text-[#772432]"
          >
            Social Networking
          </motion.h3>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.6,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-base text-justify text-[#434343]"
          >
            Lorem ipsum dolor sit constur, adipisicing elitment. Repellendus
            reiciendis placeat ipsam veritatis est modi dolorem odio eum ad
            adipisci amet iure eos, quisquam nesciunt voltibus exercitationem
            quidem mollitia fugit.
          </motion.p>
        </div>
        <div className="flex flex-col gap-3 px-6 py-8 hover:shadow-2xl cursor-pointer hover:scale-110 transition ease-in-out duration-500 rounded-xl group">
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.8,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <HiUserGroup className="text-[50px] text-[#772432] group-hover:text-[#004165]" />
          </motion.p>
          <motion.h3
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.8,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-xl font-titleFont font-semibold text-[#004165] group-hover:text-[#772432]"
          >
            Team Collaboration
          </motion.h3>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.8,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-base text-justify text-[#434343]"
          >
            Lorem ipsum dolor sit constur, adipisicing elitment. Repellendus
            reiciendis placeat ipsam veritatis est modi dolorem odio eum ad
            adipisci amet iure eos, quisquam nesciunt voltibus exercitationem
            quidem mollitia fugit.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Whatwedo;
