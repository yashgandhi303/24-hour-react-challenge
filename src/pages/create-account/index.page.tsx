import LoginWithNear from '@components/shared/LoginWithNear';
import { AuthBody, IntroText } from '@components/ui';
import AuthLayout from '@containers/AuthLayout';
import styled from 'styled-components';
import CreateAccountForm from './components/CreateAccountForm';

function CreateAccount() {
  return (
    <AuthLayout title="Create NEAR Account">
      <CustomAuthBody>
        <section className="start">
          <CustomIntroText>
            Enter an Account ID to use with your NEAR account. Your Account ID
            will be used for all NEAR operations, including sending and
            receiving assets.
          </CustomIntroText>
        </section>
        <CreateAccountForm />
        <div className="line" />
        <LoginWithNear />
      </CustomAuthBody>
    </AuthLayout>
  );
}

const CustomAuthBody = styled(AuthBody)`
  .form {
    align-items: flex-start;
  }
`;

const CustomIntroText = styled(IntroText)`
  color: #808080;
`;

export default CreateAccount;
