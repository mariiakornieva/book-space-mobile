import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { EntryScreen, SignUpScreen } from './screens';
import { SignInScreen } from './features/SignIn';
import { Header } from './shared/components';
import { HomeNavigator } from './navigation/HomeNavigator';
import { BackButton } from './shared/components/BackButton';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* check user in Context -- if authenticated go to Home TabNavigator */}
      <Stack.Navigator>
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
          options={{
            headerTitleAlign: 'left',
            headerTitle: 'Sign In',
            headerStyle: {
              // height: 150,
            },
            header: ({ scene, previous, navigation }) => {
                return (
                  <Header
                    backButton={previous ? <BackButton onPress={navigation.goBack} /> : null}
                  />
                );
            }
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{

          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
