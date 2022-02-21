/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { AuthProvider } from './App/screens/AuthProvider';
import { name as appName } from './app.json';
const Provider = () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  )
}

AppRegistry.registerComponent(appName, () => Provider);
