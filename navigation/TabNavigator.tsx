import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeNavigator, LibraryScreen, MeScreen, SearchScreen, SpaceScreen } from '../screens';
import { BACKGROUND_COLOR, PRIMARY_COLOR } from '../shared/constants';
import { Ionicons } from '@expo/vector-icons';
import glyphmap from 'react-native-vector-icons/glyphmaps/Ionicons.json'

type MyMap<T> = {
    [ P in keyof T ]: number
};

// spread keys after converting glyphmap into MyMap
type MapKeys = keyof MyMap<typeof glyphmap>

const TabBar = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <TabBar.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: MapKeys = 'ellipse';

          switch (route.name) {
            case 'Home':
              iconName = 'ios-home-outline';
              break;
            case 'Library':
              iconName = 'ios-book-outline';
              break;
            case 'Search':
              iconName = 'ios-search-outline';
              break;
            case 'Space':
              iconName = 'ios-people-outline';
              break;
            case 'Me':
              iconName = 'ios-person-outline';
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: BACKGROUND_COLOR,
        inactiveTintColor: 'rgba(255, 255, 255, 0.3)',
        activeBackgroundColor: PRIMARY_COLOR,
        inactiveBackgroundColor: PRIMARY_COLOR,
        adaptive: true,
        style: {
          position: 'relative',
          backgroundColor: PRIMARY_COLOR,
          minHeight: 100,
          width: '100%',
          bottom: 0,
        },
        labelStyle: {
          fontSize: 12,
        }
      }}
    >
      <TabBar.Screen name="Home" component={HomeNavigator} />
      <TabBar.Screen name="Library" component={LibraryScreen} />
      <TabBar.Screen name="Search" component={SearchScreen} />
      <TabBar.Screen name="Space" component={SpaceScreen} />
      <TabBar.Screen name="Me" component={MeScreen} />
    </TabBar.Navigator>
  );
}
