import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {HeaderMenu} from '../../components';
import {IcJadwalSatu, IcJadwalDua} from '../../assets';

const Jadwal = () => {
  return (
    <View>
      <HeaderMenu title="Jadwal Zoom" />
      <ScrollView>
        <View style={styles.content}>
          <Image source={IcJadwalSatu} />
          <Image source={IcJadwalDua} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Jadwal;

const styles = StyleSheet.create({
  content: {
    paddingTop: 26,
  },
});
