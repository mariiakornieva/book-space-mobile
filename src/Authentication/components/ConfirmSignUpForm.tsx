import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { TextInput, Pressable } from 'react-native';
import { Button } from '../../shared/components';
import { globalStyles } from '../../shared/styles';

type FormValues = {
  code: string;
};

const initialValues: FormValues = {
  code: '',
};

const validationSchema = Yup.object().shape({
  code: Yup.string().min(6).required(),
});

type ConfirmSignUpFormProps = {
  handleConfirm(value: FormValues): Promise<void>;
  handleResend?(): void;
};

export function ConfirmSignUpForm({ handleConfirm }: ConfirmSignUpFormProps): JSX.Element | null {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values): Promise<void> => handleConfirm(values)}
      validationSchema={validationSchema}>
      {({ values, handleChange, setFieldTouched, handleSubmit }): JSX.Element => (
        <>
          <TextInput
            style={globalStyles.input}
            value={values.code}
            placeholder="Confirmation Code"
            onChangeText={() => handleChange('code')}
            onBlur={() => setFieldTouched('code')}
          />

          <Pressable onPress={() => handleSubmit()}>
            <Button label="Confirm" size={{ width: 280, height: 46 }} primary />
          </Pressable>
        </>
      )}
    </Formik>
  );
}
