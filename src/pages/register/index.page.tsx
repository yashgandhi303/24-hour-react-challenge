import LoginWithNear from '@components/shared/LoginWithNear';
import { AuthBody } from '@components/ui';
import AuthLayout from '@containers/AuthLayout';
import { useState } from 'react';
import styled from 'styled-components';
import RegisterForm from './components/RegisterForm';

function Register() {
  const [activeTab, setActiveTab] = useState<'email' | 'phone'>('email');
  return (
    <AuthLayout>
      <AuthBody>
        <section className="start">
          <NavPill
            active={activeTab === 'email'}
            onClick={() => setActiveTab('email')}
          >
            Email
          </NavPill>
          <NavPill
            active={activeTab === 'phone'}
            onClick={() => setActiveTab('phone')}
          >
            Phone
          </NavPill>
        </section>
        <RegisterForm activeTab={activeTab} />
        <div className="line" />
        <LoginWithNear />
      </AuthBody>
    </AuthLayout>
  );
}

const NavPill = styled.button<{ active?: boolean }>`
  background-color: transparent;
  border: solid 1px
    ${({ active, theme }) => (active ? theme.colors.text[500] : 'transparent')};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${({ theme, active }) =>
    active ? theme.colors.text[200] : theme.colors.text[300]};
  border-radius: 10px;
  padding: 6px 12px;
  cursor: pointer;
`;

export default Register;
