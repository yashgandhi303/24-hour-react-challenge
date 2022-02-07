import { Formik, Form } from 'formik';
import { Input, Button } from '@components/ui';
import Link from 'next/link';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { useAuth } from '@hooks/useAuth';

const RegisterWithEmailSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const RegisterWithPhoneSchema = Yup.object().shape({
  phone: Yup.string().required('Phone number is required'),
});

type TabProps = 'email' | 'phone';

type Props = {
  activeTab: TabProps;
};

function RegisterForm({ activeTab }: Props) {
  const { register } = useAuth();
  return (
    <Formik
      initialValues={{
        email: '',
        phone: '',
      }}
      validationSchema={
        activeTab === 'email'
          ? RegisterWithEmailSchema
          : RegisterWithPhoneSchema
      }
      onSubmit={(values) => {
        register(activeTab, values[activeTab]);
      }}
    >
      {({ errors, values, setValues, handleSubmit }) => (
        <Form className="form">
          {activeTab === 'email' ? (
            <Input
              type="email"
              value={values?.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              placeholder="Email Address"
              error={!!errors?.email}
            />
          ) : (
            <Input
              type="tel"
              value={values?.phone}
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
              placeholder="Ex (337) 378 8383"
              error={!!errors?.phone}
            />
          )}

          <Button
            disabled={
              (activeTab === 'email' && !values?.email) ||
              (activeTab === 'phone' && !values.phone)
            }
            accent={
              !!(activeTab === 'email' && values?.email) ||
              !!(activeTab === 'phone' && values.phone)
            }
            onClick={() => handleSubmit()}
            type="button"
          >
            Continue
          </Button>
          <p className="agreement">
            by clicking continue you must agree to near labs{' '}
            <Link href="#terms-and-conditions">
              <a>Terms & Conditions</a>
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

export default RegisterForm;
export type { TabProps };
