import styled from 'styled-components'

export const Container = styled.section`
  width: 880px;

  @media (max-width: 769px) {
    & {
      width: 100%;
    }
  }

  display: flex;
  flex-direction: column;
  align-items: center;
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

  gap: 24px;
  margin-top: 84px;

  @media (max-width: 426px) {
    & {
      margin-top: 48px;
    }
  }

  h1 {
    font-weight: 700;
    font-size: 40px;
    text-align: center;

    span {
      font-weight: 800;
      color: ${({ theme }) => theme.colors.primary[500]};
    }
  }

  p {
    max-width: 800px;
    text-align: center;
    color: ${({ theme }) => theme.colors.secondary[300]};
    font-weight: 500;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    margin-top: 24px;

    @media (max-width: 426px) {
      & {
        flex-wrap: wrap;
      }
    }
  }

  img {
    @media (max-width: 426px) {
      & {
        order: -1;
      }
    }
  }
`

export const RepoButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 28px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.secondary[100]};
  border: 1px solid ${({ theme }) => theme.colors.secondary[100]};
  background-color: transparent;
  transition: 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary[900]};
    background-color: ${({ theme }) => theme.colors.secondary[100]};
  }
`
