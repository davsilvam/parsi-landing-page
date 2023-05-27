import parsi_logo from '../../assets/parsi_logo.png'
import { ButtonCTA } from '../'
import { Container } from './styles'

export function Closing() {
  return (
    <Container>
      <a href="https://parsi-app.vercel.app/">
        <img
          src={parsi_logo}
          alt="Parsi logo."
        />
      </a>

      <h2>Comece agora mesmo</h2>
      <h3>Online, simples e grátis</h3>

      <ButtonCTA />
    </Container>
  )
}
