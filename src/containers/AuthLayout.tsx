import { TopBar } from '@components/shared';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
  title?: string;
};

function AuthLayout({ children, title }: Props) {
  return (
    <section>
      <TopBar title={title} />
      <AuthBodyWrapper>{children}</AuthBodyWrapper>
    </section>
  );
}

const AuthBodyWrapper = styled.section`
  padding: 21px 28px;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
`;

export default AuthLayout;
