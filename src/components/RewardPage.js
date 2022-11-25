import React, { useRef, useState } from "react";
import BgImage1 from "../assets/images/Group 1766.png";
import BgImage2 from "../assets/images/Group 1767.png";
import WheelImage from "../assets/images/Group 801.png";
import CenterArrowImage from "../assets/images/Group 1577.png";

export const RewardPage = ({ reward, setReward }) => {
  const [copied, setCopied] = useState(false);

  return (
    <div className="bg-[#C6EFC8] w-full h-[500px] md:w-[800px] relative">
      <div className="absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center z-10">
        <div className="w-64 flex flex-col justify-center items-center">
          <p className="text-xl font-bold">Congrats! You Won:</p>
          <p className="text-3xl font-bold text-center my-3">{reward.text}</p>
          <div className="w-[90%] flex items-center p-0 bg-[#14141433] rounded-md">
            <span className="text-start ml-4  uppercase text-2xl font-bold text-white w-full">
              {reward.code}
            </span>
            <button
              onClick={() => {
                navigator.clipboard.writeText(reward.code);
                setCopied(true);
              }}
              className="uppercase rounded-tr-md rounded-br-md p-3 bg-[#146531] text-white font-bold text-lg"
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <button
            className="py-3 px-12 mt-6 rounded-full bg-[#146531] text-white font-bold text-lg"
            onClick={() => setReward({})}
          >
            Spin Again
          </button>
        </div>
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
