import 'react-native-gesture-handler';
import React from 'react';
import {SplashScreen} from './pages';
import {NavigationContainer} from '@react-navigation/native';
import Home from './pages/Home';

const App = () => {
  return (
    <NavigationContainer>
      {/* <SplashScreen /> */}
      <Home />
    </NavigationContainer>
  );
};
export default App;
