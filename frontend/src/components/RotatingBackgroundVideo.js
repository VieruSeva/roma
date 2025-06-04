import React, { useState, useEffect } from 'react';

// This component handles rotating between multiple background videos
const RotatingBackgroundVideo = ({ videos, interval = 10000 }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [nextVideoIndex, setNextVideoIndex] = useState(1);
  
  useEffect(() => {
    // Start the rotation interval
    const rotationTimer = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => {
        // Calculate the next index
        const newNextIndex = (prevIndex + 2) % videos.length;
        // Set the next video index for preloading
        setNextVideoIndex(newNextIndex);
        // Return the new current index
        return (prevIndex + 1) % videos.length;
      });
    }, interval);
    
    // Clean up interval on unmount
    return () => clearInterval(rotationTimer);
  }, [videos, interval]);
  
  return (
    <div className="video-background">
      {videos.map((video, index) => (
        <div 
          key={index} 
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentVideoIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <video 
            autoPlay
            muted
            loop
            playsInline
            className="video-element"
            src={video}
            style={{ display: index === currentVideoIndex || index === nextVideoIndex ? 'block' : 'none' }}
          />
        </div>
      ))}
      <div className="video-overlay"></div>
    </div>
  );
};

export default RotatingBackgroundVideo;
