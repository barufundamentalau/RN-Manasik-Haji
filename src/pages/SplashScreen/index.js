import React from 'react';
import {View, Text} from 'react-native';
import {Logo} from '../../assets';

const SplashScreen = () => {
  return (
    <View
      style={{
        backgroundColor: '#28925A',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Logo />
      <View style={{height: 20}} />
      <Text style={{fontSize: 32, color: '#FFF', fontFamily: 'Poppins-Medium'}}>
        SiManhto
      </Text>
    </View>
  );
};

export default SplashScreen;
