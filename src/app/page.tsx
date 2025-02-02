"use client";

import React, { useState } from "react";
import { SongPlayer } from "@/components/Player";
import { TrackList } from "@/components/Tracklist";

interface Track {
  name: string;
  duration: string;
  src: string;
}

const trackList: Track[] = [
  { name: "build a soul beat", duration: "1:21", src: "public/build_a_soul-beat-90bpm.wav" },
  { name: "dreamer", duration: "1:25", src: "public/dreamer(81-82bpm_).wav" },
  { name: "man what?", duration: "1:33", src: "public/man_what_-80bpm.wav" },
  { name: "shinra tensei", duration: "1:46", src: "public/shinra tensei (with pain intro)- 154 bpm.wav" },
  { name: "swish", duration: "1:14", src: "public/swish-120bpm.wav" },
  { name: "outside", duration: "1:32", src: "public/outside-150bpm.wav" },
  { name: "unspeakable", duration: "1:26", src: "public/unspeakable-80bpm.wav" },
  { name: "win or lose", duration: "1:37", src: "public/win_or_lose-130bpm.wav" },
  { name: "odyssey", duration: "1:54", src: "public/odyssey-126bpm.wav" },
  { name: "purple skies", duration: "1:50", src: "public/purple_skies-140bpm.wav" },
];

export default function Home() {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);

  const handleTrackSelect = (track: Track) => {
    setCurrentTrack(track); 
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">Mixtape Player</h1>

      {currentTrack ? (
        <SongPlayer song={currentTrack.name} audioSrc={currentTrack.src} />
      ) : (
        <p className="text-xl text-center">Select a song to start playing</p>
      )}

      <TrackList tracks={trackList} onTrackSelect={handleTrackSelect} />
    </div>
  );
}
