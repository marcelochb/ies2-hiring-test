import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '@src/pages';
import { App } from './App';
import { useSelector } from 'react-redux';
import { GlobalState } from '@src/store/Model';

const Stack = createStackNavigator();

export const Routes: React.FC = () => {
  const onboard = useSelector((state: GlobalState) => state.onboard);
  return (
    <Stack.Navigator>
      {onboard.checked
        ? (
          <Stack.Screen
            name="App"
            component={App}
            options={{ headerShown: false }}
          />
        )
        : (
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />

        )}
    </Stack.Navigator>
  );
}

