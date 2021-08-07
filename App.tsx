import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { EntryScreen } from './src/screens';
import { SignInScreen, SignUpScreen, ConfirmSignUpScreen } from './src/Authentication';
import { Header } from './src/shared/components';
import { TabNavigator } from './src/navigation/TabNavigator';
import { BackButton } from './src/shared/components/BackButton';
import { Montserrat_400Regular, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import { DarkerGrotesque_700Bold } from '@expo-google-fonts/darker-grotesque';
import { useFonts } from 'expo-font';
import { KeychainStorage } from './src/Authentication';
import Amplify from 'aws-amplify';
import config from './src/aws-exports';

Amplify.configure({
  ...config,
  Auth: {
    storage: KeychainStorage,
  },
});

const Stack = createStackNavigator();

export default function App(): JSX.Element | null {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    DarkerGrotesque_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      {/* check user in Context -- if authenticated go to Home TabNavigator */}
      <Stack.Navigator
        headerMode="screen"
        initialRouteName="Entry"
        screenOptions={{
          headerStyle: {
            height: 100,
          },
          header: ({ scene, previous, navigation }) => {
            const { options } = scene.descriptor;
            return (
              <Header
                backButton={previous ? <BackButton onPress={() => navigation.goBack()} /> : null}
                style={options.headerStyle}
              />
            );
          },
        }}>
        <Stack.Screen name="Entry" component={EntryScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ConfirmSignUp" component={ConfirmSignUpScreen} />
        <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
