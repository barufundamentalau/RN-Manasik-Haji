import React from 'react';
import {StyleSheet, View} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const IframeCard = () => {
  return (
    <View style={styles.container}>
      <YoutubePlayer height={200} videoId={'VnT_t8TpQjU'} />
    </View>
  );
};

export default IframeCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    overflow: 'hidden',
    marginTop: 14,
    borderRadius: 10,
  },
});
