import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from './StackNavigator';
import { Reserve } from '../screens';
import { Icon } from '../components/Icon';

const Tab = createBottomTabNavigator()

export const BottomTabsNavigation = () => {
  return (

    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#f49230",
      }}
    >
      <Tab.Screen 
        name='stackNavigator'  
        component={StackNavigator} 
        options={{
          title: "Home", 
          tabBarIcon: ({color}) => (<Icon name={"home"} color={color} />),
          headerShown: false,
        }}
      />
      <Tab.Screen 
        name='reserve' 
        component={Reserve} 
        options={{
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#f49230",
          },
          title: 'Reserva',
          tabBarIcon: ({color}) => (<Icon name={"calendar"} color={color}/>)
          
        }}
      />
    </Tab.Navigator>
    
  );
};
