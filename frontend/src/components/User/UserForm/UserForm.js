import React, { useState, useEffect } from "react";
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

  const validateName = (name) => {
    if (!name) {
      return "Nome é obrigatório";
    } else if (name.length > 120) {
      return "Nome não pode exceder 120 caracteres";
    }
    return "";
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return "Email é obrigatório";
    } else if (!emailRegex.test(email)) {
      return "Email inválido";
    }
    return "";
  };

  const validateDate = (date) => {
    const dateRegex = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/\d{4}$/;
    if (!date) {
      return "Data de nascimento é obrigatória";
    } else if (!dateRegex.test(date)) {
      return "Data de nascimento deve estar no formato dd/mm/yyyy";
    }
    return "";
  };

  const handleBlur = (field, value) => {
    const newErrors = { ...errors };

    switch (field) {
      case "nome":
        newErrors.nome = validateName(value);
        break;
      case "email":
        newErrors.email = validateEmail(value);
        break;
      case "dtNascimento":
        newErrors.dtNascimento = validateDate(value);
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  useEffect(() => {
    if (showErrorMessages) {
      handleBlur("nome", nome);
      handleBlur("email", email);
      handleBlur("dtNascimento", dtNascimento);
    }
  }, [showErrorMessages, nome, email, dtNascimento]);

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
          onBlur={(e) => handleBlur("nome", e.target.value)}
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
          onBlur={(e) => handleBlur("email", e.target.value)}
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
          type="date"
          className="form-control"
          value={dtNascimento}
          onChange={atualizarStateData}
          onBlur={(e) => handleBlur("dtNascimento", e.target.value)}
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
