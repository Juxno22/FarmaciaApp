import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoadingScreen from '../components/screens/user/LoadingScreen';
import HomeScreen from '../components/screens/user/HomeScreen';
import SearchScreen from '../components/screens/user/SearchScreen';
import CartScreen from '../components/screens/user/CartScreen';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Farmacias Vida">
        <Stack.Screen name="Farmacias Vida" component={LoadingScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}