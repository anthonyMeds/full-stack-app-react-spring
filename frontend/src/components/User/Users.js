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

  componentDidMount() {
    this.buscarUsuarios();
  }

  buscarUsuarios = () => {
    fetch("http://localhost:3000/pessoas")
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

  renderTabela() {
    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Data de Nascimento</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {this.state.users.map((user) => (
            <tr>
              <td> {user.nome} </td>
              <td> {user.email} </td>
              <td> {user.dtNascimento} </td>
              <td>
                <button
                  onClick={() => {
                    this.atualizarUsuario(user.id);
                  }}
                  type="button"
                  class="btn btn-primary"
                >
                  Atualizar
                </button>
                <button
                  onClick={() => {
                    this.deletarUsuario(user.id);
                  }}
                  type="button"
                  class="btn btn-danger"
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }

  renderFormulario() {}

  render() {
    return (
        <div>
    {
      this.renderTabela()
    }
    </div>
    )
  }


}

export default Users;
