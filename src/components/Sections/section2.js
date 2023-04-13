import React from "react";
import {
  ImageBox,
  SectionTwoWrapper,
  SectionWrapper,
  TextBox,
  scaleVariants,
} from "./style";

function SectionTwo({
  description = "",
  image = "",
  reverse = false,
  children,
}) {
  return (
    <SectionWrapper>
      {children}
      <SectionTwoWrapper
        initial="offscreen"
        whileInView="onscreen"
        reverse={!!reverse}
      >
        <TextBox variants={scaleVariants}>
          <p>{description}</p>
        </TextBox>
        {image && (
          <ImageBox variants={scaleVariants}>
            <img src={image} alt="story_1" />
          </ImageBox>
        )}
      </SectionTwoWrapper>
    </SectionWrapper>
  );
}

export default SectionTwo;
