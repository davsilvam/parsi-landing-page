import React from 'react'
import { Container, Backdrop } from './styles'
import logo from '../../assets/parsi_logo.png'
import ButtonCTA from '../ButtonCTA'

const Header: React.FC = () => {
  return (
    <>
      <Backdrop></Backdrop>
      <Container>
        <img
          src={logo}
          alt="Parsi logo"
        />
        <ButtonCTA />
      </Container>
    </>
  )
}

export default Header
