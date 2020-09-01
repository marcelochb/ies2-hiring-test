import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, View } from 'react-native';
import { Routes } from './routes';
const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <View style={{ height: "100%" }}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

export default App;
