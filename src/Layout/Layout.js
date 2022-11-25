import React, { useState, useEffect } from "react";
import { useReward } from "react-rewards";
import { GamePage } from "../components/GamePage";
import { RewardPage } from "../components/RewardPage";

export const Layout = () => {
  const [reward, setReward] = useState({});

  const ConfettiConfig = {
    elementCount: 100,
  };

  const { reward: confetti } = useReward("rewardId", "confetti", ConfettiConfig);

  useEffect(() => {
    if (JSON.stringify(reward) !== "{}") {
      // const celebrate = document.getElementById("rewardId");
      // celebrate.click();
      confetti();
    }
  }, [reward]);

  return (
    <div className="bg-[#f5f5f5] w-full h-[100vh] flex flex-col items-center justify-center">
      {JSON.stringify(reward) === "{}" ? (
        <GamePage setReward={setReward} confetti={confetti} />
      ) : (
        <>
          <span
            id="rewardId"
            className="fixed top-1/2 left-1/2 z-[111]"
            // onClick={() => console.log("clicked")}
          />
          <RewardPage reward={reward} setReward={setReward} />
        </>
      )}
    </div>
  );
};
