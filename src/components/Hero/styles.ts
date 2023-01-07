import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-top: 84px;
  width: 800px;

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
    width: 800px;
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
