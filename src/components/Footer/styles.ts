import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;
  display: flex;
  align-items: flex-start;

  @media (max-width: 426px) {
    & {
      justify-content: center;
    }
  }

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

  margin-top: 240px;
  border-top: 1px solid rgb(73, 29, 149, 0.6);

  img {
    width: 104px;

    @media (max-width: 426px) {
      & {
        display: none;
      }
    }
  }

  div {
    display: flex;
    gap: 48px;

    nav {
      strong {
        font-size: 20px;
      }

      display: flex;
      flex-direction: column;
      gap: 4px;

      a {
        font-size: 14px;
        color: ${({ theme }) => theme.colors.secondary[300]};
        opacity: 0.65;
        transition: 0.15s ease-in-out;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
`
