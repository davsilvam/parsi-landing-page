import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 0 120px;

  @media (max-width: 1025px) {
    & {
      padding: 0 40px;
    }
  }

  @media (max-width: 426px) {
    & {
      padding: 0 28px;
    }
  }

  margin-top: 120px;

  @media (max-width: 426px) {
    & {
      margin-top: 56px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: 24px;
      text-align: center;

      span {
        font-size: 32px;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.primary[500]};
      }
    }
  }
`

export const Functionality = styled.article`
  width: 100%;
  display: grid;

  @media (max-width: 1025px) {
    &:nth-child(3) {
      flex-direction: column-reverse;
    }
  }

  @media (max-width: 769px) {
    & {
      display: flex;
      flex-direction: column;
    }
  }

  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  justify-content: center;
  gap: 52px;
  padding: 56px 120px;

  @media (max-width: 1025px) {
    & {
      padding: 56px 80px;
    }
  }

  @media (max-width: 769px) {
    & {
      padding: 56px 32px;
      gap: 32px;
    }
  }

  background: radial-gradient(
    55.65% 220.76% at 21.91% 46.07%,
    rgb(73, 29, 149, 0.24) 0,
    rgba(194, 97, 254, 0.04) 100%
  );
  border: 1px solid rgb(73, 29, 149, 0.24);
  border-radius: 16px;

  img {
    grid-row: 1;
    width: 360px;
    height: 360px;
    border: 1px solid rgb(73, 29, 149, 0.24);
    box-shadow: rgba(12, 12, 12, 0.2) 0px 7px 29px 0px;
    border-radius: 12px;

    @media (max-width: 769px) {
      & {
        width: 280px;
        height: 280px;
      }
    }

    @media (max-width: 426px) {
      & {
        width: 100%;
        height: auto;
      }
    }
  }

  > div {
    grid-row: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;

    div {
      padding: 12px;
      border-radius: 100%;
      background-color: ${({ theme }) => theme.colors.secondary[900]};
      margin-bottom: 8px;
    }

    h3 {
      font-size: 28px;
    }

    p {
      max-width: 500px;
      color: ${({ theme }) => theme.colors.secondary[300]};
      line-height: 24px;

      @media (max-width: 1025px) {
        & {
          text-align: justify;
        }
      }
    }
  }
`
