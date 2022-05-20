import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Gap, HeaderMenu, IframeCard} from '../../components';

const Video = () => {
  return (
    <View style={styles.page}>
      <HeaderMenu title="Video Tutorial" />
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.iframeCardContainer}>
            <Gap width={10} />
            <IframeCard ytubeId={'VnT_t8TpQjU'} />
            <IframeCard ytubeId={'Au9qQm4gyjI'} />
            <IframeCard ytubeId={'VnT_t8TpQjU'} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Video;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: '#28925A'},
  container: {
    backgroundColor: 'green',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingTop: 20,
    marginBottom: 0,
  },
  iframeCardContainer: {marginBottom: 80, marginHorizontal: 15},
});
