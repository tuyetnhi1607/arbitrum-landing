import _ from "lodash";
import React from "react";
import MathJax from "react-mathjax";
import { Math, StarsWrapper } from "./style";

function Stars() {
  const mathRef = React.useRef([]);
  const listFormula = [
    {
      id: 1,
      formula: `f(x) = \\int_{-\\infty}^\\infty
      \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
      \\,d\\xi`,
    },
    {
      id: 2,
      formula: `x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}`,
    },
    {
      id: 3,
      formula: `\\frac{1}{\\sqrt{x^2 + 1}}`,
    },
    {
      id: 4,
      formula: `\\sqrt{x^2+1}`,
    },
    {
      id: 5,
      formula: `\\gamma^2+\\theta^2=\\omega^2`,
    },
    {
      id: 6,
      formula: `\\sum_{i=0}^n i^2 = \\frac{(n^2+n)(2n+1)}{6}`,
    },
    {
      id: 7,
      formula: `\\left.x^2\\right\\rvert_3^5 = 5^2-3^2`,
    },
    {
      id: 8,
      formula: `f(a) = \\frac{1}{2\\pi i} \\oint\\frac{f(z)}{z-a}dz`,
    },
    {
      id: 9,
      formula: `\\cos(\\theta+\\phi)=\\cos(\\theta)\\cos(\\phi)−\\sin(\\theta)\\sin(\\phi)`,
    },
    {
      id: 10,
      formula: `\\int_D ({\\nabla\\cdot} F)dV=\\int_{\\partial D} F\\cdot ndS`,
    },
    {
      id: 11,
      formula: `\\vec{\\nabla} \\times \\vec{F} =
      \\left( \\frac{\\partial F_z}{\\partial y} - \\frac{\\partial F_y}{\\partial z} \\right) \\mathbf{i}
    + \\left( \\frac{\\partial F_x}{\\partial z} - \\frac{\\partial F_z}{\\partial x} \\right) \\mathbf{j}
    + \\left( \\frac{\\partial F_y}{\\partial x} - \\frac{\\partial F_x}{\\partial y} \\right) \\mathbf{k}`,
    },
    {
      id: 12,
      formula: `(\\nabla_X Y)^k = X^i (\\nabla_i Y)^k =
      X^i \\left( \\frac{\\partial Y^k}{\\partial x^i} + \\Gamma_{im}^k Y^m \\right)`,
    },
    {
      id: 13,
      formula: `f(x) = \\int_{-\\infty}^\\infty
      \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
      \\,d\\xi`,
    },
    {
      id: 14,
      formula: `f(x) = \\int_{-\\infty}^\\infty
      \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
      \\,d\\xi`,
    },
    {
      id: 15,
      formula: `f(x) = \\int_{-\\infty}^\\infty
      \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
      \\,d\\xi`,
    },
    {
      id: 16,
      formula: `f(x) = \\int_{-\\infty}^\\infty
      \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
      \\,d\\xi`,
    },
    {
      id: 17,
      formula: `f(x) = \\int_{-\\infty}^\\infty
      \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
      \\,d\\xi`,
    },
    {
      id: 18,
      formula: `f(x) = \\int_{-\\infty}^\\infty
      \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
      \\,d\\xi`,
    },
    {
      id: 19,
      formula: `f(x) = \\int_{-\\infty}^\\infty
      \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
      \\,d\\xi`,
    },
    {
      id: 20,
      formula: `f(x) = \\int_{-\\infty}^\\infty
      \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
      \\,d\\xi`,
    },
    {
      id: 21,
      formula: `f(x) = \\int_{-\\infty}^\\infty
      \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
      \\,d\\xi`,
    },
    {
      id: 22,
      formula: `f(x) = \\int_{-\\infty}^\\infty
      \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
      \\,d\\xi`,
    },
    {
      id: 23,
      formula: `f(x) = \\int_{-\\infty}^\\infty
      \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
      \\,d\\xi`,
    },
    {
      id: 24,
      formula: `f(x) = \\int_{-\\infty}^\\infty
      \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
      \\,d\\xi`,
    },
    {
      id: 25,
      formula: `f(x) = \\int_{-\\infty}^\\infty
      \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
      \\,d\\xi`,
    },
    {
      id: 26,
      formula: `f(x) = \\int_{-\\infty}^\\infty
      \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
      \\,d\\xi`,
    },
    {
      id: 27,
      formula: `f(x) = \\int_{-\\infty}^\\infty
      \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
      \\,d\\xi`,
    },
    {
      id: 28,
      formula: `f(x) = \\int_{-\\infty}^\\infty
      \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
      \\,d\\xi`,
    },
    {
      id: 29,
      formula: `f(x) = \\int_{-\\infty}^\\infty
      \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
      \\,d\\xi`,
    },
    {
      id: 30,
      formula: `f(x) = \\int_{-\\infty}^\\infty
      \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
      \\,d\\xi`,
    },
  ];
  const variants = (number) => {
    return {
      initial: {
        x: _.random(0, window.innerWidth),
        y: _.random(0, window.innerHeight),
      },
      animate: {
        x: _.random(0, window.innerWidth),
        y: _.random(0, window.innerHeight),
        transition: {
          duration: 10,
          delay: number * 0.1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        },
      },
    };
  };

  return (
    <StarsWrapper>
      {listFormula.map((item, i) => {
        return (
          <Math
            className="math"
            ref={(el) => (mathRef.current[i] = el)}
            initial="initial"
            animate="animate"
            variants={variants(i)}
          >
            <MathJax.Node formula={item.formula} />
          </Math>
        );
      })}
    </StarsWrapper>
  );
}

export default Stars;
