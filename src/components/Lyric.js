import React, { useRef } from 'react';
import { Text, FlatList, Pressable } from 'react-native';

export default function Lyric({ lyrics, styles }) {

  const flatListRef = useRef();

  const Line = ({ item, index }) => (
    <Pressable onPress={
      () => {
        flatListRef.current.scrollToIndex({ index: index });
      }
    }>
      <Text style={styles.item}>{item}</Text>
    </Pressable>);

  const lines = lyrics.split('\n').filter(line => line);

  return (<FlatList
    ref={flatListRef}
    data={lines}
    renderItem={Line}
    keyExtractor={(_item, index) => index.toString()}
    showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}
  />)

}
