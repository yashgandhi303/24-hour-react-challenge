import { Button, AuthBody, IntroText } from '@components/ui';
import AuthLayout from '@containers/AuthLayout';
import styled from 'styled-components';
import VerificationForm from './components/VerificationForm';
import { useSelector } from 'react-redux';
import { IState } from '@store/types';

function Verification() {
  const user = useSelector((state: IState) => state.user);

  return (
    <AuthLayout title="Verification">
      <AuthBody>
        <section className="start">
          <IntroText>
            We have sent a 6-digit verification code to the{' '}
            {user?.email ? 'email address' : 'phone number'}{' '}
            <span>{user?.email || user?.phone}</span>
          </IntroText>
        </section>
        <h4 style={{ textAlign: 'center' }}>Code: {user?.verificationCode}</h4>
        <VerificationForm />
        <div className="line" />
        <Footer>
          <h4>Didn&apos;t receive your code?</h4>
          <Button>Send to different email address</Button>
          <Button style={{ marginTop: '-12px' }}>Resend your code</Button>
        </Footer>
      </AuthBody>
    </AuthLayout>
  );
}

const Footer = styled.section`
  font-size: 14px;
  line-height: 19.12px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text[200]};
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  h4 {
    font-weight: 500;
  }
`;

export default Verification;
