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
    fetch("http://localhost:3000/pessoas/" + id, { method: "GET" })
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
    fetch("http://localhost:3000/pessoas", {
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
    fetch("http://localhost:3000/pessoas/" + user.id, {
      method: "PUT",
      Headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((resposta) => {
      if (resposta.ok) {
        this.buscarUsuarios();
      } else {
        console.log(resposta)
        alert("Não foi possível atualizar o usuário");
      }
    });
  };

  deletarUsuario = (id) => {
    fetch("http://localhost:3000/pessoas/" + id, { method: "DELETE" }).then(
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
                    this.buscarDetalheUsuario(user.id);
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

  atualizarStateNome = (evento) => {
    this.setState({
      nome: evento.target.value,
    });
  };

  atualizarStateEmail = (evento) => {
    this.setState({
      email: evento.target.value,
    });
  };

  atualizarStateData = (evento) => {
    this.setState({
        dtNascimento: evento.target.value,
      });
  };

  submeterCadastroUsuario = () => {
    const user = {
      id: this.state.id,
      nome: this.state.nome,
      email: this.state.email,
      dtNascimento: this.state.dtNascimento,
    };

    if (this.state === 0) {
      this.cadastrarUsuario(user);
    } else {
      this.atualizarUsuario(user.id);
    }
  };

  resetarState = () => {
    this.setState({
      id: 0,
      nome: "",
      email: "",
      dtNascimento: "",
    });
  };

  renderFormulario() {
    return (
      <form>
        <div class="form-group">
          <label for="nomeExample">Nome</label>
          <input
            type="text"
            class="form-control"
            placeholder="Digite o seu nome"
            value={this.state.nome}
            onChange={this.atualizarStateNome}
          />
        </div>

        <div class="form-group">
          <label for="exampleInputEmail">Email </label>
          <input
            type="email"
            class="form-control"
            aria-describedby="emailHelp"
            placeholder="@hotmail.com"
            value={this.state.email}
            onChange={this.atualizarStateEmail}
          />
          <small id="emailHelp" class="form-text text-muted">
            Utilize o melhor email.
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="dataNascimento">Data de Nascimento</label>
          <input
            type="date"
            className="form-control"
            placeholder="dd/mm/yyyy"
            value={this.state.dtNascimento}
            onChange={this.atualizarStateData}
          />
        </div>

        <button
          type="submit"
          class="btn btn-primary"
          onClick={this.submeterCadastroUsuario}
        >
          Salvar
        </button>

        <button
          type="submit"
          class="btn btn-secondary"
          onClick={this.resetarState}
        >
          Novo
        </button>
      </form>
    );
  }

  render() {
    return (
      <div>
        <div>{this.renderFormulario()}</div>
        <div>{this.renderTabela()}</div>
      </div>
    );
  }
}

export default Users;
