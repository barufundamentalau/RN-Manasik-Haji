import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HeaderMenu, ButtonMenu, Gap} from '../../components';

const Doa = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View>
        <HeaderMenu title="Doa-Doa Manasik Haji dan Umroh" />
      </View>
      <View style={styles.container}>
        <Gap height={6} />
        <ButtonMenu
          text="Doa Keluar Rumah"
          onPress={() => navigation.navigate('Doa')}
        />
        <Gap height={6} />
        <ButtonMenu
          text="Doa Setelah Duduk Dalam Kendaraan"
          color="#FFFF"
          onPress={() => navigation.navigate('Doa')}
        />
        <Gap height={6} />
        <ButtonMenu
          text="Doa Ketika Kendaraan Mulai Bergerak"
          onPress={() => navigation.navigate('Doa')}
        />
        <Gap height={6} />
        <ButtonMenu
          text="Doa Ketika Tiba Ditempat Tujuan"
          color="#FFFF"
          onPress={() => navigation.navigate('Doa')}
        />
        <Gap height={6} />
        <ButtonMenu
          text="Niat Umrah dan Haji"
          onPress={() => navigation.navigate('Doa')}
        />
        <Gap height={6} />
        <ButtonMenu
          text="Niat Haji Qiran"
          color="#FFFF"
          onPress={() => navigation.navigate('Doa')}
        />
        <Gap height={6} />
        <ButtonMenu
          text="Doa Selesai Berihram"
          onPress={() => navigation.navigate('Doa')}
        />
        <Gap height={6} />
        <ButtonMenu
          text="Doa Talbiyah"
          color="#FFFF"
          onPress={() => navigation.navigate('Doa')}
        />
        <Gap height={6} />
        <ButtonMenu
          text="Doa Memasuki Kota Makkah"
          onPress={() => navigation.navigate('Doa')}
        />
        <Gap height={6} />
        <ButtonMenu
          text="Doa Masuk Masjidil Haram"
          color="#FFFF"
          onPress={() => navigation.navigate('Doa')}
        />
        <Gap height={6} />
        <ButtonMenu
          text="Doa Ketika Melihat Kabah"
          onPress={() => navigation.navigate('Doa')}
        />
        <Gap height={6} />
        <ButtonMenu
          text="Doa Tawaf"
          color="#FFFF"
          onPress={() => navigation.navigate('Doa')}
        />
        <Gap height={6} />
        <ButtonMenu text="Doa Sai" onPress={() => navigation.navigate('Doa')} />
        <Gap height={6} />
        <ButtonMenu
          text="Doa Menggunting Rambut"
          color="#FFFF"
          onPress={() => navigation.navigate('Doa')}
        />
      </View>
    </View>
  );
};

export default Doa;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    backgroundColor: 'yellow',
    paddingHorizontal: 24,
    paddingVertical: 2,
    marginTop: 0,
    flex: 1,
  },
});
