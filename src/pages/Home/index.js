import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, LogoSimanhto} from '../../components';

const Home = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View>
        <LogoSimanhto />
      </View>
      <View style={styles.container}>
        <Gap height={14} />
        <Button
          text="Pedoman Manasik Haji dan Umroh"
          onPress={() => navigation.navigate('Pedoman')}
        />
        <Gap height={14} />
        <Button
          text="Doa-Doa Manasik Haji dan Umroh"
          color="#FFFF"
          onPress={() => navigation.navigate('Doa')}
        />
        <Gap height={14} />
        <Button
          text="Video Tutorial"
          onPress={() => navigation.navigate('Video')}
        />
        <Gap height={14} />
        <Button
          text="Jadwal Zoom"
          color="#FFFF"
          onPress={() => navigation.navigate('Jadwal')}
        />
      </View>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    backgroundColor: 'yellow',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 0,
    flex: 1,
  },
});
