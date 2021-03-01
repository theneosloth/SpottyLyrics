import React, {useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function LoginScreen() {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <Text>Header</Text>
      <Text>Lyrics</Text>
    </View>
  )
}
