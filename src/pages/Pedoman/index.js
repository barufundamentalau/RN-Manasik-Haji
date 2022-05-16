import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HeaderMenu, ButtonMenu, Gap} from '../../components';

const Pedoman = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View>
        <HeaderMenu title="Pedoman Manasik Haji dan Umroh" />
      </View>
      <View style={styles.container}>
        <Gap height={6} />
        <ButtonMenu
          text="Pengertian Haji dan Umroh"
          onPress={() => navigation.navigate('Pedoman')}
        />
        <Gap height={6} />
        <ButtonMenu
          text="Syarat Haji dan Umroh"
          color="#FFFF"
          onPress={() => navigation.navigate('Pedoman')}
        />
        <Gap height={6} />
        <ButtonMenu
          text="Rukun Manasik Haji dan Umroh"
          onPress={() => navigation.navigate('Pedoman')}
        />
        <Gap height={6} />
        <ButtonMenu
          text="Wajib Haji"
          color="#FFFF"
          onPress={() => navigation.navigate('Pedoman')}
        />
        <Gap height={6} />
        <ButtonMenu
          text="Jenis Jenis Haji"
          onPress={() => navigation.navigate('Pedoman')}
        />
        <Gap height={6} />
        <ButtonMenu
          text="Niat Ihram dan Miqot"
          color="#FFFF"
          onPress={() => navigation.navigate('Pedoman')}
        />
        <Gap height={6} />
        <ButtonMenu
          text="Tawaf"
          onPress={() => navigation.navigate('Pedoman')}
        />
        <Gap height={6} />
        <ButtonMenu
          text="Sa'i"
          color="#FFFF"
          onPress={() => navigation.navigate('Pedoman')}
        />
        <Gap height={6} />
        <ButtonMenu
          text="Wuquf di Arofah"
          onPress={() => navigation.navigate('Pedoman')}
        />
        <Gap height={6} />
        <ButtonMenu
          text="Mabid di Musdalifa"
          color="#FFFF"
          onPress={() => navigation.navigate('Pedoman')}
        />
        <Gap height={6} />
        <ButtonMenu
          text="Melontar Jumrah di Mina"
          onPress={() => navigation.navigate('Pedoman')}
        />
        <Gap height={6} />
        <ButtonMenu
          text="Tawaf Ifadah"
          color="#FFFF"
          onPress={() => navigation.navigate('Pedoman')}
        />
        <Gap height={6} />
        <ButtonMenu
          text="Tahallul"
          onPress={() => navigation.navigate('Pedoman')}
        />
      </View>
    </View>
  );
};

export default Pedoman;

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
