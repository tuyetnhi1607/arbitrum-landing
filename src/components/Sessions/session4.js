import React, { useMemo, useRef } from "react";
import {
  ImageBox,
  ImageBoxFour,
  ImageScale,
  SessionFourWrapper,
  SessionWrapper,
  TextBoxThree,
  scaleVariants,
} from "./style";
import hero_1 from "../../assets/images/hero_1.webp";
import { useScroll, useTransform, motion, useTrasi, useTime } from "framer-motion";


function SessionFour() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "center center"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.3, 2.5]);
  return (
    <SessionWrapper>
      <SessionFourWrapper>
        <ImageBoxFour ref={ref}>
          <motion.img
          
            src={hero_1}
            alt="hero_1"
            style={{
              scale: scale,
            }}
          />
        </ImageBoxFour>
      </SessionFourWrapper>
    </SessionWrapper>
  );
}

export default SessionFour;
