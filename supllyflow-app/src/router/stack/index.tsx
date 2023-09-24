import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../../pages/login';

const Stack = createStackNavigator();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{ headerShown: false }}  initialRouteName="login">
        <Stack.Screen name="login" component={Login}   />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
