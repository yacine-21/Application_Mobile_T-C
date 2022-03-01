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
// import DATA_BDAY from '../assets/Data/o/Laughtnepice_bday';
// import DATA_BOUNTY from '../assets/Data/o/Laughtnepice_bounty';
// import DATA_FRUITS from '../assets/Data/o/Laughtnepice_fruits';
// import DATA_HEIGHT from '../assets/Data/o/Laughtnepice_height';
import Card from '../component/Card';

const Laugh = () => {
  const data = [
    {
      name: 'Roronoa Zoro',
      image: require('../assets/images/Laught/roronoa_zoro.jpg'),
      sound: 'roronoa_zoro',
    },
    {
      name: 'Nami',
      image: require('../assets/images/Laught/nami.gif'),
      sound: 'nami',
    },
    {
      name: 'Vinsmoke Sanji',
      image: require('../assets/images/Laught/sanji.jpg'),
      sound: 'sanji',
    },
    {
      name: 'Chopper',
      image: require('../assets/images/Laught/chopper.png'),
      sound: 'chopper',
    },
    {
      name: 'Franky',
      image: require('../assets/images/Laught/franky.jpg'),
      sound: 'franky',
    },
    {
      name: 'Brook',
      image: require('../assets/images/Laught/brook.jpg'),
      sound: 'brook',
    },
    {
      name: 'Monkey D. Luffy',
      image: require('../assets/images/Laught/luffy.jpg'),
      sound: 'luffy',
    },
    {
      name: 'God Usopp',
      image: require('../assets/images/Laught/usopp.jpg'),
      sound: 'usopp',
    },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={data}
        renderItem={({item, index}) => <Card item={item} />}
        keyExtractor={(item, index) => index}
        numColumns={2}
      />
    </View>
  );
};

export default Laugh;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
});
