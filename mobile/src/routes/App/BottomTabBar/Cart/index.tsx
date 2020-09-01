import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Cart } from '@src/pages';
import { screenOptions } from '@src/styles/BottomTabBar';
import { ButtonBase } from '@src/components';
import { useDispatch } from 'react-redux';
import { actionRemoveAllMoviesFromCart } from '@src/store/modules/cart/actions';

const Stack = createStackNavigator();

export const CartStack: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name='Cart'
        component={Cart}
        options={{
          title: 'Carrinho',
          headerRight: () => <ButtonBase
            handle={() => dispatch(actionRemoveAllMoviesFromCart())}
            label='Remover todos'
            isLink
            isSmall
          />
        }}

      />


    </Stack.Navigator>
  );
}

