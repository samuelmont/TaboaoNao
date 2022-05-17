import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Routes from './src/routes';
import React from 'react';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#5E1515" barStyle="light-content" />   
      <Routes/>
    </NavigationContainer>
  );
}

// #5E1515 background Color