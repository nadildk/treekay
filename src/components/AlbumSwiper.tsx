"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const albums = [
  {
    title: "beat tape vol. 2",
    year: 2025,
    coverImg: "/treekay_cover.png",
    embedUrl:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2092111665&color=2f323c",
    artistUrl: "https://soundcloud.com/treekay",
    playlistUrl: "https://soundcloud.com/treekay/sets/beat-tape-vol-2",
  },
  {
    title: "august - beat tape",
    year: 2021,
    coverImg: "/tape1_cover.png",
    embedUrl:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1305799621&color=%23405853&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    artistUrl: "https://soundcloud.com/treekay",
    playlistUrl: "https://soundcloud.com/treekay/sets/takaro",
  },
];

const AlbumSwiper = () => {
  return (
    <motion.section
      id="projects"
      variants={fadeIn("up", 0.5)} 
      initial="hidden"
      whileInView="show"
      className="pt-28 pb-32 bg-black text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-10">projects</h2>
      <p className="text-lg text-center text-gray-400 mb-8">
        swipe to explore!
      </p>
      <Swiper spaceBetween={30} slidesPerView={1} loop className="rounded-xl shadow-xl max-w-3xl mx-auto">
        {albums.map((album, index) => (
          <SwiperSlide key={index}>
            <div className="relative bg-zinc-900 rounded-xl overflow-hidden">
              <img
                src={album.coverImg}
                alt={album.title}
                className="w-full h-64 object-cover opacity-80"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold flex justify-between items-center">
                  {album.title}
                  {/* direct link */}
                  <a
                    href={album.playlistUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-orange-500 hover:underline"
                  >
                    go to album
                  </a>
                </h3>
                <span className="text-gray-400">{album.year}</span>

                {/* embedded player */}
                <div className="mt-6">
                  <iframe
                    width="100%"
                    height="166"
                    allow="autoplay"
                    scrolling="no"
                    frameBorder="no"
                    src={album.embedUrl}
                    className="rounded-md"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
};

export default AlbumSwiper;
