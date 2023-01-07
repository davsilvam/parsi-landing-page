import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 120px;
  margin-top: 120px;

  h2 {
    font-size: 32px;

    span {
      font-weight: 700;
      color: ${({ theme }) => theme.colors.primary[500]};
    }
  }

  p {
    color: ${({ theme }) => theme.colors.secondary[300]};
    font-weight: 500;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    margin: 24px 0;

    &:has(li:hover) li:not(:hover) {
      opacity: 0.6;
      transform: scale(0.9);
    }

    li {
      cursor: pointer;
      grid-row: 1;
      max-width: 400px;
      border: 1px transparent;
      border-radius: 12px;
      padding: 2px;
      background-image: linear-gradient(
        to right top,
        #7c3aed,
        #8141ef,
        #8647f1,
        #8a4ef2,
        #8f54f4,
        #8c52ef,
        #8950eb,
        #864ee6,
        #7b43da,
        #6f38ce,
        #642dc2,
        #5821b6
      );
      box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
        rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
      transition: 0.3s ease-in-out;

      &:hover {
        transform: scale(1.1);
      }

      & > div {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
        padding: 20px 16px;
        border: 1px solid ${({ theme }) => theme.colors.secondary[700]};
        border-radius: 10px;
        background-color: ${({ theme }) => theme.colors.secondary[900]};

        & > div {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px;
          margin-bottom: 12px;
          border: 1px transparent;
          border-radius: 100%;
          background-color: ${({ theme }) => theme.colors.primary[500]};
        }

        p {
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
        }
      }
    }
  }
`
