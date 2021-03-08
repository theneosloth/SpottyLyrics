import React, { useRef } from 'react';
import { Text, FlatList, TouchableOpacity, RefreshControl } from 'react-native';

import Clipboard from 'expo-clipboard';
import * as Haptics from 'expo-haptics';

export default function Lyric({ lyrics, styles, onRefresh }) {

  const flatListRef = useRef();

  const Line = ({ item, index }) => {

    const onLineHold = () => {
      Clipboard.setString(item);
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }

    return (
      <TouchableOpacity onPress={
        () => {
          flatListRef.current.scrollToIndex({ index: index, viewPosition: 0.5 });
        }
      }
        onLongPress={onLineHold}>
        <Text style={styles.item}>{item}</Text>
      </TouchableOpacity>)
  };

  const Refresh = () => {

    const refreshFun = () => {
      onRefresh();
    }

    return <RefreshControl
      refreshing={!lyrics}
      onRefresh={refreshFun}
      colors={['white', 'grey']}
      size='large'
      tintColor='white'
    />
  }

  const lines = lyrics ? lyrics.split('\n').filter(line => line) : [];
  return (<FlatList
    ref={flatListRef}
    data={lines}
    renderItem={Line}
    keyExtractor={(_item, index) => index.toString()}
    showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}
    refreshControl={
      <Refresh />
    }


  />)

}
