import AuthLayout from '@containers/AuthLayout';
import { Button, AuthBody, IntroText, Label, Input } from '@components/ui';
import { Formik, Form } from 'formik';
import styled from 'styled-components';
import Link from 'next/link';
import SecureAccountForm from './components/SecureAccountForm';

function SecureAccount() {
  return (
    <AuthLayout title="Secure your account">
      <CustomAuthBody>
        <section className="start">
          <IntroText style={{ color: '#808080' }}>
            Keep your apps safe from others with access to your computer
          </IntroText>
        </section>
        <SecureAccountForm />
      </CustomAuthBody>
    </AuthLayout>
  );
}

const CustomAuthBody = styled(AuthBody)`
  .form {
    align-items: flex-start;
  }
`;

export default SecureAccount;
