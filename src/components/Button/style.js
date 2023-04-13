import styled from "styled-components";

export const ButtonWrapper = styled.div`
  background-color: var(--blue);
  box-shadow: 0 0 4px hsla(0, 0%, 100%, 0.8);
  font-weight: 700;
  color: #fff;
  border-radius: 12px;
  padding: 6px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: max-content;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;
