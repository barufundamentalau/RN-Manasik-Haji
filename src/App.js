import 'react-native-gesture-handler';
import React from 'react';
import Router from './router';
import {SplashScreen, Home} from './pages';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};
export default App;
