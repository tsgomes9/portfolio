import './headerStyle.scss'

const Header = () => {
  // Função que recebe um valor de id e faz scroll para sessão correspondente
  function scrollWin(e) {
    setTimeout(() => {
      //Replace para tornar o id igual ao da sessão correspondente
      const element = document.getElementById(`${e.replace('Link', '')}`)
      element.scrollIntoView()
    }, 400)
  }

  return (
    <div className="navbar navbar-dark fixed-top navbar-expand-lg" id="header">
      <div className="container">
        <a className="navbar-brand logo" href="#hello-world">
          Portfólio
        </a>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          // onClick={setToggle}
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
          <div className="offcanvas-body ">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#aboutMe"
                  onClick={(e) => scrollWin(e.target.id)}
                  data-bs-target="offcanvas"
                  data-bs-dismiss="offcanvas"
                >
                  <div className="nav-style-item" id="aboutMeLink">
                    Sobre mim
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#habilitys"
                  onClick={(e) => scrollWin(e.target.id)}
                  data-bs-target="offcanvas"
                  data-bs-dismiss="offcanvas"
                >
                  <div className="nav-style-item" id="habilitysLink">
                    Habilidades
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#projects"
                  onClick={(e) => scrollWin(e.target.id)}
                  data-bs-target="offcanvas"
                  data-bs-dismiss="offcanvas"
                >
                  <div className="nav-style-item" id="projectsLink">
                    Projetos
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#contact"
                  onClick={(e) => scrollWin(e.target.id)}
                  data-bs-target="offcanvas"
                  data-bs-dismiss="offcanvas"
                >
                  <div className="nav-style-item-contact" id="contactLink">
                    Contato
                  </div>
                </a>
              </li>
            </ul>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
