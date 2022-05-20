import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {HeaderMenu, IframeCard} from '../../components';

const Video = () => {
  return (
    <View>
      <HeaderMenu title="Video Tutorial" />
      <ScrollView>
        <IframeCard />
      </ScrollView>
    </View>
  );
};

export default Video;

const styles = StyleSheet.create({});
