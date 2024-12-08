import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import UserForm from "../UserForm/UserForm";
import "./UserModal.css";

const UserModal = ({
  showModal,
  fecharModal,
  modalTitle,
  nome,
  email,
  dtNascimento,
  atualizarStateNome,
  atualizarStateEmail,
  atualizarStateData,
  submeterCadastroUsuario,
}) => {
  const [showErrorMessages, setShowErrorMessages] = useState(false);

  const validateFields = () => {
    return nome && email && dtNascimento;
  };

  const handleSubmit = () => {
    setShowErrorMessages(true);
    if (validateFields()) {
      submeterCadastroUsuario();
    }
  };

  return (
    <Modal show={showModal} onHide={fecharModal}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <UserForm
          nome={nome}
          email={email}
          dtNascimento={dtNascimento}
          atualizarStateNome={atualizarStateNome}
          atualizarStateEmail={atualizarStateEmail}
          atualizarStateData={atualizarStateData}
          showErrorMessages={showErrorMessages}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={fecharModal}>
          Fechar
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserModal;
