import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens';

const TabBar = createBottomTabNavigator();

export function HomeNavigator() {
  return (
    <TabBar.Navigator>
      {/* HomeScreen should have a stack navigator inside to navigate between books */}
      <TabBar.Screen name="Home" component={HomeScreen} />
      {/* <TabBar.Screen name="Library" component={} /> */}
      {/* <TabBar.Screen name="Search" component={} /> */}
      {/* <TabBar.Screen name="Space" component={} /> */}
      {/* <TabBar.Screen name="Me" component={} /> */}
    </TabBar.Navigator>
  );
};
