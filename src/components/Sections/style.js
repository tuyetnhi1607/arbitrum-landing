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

export const SectionWrapper = styled.section`
  position: relative;
  width: 100%;
  max-width: var(--max-content-width);
  padding: 60px 20px;
  scroll-snap-align: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    padding: 10px 70px;
  }
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

export const SectionOneWrapper = styled.div`
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

export const SectionTwoWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: ${({ reverse }) => (!!reverse ? "column-reverse" : "column")};
  gap: 20px;
  align-items: center;
  @media (min-width: 768px) {
    justify-content: space-evenly;
    flex-direction: ${({ reverse }) => (!!reverse ? "row-reverse" : "row")};
    gap: 10%;
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
  @media (min-width: 768px) {
    flex: 1;
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
    max-width: 580px;
    width: 50%;
  }
`;

export const ImageScale = {
  offscreen: {
    scale: 0.3,
    opacity: 1,
    transition: {
      duration: 3,
      ease: "easeInOut",
    },
  },
  onscreen: {
    scale: 2.5,
    opacity: 1,
    transition: {
      duration: 3,
      delay: 1,
      ease: "easeInOut",
    },
  },
};

export const BoxVariant = {
  offscreen: {
    top: "200%",
    transition: {
      duration: 3,
      ease: "easeInOut",
    },
  },
  onscreen: {
    top: "50%",
    transition: {
      duration: 3,
      delay: 1,
      ease: "easeInOut",
    },
  },
};
export const SectionFourWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (min-width: 768px){
    height: 100vh;
  }
`;

export const ImageBoxFour = styled(ImageBox)`
  width: 100%;
  transform: scale(1.3) translateY(-20%);
  filter: grayscale(0.);
  @media (min-width: 768px) {
    max-width: unset;
    transform: unset;
  }
  & > img {
    box-shadow: unset;
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media (min-width: 768px) {
      box-shadow: 0 8rem 26rem hsla(0, 0%, 100%, 0.37);
    }

  }
`;

export const DocsBox = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.43);
  backdrop-filter: blur(3em);
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 580px;
  color: var(--white);
  border-radius: 10px;
  padding: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  & > p {
    letter-spacing: 0.0075em;
    line-height: 1.5;
    font-size: clamp(1.1428571429em, 2.5vw, 1.9em);
  }
`;

export const Button = styled.div`
  cursor: pointer;
  padding: 12px 20px 11px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
  width: 100%;
  transition: all 0.2s linear;
  background-color: transparent;
  color: var(--white);
  border: 1px solid var(--blue);
  border-radius: 100px;
  text-transform: uppercase;
  font-size: clamp(0.8571428571em, 1vw, 1.1428571429em);
  @media (min-width: 769px) {
    padding: 14px 25px;
  }
  &:hover {
    color: var(--white);
    background-color: var(--mid-grey-darker-2);
    border-color: var(--mid-grey-darker-2);
  }
`;
