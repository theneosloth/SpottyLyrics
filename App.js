import React, { useState, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthContext } from './src/context/AuthContext';

import LoginScreen from './src/screens/LoginScreen';
import LyricsScreen from './src/screens/LyricsScreen';
import SplashScreen from './src/screens/SplashScreen.js';

import { getValueFor} from './src/api/storage';

const Stack = createStackNavigator();

export default function App() {

  useEffect(() => {
    (async () => {
      const token = await getValueFor('API_TOKEN');
      setToken(token);
      setIsLoading(false);
    })();

  }, []);

  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(true);


  if (isLoading) {
    return <SplashScreen />
  }

  return (
    <AuthContext.Provider
      value={{
        token: token,
        setToken: setToken
      }}>

      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {!token ? (<Stack.Screen name='LoginScreen' component={LoginScreen} />
            ) : <Stack.Screen name='Lyrics' component={LyricsScreen} />}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </AuthContext.Provider>
  )
}
