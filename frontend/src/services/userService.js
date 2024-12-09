const API_URL = "https://spring-app-tmdu.onrender.com/pessoa";

export const buscarUsuarios = async () => {
  const resposta = await fetch(API_URL);
  return resposta.json();
};

export const buscarDetalheUsuario = async (id) => {
  const resposta = await fetch(`${API_URL}/${id}`);
  return resposta.json();
};

export const cadastrarUsuario = async (user) => {
  const resposta = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return resposta;
};

export const atualizarUsuario = async (user) => {
  const resposta = await fetch(`${API_URL}/${user.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return resposta;
};

export const deletarUsuario = async (id) => {
  const resposta = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  return resposta;
};