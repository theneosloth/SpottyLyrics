import axios from 'axios';
import { getValueFor } from './storage';

// Taken from https://developer.spotify.com/console/get-users-currently-playing-track/
const getAuthHeader = async () => {
  const token = await getValueFor('API_TOKEN')
  return {
    Authorization: `Bearer ${token}`
  };
}


export async function getCurrentlyPlaying() {
  const headers = await getAuthHeader();
  return axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
    headers: headers
  });
}
