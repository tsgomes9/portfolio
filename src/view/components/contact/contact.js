import emailjs from 'emailjs-com'
import './contact.scss'
import { useRef } from 'react'
import Confirm from './confirm'

const Contact = () => {
  const form = useRef()
  function SendMessage(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_lrhbm1c',
        'template_59ftbj6',
        e.target,
        '_-_S6IRsS2d4BOwrz',
      )
      .then(
        (result) => {
          console.log(result.text)
          alert('E-mail enviado!')
        },
        (error) => {
          console.log(error.text)
        },
      )
    e.target.reset()
  }

  return (
    <form onSubmit={SendMessage} ref={form}>
      <div className="contact-session" id="contact">
        <div className="container container-fluid">
          <div className="row justify-content-md-center">
            <div class="mb-3 form-group col-12 col-sm-12 col-md-12 col-lg-6 ">
              <h1>Contato</h1>
              <label for="exampleFormControlInput1" class="form-label">
                Nome / Empresa
              </label>
              <input
                name="name"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Digite seu nome aqui"
              />
            </div>
          </div>

          <div className="row justify-content-md-center">
            <div class="mb-3 form-group col-12 col-sm-12 col-md-12 col-lg-6">
              <label for="exampleFormControlInput1" class="form-label">
                E-mail
              </label>
              <input
                name="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="email@example.com"
              />
            </div>
          </div>

          <div className="row justify-content-md-center">
            <div class="mb-3 form-group col-12 col-sm-12 col-md-12 col-lg-6">
              <label for="exampleFormControlInput1" class="form-label">
                Assunto
              </label>
              <input
                name="subject"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Título do e-mail"
              />
            </div>
          </div>

          <div className="row justify-content-md-center">
            <div class="mb-3 form-group col-12 col-sm-12 col-md-12 col-lg-6 ">
              <label for="exampleFormControlTextarea1" class="form-label">
                Sua mensagem
              </label>
              <textarea
                name="message"
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </div>

          <div className="row justify-content-md-center">
            <div className="contact-button-area col-12 col-sm-12 col-md-12 col-lg-6">
              <button type="submit" className="contact-button">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Contact
