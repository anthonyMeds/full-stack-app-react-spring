import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import Users from "./components/User/Users";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Barra de navegação */}
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">
              Sistema de Gerenciamento de Usuários
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Página Inicial
                </Nav.Link>
                <Nav.Link as={Link} to="/users">
                  Gerenciar Usuários
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Rotas */}
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
