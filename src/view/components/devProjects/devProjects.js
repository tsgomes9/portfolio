import './devProjects.scss'
import mercadoCrypto from '../../img/mercadoCrypto.png'
import burguerShow from '../../img/burguerShow.png'
import restAPI from '../../img/restAPI.png'

const DevProjects = () => {
  return (
    <div className="devProjects-session container" id="projects">
      <h1>Projetos</h1>

      <div className="row ">
        <div className="col-12 col-sm-12 col-md-12 col-lg-4 mt-2">
          <div className="card p-4 project shadow">
            <h2>Mercado Crypto</h2>
            <img
              src={mercadoCrypto}
              className="img-fluid rounded border mb-3 shadow"
            ></img>
            <p>
              Projeto que traz informações em tempo real sobre o mercado de
              criptomoedas. Os dados são obtidos e analisados consumindo a API
              do Mercado Bitcoin. No frontend foi utilizado o framework
              Bootstrap. O back end foi desenvolvido em javascript
            </p>

            <div className="project-links">
              <a
                href="https://github.com/tsgomes9/MercadoCrypto"
                target="_blank"
              >
                <i class="devicon-github-original project-github"></i>
              </a>

              <a href="https://mercado-crypto.netlify.app" target="_blank">
                <span class="material-symbols-outlined project-open">
                  open_in_new
                </span>
              </a>
            </div>
            <div className="d-flex justify-content-center">
              <div className="project-icons p-2 rounded">
                <i class="devicon-javascript-plain"></i>
                <i class="devicon-html5-plain"></i>
                <i class="devicon-css3-plain"></i>
                <i class="devicon-bootstrap-plain"></i>
                <i class="devicon-git-plain"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-12 col-lg-4 mt-2">
          <div className="card p-4 project shadow-lg">
            <h2>Burguer Show</h2>
            <img
              src={burguerShow}
              className="img-fluid rounded border mb-3 shadow"
            ></img>
            <p>
              Projeto que consiste na criação de uma página estática, totalmente
              responsiva, para uma hamburgueria fictícia. Neste projeto as
              tecnologias utilizadas foram: Javascript, ReactJS, Bootstrap e
              Sass. As imagens foram baixadas dos sites Pexels e Freepik e
              editadas no Photoshop.
            </p>

            <div className="project-links">
              <a
                href="https://github.com/tsgomes9/Burguer-Show"
                target="_blank"
              >
                <i class="devicon-github-original project-github"></i>
              </a>

              <a href="https://show-burguer.netlify.app/" target="_blank">
                <span class="material-symbols-outlined project-open">
                  open_in_new
                </span>
              </a>
            </div>
            <div className="d-flex justify-content-center">
              <div className="project-icons p-2 rounded">
                <i class="devicon-react-original"></i>
                <i class="devicon-javascript-plain"></i>
                <i class="devicon-css3-plain"></i>
                <i class="devicon-bootstrap-plain"></i>
                <i class="devicon-git-plain"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-12 col-lg-4 mt-2">
          <div className="card p-4 project shadow-lg">
            <h2>API Rest</h2>
            <img
              src={restAPI}
              className="img-fluid rounded border mb-3 shadow"
            ></img>
            <p>
              API rest desenvolvida em NodeJS. A base de dados utilizada neste
              projeto foi o banco de dados não relacional MongoDB. O projeto
              consiste em uma aplicação simples de cadastro de pessoas, com
              intuito de exemplificar o uso de solicitações HTTP.
            </p>

            <div className="project-links mt-2 mb-1">
              <a
                href="https://github.com/tsgomes9/API_Person"
                target="_blank"
                rel="noreferrer"
              >
                <i class="devicon-github-original project-github"></i>
              </a>
            </div>
            <div className="d-flex justify-content-center">
              <div className="project-icons p-2 rounded">
                <i class="devicon-javascript-plain"></i>
                <i class="devicon-html5-plain"></i>
                <i class="devicon-css3-plain"></i>
                <i class="devicon-bootstrap-plain"></i>
                <i class="devicon-git-plain"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DevProjects
