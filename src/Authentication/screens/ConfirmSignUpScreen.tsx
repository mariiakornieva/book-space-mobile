import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../shared/styles';
import { ConfirmSignUpForm } from '../components/ConfirmSignUpForm';
import { Auth } from 'aws-amplify';
import { useNavigation } from '@react-navigation/core';
import { useRoute } from '@react-navigation/native';

type Error = {
  message: string;
  code: string;
};

type Route = {
  key: string;
  name: string;
  params: {
    email: string;
    password: string;
  };
};

export function ConfirmSignUpScreen(): JSX.Element | null {
  const [loading, setLoading] = useState(false);
  const [, setError] = useState('');

  const nav = useNavigation();
  const route = useRoute<Route>();

  const onConfirm = async (values: { code: string }): Promise<void> => {
    setLoading(true);
    setError('');

    try {
      const { code } = values;
      const { email, password } = route.params;

      await Auth.confirmSignUp(email, code, { forceAliasCreation: true });
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const user = await Auth.signIn(email, password);

      if (user) {
        nav.navigate('Home');
      }

      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError((err as Error).message);

      if ((err as Error).code === 'UserNotConfirmedException') {
        setError('Account not verified yet');
      } else if ((err as Error).code === 'PasswordResetRequiredException') {
        setError('Existing user found. Please reset your password');
      } else if ((err as Error).code === 'NotAuthorizedException') {
        setError('Forgot Password?');
      } else if ((err as Error).code === 'UserNotFoundException') {
        setError('User does not exist!');
      }
    }
  };

  const onResend = async (): Promise<void> => {
    try {
      const { email } = route.params;
      await Auth.resendSignUp(email);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  if (loading) {
    return null;
  }

  return (
    <View style={[globalStyles.container, { padding: 40 }]}>
      <Text style={[globalStyles.pageTitle, { marginBottom: 40 }]}>Confirm Sign Up</Text>
      <ConfirmSignUpForm handleConfirm={onConfirm} handleResend={onResend} />
    </View>
  );
}
