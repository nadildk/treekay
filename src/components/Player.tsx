import React, { useState, useRef, useEffect } from "react";

export const SongPlayer = ({ song, audioSrc }: { song: string; audioSrc: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressRef = useRef<HTMLInputElement | null>(null);
  const ctrlIconRef = useRef<HTMLElement | null>(null);

  const handleProgressChange = () => {
    if (audioRef.current && progressRef.current) {
      audioRef.current.currentTime = parseFloat(progressRef.current.value);
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const song = audioRef.current;
    if (song) {
      song.onloadedmetadata = () => {
        if (progressRef.current) {
          progressRef.current.max = JSON.stringify(song.duration);
          progressRef.current.value = song.currentTime.toString();
        }
      };

      song.ontimeupdate = () => {
        if (progressRef.current) {
          progressRef.current.value = song.currentTime.toString();
          setProgress(song.currentTime);
        }
      };

      if (isPlaying) {
        ctrlIconRef.current?.classList.add("fa-pause");
        ctrlIconRef.current?.classList.remove("fa-play");
      } else {
        ctrlIconRef.current?.classList.remove("fa-pause");
        ctrlIconRef.current?.classList.add("fa-play");
      }
    }
  }, [isPlaying, song]);

  return (
    <div className="container">
      <div className="musicPlayer">
        <nav>
          <div className="circle">
            <i className="fa-solid fa-angle-left"></i>
          </div>
          <div className="circle">
            <i className="fa-solid fa-bars"></i>
          </div>
        </nav>

        <img src="media/cover.jpg" alt={song} className="songImg" />
        <h1>{song}</h1>
        <p>treekay</p>

        <audio ref={audioRef}>
          <source src={audioSrc} type="audio/wav" />
        </audio>

        <input
          type="range"
          value={progress}
          ref={progressRef}
          onChange={handleProgressChange}
          className="progress-bar"
        />

        <div className="controls">
          <div>
            <i className="fa-solid fa-backward"></i>
          </div>
          <div onClick={handlePlayPause}>
            <i ref={ctrlIconRef} className="fa-solid fa-play" />
          </div>
          <div>
            <i className="fa-solid fa-forward"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
