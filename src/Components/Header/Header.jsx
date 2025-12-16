/*
.Esse é o header do site, que aparece em todas as páginas.
.Nele fica a logo, o menu e o botão de login e logout.
.Para alterar o menu hambúrguer: Burguer, MobileMenu e menuOpen.
*/

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import { useState } from "react";
import logo from "../Logo/logoMagister.png";
import {
  HeaderWrapper,
  Center,
  Logo,
  MenuItem,
  ButtonLogin,
  Burger,
  MobileMenu,
} from "./styles";

export default function Header() {
  const { user, logout } = useAuth(); //autenticação (user e logout)
  const navigate = useNavigate(); //navegação entre páginas (hook)
  const [menuOpen, setMenuOpen] = useState(false); //controle do menu na versão mobile

  return (
    <>
      <HeaderWrapper>
        {/*botão menu mobile*/}
        <Burger onClick={() => setMenuOpen(!menuOpen)}>☰</Burger>
        {/*logo que volta para home*/}
        <MenuItem to="/">
          <Logo>
            <img src={logo} alt="Logo" style={{ width: 150, height: 78 }} />
          </Logo>
        </MenuItem>
        {/*menu desktop*/}
        <Center className={menuOpen ? "open" : ""}>
          <MenuItem to="/questions">Labore</MenuItem>
          <MenuItem to="/texto">DIXIT</MenuItem>
        </Center>

        {user ? (
          <>
            <span style={{ color: "white", marginRight: "20px" }}>
              Olá, {user.nome}!
            </span>
            <ButtonLogin onClick={logout}>Sair</ButtonLogin>
          </>
        ) : (
          <ButtonLogin onClick={() => navigate("/login")}>LOGIN</ButtonLogin>
        )}
      </HeaderWrapper>
      {/*menu mobile*/}
      {menuOpen && (
        <MobileMenu>
          <MenuItem to="/" onClick={() => setMenuOpen(false)}>
            Quem Somos
          </MenuItem>
          <MenuItem to="/questions" onClick={() => setMenuOpen(false)}>
            Labore
          </MenuItem>
          <ButtonLogin onClick={logout}>Sair</ButtonLogin>
        </MobileMenu>
      )}
    </>
  );
}
