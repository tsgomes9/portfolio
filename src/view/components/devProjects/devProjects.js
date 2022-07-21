import './devProjects.scss'
import mercadoCrypto from '../../img/mercadoCrypto.png'

const DevProjects = () => {
  return (
    <div className="devProjects-session container" id="projects">
      <h1>Projetos</h1>

      <div className="row ">
        <div className="col-12 col-sm-12 col-md-12 col-lg-4 mt-2">
          <div className="card p-4 project shadow-lg">
            <h2>Mercado Crypto</h2>
            <img
              src={mercadoCrypto}
              className="img-fluid rounded border mb-3 shadow"
            ></img>
            <p>
              Projeto que traz informações em tempo real sobre o mercado de
              criptomoedas. Consumindo a API do mercado bitcoin, são obtidos e
              analisados os dados relacionados aos valores dos ativos. Para
              garantir a responsividade, foi utilizado o framework Bootstrap. O
              back end foi desenvolvido em javascript
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
            <h2>Mercado Crypto</h2>
            <img
              src={mercadoCrypto}
              className="img-fluid rounded border mb-3 shadow"
            ></img>
            <p>
              Projeto que traz informações em tempo real sobre o mercado de
              criptomoedas. Consumindo a API do mercado bitcoin, são obtidos e
              analisados os dados relacionados aos valores dos ativos. Para
              garantir a responsividade, foi utilizado o framework Bootstrap. O
              back end foi desenvolvido em javascript
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
            <h2>Mercado Crypto</h2>
            <img
              src={mercadoCrypto}
              className="img-fluid rounded border mb-3 shadow"
            ></img>
            <p>
              Projeto que traz informações em tempo real sobre o mercado de
              criptomoedas. Consumindo a API do mercado bitcoin, são obtidos e
              analisados os dados relacionados aos valores dos ativos. Para
              garantir a responsividade, foi utilizado o framework Bootstrap. O
              back end foi desenvolvido em javascript
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
      </div>
    </div>
  )
}

export default DevProjects
