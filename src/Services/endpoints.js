import api from "./api";

export async function transcreverTexto({ text }) {
  const { data } = await api.post("/transcricao", { text });
  return data;
}
