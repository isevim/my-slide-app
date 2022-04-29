import React, { useEffect, useState } from "react";
import "./Frame.scss";

export default function Frame({ playlist }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [context, setContext] = useState();
  useEffect(() => {
    if (playlist[0].type.includes("video")) {
      setContext(
        <video
          className="content"
          autoplay="autoplay"
          loop
          muted
          id="video"
          src={playlist[0].url}
        />
      );
    } else {
      setContext(<img className="content" src={playlist[0].url} />);
    }
    setCurrentIndex(0);
  }, [playlist]);

  useEffect(() => {
    setTimeout(() => {
      var nextIndex = (currentIndex + 1) % playlist.length;
      setCurrentIndex(nextIndex);
      if (playlist[nextIndex].type.includes("video")) {
        setContext(
          <video
            className="content"
            autoplay="autoplay"
            loop
            muted
            id="video"
            src={playlist[nextIndex].url}
          />
        );
      } else {
        setContext(<img className="content" src={playlist[nextIndex].url} />);
      }
    }, playlist[currentIndex].duration * 1000);
  }, [currentIndex, playlist]);

  return <div>{context ? context : null}</div>;
}
