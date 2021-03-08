import React, { useState, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthContext from './src/context/AuthContext';

import SplashScreen from './src/screens/SplashScreen';
import BottomTabNavigator from './src/components/navigation/BottomTabNavigator';

import { getValueFor } from './src/api/storage';

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
        <BottomTabNavigator />
      </SafeAreaProvider>
    </AuthContext.Provider>
  )
}
