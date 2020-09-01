import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import IconArrow from '@src/assets/Icons/IconArrowBack.svg';

import { Movies } from '@src/pages';
import { screenOptions } from '@src/styles/BottomTabBar';
import { ButtonBase } from '@src/components';
import { useDispatch } from 'react-redux';
import { onboardCheckOutRequest } from '@src/store/modules/onboard/actions';

const Stack = createStackNavigator();

export const MoviesStack: React.FC = () => {
  const dispatch = useDispatch();
  const navigateToHome = () => dispatch(onboardCheckOutRequest());
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name='Movies'
        component={Movies}
        options={{
          title: 'Filmes',
          headerLeft: () => <ButtonBase
            handle={navigateToHome}
            isLink
            isSmall
            IconSVG={IconArrow}
          />
        }}

      />


    </Stack.Navigator>
  );
}

