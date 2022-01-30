import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-ionicons';
import SoundPlayer from 'react-native-sound-player';

const Card = ({item}) => {
  const playSound = () => {
    try {
      SoundPlayer.playSoundFile(`${item.sound}`, 'mp3');
      console.log(item.sound);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          playSound();
        }}>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.name}</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon
          name="add-circle-outline"
          color="red"
          size={35}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 10,
    borderRadius: 10,
  },

  item: {
    marginBottom: 10,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'black',
    width: 120,
    textAlign: 'center',
  },
  icon: {},
});
