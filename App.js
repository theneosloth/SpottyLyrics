import React from 'react';

import LoginScreen from './src/screens/LoginScreen';

import { save } from './src/api/storage';

export default function App() {
  return <LoginScreen saveToken={save} />
}
