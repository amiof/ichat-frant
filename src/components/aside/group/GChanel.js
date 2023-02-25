import React, { useState } from "react";

function GChanel() {
  const [animate, setAnimate] = useState(false);
  return (
    <div className="bg-gray-900 text-white h-14 flex items-center">
      <p
        className={`ml-2 ${animate ? "animate-bounce text-red-400" : null}`}
        onClick={() => {
          setAnimate(true);
        }}
        onAnimationEnd={() => {
          setAnimate(false);
        }}
      >
        name group
      </p>
    </div>
  );
}

export default GChanel;
