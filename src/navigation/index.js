import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthenticationOptions from '../screens/AuthenticationOptions';
import Signup from '../screens/Signup';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import AuthNavigation from './AuthNavigation';
import W3Screen from '../utils/web3';

const AuthStack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      {/* <AuthNavigation /> */}
      <W3Screen />
    </NavigationContainer>
  );
};

export default AppNavigation;
