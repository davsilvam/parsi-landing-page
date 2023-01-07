import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 0 120px;
  margin-top: 120px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    h4 {
      font-size: 14px;
      color: ${({ theme }) => theme.colors.primary[400]};
    }

    h2 {
      font-size: 32px;

      span {
        font-weight: 700;
        color: ${({ theme }) => theme.colors.primary[500]};
      }
    }
  }
`

export const Functionality = styled.article`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr, 1fr;
  align-items: center;
  justify-content: center;
  gap: 52px;
  padding: 56px 120px;
  background: radial-gradient(
    55.65% 220.76% at 21.91% 46.07%,
    rgb(73, 29, 149, 0.24) 0,
    rgba(194, 97, 254, 0.04) 100%
  );
  border: 1px solid rgb(73, 29, 149, 0.24);
  border-radius: 16px;

  img {
    grid-row: 1;
    height: 360px;
    border: 1px solid rgb(73, 29, 149, 0.24);
    box-shadow: rgba(12, 12, 12, 0.2) 0px 7px 29px 0px;
    border-radius: 12px;
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
    }
  }
`
