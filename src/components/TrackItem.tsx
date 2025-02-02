import React from "react";

export const TrackItem = ({ name, duration, onClick }: { name: string, duration: string, onClick: () => void }) => (
    <div onClick={onClick}>
      <span>{name}</span> - <span>{duration}</span>
    </div>
  );
  