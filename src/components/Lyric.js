import React, { useState } from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';

export default function Lyric({ lyrics }) {

  const Line = ({ item }) => <Text style={styles.item}>{item}</Text>;

  const lines = lyrics.split('\n').filter(line => line !== '');
  console.log(lines);
  return (<FlatList
    data={lines}
    renderItem={Line}
    keyExtractor={(_item, index) => index}
  />)

}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    justifyContent: 'center'
  },
});
