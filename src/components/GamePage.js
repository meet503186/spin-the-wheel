import React, { useRef } from "react";
import BgImage1 from "../assets/images/Group 1766.png";
import BgImage2 from "../assets/images/Group 1767.png";
import WheelImage from "../assets/images/Group 801.png";
import CenterArrowImage from "../assets/images/Group 1577.png";

export const GamePage = ({ setReward, confetti }) => {
  const wheelRef = useRef();

  const data = [
    {
      code: "SWOFF30",
      text: "30% Sitewide off",
    },
    {
      code: "B1G1FREE",
      text: "Buy 1 Get 1 Free",
    },
    {
      code: "MUG1000",
      text: "Free coffee mug on purchase worth 1000+",
    },
    {
      code: "B2G1FREE",
      text: "Buy 2 Get 1 Free",
    },
    {
      code: "FREET50G",
      text: "Free 50G tea on purchase of Rs. 500",
    },
    {
      code: "HCFWT",
      text: "Hot choclate free with tea",
    },
  ];

  let deg = 0;

  const zoneSize = 60; // in degrees

  const handleStop = (actualDeg) => {
    const winningSymbolNr = Math.ceil(actualDeg / zoneSize);

    setReward(data[winningSymbolNr - 1]);
  };

  const startSpin = () => {
    const wheel = wheelRef.current;
    deg = Math.floor(5000 + Math.random() * 5000);
    // Set the transition on the wheel
    wheel.style.transition = "all 10s ease-out";
    // Rotate the wheel
    wheel.style.transform = `rotate(${deg}deg)`;
    // Apply the blur
    // wheel.classList.add('blur');
  };

  const stopSpin = () => {
    const wheel = wheelRef.current;
    wheel.classList.remove("blur");
    // Enable button when spin is over
    // startButton.style.pointerEvents = 'auto';
    // Need to set transition to none as we want to rotate instantly
    wheel.style.transition = "none";
    // Calculate degree on a 360 degree basis to get the "natural" real rotation
    // Important because we want to start the next spin from that one
    // Use modulus to get the rest value
    const actualDeg = deg % 360;
    // Set the real rotation instantly without animation
    wheel.style.transform = `rotate(${actualDeg}deg)`;

    handleStop(actualDeg);
  };

  return (
    <div className="bg-[#C6EFC8] w-full h-[500px] md:w-[800px] relative">
      <div className="absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center z-10">
        <div className="h-64 w-fit">
          <img
            src={WheelImage}
            ref={wheelRef}
            id="wheel"
            alt="wheel"
            onTransitionEnd={stopSpin}
            className={`h-full w-full`}
          />
          <img
            src={CenterArrowImage}
            alt="centerArrow"
            className="h-10 w-8 absolute top-[38%] left-[45%] md:left-[48%]"
          />
        </div>
        <button
          className="py-3 px-12 mt-6 rounded-full bg-[#146531] text-white font-bold text-lg"
          onClick={startSpin}
        >
          SPIN
        </button>
      </div>

      <div className="w-full absolute z-0 top-0 left-0">
        <img src={BgImage1} alt="bg1" className="w-full h-auto" />
      </div>
      <div className="w-full absolute z-0 bottom-0 left-0">
        <img src={BgImage2} alt="bg1" className="w-full h-auto" />
      </div>
    </div>
  );
};
