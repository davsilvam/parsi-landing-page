import desktopHeroImage from '../../assets/devices.png'
import { ButtonCTA } from '../'
import { Container, RepoButton } from './styles'
import { IconGithub } from '../IconGithub'

export function Hero() {
  return (
    <Container>
      <h1>
        É hora de agir com parcimônia. <br />
        Ou melhor, com a <span>Parsi!</span>
      </h1>

      <p>
        A Parsi é uma aplicação web que o ajuda a registrar suas transações e
        ter uma visão ampla sobre como estão suas entradas e saídas, auxiliando
        no melhor gerenciamento dos gastos. Controle total sobre o dinheiro que
        entra e sai do seu bolso!
      </p>

      <div>
        <ButtonCTA />
        <RepoButton href="#">
          Repositório <IconGithub />
        </RepoButton>
      </div>

      <img
        src={desktopHeroImage}
        alt="Imagem ilustrativa com a aplicação da Parsi rodando na tela de um notebook e de um celular, lado a lado."
      />
    </Container>
  )
}
