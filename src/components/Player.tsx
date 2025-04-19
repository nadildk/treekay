"use client";

import React from "react";
import Image from "next/image";
import { AudioPlayer } from "react-audio-play";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Player = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto px-4">
        {/* text & avatar img */}
        <div>text & avatar img</div>
        {/* player */}
        <div className="w-full">
          <AudioPlayer
            loop
            preload="none"
            color="#fff"
            volume={40}
            volumePlacement="top"
            src="/build_a_soul_beat.wav"
            style={{
                background: 'transparent',
                boxShadow: 'none',
                width: '100%',
                maxWidth: "100%",
            }}

          />
        </div>
      </div>
    </div>
  );
};

export default Player;
