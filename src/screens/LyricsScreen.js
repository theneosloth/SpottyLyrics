import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, SafeAreaView, StatusBar, ImageBackground } from 'react-native';

import Lyrics from '../components/Lyrics/Lyrics';

import { getCurrentlyPlaying } from '../api/spotify';
import { getSongLyrics } from '../api/lyrics';


export default function LyricsScreen({ navigation }) {

  const defaultPic = require('../../assets/background.jpg');


  const [currentSong, setCurrentSong] = useState('');
  const [currentArtist, setCurrentArtist] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [background, setBackground] = useState({});


  const fetchSong = async () => {
    try {

      const song = await getCurrentlyPlaying();
      setCurrentSong(song.item?.name);
      setCurrentArtist(song.item?.artists?.[0].name);
      setBackground({ uri: song.item?.album?.images?.[0].url } ?? defaultPic);
    }
    catch (error) {
      //Handle more later
      navigation.navigate('Login');
    }

  }

  useEffect(() => {
    (async () => {
      fetchSong();
    })();
  }, []);

  useEffect(() => {
    setLyrics('');
    (async () => {
      if (!!currentArtist && !!currentSong) {
        try {
          setLyrics(await getSongLyrics(currentArtist, currentSong));
        } catch (error) {
          setLyrics('Lyrics could not be loaded.');
        }
      }
    })();
  }, [currentSong, currentArtist]);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={background}
        style={{ width: '100%', height: '100%', backgroundColor: 'rgb(0,0,0)' }}
        resizeMode="cover"
        imageStyle={{ opacity: 0.3 }} >
        <Text style={styles.title}>{currentSong ?? 'No Song Found'} by {currentArtist ?? 'Pull Down To Refresh'}</Text>
        <Lyrics
          onRefresh={() => fetchSong()}
          lyrics={lyrics}
          styles={styles} />

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
    marginHorizontal: 8,
    justifyContent: 'center',
    fontWeight: 'bold',
    color: '#FFFFFF'
  },

});
