import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 40px 120px;
  margin-top: 240px;
  border-top: 1px solid rgb(73, 29, 149, 0.6);

  img {
    width: 104px;
  }

  div {
    display: flex;
    gap: 48px;

    ul {
      h3 {
        font-size: 20px;
      }

      display: flex;
      flex-direction: column;
      gap: 4px;

      li {
        font-size: 14px;
        color: ${({ theme }) => theme.colors.secondary[300]};
        opacity: 0.65;
        transition: 0.15s ease-in-out;

        :hover {
          opacity: 1;
        }
      }
    }
  }
`
