import React from "react";

import Table from "react-bootstrap/Table";

class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      nome: "",
      email: "",
      dtNascimento: "",
      users: [],
    };
  }

  componentDidMount() {}

  buscarUsuarios = () => {
    fetch("http://localhost:8080/pessoas")
      .then((resposta) => resposta.json())
      .then((dados) => {
        this.setState({ users: dados });
      });
  };

  buscarDetalheUsuario = (id) => {
    fetch("http://localhost:8080/pessoa/" + id, { method: "GET" })
      .then((resposta) => resposta.json())
      .then((user) => {
        this.setState({
          id: user.id,
          nome: user.nome,
          email: user.email,
          dtNascimento: user.dtNascimento,
        });
      });
  };

  cadastrarUsuario = (user) => {
    fetch("http://localhost:8080/pessoa", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((resposta) => {
      if (resposta.ok) {
        this.buscarUsuarios();
      } else {
        alert("Não foi possível cadastrar o usuário");
      }
    });
  };

  atualizarUsuario = (user) => {
    fetch("http://localhost:8080/pessoa/" + user.id, {
      method: "PUT",
      Headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((resposta) => {
      if (resposta.ok) {
        this.buscarUsuarios();
      } else {
        alert("Não foi possível atualizar o usuário");
      }
    });
  };

  deletarUsuario = (id) => {
    fetch("http://localhost:8080/pessoa/" + id, { method: "DELETE" }).then(
      (resposta) => {
        if (resposta.ok) {
          this.buscarUsuarios();
        } else {
          alert("Não foi possível excluir o usuário");
        }
      }
    );
  };



  
}

export default Users;
