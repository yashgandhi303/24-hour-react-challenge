import styled from 'styled-components';
import LoginForm from './components/LoginForm';

function Login() {
  return (
    <LoginWrapper>
      <Hero>
        <p>a web3 gateway to hidden experiences</p>
      </Hero>
      <LoginBody>
        <h4 className="title">Welcome Back!</h4>
        <p className="description">
          Please enter the password to unlock this wallet
        </p>
        <LoginForm />
      </LoginBody>
    </LoginWrapper>
  );
}

const LoginWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const LoginBody = styled.section`
  padding: 28px 27px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  text-align: center;

  .title {
    font-weight: 600;
    font-size: 18px;
    line-height: 24.59px;
    text-align: center;
    color: ${({ theme }) => theme.colors.text[100]};
  }

  .description {
    font-weight: 400;
    font-size: 14px;
    line-height: 19.12px;
    color: ${({ theme }) => theme.colors.text[300]};
  }
`;

const Hero = styled.section`
  height: 150px;
  background-color: ${({ theme }) => theme.colors.text[500]};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};
`;
export default Login;
