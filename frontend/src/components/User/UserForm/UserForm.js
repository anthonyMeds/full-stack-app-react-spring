import React, { useState, useEffect, useCallback } from "react";
import "./UserForm.css";

const UserForm = ({
  nome,
  email,
  dtNascimento,
  atualizarStateNome,
  atualizarStateEmail,
  atualizarStateData,
  showErrorMessages,
}) => {
  const [errors, setErrors] = useState({});

  const validateName = useCallback((name) => {
    if (!name) {
      return "Nome é obrigatório";
    } else if (name.length > 120) {
      return "Nome não pode exceder 120 caracteres";
    }
    return "";
  }, []);

  const validateEmail = useCallback((email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return "Email é obrigatório";
    } else if (!emailRegex.test(email)) {
      return "Email inválido";
    }
    return "";
  }, []);

  const validateDate = useCallback((date) => {
    const dateRegex = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/\d{4}$/;
    if (!date) {
      return "Data de nascimento é obrigatória";
    } else if (!dateRegex.test(date)) {
      return "Data de nascimento deve estar no formato dd/mm/yyyy";
    }
    return "";
  }, []);

  const validateAllFields = useCallback(() => {
    setErrors({
      nome: validateName(nome),
      email: validateEmail(email),
      dtNascimento: validateDate(dtNascimento),
    });
  }, [nome, email, dtNascimento, validateName, validateEmail, validateDate]);

  useEffect(() => {
    if (showErrorMessages) {
      validateAllFields();
    }
  }, [showErrorMessages, validateAllFields]);

  return (
    <form>
      <div className={`form-group ${errors.nome ? "has-error" : ""}`}>
        <label htmlFor="nomeExample">
          Nome <span className="required-asterisk">*</span>
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Digite o seu nome"
          value={nome}
          onChange={atualizarStateNome}
          onBlur={() => validateAllFields()}
          maxLength="120"
          required
        />
        {errors.nome && (
          <small className="form-text text-danger">{errors.nome}</small>
        )}
      </div>

      <div className={`form-group ${errors.email ? "has-error" : ""}`}>
        <label htmlFor="exampleInputEmail">
          Email <span className="required-asterisk">*</span>
        </label>
        <input
          type="email"
          className="form-control"
          aria-describedby="emailHelp"
          placeholder="@hotmail.com"
          value={email}
          onChange={atualizarStateEmail}
          onBlur={() => validateAllFields()}
          required
        />
        <small id="emailHelp" className="form-text text-muted">
          Utilize o melhor email.
        </small>
        {errors.email && (
          <small className="form-text text-danger">{errors.email}</small>
        )}
      </div>

      <div className={`form-group ${errors.dtNascimento ? "has-error" : ""}`}>
        <label htmlFor="dataNascimento">
          Data de Nascimento <span className="required-asterisk">*</span>
        </label>
        <input
          type="text"
          className="form-control"
          value={dtNascimento}
          placeholder="dd/mm/yyyy"
          onChange={(e) => atualizarStateData(e.target.value)}
          onBlur={() => validateAllFields()}
          required
        />
        {errors.dtNascimento && (
          <small className="form-text text-danger">{errors.dtNascimento}</small>
        )}
      </div>
    </form>
  );
};

export default UserForm;
