import React, { useEffect, useState, useCallback } from "react";
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

  const validateDate = (date) => {
    if (!date) {
      return "Data de nascimento é obrigatória";
    }
    return "";
  };

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
        <label>Nome *</label>
        <input
          type="text"
          className="form-control"
          placeholder="Digite seu nome"
          value={nome}
          onChange={atualizarStateNome}
          maxLength="120"
          onBlur={validateAllFields}
        />
        {errors.nome && (
          <small className="form-text text-danger">{errors.nome}</small>
        )}
      </div>

      <div className={`form-group ${errors.email ? "has-error" : ""}`}>
        <label>Email *</label>
        <input
          type="email"
          className="form-control"
          placeholder="Digite seu email"
          value={email}
          onChange={atualizarStateEmail}
          onBlur={validateAllFields}
        />
        {errors.email && (
          <small className="form-text text-danger">{errors.email}</small>
        )}
      </div>

      <div className={`form-group ${errors.dtNascimento ? "has-error" : ""}`}>
        <label>Data de Nascimento *</label>
        <input
          type="date"
          className="form-control"
          value={dtNascimento}
          onChange={atualizarStateData}
          onBlur={validateAllFields}
        />
        {errors.dtNascimento && (
          <small className="form-text text-danger">{errors.dtNascimento}</small>
        )}
      </div>
    </form>
  );
};

export default UserForm;
