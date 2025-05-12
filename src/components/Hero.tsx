"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Hero = () => {
  // state handling
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [backspacing, setBackspacing] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const phrases = [".wav", "beats", "audio"];
  const [currentPhrase, setCurrentPhrase] = useState(0);

  // timing configuration
  const typingSpeed = 100;
  const backspaceSpeed = 100;
  const waitBeforeBackspace = 5000;
  const waitAfterBackspace = 2000;

  // typing and backspacing
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (!backspacing) {
      // typing forward phase
      interval = setInterval(() => {
        if (index < phrases[currentPhrase].length) {
          setText((prev) => prev + phrases[currentPhrase][index]);
          setIndex(index + 1);
        } else {
          setTimeout(() => {
            setBackspacing(true);
          }, waitBeforeBackspace);
          clearInterval(interval);

          setCursorVisible(true);
        }
      }, typingSpeed);
    } else {
      // backspacing phase
      interval = setInterval(() => {
        if (text.length > 0) {
          setText((prev) => prev.slice(0, prev.length - 1));
        } else {
          setTimeout(() => {
            setBackspacing(false);
            setIndex(0);
            setCurrentPhrase((prev) => (prev + 1) % phrases.length);
          }, waitAfterBackspace);
          clearInterval(interval);

          setCursorVisible(true);
        }
      }, backspaceSpeed);
    }

    return () => clearInterval(interval);
  }, [index, currentPhrase, backspacing, text]);

  // blinking cursor logic
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="h-[80vh] xl:h-[850px] relative" id="home">
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
            <MouseParallaxChild
              factorX={0.2}
              factorY={0.4}
              className="relative"
            >
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                className="w-[300px] h-[101.37px] xl:w-[725px] xl:h-[244.97px]"
              >
                <Image
                  src={"/typo-1.svg"}
                  fill
                  alt=""
                  className="object-contain"
                />
              </motion.div>
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </div>
      </div>

      {/* typed cursor text*/}
      <div className="flex justify-center items-center absolute bottom-[120px] xl:bottom-[140px] w-full">
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          className="text-6xl xl:text-8xl font-semibold relative"
        >
          <motion.span
            key={text}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-[#afafaf] whitespace-nowrap"
          >
            {text}
            {/* blinking cursor */}
            <span
              className="cursor-blink"
              style={{ opacity: cursorVisible ? 1 : 0 }}
            >
              |
            </span>
          </motion.span>
        </motion.div>
      </div>

      {/* cd.svg */}
      <motion.div
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        whileInView={"show"}
        whileHover={{
          rotate: [0, -5, 5, -5, 5, 0],
          transition: { duration: 0.6 },
        }}
        className="hidden xl:block absolute top-[40%] left-[70vw] xl:left-[60vw] z-30 w-[200px] h-[200px]"
      >
        <Image src="/cd.svg" fill alt="cd image" className="object-contain" />
      </motion.div>
    </section>
  );
};

export default Hero;
