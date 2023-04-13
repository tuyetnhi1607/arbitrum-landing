import React from "react";
import {
  ImageBox,
  SessionTwoWrapper,
  SessionWrapper,
  TextBox,
  TextBoxThree,
  scaleVariants,
} from "./style";

function SessionThree({ description = "", reverse = false, children }) {
  return (
    <SessionWrapper>
      {children}
      <SessionTwoWrapper
        initial="offscreen"
        whileInView="onscreen"
        reverse={!!reverse}
      >
        <TextBoxThree variants={scaleVariants}>
          <p>{description}</p>
        </TextBoxThree>
      </SessionTwoWrapper>
    </SessionWrapper>
  );
}

export default SessionThree;
