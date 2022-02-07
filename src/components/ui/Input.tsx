import styled from 'styled-components';

export const Input = styled.input<{ error?: boolean }>`
  border-radius: 10px;
  border: solid 1px transparent;
  border-color: ${({ theme, error }) =>
    error ? theme.colors.danger : theme.colors.text[500]};
  padding: 11.5px 20px;
  color: ${({ theme }) => theme.colors.text[200]};
  font-weight: 400;
  font-size: 16px;

  &::placeholder {
    color: #828282;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent[2]};
  }
`;
