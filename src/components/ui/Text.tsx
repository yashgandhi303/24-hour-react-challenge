import styled from 'styled-components';

export const IntroText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-align: center;

  span {
    display: block;
    color: ${({ theme }) => theme.colors.blue[200]};
    font-size: 16px;
    line-height: 28px;
  }
`;
