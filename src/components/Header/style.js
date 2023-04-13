import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(2em);
  width: 100%;
  background-color: var(--second-color);
  z-index: 100;
  @media (min-width: 768px) {
    padding: 10px 60px;
  }
`;

export const Main = styled.div`
  max-width: var(--max-content-width);
  margin: 0 auto;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;