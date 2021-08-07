import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { TextInput, Pressable } from 'react-native';
import { Button } from '../../shared/components';
import { globalStyles } from '../../shared/styles';

type FormValues = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

const initialValues: FormValues = {
  name: '',
  email: '',
  password: '',
  passwordConfirmation: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
  passwordConfirmation: Yup.string().min(6).required(),
});

type SignUpFormProps = {
  handleSubmit(value: FormValues): Promise<void>;
};

export function SignUpForm({ handleSubmit }: SignUpFormProps): JSX.Element | null {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values): Promise<void> => handleSubmit(values)}
      validationSchema={validationSchema}>
      {({ values, handleChange, setFieldTouched, handleSubmit }): JSX.Element => (
        <>
          <TextInput
            style={globalStyles.input}
            value={values.name}
            placeholder="Name"
            onChangeText={handleChange('name')}
            onBlur={() => setFieldTouched('name')}
          />

          <TextInput
            style={globalStyles.input}
            value={values.email}
            placeholder="Email"
            onChangeText={handleChange('email')}
            onBlur={() => setFieldTouched('email')}
          />

          <TextInput
            style={globalStyles.input}
            value={values.password}
            placeholder="Password"
            onChangeText={handleChange('password')}
            onBlur={() => setFieldTouched('password')}
            secureTextEntry={true}
          />

          <TextInput
            style={globalStyles.input}
            value={values.passwordConfirmation}
            placeholder="Confirm Password"
            onChangeText={handleChange('passwordConfirmation')}
            onBlur={() => setFieldTouched('passwordConfirmation')}
            secureTextEntry={true}
          />

          <Pressable onPress={() => handleSubmit()}>
            <Button label="Sign Up" size={{ width: 280, height: 46 }} primary />
          </Pressable>
        </>
      )}
    </Formik>
  );
}
