import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';

const Iframe = () => {
  return (
    <View>
      <YoutubePlayer height={200} videoId={'iee2TATGMyI'} />
    </View>
  );
};

export default Iframe;

const styles = StyleSheet.create({});
