import styled from "styled-components";
import pergaminho from "../../Components/Background/pergaminho.jpg";

export const Container = styled.div`
  background-image: url(${pergaminho});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 89vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 1;
  padding: 20px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  > * {
    z-index: 3;
    position: relative;
  }
`;

export const Input = styled.textarea`
  background-color: rgba(255, 255, 255, 0.9);
  color: black;
  width: 70%;
  border-radius: 5px;
  height: 20vh;
  font-size: 22px;
  font-weight: bold;
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  padding: 10px;
  border: 2px solid black;
  margin: 30px 0;
  resize: none;
  overflow: auto;
  line-height: 1.5;
  box-sizing: border-box;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);

  &::placeholder {
    color: black;
  }

  @media (max-width: 1024px) {
    width: 80%;
    font-size: 20px;
    height: 18vh;
  }

  @media (max-width: 768px) {
    width: 90%;
    font-size: 18px;
    height: 16vh;
  }

  @media (max-width: 480px) {
    width: 95%;
    font-size: 16px;
    height: 14vh;
  }
`;

export const Botao1 = styled.button`
  background-color: #d5c97b;
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  width: 150px;
  height: 60px;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  margin: 30px 0 0 0;
  box-sizing: border-box;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 1);
  cursor: pointer;

  @media (max-width: 768px) {
    width: 120px;
    height: 50px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 45px;
    font-size: 14px;
  }
`;

export const Botao2 = styled.button`
  background-color: #d5c97b;
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  width: 150px;
  height: 60px;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  margin: 20px 0 0 0;
  cursor: pointer;
  box-sizing: border-box;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 1);

  @media (max-width: 768px) {
    width: 120px;
    height: 50px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 45px;
    font-size: 14px;
  }
`;

export const Transcrito = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  color: black;
  width: 70%;
  height: 20vh;
  font-size: 25px;
  font-weight: bold;
  border: 2px solid black;
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  padding: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  margin: 30px 0;
  overflow-y: auto;
  word-wrap: break-word;
  border-radius: 5px;
  @media (max-width: 1024px) {
    width: 80%;
    font-size: 22px;
    height: 18vh;
  }

  @media (max-width: 768px) {
    width: 90%;
    font-size: 20px;
    height: 16vh;
  }

  @media (max-width: 480px) {
    width: 95%;
    font-size: 18px;
    height: 14vh;
  }
`;
