import styled from 'styled-components'

export const Container = styled.header`
  z-index: 10;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 120px;

  @media (max-width: 1025px) {
    & {
      padding: 40px;
    }
  }

  @media (max-width: 426px) {
    & {
      padding: 40px 28px;
    }
  }

  img {
    width: 48px;
  }
`

export const Backdrop = styled.div`
  background: linear-gradient(90deg, #491d95, #955cf6 75.44%, #6928d9);
  background-image: linear-gradient(90deg, #491d95, #955cf6 75.44%, #6928d9);
  filter: blur(250px);
  height: 1000px;
  left: -5vw;
  opacity: 0.25;
  position: absolute;
  top: -800px;
  width: 100vw;
`
