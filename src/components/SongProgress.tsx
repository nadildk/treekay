import React from "react";

export const SongProgress = ({ currentTime, duration }: { currentTime: number, duration: number }) => {
    const progressPercentage = (currentTime / duration) * 100;
    return (
      <div>
        <progress value={progressPercentage} max={100}></progress>
        <div>
          {Math.floor(currentTime)} / {Math.floor(duration)}
        </div>
      </div>
    );
  };
  