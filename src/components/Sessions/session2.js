import React, { useRef } from 'react'
import {
  ImageBox,
  SessionTwoWrapper,
  SessionWrapper,
  TextBox,
  scaleVariants,
} from "./style";
import { useScroll, useTransform } from 'framer-motion';

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}


function SessionTwo({
  description = "",
  image = "",
  reverse = false,
  children,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 0);
  return (
    <SessionWrapper ref={ref}>
      {children}
      <SessionTwoWrapper
        initial="offscreen"
        whileInView="onscreen"
        reverse={!!reverse}
        style={{ y }}
      >
        <TextBox variants={scaleVariants}>
          <p>{description}</p>
        </TextBox>
        {image && (
          <ImageBox variants={scaleVariants}>
            <img src={image} alt="story_1" />
          </ImageBox>
        )}
      </SessionTwoWrapper>
    </SessionWrapper>
  );
}

export default SessionTwo