import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../component/Header';
import {} from '../assets/Data';

const Laugh = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

export default Laugh;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Text: {
    fontSize: 20,
    color: 'black',
  },
});
