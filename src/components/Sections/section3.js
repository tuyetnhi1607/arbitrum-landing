import React from "react";
import {
  SectionTwoWrapper,
  SectionWrapper,
  TextBoxThree,
  scaleVariants,
} from "./style";

function SectionThree({ description = "", reverse = false, children, id }) {
  return (
    <SectionWrapper id={id}>
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
