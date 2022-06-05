import React from 'react';
import {View, StyleSheet, FlatList, Dimensions} from 'react-native';
import Header from '../component/Header';
import Card from '../component/Card.js';
import Citation_Bot from '../component/Citation_Bot';
import Citation_Top from '../component/Citation_Top';

const Laugh = ({navigation}) => {
  const data = [
    {
      Name: 'Zoro',
      image: require('../assets/images/Laught/zoro.png'),
      image_logo: require('../assets/images/Laught/logo_zz.png'),
      sound: 'roronoa_zoro',
      Age: 16,
      Birth_Date: '10/10/10',
      Bounty: '100',
      main_color: '92ff96',
      linear_color: '68ed6d00',
      shadow_color: '89f08d',
    },
    {
      Name: 'Nami',
      image: require('../assets/images/Laught/nami.png'),
      image_logo: require('../assets/images/Laught/logo_zz.png'),
      sound: 'nami',
      Age: 16,
      Birth_Date: '10/10/10',
      Bounty: '100',
      main_color: 'F3771C',
      linear_color: 'DE8E1600',
      shadow_color: 'E46F1A',
    },
    {
      Name: 'Sanji',
      image: require('../assets/images/Laught/sanji.png'),
      image_logo: require('../assets/images/Laught/logo_zz.png'),
      sound: 'sanji',
      Age: 16,
      Birth_Date: '10/10/10',
      Bounty: '100',
      main_color: 'FFF72F',
      linear_color: 'E5DE3400',
      shadow_color: 'F0E689',
    },
    {
      Name: 'Luffy',
      image: require('../assets/images/Laught/luffy.png'),
      image_logo: require('../assets/images/Laught/logo_zz.png'),
      sound: 'luffy',
      Age: 16,
      Birth_Date: '10/10/10',
      Bounty: '100',
      Devil_Fruit: 'Mango',
      main_color: 'FF9292',
      linear_color: 'ED686800',
      shadow_color: 'ED6868',
    },
    // {
    //   Name: 'Franky',
    //   image: require('../assets/images/Laught/franky.jpg'),
    //   sound: 'franky',
    //   Age: 16,
    //   Birth_Date: '10/10/10',
    //   Bounty: '100',
    //   main_color: '92ff96',
    //   linear_color: '68ed6d00',
    //   shadow_color: '89f08d',
    // },
    // {
    //   Name: 'Brook',
    //   image: require('../assets/images/Laught/brook.jpg'),
    //   sound: 'brook',
    //   Age: 16,
    //   Birth_Date: '10/10/10',
    //   Bounty: '100',
    //   Devil_Fruit: 'Mango',
    //   main_color: '92ff96',
    //   linear_color: '68ed6d00',
    //   shadow_color: '89f08d',
    // },
    // {
    //   Name: 'Monkey D. Luffy',
    //   image: require('../assets/images/Laught/luffy.jpg'),
    //   sound: 'luffy',
    //   Age: 16,
    //   Birth_Date: '10/10/10',
    //   Bounty: '100',
    //   Devil_Fruit: 'Mango',
    //   main_color: '92ff96',
    //   linear_color: '68ed6d00',
    //   shadow_color: '89f08d',
    // },
    // {
    //   Name: 'God Usopp',
    //   image: require('../assets/images/Laught/usopp.jpg'),
    //   sound: 'usopp',
    //   Age: 16,
    //   Birth_Date: '10/10/10',
    //   Bounty: '100',
    //   main_color: '92ff96',
    //   linear_color: '68ed6d00',
    //   shadow_color: '89f08d',
    // },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <Citation_Top />
      <FlatList
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.list}
        data={data}
        renderItem={({item}) => <Card navigation={navigation} item={item} />}
        keyExtractor={(item, index) => index}
        numColumns={2}
      />
      <Citation_Bot />
    </View>
  );
};

export default Laugh;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: '#1e1f43',
    paddingVertical: 10,
  },
  list: {
    flex: 1,
    justifyContent: 'center',
    height: Dimensions.get('window').height / 1.5,
  },
  separator: {
    height: 50,
  },
});
