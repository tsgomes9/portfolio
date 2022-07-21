import Header from '../components/header/header'
import AboutMe from '../components/aboutMe/aboutMe'
import Habilitys from '../components/habilitys/habilitys'
import DevProjects from '../components/devProjects/devProjects'
import Contact from '../components/contact/contact'

import './App.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="hello-container" id="hello-world">
        <div className="container">
          <div className="hello-message col-12 col-sm-12 col-md-12 col-lg-6 ">
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
      <AboutMe />
      <Habilitys />
      <DevProjects />
      <Contact />
    </div>
  )
}

export default App
