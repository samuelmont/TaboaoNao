import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import Routes from './src/Routes/Routes';
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