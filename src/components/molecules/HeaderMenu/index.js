import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HeaderMenu = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default HeaderMenu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 24,
  },
  title: {fontSize: 22, fontFamily: 'Poppins-Medium', color: '#020202'},
});
