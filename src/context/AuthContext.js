import React from 'react';

export default AuthContext = React.createContext({
  token: null,
  setToken: () => {}
});
