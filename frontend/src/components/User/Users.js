import React from "react";
import UserTable from "./UserTable/UserTable";
import UserModal from "./UserModal/UserModal";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  buscarUsuarios,
  buscarDetalheUsuario,
  cadastrarUsuario,
  atualizarUsuario,
  deletarUsuario,
} from "../../services/userService";
import "./UserStyles.css";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      nome: "",
      email: "",
      dtNascimento: "",
      showModal: false,
      modalTitle: "",
      users: [],
    };
  }

  componentDidMount() {
    this.carregarUsuarios();
  }

  carregarUsuarios = async () => {
    try {
      const dados = await buscarUsuarios();
      if (Array.isArray(dados) && dados.length === 0) {
        toast.info("Nenhum usuário cadastrado.");
      }
      this.setState({ users: dados });
    } catch (error) {
      toast.error("Erro ao carregar usuários.");
      console.error("Erro ao carregar usuários:", error);
    }
  };

  handleBuscarDetalheUsuario = async (id) => {
    try {
      const user = await buscarDetalheUsuario(id);
      this.setState({
        id: user.id,
        nome: user.nome,
        email: user.email,
        dtNascimento: user.dtNascimento,
        showModal: true,
        modalTitle: "Atualizar Usuário",
      });
    } catch (error) {
      toast.error("Erro ao buscar detalhes do usuário.");
    }
  };

  handleCadastrarUsuario = async (user) => {
    try {
      const resposta = await cadastrarUsuario(user);
      if (resposta.ok) {
        this.carregarUsuarios();
        toast.success("Usuário cadastrado com sucesso!");
      } else {
        toast.error("Não foi possível cadastrar o usuário.");
      }
    } catch (error) {
      toast.error("Erro ao cadastrar usuário.");
    }
  };

  handleAtualizarUsuario = async (user) => {
    try {
      const resposta = await atualizarUsuario(user);
      if (resposta.ok) {
        this.carregarUsuarios();
        toast.success("Usuário atualizado com sucesso!");
      } else {
        toast.error("Não foi possível atualizar o usuário.");
      }
    } catch (error) {
      toast.error("Erro ao atualizar usuário.");
    }
  };

  handleDeletarUsuario = async (id) => {
    try {
      const resposta = await deletarUsuario(id);
      if (resposta.ok) {
        this.carregarUsuarios();
        toast.success("Usuário excluído com sucesso!");
      } else {
        toast.error("Não foi possível excluir o usuário.");
      }
    } catch (error) {
      toast.error("Erro ao excluir usuário.");
    }
  };

  abrirModalNovo = () => {
    this.setState({
      id: 0,
      nome: "",
      email: "",
      dtNascimento: "",
      showModal: true,
      modalTitle: "Cadastrar Novo Usuário",
    });
  };

  fecharModal = () => {
    this.setState({ showModal: false });
  };

  submeterCadastroUsuario = () => {
    const user = {
      id: this.state.id,
      nome: this.state.nome,
      email: this.state.email,
      dtNascimento: this.state.dtNascimento,
    };

    if (this.state.id === 0) {
      this.handleCadastrarUsuario(user);
    } else {
      this.handleAtualizarUsuario(user);
    }

    this.fecharModal();
  };

  render() {
    return (
      <div className="user-container">
        <Button variant="success" onClick={this.abrirModalNovo}>
          Cadastrar Usuário
        </Button>
        <UserTable
          className="table-container"
          users={this.state.users}
          buscarDetalheUsuario={this.handleBuscarDetalheUsuario}
          deletarUsuario={this.handleDeletarUsuario}
        />
        <UserModal
          showModal={this.state.showModal}
          fecharModal={this.fecharModal}
          modalTitle={this.state.modalTitle}
          nome={this.state.nome}
          email={this.state.email}
          dtNascimento={this.state.dtNascimento}
          atualizarStateNome={(e) => this.setState({ nome: e.target.value })}
          atualizarStateEmail={(e) => this.setState({ email: e.target.value })}
          atualizarStateData={(e) =>
            this.setState({ dtNascimento: e.target.value })
          }
          submeterCadastroUsuario={this.submeterCadastroUsuario}
        />
        <ToastContainer />
      </div>
    );
  }
}

export default Users;