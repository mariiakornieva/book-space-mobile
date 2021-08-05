import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        options={
          {
            // headerShown: false,
          }
        }>
        {() => (
          <View>
            <Text>Home Screen</Text>
          </View>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
