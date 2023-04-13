import React from "react";
import hero_1 from "../../assets/images/hero_1.webp";
import { ReactComponent as CopyIcon } from "../Icons/copy.svg";
import * as rdd from 'react-device-detect';
import {
  BoxVariant,
  Button,
  DocsBox,
  ImageBoxFour,
  ImageScale,
  SectionFourWrapper,
  SectionWrapper,
} from "./style";

function SectionFour() {
  const isMobile =rdd.isMobile;

  return (
    <SectionWrapper>
      <SectionFourWrapper
        initial="offscreen"
        whileInView="onscreen"
      >
        <ImageBoxFour variants={isMobile ? {} : ImageScale}>
          <img src={hero_1} alt="hero_1" />
        </ImageBoxFour>
        <DocsBox variants={isMobile ? {} : BoxVariant}>
          <p>
            The community is the future of Arbitrum.
            <br /> Welcome traveler.
          </p>
          <Button>
            <CopyIcon />
            <p>Read docs</p>
          </Button>
        </DocsBox>
      </SectionFourWrapper>
    </SectionWrapper>
  );
}

export default SectionFour;
