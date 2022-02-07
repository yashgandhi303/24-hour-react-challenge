import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { IState } from '@store/types';

function HomeBar() {
  const user = useSelector((state: IState) => state.user);

  return (
    <HomeBarWrapper>
      <Placeholder />
      <Dropdown>
        <Placeholder />
        <span>{user?.accountId}.near</span>
        <Placeholder />
      </Dropdown>
      <section className="split">
        <Placeholder />
        <Placeholder />
      </section>
    </HomeBarWrapper>
  );
}

const Dropdown = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  border: solid 1px ${({ theme }) => theme.colors.text[600]};
  padding: 12px 8px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text[100]};
  gap: 8px;
`;

const HomeBarWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.text[700]};
  padding: 13px 25.17px 13px 23.26px;

  .split {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

const Placeholder = styled.span`
  height: 21.67px;
  width: 21.67px;
  background-color: ${({ theme }) => theme.colors.text[500]};
  border-radius: 50%;
`;

export default HomeBar;
