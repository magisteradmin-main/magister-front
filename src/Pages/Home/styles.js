import styled from "styled-components";

export const MainArea = styled.main`
  width: 100%;
  min-height: 89vh;
  background-image: url("/fundo.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
`;

export const Content = styled.div`
  text-align: center;
  max-width: 50%;
  width: 100%;
  padding: 0 20px;
`;

export const Title = styled.h1`
  margin-bottom: 16px;
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  font-size: 80px;
  text-align: center;
  line-height: 1;
  & > span {
    font-size: 2em;
    line-height: 0.8;
    font-family: "MedievalSharp", cursive;
    font-weight: 500;
  }

  @media (max-width: 1024px) {
    font-size: 60px;
  }

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Text = styled.p`
  line-height: 1.6;
  font-size: 16px;
  text-align: center;
  margin: 0 auto;
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  font-weight: bold;

  @media (max-width: 1024px) {
    font-size: 15px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;
