import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import dashboard from '../../assets/background.jpg';

export function Home() {
  return (
    <div className="Home">
      
      <section className="sobre">
        <div className="container text-center">
          <h1>Simplifique o Gerenciamento de Usuários</h1>
          <p>
            Uma solução eficiente para organizar, cadastrar e gerenciar seus
            usuários.
          </p>
          <button className="btn btn-primary btn-lg">Saiba Mais</button>
        </div>
      </section>

         {/* Seção Funcionalidades */}
         <section id="features" className="features">
          <div className="container">
            <h2 className="text-center">Funcionalidades</h2>
            <div className="row text-center">
              <div className="col-md-4">
                <i className="bi bi-person-plus icon"></i>
                <h4>Cadastro Rápido</h4>
                <p>Adicione usuários em poucos passos com total segurança.</p>
              </div>
              <div className="col-md-4">
                <i className="bi bi-graph-up icon"></i>
                <h4>Monitoramento</h4>
                <p>Acompanhe estatísticas e relatórios em tempo real.</p>
              </div>
              <div className="col-md-4">
                <i className="bi bi-shield-check icon"></i>
                <h4>Segurança</h4>
                <p>Garantimos a proteção de dados em conformidade com a LGPD.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Sobre */}
        <section id="about" className="about">
          <div className="container text-center">
            <h2>Sobre o Sistema</h2>
            <p>
              Desenvolvido para empresas que buscam otimizar o gerenciamento de
              usuários de forma prática e acessível.
            </p>
            <img
              src={dashboard}
              alt="Demonstração do sistema"
              className="img-fluid rounded"
            />
          </div>
        </section>

       <footer className="footer bg-dark text-white text-center">
          <p>&copy; 2024 Sistema de Gerenciamento. Todos os direitos reservados.</p>
        </footer>

    </div>
  );
}
