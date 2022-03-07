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
import Card from '../component/Card.js';

const Laugh = ({navigation}) => {
  const data = [
    {
      Name: 'Roronoa Zoro',
      image: require('../assets/images/Laught/roronoa_zoro.jpg'),
      sound: 'roronoa_zoro',
      Age: 16,
      Birth_Date: '10/10/10',
      Bounty: '100',
    },
    {
      Name: 'Nami',
      image: require('../assets/images/Laught/nami.gif'),
      sound: 'nami',
      Age: 16,
      Birth_Date: '10/10/10',
      Bounty: '100',
    },
    {
      Name: 'Vinsmoke Sanji',
      image: require('../assets/images/Laught/sanji.jpg'),
      sound: 'sanji',
      Age: 16,
      Birth_Date: '10/10/10',
      Bounty: '100',
    },
    {
      Name: 'Chopper',
      image: require('../assets/images/Laught/chopper.png'),
      sound: 'chopper',
      Age: 16,
      Birth_Date: '10/10/10',
      Bounty: '100',
      Devil_Fruit: 'Mango',
    },
    {
      Name: 'Franky',
      image: require('../assets/images/Laught/franky.jpg'),
      sound: 'franky',
      Age: 16,
      Birth_Date: '10/10/10',
      Bounty: '100',
    },
    {
      Name: 'Brook',
      image: require('../assets/images/Laught/brook.jpg'),
      sound: 'brook',
      Age: 16,
      Birth_Date: '10/10/10',
      Bounty: '100',
      Devil_Fruit: 'Mango',
    },
    {
      Name: 'Monkey D. Luffy',
      image: require('../assets/images/Laught/luffy.jpg'),
      sound: 'luffy',
      Age: 16,
      Birth_Date: '10/10/10',
      Bounty: '100',
      Devil_Fruit: 'Mango',
    },
    {
      Name: 'God Usopp',
      image: require('../assets/images/Laught/usopp.jpg'),
      sound: 'usopp',
      Age: 16,
      Birth_Date: '10/10/10',
      Bounty: '100',
    },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <Card navigation={navigation} item={item} />
        )}
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
