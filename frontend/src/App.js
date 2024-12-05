
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import  Users  from './components/Users';
import { Home } from './components/Home';

import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>Sistema de gerenciamento de usuários </h1>
      <BrowserRouter>

        <Nav variant="tabs">
          <Nav.Link as={Link} to="/">Pagina inicial</Nav.Link>
          <Nav.Link as={Link} to="/alunos">Gerenciar usuários</Nav.Link>

        </Nav>


        <Routes>
          <Route path="/" index element={<Home />}></Route>
          <Route path="/users" element={<Users />}></Route>
        </Routes>

      </BrowserRouter>

    </div>

  );
}

export default App;
