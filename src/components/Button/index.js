import React from "react";
import { ButtonWrapper } from "./style";

function Button({ bg = "#38a0f0", text = "button", onClick = () => {} }) {
  return (
    <ButtonWrapper
      style={{
        backgroundColor: bg,
      }}
      onClick={onClick}
    >
      {text}
    </ButtonWrapper>
  );
}

export default Button;
