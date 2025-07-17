import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import HomeScreen from '../modules/home/HomeScreen';
import LoginScreen from '../modules/authentication/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './TabNavigation';

const AppNavigator = () => {
  const Stack = createStackNavigator();
  const stackNavigatorOptions = {
    headerShown: null,
    ...TransitionPresets.SlideFromRightIOS,
  };
  return (
        <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Home" 
          component={TabNavigation}
          options={{headerShown: false}}
        />

     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
