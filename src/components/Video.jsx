import React, { useRef, useState } from "react";
import thumbnail from "../assets/thumbnail.png";

const Video = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative   p-2 lg:w-3/4 w-11/12  border-dashed border-custom rounded-3xl">
      <video
        ref={videoRef}
        src="../../public/video.mp4"
        className="w-full rounded-2xl mx-auto"
        onClick={handlePlayPause}
        poster={thumbnail}
      >
        Your browser does not support the video tag.
      </video>
      {!isPlaying && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <button
            className="bg-purple text-white rounded-full p-2"
            onClick={handlePlayPause}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 24 24"
              fill="white"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 4l15 8-15 8z" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Video;
