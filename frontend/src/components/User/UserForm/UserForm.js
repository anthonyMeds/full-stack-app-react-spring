import React from "react";
import "./UserForm.css";

const UserForm = ({
  nome,
  email,
  dtNascimento,
  atualizarStateNome,
  atualizarStateEmail,
  atualizarStateData,
}) => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="nomeExample">Nome</label>
        <input
          type="text"
          className="form-control"
          placeholder="Digite o seu nome"
          value={nome}
          onChange={atualizarStateNome}
        />
      </div>

      <div className="form-group">
        <label htmlFor="exampleInputEmail">Email</label>
        <input
          type="email"
          className="form-control"
          aria-describedby="emailHelp"
          placeholder="@hotmail.com"
          value={email}
          onChange={atualizarStateEmail}
        />
        <small id="emailHelp" className="form-text text-muted">
          Utilize o melhor email.
        </small>
      </div>

      <div className="form-group">
        <label htmlFor="dataNascimento">Data de Nascimento</label>
        <input
          type="date"
          className="form-control"
          placeholder="dd/mm/yyyy"
          value={dtNascimento}
          onChange={atualizarStateData}
        />
      </div>
    </form>
  );
};

export default UserForm;