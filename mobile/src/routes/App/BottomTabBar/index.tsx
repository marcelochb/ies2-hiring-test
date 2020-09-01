import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import IconCart from '@src/assets/Icons/IconCart.svg';
import IconMovies from '@src/assets/Icons/IconMovies.svg';

import { MoviesStack } from './Movies';
import { CartStack } from './Cart';
import { bottomTabBarOptions } from '@src/styles/BottomTabBar';
import { useSelector } from 'react-redux';
import { GlobalState } from '@src/store/Model';

const TabBottom = createBottomTabNavigator();

const BottomTabBar: React.FC = () => {
  const { movies } = useSelector((state: GlobalState) => state.cart);
  return (
    <TabBottom.Navigator lazy={false} tabBarOptions={bottomTabBarOptions}>
      <TabBottom.Screen
        name="Filmes"
        component={MoviesStack}
        options={{
          tabBarIcon: ({ color }) => <IconMovies fill={color} />,
        }}
      />
      <TabBottom.Screen
        name="Carrinho"
        component={CartStack}
        options={{
          tabBarIcon: ({ color }) => <IconCart fill={color} />,
          tabBarBadge: movies.length > 0 ? movies.length : undefined,

        }}
      />
    </TabBottom.Navigator>
  );
}

export default BottomTabBar;
