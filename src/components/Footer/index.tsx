import logo from '../../assets/parsi_full_logo.png'
import { Container } from './styles'

export function Footer() {
  return (
    <Container>
      <img
        src={logo}
        alt="Parsi logo."
      />
      <div>
        <nav>
          <strong>Aplicação</strong>

          <a href="#">Repositório</a>

          <a href="#">Projeto</a>
        </nav>

        <nav>
          <strong>Social</strong>

          <a
            href="https://github.com/davsilvam"
            target="_blank">
            Github
          </a>

          <a
            href="https://www.linkedin.com/in/davsilvam/"
            target="_blank">
            Linkedin
          </a>

          <a
            href="https://www.instagram.com/davsilvam_/"
            target="_blank">
            Instagram
          </a>
        </nav>
      </div>
    </Container>
  )
}
