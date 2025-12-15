import styled from "styled-components";
import pergaminho from "../../Components/Background/pergaminho.jpg";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4a2803ff;
  height: 100px;

  @media (max-width: 480px) {
    height: 70px;
  }
`;

export const MainArea = styled.main`
  width: 100%;
  min-height: 89vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${pergaminho});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 20px;
`;

export const Content = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  width: 25%;
  padding: 40px;
  margin-bottom: 10%;

  @media (max-width: 1024px) {
    width: 40%;
    padding: 30px;
  }

  @media (max-width: 768px) {
    width: 60%;
    padding: 25px;
  }

  @media (max-width: 480px) {
    width: 90%;
    padding: 20px;
    margin-bottom: 5%;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 24px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 4px;
  font-weight: bold;
  font-size: 16px;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;

  @media (max-width: 480px) {
    padding: 6px 10px;
    font-size: 14px;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 8px 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;

  @media (max-width: 480px) {
    padding: 6px 10px;
    font-size: 14px;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  background-color: #4a2803ff;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
  margin-top: 16px;

  &:hover {
    background-color: #603a10;
  }

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 14px;
  }
`;
