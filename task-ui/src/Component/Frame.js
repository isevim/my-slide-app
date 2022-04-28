import React, { useEffect, useState } from "react";
import "./Frame.scss";

export default function Frame({ playlist }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      var nextIndex = (currentIndex + 1) % playlist.length;
      setCurrentIndex(nextIndex);
    }, playlist[currentIndex].duration * 1000);
  }, [currentIndex, playlist]);

  return (
    <iframe
      className="iframe"
      src={playlist[currentIndex].url}
      allow="autoplay"
    />
  );
}
