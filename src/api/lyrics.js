import axios from 'axios';

export async function getLyrics(artist, title) {
  try {
    return axios.get(encodeURI(`https://api.lyrics.ovh/v1/${artist}/${title}`));
  }
  catch (err) {
    console.error(err);
  }
}
