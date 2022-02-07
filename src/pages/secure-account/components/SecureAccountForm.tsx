import { Button, AuthBody, IntroText, Label, Input } from '@components/ui';
import { Formik, Form } from 'formik';
import styled from 'styled-components';
import Link from 'next/link';
import * as Yup from 'yup';
import { useAuth } from '@hooks/useAuth';

const SecureAccountSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Minimum password length is 6 chars')
    .required('Password is required'),
  confirm_password: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
});

function SecureAccountForm() {
  const { secureAccount } = useAuth();

  return (
    <Formik
      initialValues={{
        password: '',
        confirm_password: '',
      }}
      validationSchema={SecureAccountSchema}
      onSubmit={(values) => {
        secureAccount(values.password);
      }}
    >
      {({ errors, values, setValues, handleSubmit }) => (
        <Form className="form">
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              error={!!errors?.password}
              value={values?.password}
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              type="password"
              id="confirmPassword"
              error={!!errors?.confirm_password}
              value={values?.confirm_password}
              onChange={(e) =>
                setValues({ ...values, confirm_password: e.target.value })
              }
            />
          </FormGroup>

          <Button
            style={{ alignSelf: 'center' }}
            disabled={!values?.password || !values?.confirm_password}
            accent={!!(values?.password && values?.confirm_password)}
            type="button"
            onClick={() => handleSubmit()}
          >
            Continue
          </Button>
          <p className="agreement">
            By creating a NEAR account, you agree to the NEAR Wallet{' '}
            <Link href="#terms-of-service">
              <a>Terms of Service</a>
            </Link>{' '}
            and{' '}
            <Link href="#privacy-policy">
              <a>Privacy Policy</a>
            </Link>
          </p>
        </Form>
      )}
    </Formik>
  );
}

const FormGroup = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export default SecureAccountForm;
