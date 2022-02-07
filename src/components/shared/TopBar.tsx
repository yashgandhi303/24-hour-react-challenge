import styled from 'styled-components';

type TopBarProps = {
  title?: string;
};

const TopBar = ({ title }: TopBarProps) => {
  return (
    <TopBarWrapper>
      {title || (
        <Logo>
          <span>Home</span>
          <span>Page</span>
        </Logo>
      )}
    </TopBarWrapper>
  );
};

const Logo = styled.h3`
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text[100]};

  span:first-of-type {
    color: ${({ theme }) => theme.colors.accent[1]};
  }
`;

const TopBarWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.text[700]};
  padding: 14px 1rem;
`;

export default TopBar;
