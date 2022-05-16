import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, LogoSimanhto} from '../../components';

const Home = () => {
  return (
    <View style={styles.page}>
      <View>
        <LogoSimanhto />
      </View>
      <View style={styles.container}>
        <Gap height={14} />
        <Button text="Pedoman Manasik Haji dan Umroh" />
        <Gap height={14} />
        <Button text="Doa-Doa Manasik Haji dan Umroh" color="#8D92A3" />
        <Gap height={14} />
        <Button text="Video Tutorial" />
        <Gap height={14} />
        <Button text="Jadwal Zoom" color="#8D92A3" />
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
