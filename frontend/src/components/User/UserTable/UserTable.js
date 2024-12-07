import React from "react";
import Table from "react-bootstrap/Table";
import "./UserTable.css";

const UserTable = ({ users, buscarDetalheUsuario, deletarUsuario }) => {
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
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.nome}</td>
            <td>{user.email}</td>
            <td>{user.dtNascimento}</td>
            <td>
              <button
                onClick={() => buscarDetalheUsuario(user.id)}
                type="button"
                className="btn btn-primary"
              >
                Atualizar
              </button>
              <button
                onClick={() => deletarUsuario(user.id)}
                type="button"
                className="btn btn-danger"
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UserTable;