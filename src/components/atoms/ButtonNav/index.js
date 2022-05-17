import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';

const ButtonNav = ({onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <View></View>
    </TouchableOpacity>
  );
};

export default ButtonNav;

const styles = StyleSheet.create({});
