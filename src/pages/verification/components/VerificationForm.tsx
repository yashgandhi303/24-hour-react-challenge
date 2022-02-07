import { Formik, Form } from 'formik';
import styled from 'styled-components';
import { Input, Button } from '@components/ui';
import * as Yup from 'yup';
import { useState } from 'react';
import { useAuth } from '@hooks/useAuth';

const VerificationSchema = Yup.object().shape({
  num1: Yup.number().required('Code 1 is required'),
  num2: Yup.number().required('Code 2 is required'),
  num3: Yup.number().required('Code 3 is required'),
  num4: Yup.number().required('Code 4 is required'),
  num5: Yup.number().required('Code 5 is required'),
  num6: Yup.number().required('Code 6 is required'),
});

function VerificationForm() {
  const { verify } = useAuth();

  return (
    <Formik
      initialValues={{
        num1: '',
        num2: '',
        num3: '',
        num4: '',
        num5: '',
        num6: '',
      }}
      onSubmit={(values) => {
        let code = '';
        Object.keys(values).forEach((item) => (code += values?.[item]));

        if (code?.length !== 6) {
          return;
        }

        verify(code);
      }}
      validationSchema={VerificationSchema}
    >
      {({ values, errors, setValues, handleSubmit }) => {
        return (
          <Form className="form">
            <FormHeading>Enter verification code</FormHeading>
            <FormGroup>
              {Object.keys(values).map((key, index) => (
                <CustomInput
                  type="text"
                  key={index}
                  error={!!errors?.[key]}
                  value={values?.[key]}
                  name={key}
                  onChange={(e) =>
                    setValues({ ...values, [key]: e.target.value })
                  }
                  maxLength={1}
                  placeholder={`${index + 1}`}
                />
              ))}
            </FormGroup>
            <Button
              disabled={
                !values?.num1 ||
                !values?.num2 ||
                !values?.num3 ||
                !values?.num4 ||
                !values?.num5 ||
                !values?.num6
              }
              accent={
                !!(
                  values?.num1 &&
                  values?.num2 &&
                  values?.num3 &&
                  values?.num4 &&
                  values?.num5 &&
                  values?.num6
                )
              }
              onClick={() => handleSubmit()}
              type="button"
            >
              Continue
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
}

const FormHeading = styled.h4`
  font-size: 14px;
  line-height: 19px;
  color: #808080;
  font-weight: 500;
`;

const CustomInput = styled(Input)`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.03);
  text-align: center;
  padding: 11.5px 10px;
`;

const FormGroup = styled.section`
  display: grid;
  grid-template-columns: repeat(6, 40.1px);
  gap: 10.82px;
`;

export default VerificationForm;
