import styled from "styled-components";

export const SidebarWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 10px;
  width: 40px;
  border-radius: 10px;
  padding: 8px;
  z-index: 1000;
  transform: translateY(-50%);
  background-color: rgb(15 24 34 / 40%);
  backdrop-filter: blur(10px);
  @media (min-width: 768px) {
    left: 20px;
    width: 70px;
    border-radius: 20px;
    padding: 20px;
  }
`;

export const Item = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  margin-bottom: 0;
  &::before {
    content: "";
    display: block;
    width: 20%;
    aspect-ratio: 1;
    background-color: #fff;
    border-radius: 50%;
  }
  &:hover {
    background-color: #ebebeb24;
  }
  transition: all 0.3s ease-in-out;
  @media (min-width: 768px) {
    margin-bottom: 7px;
    border-radius: 10px;
  }
`;

export const Logo = styled.div`
  width: 100%;
  cursor: pointer;
  aspect-ratio: 1;
  display: flex;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  & > img {
    width: 80%;
    height: 80%;
  }
  @media (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const Tooltip = styled.div`
  position: absolute;
  top: 50%;
  left: calc(100% + 10px);
  transform: translateY(-50%);
  background-color: #ebebeb24;
  padding: 10px;
  border-radius: 10px;
  font-size: 12px;
  color: #fff;
  white-space: nowrap;
  z-index: 1000;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease-in-out;
  opacity: 0;
  pointer-events: none;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -10px;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 10px solid transparent;
  }
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: -10px;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 10px solid #ebebeb24;
  }
  ${Item}:hover & {
    opacity: 1;
    pointer-events: all;
  }
`;
