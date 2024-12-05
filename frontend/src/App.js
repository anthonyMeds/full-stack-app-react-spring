
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import  Users  from './components/User/Users';
import { Home } from './components/Home/Home';

import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>Sistema de Gerenciamento de Usuários </h1>
      <BrowserRouter>

        <Nav variant="tabs">
          <Nav.Link as={Link} to="/">Pagina inicial</Nav.Link>
          <Nav.Link as={Link} to="/users">Gerenciar usuários</Nav.Link>

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
