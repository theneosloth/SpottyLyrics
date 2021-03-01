import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, SafeAreaView, StatusBar } from 'react-native';

import Lyric from '../components/Lyric';

import { getCurrentlyPlaying } from '../api/spotify';
import { getSongLyrics } from '../api/lyrics';


export default function LoginScreen() {

  const [currentSong, setCurrentSong] = useState('');
  const [currentArtist, setCurrentArtist] = useState('');
  const [lyrics, setLyrics] = useState('');

  useEffect(() => {
    (async () => {
      const song = await getCurrentlyPlaying();
      setCurrentSong(song.item.name ?? 'Song');
      setCurrentArtist(song.item.artists[0].name ?? 'Artist Unknown');
    })();
  });

  useEffect(() => {
    (async () => {
      setLyrics(await getSongLyrics(currentArtist, currentSong));
    })();
  }, [currentSong, currentArtist]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{currentSong} by {currentArtist}</Text>
      {lyrics ? <Lyric lyrics={lyrics} /> : <Text>Loading</Text>}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  title: {
    fontSize: 12,
    textAlign: 'center'
  }
});
