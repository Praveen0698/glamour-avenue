"use client";

import { motion } from "motion/react";

const Slider = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="w-full h-[100vh] flex items-center justify-center relative">
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1628157850970-7424f0d29586?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          }}
        ></div>
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center text-white px-6 md:px-12 py-4 md:py-6 bg-black bg-opacity-50 transition-opacity duration-1000 `}
        >
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ lineHeight: "70px" }}
            className="text-white text-4xl md:text-6xl font-bold text-center px-4 py-2 rounded-lg"
          >
            Let your skin and hair tell a story of care, <br /> confidence,{" "}
            <br /> and timeless beauty.
            <div className="flex justify-center items-center gap-5 mt-10">
              <button className="px-7 py-4 text-2xl bg-[#cdb4db] text-white rounded-md">
                BOOK APPOINTMENT
              </button>
              <button className="px-7 py-4 text-2xl bg-transparent border-[2px] border-[#cdb4db] text-[#cdb4db] rounded-md">
                VIEW SERVICE MENU
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
