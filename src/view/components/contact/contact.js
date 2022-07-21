import './contact.scss'

const Contact = () => {
  return (
    <div className="contact-session" id="contact">
      <div className="container container-fluid">
        <div class="mb-3">
          <h1>Contato</h1>
          <label for="exampleFormControlInput1" class="form-label">
            Nome
          </label>
          <input
            type="Name"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Digite seu nome aqui"
          />
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="email@example.com"
          />
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Assunto
          </label>
          <input
            type="Theme"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Título do e-mail"
          />
        </div>

        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Sua mensagem
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </div>
    </div>
  )
}

export default Contact
