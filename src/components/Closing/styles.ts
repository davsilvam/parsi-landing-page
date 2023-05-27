import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 240px;

  a {
    img {
      cursor: pointer;
      width: 96px;
      margin-bottom: 24px;
      transition: 0.15s ease-in-out;

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  h2 {
    font-size: 32px;
    margin-bottom: 4px;
  }

  h3 {
    font-size: 14px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.secondary[300]};
    opacity: 0.65;
    margin-bottom: 48px;
  }
`
