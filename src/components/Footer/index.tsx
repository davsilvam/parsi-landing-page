import React from 'react'
import { Container } from './styles'
import logo from '../../assets/parsi_full_logo.png'

const Footer: React.FC = () => {
  return (
    <Container>
      <img
        src={logo}
        alt="Parsi logo."
      />
      <div>
        <ul>
          <h3>Aplicação</h3>
          <li>
            <a
              href="https://github.com/davsilvam/parsi-app"
              target="_blank">
              Repositório
            </a>
          </li>
          <li>
            <a href="https://parsi-app.vercel.app">Projeto</a>
          </li>
        </ul>
        <ul>
          <h3>Social</h3>
          <li>
            <a
              href="https://github.com/davsilvam"
              target="_blank">
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/davsilvam/"
              target="_blank">
              Linkedin
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/davsilvam_/">Instagram</a>
          </li>
        </ul>
      </div>
    </Container>
  )
}

export default Footer
