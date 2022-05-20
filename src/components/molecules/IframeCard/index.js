import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const IframeCard = ({ytubeId}) => {
  return (
    <View style={styles.container}>
      <View style={styles.youtube}>
        <YoutubePlayer height={230} videoId={ytubeId} />
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
      </View>
    </View>
  );
};

export default IframeCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    shadowColor: 'black',
    ShadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 20,
  },
  youtube: {resizeMode: 'cover'},
  content: {padding: 6},
  text: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
});
