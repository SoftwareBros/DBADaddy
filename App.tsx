import React, { Component } from 'react';
import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import  HomeScreen  from './src/HomeScreen/HomeScreen';
import  SecondScreen  from './src/SecondScreen/SecondScreen';

import { useScreens } from 'react-native-screens';
useScreens();

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Second: {
      screen: SecondScreen,
    },
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

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
