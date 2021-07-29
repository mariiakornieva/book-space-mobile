import React from 'react';
import { View, Text } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen">
        {() => <View><Text>Home Screen</Text></View>}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
