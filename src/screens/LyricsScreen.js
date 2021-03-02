import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, SafeAreaView, StatusBar, ImageBackground } from 'react-native';


import Lyric from '../components/Lyric';

import { getCurrentlyPlaying } from '../api/spotify';
import { getSongLyrics } from '../api/lyrics';


export default function LyricsScreen() {

  const [currentSong, setCurrentSong] = useState('');
  const [currentArtist, setCurrentArtist] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [background, setBackground] = useState(require('../../img/background.jpg'));


  const fetchSong = async () => {
    const song = await getCurrentlyPlaying();
    setCurrentSong(song.item?.name ?? 'Song');
    setCurrentArtist(song.item?.artists?.[0].name ?? 'Artist Unknown');
    setBackground({uri: song.item?.album?.images?.[0].url} ?? '');

  }

  useEffect(() => {
    (async () => {
      fetchSong();
    })();
  }, []);

  useEffect(() => {
    (async () => {
      setLyrics(await getSongLyrics(currentArtist, currentSong));
    })();
  }, [currentSong, currentArtist]);

  return (
    <SafeAreaView style={styles.container}>

      <ImageBackground source={background} style={{ width: '100%', height: '100%', backgroundColor: 'rgb(0,0,0)' }} resizeMode="cover" imageStyle={{ opacity: 0.3 }} >
        <Text style={styles.title}>{currentSong} by {currentArtist}</Text>
        {lyrics ? <Lyric lyrics={lyrics} styles={styles} /> : <Text>Loading</Text>}
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'rgba(0,0,0, 1)'
  },
  title: {
    fontSize: 12,
    textAlign: 'center',
    color: 'white',
    paddingTop: 10,
    paddingBottom: 10,
    marginHorizontal: 10,
    fontSize: 35
  },
  item: {
    padding: 20,
    fontSize: 30,
    marginVertical: 8,
    marginHorizontal: 16,
    justifyContent: 'center',
    fontWeight: 'bold',
    color: '#FFFFFF'
  },

});
