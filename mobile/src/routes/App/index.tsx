import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabBar from './BottomTabBar';
import { screenOptions } from '@src/styles/BottomTabBar';

const Stack = createStackNavigator();

export const App: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{ ...screenOptions, headerShown: false }}
    >
      <Stack.Screen
        name="TabBar"
        component={BottomTabBar}
      />
    </Stack.Navigator>
  );
}
