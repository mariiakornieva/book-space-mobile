import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, LibraryScreen, MeScreen, SearchScreen, SpaceScreen } from '../screens';

const TabBar = createBottomTabNavigator();

export function HomeNavigator() {
  return (
    <TabBar.Navigator>
      <TabBar.Screen name="Home" component={HomeScreen} />
      <TabBar.Screen name="Library" component={LibraryScreen} />
      <TabBar.Screen name="Search" component={SearchScreen} />
      <TabBar.Screen name="Space" component={SpaceScreen} />
      <TabBar.Screen name="Me" component={MeScreen} />
    </TabBar.Navigator>
  );
}
