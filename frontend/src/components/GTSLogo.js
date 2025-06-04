import React from 'react';

const GTSLogo = ({ className = "w-full h-full" }) => {
  return (
    <svg
      viewBox="0 0 400 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="10"
        y="10"
        width="380"
        height="130"
        rx="65"
        ry="65"
        fill="#8BC34A"
      />
      
      <path
        d="M 60 110 C 60 80, 80 50, 120 50 L 140 50 L 140 70 L 120 70 C 95 70, 80 85, 80 110 C 80 135, 95 150, 120 150 L 140 150 L 140 110 L 115 110 L 115 90 L 160 90 L 160 170 L 120 170 C 80 170, 60 140, 60 110 Z"
        fill="white"
      />
      
      <rect x="180" y="50" width="60" height="20" fill="white" />
      <rect x="200" y="50" width="20" height="120" fill="white" />
      
      <path
        d="M 260 170 C 260 150, 280 130, 320 130 L 340 130 C 350 130, 360 120, 360 110 C 360 100, 350 90, 340 90 L 300 90 C 280 90, 260 70, 260 50 C 260 30, 280 10, 300 10 L 340 10 C 360 10, 380 30, 380 50 L 360 50 C 360 40, 350 30, 340 30 L 300 30 C 290 30, 280 40, 280 50 C 280 60, 290 70, 300 70 L 340 70 C 360 70, 380 90, 380 110 C 380 130, 360 150, 340 150 L 320 150 C 300 150, 280 170, 260 170 Z"
        fill="white"
      />
      
      <text
        x="200"
        y="190"
        textAnchor="middle"
        fontSize="16"
        fill="#666"
        fontFamily="Arial, sans-serif"
      >
        Global Technical Solutions
      </text>
    </svg>
  );
};

export default GTSLogo;