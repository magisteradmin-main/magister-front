/*
Aqui é o controle de login e logout.
Mantém o user salvo no localStorage.
Para alterar os dados do user: objeto newUser na parte de login().
*/

import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); //user logado

  useEffect(() => {
    const storedUser = localStorage.getItem("user"); //recupera o user salvo
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const login = (nome, profissao) => {
    const newUser = { nome, profissao }; //dados salvos
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null); //limpa o estado
    localStorage.removeItem("user"); //remove do localStorage
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext); //hook
}
