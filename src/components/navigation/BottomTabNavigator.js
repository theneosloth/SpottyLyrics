import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from '../../screens/LoginScreen';
import LyricsScreen from '../../screens/LyricsScreen';

import { NavigationContainer } from '@react-navigation/native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {

  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen options={
                            {
                              tabBarVisible: false,
                              tabBarIcon: () => {
                                return <EvilIcons name="user" size={24} color="black" />
                              }
                            }
                          }
                          name="Login"
                          component={LoginScreen} />

        <BottomTab.Screen options = {
                            {
                              tabBarIcon: () => {
                                return <SimpleLineIcons name="notebook" size={24} color="black" />
                              }
                            }
                          }
                          name="Lyrics"
                          component={LyricsScreen} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
