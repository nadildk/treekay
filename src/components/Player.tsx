"use client";

import React from "react";
import Image from "next/image";
import { AudioPlayer } from "react-audio-play";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Player = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.5)}
      initial="hidden"
      whileInView={"show"}
      className="w-full h-[112px] bg-gradient-to-r from-zinc-800 to-black backdrop-blur-
    [15px] flex items-center relative z-40 py-4 xl:py-0"
    >
      <div className="container mx-auto flex flex-col xl:flex-row items-center xl:items-center gap-4 w-full">
        <div className="hidden xl:flex items-center gap-x-4 w-[300px] shrink-0">
          {/* cover image */}
          <div className="w-[86px] h-[86px] relative">
            <Image
              src={"/treekay_cover.png"}
              alt="cover"
              fill
              className="object-cover rounded-md"
              priority
            />
          </div>
          {/* text */}
          <div className="leading-none text-white">
            <div className="text-lg font-medium">build a soul beat</div>
            <div className="text-sm font-light">beat tape #2</div>
          </div>
        </div>

        {/* audio player */}
        <div className="flex-1 w-full px-4 xl:px-0">
          <AudioPlayer
            loop
            preload="none"
            color="#fff"
            volume={40}
            volumePlacement="top"
            src="/build_a_soul_beat.wav"
            style={{
              background: "transparent",
              boxShadow: "none",
              width: "100%",
              maxWidth: "100%",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Player;
