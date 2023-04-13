import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

export const scaleVariants = {
  offscreen: {
    scale: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const SessionWrapper = styled.section`
  position: relative;
  width: 100%;
  max-width: var(--max-content-width);
  padding: 60px 20px;
  scroll-snap-align: center;
  height: 50vh;
  /* @media (min-width: 768px) {
    height: 100vh;
  } */
`;

const textAnimation = keyframes`
    0% {
        transform: translateY(-15px);
        opacity: 0;
    }
    90% {
        opacity: 1;
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const SessionOneWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: clamp(1.4285714286em, 2.5vw, 2.8571428571em);
  & > p {
    font-size: clamp(1.1428571429em, 1.5vw, 1.4285714286em);
    animation: ${textAnimation} 1s ease-in-out;
    width: 100%;
    text-align: center;
    & > strong {
      font-weight: 500;
      line-height: 1.3;
      letter-spacing: 0.0075em;
      color: var(--white);
    }
  }
`;

export const SessionTwoWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: ${({ reverse }) => (!!reverse ? "column-reverse" : "column")};
  gap: 20px;
  align-items: center;
  @media (min-width: 768px) {
    justify-content: space-evenly;
    flex-direction: ${({ reverse }) => (!!reverse ? "row-reverse" : "row")};
  }
`;

export const TextBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--second-color);
  border-radius: 10px;
  padding: 20px;
  max-width: 580px;
  & > p {
    letter-spacing: 0.0075em;
    line-height: 1.5;
    font-size: clamp(1.1428571429em, 2.5vw, 2em);
    color: var(--white);
  }
  @media (min-width: 530px) {
    padding: 40px;
  }
`;

export const TextBoxThree = styled(TextBox)`
  max-width: max-content;
  & > p {
    font-size: clamp(1.7142857143em, 2.5vw, 2.8571428571em);
  }
`;

export const ImageBox = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  & > img {
    width: 100%;
    height: 100%;
  }
  @media (min-width: 768px) {
    max-width: 500px;
  }
`;

export const ImageScale = {
  offscreen: {
    opacity: 0,
    scale: 0.3,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  onscreen: {
    opacity: 1,
    scale: 2.5,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const SessionFourWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  & > img {

  }
`;

export const ImageBoxFour = styled(ImageBox)`
  position: sticky;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 300px;
  @media (min-width: 768px) {
    max-width: unset;
  }
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;