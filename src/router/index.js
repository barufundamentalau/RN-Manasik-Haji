import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SplashScreen, Home, Pedoman, Doa, Video, Jadwal} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pedoman"
        component={Pedoman}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Doa" component={Doa} options={{headerShown: false}} />
      <Stack.Screen
        name="Video"
        component={Video}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Jadwal"
        component={Jadwal}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
