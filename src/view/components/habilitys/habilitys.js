import './habilitys.scss'

const Habilitys = () => {
  return (
    <div className="habilitys-session" id="habilitys">
      <div className="container">
        <h1>Habilidades</h1>

        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 p-3 ">
            <div className="card p-4 border-0 hability-card">
              <span class="material-symbols-outlined">devices</span>
              <h2>Front End</h2>
              <p className="fw-bold">2+ anos</p>

              <p className="d-flex flex-wrap">
                Criação de páginas responsivas seguindo as principais práticas e
                ferramentas do mercado
              </p>

              <p className="hability-list">
                ReactJS | HTML5 | CSS3 | SASS | Bootstrap
              </p>
              <div className="d-flex justify-content-center">
                <div className="hability-icons">
                  <i class="devicon-react-original"></i>
                  <i class="devicon-html5-plain"></i>
                  <i class="devicon-css3-plain"></i>
                  <i class="devicon-sass-original"></i>
                  <i class="devicon-bootstrap-plain"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-6 p-3 ">
            <div className="card p-4 border-0 hability-card">
              <span class="material-symbols-outlined">code</span>
              <h2>Back End</h2>
              <p className="fw-bold">1+ ano</p>

              <p className="d-flex flex-wrap">
                Padrões SOLID e clean code; Versionamento de código; Bancos
                relacionais e não relacionais
              </p>

              <p className="hability-list">
                NodeJS | Javascript | Git | MongoDB | PostgreSQL
              </p>
              <div className="d-flex justify-content-center">
                <div className="hability-icons">
                  <i class="devicon-nodejs-plain"></i>
                  <i class="devicon-javascript-plain"></i>
                  <i class="devicon-git-plain"></i>
                  <i class="devicon-mongodb-plain"></i>
                  <i class="devicon-postgresql-plain"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Habilitys
