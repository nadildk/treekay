"use client";

import React from "react";
import Image from "next/image";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Hero = () => {
  return (
    <section className="h-[80vh] xl:h-[850px]" id="home">
      <div className="container mx-auto h-full flex justify-center items-center xl:justify-start">
        {/* text */}
        <div className="h-full flex flex-col justify-center items-center xl:items-start z-20 pt-12">
          <MouseParallaxContainer
            globalFactorX={0.1}
            globalFactorY={0.2}
            resetOnLeave
            className="relative flex items-center h-[120px] xl:h-max xl:w-[840px] gap-4"
          >
            {/* typo-1.svg */}
            <MouseParallaxChild factorX={0.2} factorY={0.4} className="relative">
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                className="w-[300px] h-[101.37px] xl:w-[725px] xl:h-[244.97px]"
              >
                <Image src={"/typo-1.svg"} fill alt="" className="object-contain" />
              </motion.div>
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </div>
      </div>
    </section>
  );
};

export default Hero;
