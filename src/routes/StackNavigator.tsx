import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Game, Home } from '../screens';
import { Icon } from '../components/Icon';

export type RootStackParams = {
  home: undefined
  game: {paramURL?: string}
}

const Stack = createStackNavigator<RootStackParams>()

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "#fff",
        headerRight: () => <Icon name="help-circle-outline" color='white'/>,
        headerStyle: {
          backgroundColor: "#f49230",
          
        },
      }}
    >
      <Stack.Screen options={{title: "Queimada Nivel Q"}} name='home' component={Home}/>
      <Stack.Screen name='game' component={Game}  />
    </Stack.Navigator>
  );
};
