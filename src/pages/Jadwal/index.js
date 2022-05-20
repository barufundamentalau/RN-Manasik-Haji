import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {IcJadwalSatu, IcJadwalDua} from '../../assets';
import {BannerCard, Gap, HeaderMenu} from '../../components';

const Jadwal = () => {
  return (
    <View style={styles.page}>
      <HeaderMenu title="Jadwal Zoom" />
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.bannerCardContainer}>
            <Gap width={10} />
            <BannerCard image={IcJadwalSatu} />
            <BannerCard image={IcJadwalDua} />
            <BannerCard image={IcJadwalSatu} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Jadwal;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: 'green'},
  bannerCardContainer: {flexDirection: 'row', marginVertical: 22},
});
