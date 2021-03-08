import React from 'react';
import { StyleSheet, ActivityIndicator, SafeAreaView, StatusBar, Text } from 'react-native';

export default function SplashScreen() {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Logging In</Text>
      <ActivityIndicator></ActivityIndicator>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'rgba(0,0,0, 1)'
  },
  heading: {
    fontSize: 150,
  }
});
