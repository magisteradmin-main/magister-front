import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  background-color: #4a2803ff;
  height: 100px;
  position: relative;
  width: 100%;
`;

export const Center = styled.nav`
  display: flex;
  gap: 50px;
  flex: 2;
  justify-content: center;

  @media (max-width: 728px) {
    display: none;

    &.open {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 100px;
      left: 0;
      right: 0;
      background-color: #4a2803ff;
      padding: 20px 0;
      gap: 20px;
      align-items: center;
    }
  }
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
`;
export const MenuItem = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 16px;
  transition: color 0.3s;

  &:hover {
    color: #60a5fa;
  }
`;

export const ButtonLogin = styled.button`
  padding: 10px 30px;
  border: none;
  background-color: white;
  color: black;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;

  &:hover {
    color: #60a5fa;
  }
`;

export const Burger = styled.div`
  display: none;
  font-size: 28px;
  color: white;
  cursor: pointer;

  @media (max-width: 728px) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  display: none;

  @media (max-width: 728px) {
    display: flex;
    flex-direction: column;
    background-color: #4a2803ff;
    align-items: center;
    padding: 20px 0;
    gap: 20px;
  }
`;
