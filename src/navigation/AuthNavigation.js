import 'react-native-gesture-handler';

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AuthenticationOptions from '../screens/AuthenticationOptions';
import Signup from '../screens/Signup';
import SignupName from '../screens/SignupName';
import SignupSucess from '../screens/SignupSucess';

const AuthStack = createStackNavigator();

function AuthNavigation() {
  return (
    <AuthStack.Navigator
      initialRouteName="AuthenticationOptions"
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
    }}>
      <AuthStack.Screen
        name="AuthenticationOptions"
        component={AuthenticationOptions}
      />
      <AuthStack.Screen name="Signup" component={Signup} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="SignupName" component={SignupName} />
      <AuthStack.Screen name="SignupSuccess" component={SignupSucess} />
    </AuthStack.Navigator>
  );
}

export default AuthNavigation;
