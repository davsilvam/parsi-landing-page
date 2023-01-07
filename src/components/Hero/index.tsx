import React from 'react'
import { IconContext } from 'react-icons'
import { BsGithub } from 'react-icons/bs'
import desktopHeroImage from '../../assets/devices.png'
import ButtonCTA from '../ButtonCTA'
import { Container, RepoButton } from './styles'

const Hero: React.FC = () => {
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
        <RepoButton
          href="https://github.com/davsilvam/parsi-app"
          target="_blank">
          <IconContext.Provider
            value={{ size: '20px', className: 'global-class-name' }}>
            Repositório <BsGithub />
          </IconContext.Provider>
        </RepoButton>
      </div>
      <img
        src={desktopHeroImage}
        alt="Imagem ilustrativa com a aplicação da Parsi rodando na tela de um notebook e de um celular, lado a lado."
      />
    </Container>
  )
}

export default Hero
