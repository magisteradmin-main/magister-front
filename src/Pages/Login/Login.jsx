import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  MainArea,
  Content,
  Title,
  Label,
  Input,
  Select,
  Button,
} from "./styles";
import Header from "../../Components/Header/Header";
function Login() {
  const [nome, setNome] = useState("");
  const [profissao, setProfissao] = useState("estudante");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(nome, profissao);
    navigate("/");
  };

  return (
    <>
      <Header>
        <Title>Login</Title>
      </Header>

      <MainArea>
        <Content>
          <form onSubmit={handleSubmit}>
            <Label>Nome:</Label>
            <Input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />

            <Label>Profissão:</Label>
            <Select
              value={profissao}
              onChange={(e) => setProfissao(e.target.value)}
            >
              <option value="estudante">Estudante</option>
              <option value="psicanalista">Psicanalista</option>
              <option value="professor">Professor</option>
            </Select>

            <Button type="submit">Entrar</Button>
          </form>
        </Content>
      </MainArea>
    </>
  );
}

export default Login;
