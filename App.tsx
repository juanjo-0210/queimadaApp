import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { BottomTabsNavigation } from './src/routes/BottomTabsNavigation';

export default function App() {
  return (
    <NavigationContainer>
       <StatusBar
        animated={true}
        backgroundColor="#f49230"
      />
      <BottomTabsNavigation />
    </NavigationContainer>
  );
}


