import React from "react";
import BgImage1 from "../assets/images/Group 1766.png";
import BgImage2 from "../assets/images/Group 1767.png";
import WheelImage from "../assets/images/well 2.png";

export const IntialPage = () => {
  return (
    <div className="bg-[#C6EFC8] h-[500px] w-[800px] relative">

      <div>
        <div className="h-44 w-44 z-10 absolute">
            <img src={WheelImage} alt="wheel" className="h-full w-full" />
        </div>
      </div>

      <div className="w-full absolute z-0 top-0 left-0">
        <img
          src={BgImage1}
          alt="bg1"
          className="w-full h-auto"
        />
      </div>
      <div className="w-full absolute z-0 bottom-0 left-0">
        <img
          src={BgImage2}
          alt="bg1"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};
