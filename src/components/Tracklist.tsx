import React from "react";

interface Track {
  name: string;
  duration: string;
  src: string;
}

export const TrackList = ({
  tracks,
  onTrackSelect,
}: {
  tracks: Track[]; 
  onTrackSelect: (track: Track) => void; 
}) => {
  return (
    <div>
      {tracks.map((track, index) => (
        <div key={index} onClick={() => onTrackSelect(track)}>
          <span>{track.name}</span>
        </div>
      ))}
    </div>
  );
};
