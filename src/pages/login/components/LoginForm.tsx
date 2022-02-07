import { Formik, Form } from 'formik';
import { Label, Button, Input } from '@components/ui';
import styled from 'styled-components';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Minimum password length is 6 chars')
    .required('Password is required'),
});

function LoginForm() {
  return (
    <Formik
      initialValues={{
        password: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={() => {}}
    >
      {({ values, errors, setValues }) => (
        <CustomForm>
          <FormGroup>
            <Label htmlFor="password" style={{ alignSelf: 'start' }}>
              Password
            </Label>
            <Input
              type="password"
              style={{ width: '100%' }}
              error={!!errors?.password}
              value={values?.password}
              onChange={(e) => setValues({ password: e.target.value })}
            />
          </FormGroup>
          <Button
            style={{ alignSelf: 'center' }}
            disabled={!values?.password}
            accent={!!values?.password}
            type="button"
          >
            Unlock
          </Button>
        </CustomForm>
      )}
    </Formik>
  );
}

const CustomForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
`;

const FormGroup = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export default LoginForm;
