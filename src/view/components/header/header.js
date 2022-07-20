import './headerStyle.scss'

const Header = () => {
  return (
    <div className="navbar bg-light fixed-top navbar-expand-lg" id="header">
      <div className="container header">
        <a className="navbar-brand logo" href="#header">
          Meu Portfólio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Menu Principal
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#aboutMe">
                  <div className="nav-style-item">Sobre mim</div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#habilitys">
                  <div className="nav-style-item">Habilidades</div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  <div className="nav-style-item">Projetos</div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <div className="nav-style-item-contact">Contato</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="hello-message col-12 col-sm-12 col-md-12 col-lg-6">
          <h1>Olá, eu o Thiago!</h1>

          <p>
            Aqui você pode conferir minhas informações profissionais e
            acadêmicas, além de alguns projetos que venho desenvolvendo{' '}
          </p>

          <i class="devicon-linkedin-plain"></i>

          <i class="devicon-github-original"></i>
        </div>
      </div>
    </div>
  )
}

export default Header
