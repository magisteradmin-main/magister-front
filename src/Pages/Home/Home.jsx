/*
.Página Home
.Para mudar o texto, edite o que estiver dentro de <Title> <Text>
.Para mudar o fundo, mude o background-image no MainArea (styles.js)
*/

import React from "react";
import { MainArea, Content, Title, Text } from "./styles";
import Header from "../../Components/Header/Header";

function Home() {
  return (
    <>
      <Header></Header>
      <MainArea>
        <Content>
          <Title>
            <span>M</span>agister - sentidos revelados
          </Title>
          <Text>
            Magister é um método de leitura profunda no qual termos-chave são
            substituídos por significados-chave com o intuito de promover a
            cognição através da leitura profunda de diferentes sentidos
            <br /> <br /> <br /> Nem tudo o que se lê está na superfície. Há
            camadas invisíveis onde o sentido repousa, silencioso, esperando ser
            tocado por quem vê além das letras.
            <br />O Magister é um espaço para essa travessia — onde o texto se
            abre e o sentido se revela em significado profundo
          </Text>
        </Content>
      </MainArea>
    </>
  );
}

export default Home;
