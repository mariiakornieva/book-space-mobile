import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../shared/styles';
import { SignUpForm } from '../components/SignUpForm';
import { Auth } from 'aws-amplify';
import Keychain from 'react-native-keychain';
import { useNavigation } from '@react-navigation/core';

type Error = {
  message: string;
  code: string;
};

export function SignUpScreen(): JSX.Element | null {
  const [loading, setLoading] = useState(false);
  const [, setError] = useState('');
  const nav = useNavigation();

  const onSubmit = async (values: {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
  }): Promise<void> => {
    const { email, password, passwordConfirmation } = values;
    if (password !== passwordConfirmation) {
      setError('Passwords do not match!');
    } else {
      setLoading(true);
      setError('');
      try {
        const user = await Auth.signUp(email, password);
        await Keychain.setInternetCredentials('auth', email, password);
        if (user) {
          nav.navigate('ConfirmSignUp', { email, password });
        }
        setLoading(false);
      } catch (err) {
        setLoading(false);
        if ((err as Error).code === 'UserNotConfirmedException') {
          setError('Account not verified yet');
        } else if ((err as Error).code === 'PasswordResetRequiredException') {
          setError('Existing user found. Please reset your password');
        } else if ((err as Error).code === 'NotAuthorizedException') {
          setError('Forgot Password?');
        } else if ((err as Error).code === 'UserNotFoundException') {
          setError('User does not exist!');
        } else {
          setError((err as Error).code);
        }
      }
    }
  };

  if (loading) {
    return null;
  }

  return (
    <View style={[globalStyles.container, { padding: 40 }]}>
      <Text style={[globalStyles.pageTitle, { marginBottom: 40 }]}>Sign Up</Text>
      <SignUpForm handleSubmit={onSubmit} />
    </View>
  );
}
