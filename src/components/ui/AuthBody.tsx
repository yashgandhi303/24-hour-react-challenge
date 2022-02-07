import styled from 'styled-components';

export const AuthBody = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .start,
  .form,
  .end {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }

  .start {
    flex-direction: row;
    gap: 8px;
  }

  .end {
    h3 {
      font-weight: 500;
      font-size: 14px;
      line-height: 19.12px;
      color: ${({ theme }) => theme.colors.text[200]};
    }
  }

  .agreement {
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    color: ${({ theme }) => theme.colors.text[300]};

    a {
      color: ${({ theme }) => theme.colors.blue[200]};
    }
  }

  .line {
    display: block;
    border-top: solid 1px ${({ theme }) => theme.colors.text[600]};
  }
`;
