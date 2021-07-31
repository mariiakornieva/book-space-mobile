import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { EntryScreen } from './screens';
import { SignInScreen } from './features/SignIn';
import { SignUpScreen } from './features/SignUp';
import { Header } from './shared/components';
import { TabNavigator } from './navigation/TabNavigator';
import { BackButton } from './shared/components/BackButton';
import { BACKGROUND_COLOR } from './shared/constants';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* check user in Context -- if authenticated go to Home TabNavigator */}
      <Stack.Navigator
        headerMode="screen"
        screenOptions={{
          headerStyle: {
            height: 100,
          },
          header: ({ scene, previous, navigation }) => {
            const { options } = scene.descriptor;
            return (
              <Header
                backButton={previous ? <BackButton onPress={navigation.goBack} /> : null}
                style={options.headerStyle}
              />
            );
          }
        }}
      >
        <Stack.Screen
          name="Entry"
          component={EntryScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
        />
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
