import { StackNavigationOptions } from '@react-navigation/stack';
import { BottomTabBarOptions } from '@react-navigation/bottom-tabs';

import { theme } from '@src/theme';
export const screenOptions: StackNavigationOptions = {
  headerTintColor: theme.colors.background,
  headerBackTitleVisible: false,
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: theme.colors.background,
    elevation: 0,
    shadowOpacity: 0,
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    fontFamily: 'Roboto-Regular',
    color: theme.colors.text,
  },
};

export const bottomTabBarOptions: BottomTabBarOptions = {
  style: {
    height: '10%',
    borderTopWidth: 0,
    flexDirection: 'column',
    backgroundColor: theme.colors.background,
  },
  activeTintColor: theme.colors.elements,
  inactiveTintColor: theme.colors.text,
  tabStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    flex: 1,
    height: '100%',
    backgroundColor: theme.colors.background,
  },
  labelStyle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
  },
};
