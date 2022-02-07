import styled from 'styled-components';

type ButtonTypes = {
  accent?: boolean;
  black?: boolean;
  disabled?: boolean;
};

export const Button = styled.button<ButtonTypes>`
  background-color: ${(props) => {
    if (props?.accent) {
      return props.theme.colors.accent[2];
    }

    if (props?.black) {
      return props.theme.colors.text[200];
    }

    if (props?.disabled) {
      return props.theme.colors.text[500];
    }

    return 'transparent';
  }};
  color: ${(props) => {
    if (props?.accent || props?.black || props?.disabled) {
      return props.theme.colors.white;
    }

    return props.theme.colors.accent[2];
  }};

  cursor: ${(props) => {
    if (props?.disabled) {
      return 'not-allowed';
    }

    return 'pointer';
  }};
  border: none;
  border-radius: 10px;
  padding: 8.5px 10px 9.5px 10px;
  display: flex;
  align-items: center;
  line-height: 22px;
`;
