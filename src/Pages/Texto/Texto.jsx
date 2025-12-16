/*
Página de texto, em que o user escreve e envia o texto para ser traduzido.
Para mudar o tamanho do input ou da área, edite os componentes no styles.js
*/

import { useState } from "react";
import Header from "../../Components/Header/Header";
import { Botao1, Botao2, Container, Input, Transcrito } from "./styles";
import { useTranscreverTexto } from "../../Hooks/useTranscricao";

export default function Texto() {
  const [text, setText] = useState("");
  //Hook que envia o texto para o backend traduzir.
  const {
    mutate: transcreverTexto,
    data,
    isLoading,
    isError,
    reset,
  } = useTranscreverTexto({
    onSuccess: (text) => {
      console.log("Transcrição recebida!");
    },
    onError: () => {
      console.log("Erro");
    },
  });

  const handleTranscricao = () => {
    reset();
    if (text) {
      transcreverTexto({ text });
    }
  };
  //Limpa o campo e o resultado
  const handleLimparTraducao = () => {
    setText("");
    reset();
  };

  return (
    <>
      <Header></Header>
      <Container>
        <Input
          type="text"
          placeholder="Escreva aqui..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></Input>

        <Botao1 onClick={handleTranscricao} disabled={isLoading}>
          {isLoading ? "Transcrevendo..." : "Transcrever"}
        </Botao1>

        <Transcrito>
          {isError && "Erro na transcrição"}
          {data ? data.resultado : "Tradução..."}
        </Transcrito>
        <Botao2 onClick={handleLimparTraducao}>Apagar</Botao2>
      </Container>
    </>
  );
}
