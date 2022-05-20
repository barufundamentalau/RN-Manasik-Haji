import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';

const Iframe = () => {
  return (
    <View style={styles.iframeContainer}>
      <YoutubePlayer height={200} videoId={'VnT_t8TpQjU'} />
    </View>
  );
};

export default Iframe;

const styles = StyleSheet.create({
  iframeContainer: {
    backgroundColor: 'yellow',
    overflow: 'hidden',
    marginTop: 14,
    borderRadius: 10,
  },
});
