import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';

const Banner = ({image}) => {
  return (
    <WebView>
      <Image source={image} style={styles.image} />
    </WebView>
  );
};

export default Banner;

const styles = StyleSheet.create({
  image: {height: 330, paddingTop: 26, paddingLeft: 22},
});
