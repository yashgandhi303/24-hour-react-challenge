import { Button, Input, AuthBody, IntroText, Label } from '@components/ui';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import Link from 'next/link';
import * as Yup from 'yup';
import { useAuth } from '@hooks/useAuth';

const CreateAccountSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  accountId: Yup.string().required('Account ID is required'),
});

function CreateAccountForm() {
  const { createAccount } = useAuth();

  return (
    <Formik
      initialValues={{
        name: '',
        accountId: '',
      }}
      validationSchema={CreateAccountSchema}
      onSubmit={(values) => {
        createAccount(values.name, values.accountId);
      }}
    >
      {({ errors, setValues, values, handleSubmit }) => (
        <Form className="form">
          <FormGroup>
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              type="text"
              placeholder="Ex. John Doe"
              id="fullName"
              error={!!errors?.name}
              value={values?.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="accountId">Account ID</Label>
            <section className="input-group">
              <CustomInput
                type="text"
                placeholder="yourname"
                error={!!errors?.accountId}
                value={values?.accountId}
                onChange={(e) =>
                  setValues({ ...values, accountId: e.target.value })
                }
              />
              <button className="readonly-btn" type="button">
                .near
              </button>
            </section>
          </FormGroup>
          <Button
            style={{ alignSelf: 'center' }}
            disabled={!values?.name || !values?.accountId}
            accent={!!(values?.name && values?.accountId)}
            onClick={() => handleSubmit()}
            type="button"
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

  .input-group {
    display: grid;
    grid-template-columns: 1fr 81px;

    .readonly-btn {
      border-radius: 0 10px 10px 0;
      background-color: transparent;
      border: solid 1px ${({ theme }) => theme.colors.text[500]};
      padding: 11.5px 20px;
      font-weight: 500;
      font-size: 16px;
      color: #000000;
      text-align: center;
    }
  }
`;

const CustomInput = styled(Input)`
  border-radius: 10px 0 0 10px;
  border-right-color: transparent;
`;

export default CreateAccountForm;
