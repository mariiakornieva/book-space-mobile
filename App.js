import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { EntryScreen, SignInScreen, SignUpScreen } from './screens';
import { Pressable } from 'react-native';
import { Button } from './components';

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
            
          }}
        />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
