import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../../pages/login';
import { registerUser } from '../../pages/registerUser';

const Stack = createStackNavigator();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{ headerShown: false }}  initialRouteName="registerUser">
        <Stack.Screen name="login" component={Login}   />
        <Stack.Screen name="registerUser" component={registerUser}   />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
