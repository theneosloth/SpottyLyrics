import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/screens/LoginScreen';
import LyricsScreen from './src/screens/LyricsScreen';

import { save } from './src/api/storage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Root'>
            {(props) => <LoginScreen {...props} saveToken={save} />}
          </Stack.Screen>
          <Stack.Screen name='Lyrics' component={LyricsScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
