import styled, { keyframes } from "styled-components";

const planetMove = keyframes`
    100% {
        transform: translate(-8%);
    }   
`;

export const BallWrapper = styled.div`
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  z-index: -1;
  height: auto;
  transform: scale(1);
  opacity: 1;
  filter: blur(3px);
  animation-name: ${planetMove};
  animation-duration: 5s;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
`;
