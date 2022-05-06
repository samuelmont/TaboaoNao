import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer backgroundColor="#fff" >
      <StatusBar backgroundColor="#fff" barStyle="light-content" />   
      <Routes/>
    </NavigationContainer>
  );
}

// #5E1515 background Color