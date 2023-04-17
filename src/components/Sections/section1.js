import React from "react";
import { SectionOneWrapper, SectionWrapper } from "./style";

function SectionOne({ id }) {
  return (
    <SectionWrapper id={id}>
      <SectionOneWrapper>
        <p>
          <strong>
            A long time ago, when smart contracts were known by few…
          </strong>
        </p>
      </SectionOneWrapper>
    </SectionWrapper>
  );
}

export default SectionOne;
