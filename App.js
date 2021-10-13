import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Routes from './routes';

const theme = {
  ...DefaultTheme,
  color: {
    ...DefaultTheme.colors,
    border: "transparent"
  }
}

export default function App() {
  return (
    <NavigationContainer theme={theme} >
      <Routes />
    </NavigationContainer>
  );
}

