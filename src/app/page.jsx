"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40">
        {/* image */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* text */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* title */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Recusandae, nam.
          </h1>
          {/* desc */}
          <p className="md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse hic
            animi laudantium unde, ad error asperiores quisquam perferendis
            doloribus dicta ab eum nobis at velit aliquid provident, cum quas
            accusamus.
          </p>
          {/* button */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-full ring ring-black bg-black text-white md:text-2xl lg:text-2xl md:font-medium lg:font-medium font-medium">
              View My Work
            </button>
            <button className="p-4 rounded-full ring ring-black md:text-2xl lg:text-2xl md:font-medium lg:font-medium font-medium">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
