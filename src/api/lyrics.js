import { getLyrics } from 'genius-lyrics-api';

import Constants from 'expo-constants';

export async function getSongLyrics(artist, title) {
  const options = {
    apiKey: Constants.manifest.extra.geniusClient,
    title: title,
    artist: artist,
    optimizeQuery: true
  }
  const result = await getLyrics(options);
  return result;

}
