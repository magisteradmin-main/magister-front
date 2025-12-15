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
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <HeaderWrapper>
        <Burger onClick={() => setMenuOpen(!menuOpen)}>☰</Burger>
        <MenuItem to="/">
          <Logo>
            <img src={logo} alt="Logo" style={{ width: 150, height: 78 }} />
          </Logo>
        </MenuItem>
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
