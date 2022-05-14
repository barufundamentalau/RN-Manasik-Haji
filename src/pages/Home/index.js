import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  ButtonDoa,
  ButtonPedoman,
  ButtonVideo,
  ButtonZoom,
  FooterMenu,
} from '../../components';

const Home = () => {
  return (
    <View>
      <Text>Home Page Si Manhto</Text>
      <ButtonPedoman />
      <ButtonDoa />
      <ButtonVideo />
      <ButtonZoom />
      <FooterMenu />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
