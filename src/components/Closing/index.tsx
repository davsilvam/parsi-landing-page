import React from 'react'
import { Container } from './styles'
import logo from '../../assets/parsi_logo.png'
import ButtonCTA from '../ButtonCTA'

const Closing: React.FC = () => {
  return (
    <Container>
      <a href="https://parsi-app.vercel.app/">
        <img
          src={logo}
          alt="Parsi logo."
        />
      </a>
      <h2>Comece agora mesmo</h2>
      <h4>Online, simples e grátis</h4>
      <ButtonCTA />
    </Container>
  )
}

export default Closing
