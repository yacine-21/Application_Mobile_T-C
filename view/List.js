import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Header from '../component/Header';
import Record from '../component/Record';

const List = () => {
  return (
    <>
      <Header />
      <Text style={styles.title}>RECORDS LIST</Text>
      <Record duration={'07:10'} numero={1} />
      <Record duration={'00:05'} numero={2} />
      <Record duration={'05:56'} numero={3} />
      <Record duration={'01:01'} numero={4} />
    </>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
});
