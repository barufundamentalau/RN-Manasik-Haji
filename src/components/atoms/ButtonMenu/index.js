import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';

const ButtonMenu = ({
  text,
  color = '#D9DDDC',
  textColor = '#020202',
  onPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <View style={styles.container(color)}>
        <Text style={styles.text(textColor)}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonMenu;

const styles = StyleSheet.create({
  container: color => ({
    backgroundColor: color,
    padding: 8,
    borderRadius: 4,
  }),
  text: color => ({
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: color,
    textAlign: 'center',
  }),
});
