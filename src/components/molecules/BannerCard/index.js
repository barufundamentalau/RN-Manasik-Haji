import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {IcJadwalSatu} from '../../../assets';

const BannerCard = ({image}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
      </View>
    </View>
  );
};

export default BannerCard;

const styles = StyleSheet.create({
  container: {
    width: 330,
    backgroundColor: 'white',
    shadowColor: 'black',
    ShadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 10,
  },
  image: {width: 330, height: 500, resizeMode: 'contain'},
  content: {
    alignItems: 'center',
    padding: 6,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
});
