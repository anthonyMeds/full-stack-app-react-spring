import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

// Imagens das funcionalidades
import cadastroImage from '../../assets/userIcon.png';
import monitoramentoImage from '../../assets/dashboardIcon.png';
import segurancaImage from '../../assets/safetyIcon.png';

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="Home">
      {/* Seção principal */}
      <section className="principal">
        <div className="overlay">
          <div className="container text-center text-white">
            <h1>Simplifique o Gerenciamento de Usuários</h1>
            <p>
              Uma solução eficiente para organizar, cadastrar e gerenciar seus
              usuários.
            </p>
            <button
              className="btn btn-primary btn-lg"
              onClick={() => navigate('/users')}
            >
              Saiba Mais
            </button>
          </div>
        </div>
      </section>

      {/* Seção Funcionalidades */}
      <section id="features" className="features bg-light">
        <div className="container">
          <h2 className="text-center">Funcionalidades</h2>
          <div className="row text-center">
            <div className="col-md-4">
              <img src={cadastroImage} alt="Cadastro Rápido" className="img-fluid rounded feature-image" />
              <h4>Cadastro Rápido</h4>
              <p>Adicione usuários em poucos passos com total segurança.</p>
            </div>
            <div className="col-md-4">
              <img src={monitoramentoImage} alt="Monitoramento" className="img-fluid rounded feature-image" />
              <h4>Monitoramento</h4>
              <p>Acompanhe estatísticas e relatórios em tempo real.</p>
            </div>
            <div className="col-md-4">
              <img src={segurancaImage} alt="Segurança" className="img-fluid rounded feature-image" />
              <h4>Segurança</h4>
              <p>Garantimos a proteção de dados em conformidade com a LGPD.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="footer bg-dark text-white text-center">
        <p>&copy; 2024 Sistema de Gerenciamento. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
