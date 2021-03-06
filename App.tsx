/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 */

import React, { Component } from 'react';
import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import  HomeScreen  from './src/HomeScreen/HomeScreen';
import  Login  from './src/Login/Login';
import  Profile  from './src/Profile/Profile';
import  ExchangeHub  from './src/ExchangeHub/ExchangeHub';
import  Exchange  from './src/Exchange/Exchange';
import  BecomeSeller  from './src/BecomeSeller/BecomeSeller';

import { useScreens } from 'react-native-screens';
useScreens();

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: Login,
    Profile: Profile,
    ExchangeHub: ExchangeHub,
    Exchange: Exchange,
    BecomeSeller: BecomeSeller
  },
  {
    headerBackTitleVisible: false,
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'React Native Starter Kit',
      headerTitleStyle: {
        color: '#fff',
        fontSize: 16,
      },
      headerStyle: {
        backgroundColor: '#FF9C33',
      },
    },
  },
);
