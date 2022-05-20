import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {HeaderMenu, Iframe} from '../../components';

const Video = () => {
  return (
    <View>
      <HeaderMenu title="Video Tutorial" />
      <ScrollView>
        <View>
          <Iframe />
        </View>
      </ScrollView>
    </View>
  );
};

export default Video;

const styles = StyleSheet.create({});
