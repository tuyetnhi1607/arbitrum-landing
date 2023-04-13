import React from "react";
import {
  ImageBox,
  SectionTwoWrapper,
  SectionWrapper,
  TextBox,
  TextBoxThree,
  scaleVariants,
} from "./style";

function SectionThree({ description = "", reverse = false, children }) {
  return (
    <SectionWrapper>
      {children}
      <SectionTwoWrapper
        initial="offscreen"
        whileInView="onscreen"
        reverse={!!reverse}
      >
        <TextBoxThree variants={scaleVariants}>
          <p>{description}</p>
        </TextBoxThree>
      </SectionTwoWrapper>
    </SectionWrapper>
  );
}

export default SectionThree;