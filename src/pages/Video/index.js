import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HeaderMenu, Iframe} from '../../components';

const Video = () => {
  return (
    <View>
      <HeaderMenu title="Video Tutorial" />
      <Iframe />
    </View>
  );
};

export default Video;

const styles = StyleSheet.create({});
