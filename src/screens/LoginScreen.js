import React, {useEffect } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, ResponseType, useAuthRequest } from 'expo-auth-session';

import Constants from 'expo-constants';

WebBrowser.maybeCompleteAuthSession();

const discovery = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

export default function LoginScreen({ saveToken }) {


  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: Constants.manifest.extra.spotifyClient,
      scopes: ['user-read-currently-playing', 'user-read-recently-played'],
      // In order to follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
      // this must be set to false
      usePKCE: false,
      // For usage in managed apps using the proxy
      redirectUri: makeRedirectUri({
        // For usage in bare and standalone
        useProxy: true,

      }),
    },
    discovery
  );


  useEffect(() => {
    if (response?.type === 'success') {
      const { access_token } = response.params;
      saveToken('API_TOKEN', access_token);
    }
  }, [response])


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
      <Text>Please Log In</Text>
      <Button
        disabled={!request}
        title="Login"
        onPress={() => {
          promptAsync({ useProxy: true });
        }} />
    </View>
  )
}
