import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  FlatList,
} from 'react-native';
import Header from '../component/Header';
import DATA_BDAY from '../assets/Data/onepice_bday';
import DATA_BOUNTY from '../assets/Data/onepice_bounty';
import DATA_FRUITS from '../assets/Data/onepice_fruits';
import DATA_HEIGHT from '../assets/Data/onepice_height';
import Card from '../component/Card';

const Laugh = () => {
  const data = [
    {
      name: 'Roronoa Zoro',
      image: require('../assets/images/roronoa_zoro.jpg'),
    },
    {
      name: 'Nami',
      image: require('../assets/images/nami.gif'),
    },
    {
      name: 'Vinsmoke Sanji',
      image: require('../assets/images/sanji.jpg'),
    },
    {
      name: 'Chopper',
      image: require('../assets/images/chopper.png'),
    },
    {
      name: 'Franky',
      image: require('../assets/images/franky.jpg'),
    },
    {
      name: 'Brook',
      image: require('../assets/images/brook.jpg'),
    },
    {
      name: 'Monkey D. Luffy',
      image: require('../assets/images/luffy.jpg'),
    },
    {
      name: 'God Usopp',
      image: require('../assets/images/usopp.jpg'),
    },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={data}
        renderItem={({item, index}) => <Card item={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Laugh;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff',
    padding: 10,
  },
});
