import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {HeaderMenu, Button, Gap} from '../../components';

const Pedoman = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View>
        <HeaderMenu title="Pedoman Manasik Haji dan Umroh" />
      </View>
      <ScrollView>
        <View style={styles.container}>
          <Gap height={6} />
          <Button
            text="Pengertian Haji dan Umroh"
            onPress={() => navigation.navigate('Pedoman')}
          />
          <Gap height={6} />
          <Button
            text="Syarat Haji dan Umroh"
            color="#FFFF"
            onPress={() => navigation.navigate('Pedoman')}
          />
          <Gap height={6} />
          <Button
            text="Rukun Manasik Haji dan Umroh"
            onPress={() => navigation.navigate('Pedoman')}
          />
          <Gap height={6} />
          <Button
            text="Wajib Haji"
            color="#FFFF"
            onPress={() => navigation.navigate('Pedoman')}
          />
          <Gap height={6} />
          <Button
            text="Jenis Jenis Haji"
            onPress={() => navigation.navigate('Pedoman')}
          />
          <Gap height={6} />
          <Button
            text="Niat Ihram dan Miqot"
            color="#FFFF"
            onPress={() => navigation.navigate('Pedoman')}
          />
          <Gap height={6} />
          <Button text="Tawaf" onPress={() => navigation.navigate('Pedoman')} />
          <Gap height={6} />
          <Button
            text="Sa'i"
            color="#FFFF"
            onPress={() => navigation.navigate('Pedoman')}
          />
          <Gap height={6} />
          <Button
            text="Wuquf di Arofah"
            onPress={() => navigation.navigate('Pedoman')}
          />
          <Gap height={6} />
          <Button
            text="Mabid di Musdalifa"
            color="#FFFF"
            onPress={() => navigation.navigate('Pedoman')}
          />
          <Gap height={6} />
          <Button
            text="Melontar Jumrah di Mina"
            onPress={() => navigation.navigate('Pedoman')}
          />
          <Gap height={6} />
          <Button
            text="Tawaf Ifadah"
            color="#FFFF"
            onPress={() => navigation.navigate('Pedoman')}
          />
          <Gap height={6} />
          <Button
            text="Tahallul"
            onPress={() => navigation.navigate('Pedoman')}
          />
        </View>
      </ScrollView>
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
