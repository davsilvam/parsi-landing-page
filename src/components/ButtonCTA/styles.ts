import styled from 'styled-components'

export const Button = styled.a`
  cursor: pointer;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 28px;
  font-size: 16px;
  font-weight: 600;
  border: 1px transparent;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.secondary[100]};
  background-color: ${({ theme }) => theme.colors.primary[500]};
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[600]};
  }
`
