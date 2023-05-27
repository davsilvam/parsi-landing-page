import { Fragment } from 'react'
import logo from '../../assets/parsi_logo.png'
import { ButtonCTA } from '../'
import { Backdrop, Container } from './styles'

export function Header() {
  return (
    <Fragment>
      <Backdrop />
      <Container>
        <img
          src={logo}
          alt="Parsi logo"
        />
        <ButtonCTA />
      </Container>
    </Fragment>
  )
}
