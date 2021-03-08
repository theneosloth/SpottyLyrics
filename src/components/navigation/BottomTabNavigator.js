import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from '../../screens/LoginScreen';
import LyricsScreen from '../../screens/LyricsScreen';

import { NavigationContainer } from '@react-navigation/native';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {

  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name="Login" component={LoginScreen} />
        <BottomTab.Screen name="Lyrics" component={LyricsScreen} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
