import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Logo} from '../../../assets';

const LogoSimanhto = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.title}>Si Manhto</Text>
    </View>
  );
};

export default LogoSimanhto;

const styles = StyleSheet.create({
  title: {fontSize: 22, fontFamily: 'Poppins-Medium', color: '#28925A'},
  container: {
    alignItems: 'center',
    backgroundColor: '#28925A',
    paddingHorizontal: 24,
    paddingTop: 26,
    paddingBottom: 30,
  },
});
