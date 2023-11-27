"use client"
import Image from "next/image";
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <div className="lg:hidden ">
      <div className="flex flex-row items-center justify-between px-[8px] mb-[60px]">
        <motion.img
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ delay: 0.3, duration: 1 }}
          src='/logo.png'
          height={56}
          width={56}
          alt="logo"
        />
        <motion.button
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="w-[144px] h-12 px-4 py-2 rounded-lg border justify-center items-center text-white text-base button-border"
        >
          Explore Apps
        </motion.button>
      </div>
    </div>
  );
};

export default Navbar;
