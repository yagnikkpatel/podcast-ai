import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from '../utils/NavigationUtils';
import SplashScreen from '../features/auth/SplashScreen';
import LoginScreen from '../features/auth/LoginScreen';
import RegisterScreen from '../features/auth/RegisterScreen';
import UserBottomTab from '../features/tabs/UserBottomTab';

const Stack = createNativeStackNavigator();

const Navigation: FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
          animation: 'fade',
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="UserBottomTab" component={UserBottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
