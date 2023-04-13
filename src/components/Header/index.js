import React from 'react'
import { HeaderWrapper, Main, ButtonGroup } from './style'
import Button from '../Button'
import { ReactComponent as LogoIcon } from "../Icons/arbitrum_logo.svg";

function Header() {
  return (
    <HeaderWrapper>
      <Main>
        <LogoIcon />
        <ButtonGroup>
          <Button text="Sign in" bg="#38a0f0" />
          <Button text="Sign up" bg="#000" />
        </ButtonGroup>
      </Main>
    </HeaderWrapper>
  );
}

export default Header