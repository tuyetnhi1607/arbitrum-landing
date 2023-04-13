import React from "react";
import { BallWrapper } from "./style";
import { ReactComponent as SilverBall } from "../Icons/planet_6.svg";
import { ReactComponent as BlueBall } from "../Icons/planet_3.svg";
import { ReactComponent as PurpleBall } from "../Icons/planet_2.svg";

function Ball({ x = "0px", y = "0px", width = "100px", color = "silver", maxWidth='300px' }) {
  const ball = {
    silver: <SilverBall />,
    blue: <BlueBall />,
    purple: <PurpleBall />,
  };
  return (
    <BallWrapper
      style={{
        left: x,
        top: y,
        width: width,
        height: width,
        maxWidth: maxWidth,
      }}
    >
      {ball[color]}
    </BallWrapper>
  );
}

export default Ball;
