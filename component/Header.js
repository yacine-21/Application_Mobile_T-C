import React from 'react';
import {View, Image, Text, StyleSheet, Dimensions} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/images/logo.png')}
      />
      <Text style={styles.Text}>Laugh Tale</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  Text: {
    fontSize: 20,
    color: 'black',
    textTransform: 'uppercase',
  },
  image: {
    width: 80,
    height: 80,
  },
});
