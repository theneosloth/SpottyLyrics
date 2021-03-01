import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { getCurrentlyPlaying } from '../api/spotify';
import { getLyrics } from '../api/lyrics';

export default function LoginScreen() {

  const [currentSong, setCurrentSong] = useState('');
  const [currentArtist, setCurrentArtist] = useState('');
  const [lyrics, setLyrics] = useState('');

  useEffect(() => {
    (async () => {
      const song = await getCurrentlyPlaying();
      setCurrentSong(song.data.item.name ?? 'Song');
      setCurrentArtist(song.data.item.artists[0].name ?? 'Artist Unknown');
    })();
  });

  useEffect(() => {
    (async () => {
      setLyrics(getLyrics(currentArtist, currentSong));
    })();
  }, [currentSong, currentArtist]);

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
      <Text>{currentSong} by {currentArtist}</Text>
      <Text></Text>
    </View>
  )
}
