import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  Dimensions,
  ImageBackground,
} from 'react-native';
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

  const [modalVisible, setModalVisible] = useState(false);

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
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}>
        <Icon
          name="add-circle-outline"
          color="red"
          size={35}
          style={styles.icon}
        />
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ImageBackground style={styles.imageBackground} source={item.image}>
              <View
                style={{
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <Text style={styles.text}>
                  Name : {item.Name ? item.Age : 'NO DATA'}
                </Text>
                <Text style={styles.text}>
                  Age : {item.Age ? item.Age : 'NO DATA'}
                </Text>
                <Text style={styles.text}>
                  Birth Date : {item.Birth_Date ? item.Birth_Date : 'NO DATA'}
                </Text>
                <Text style={styles.text}>
                  Bounty : {item.Bounty ? item.Bounty : 'NO DATA'}
                </Text>
                <Text style={styles.text}>
                  Devil Fruit : {item.Devil_Fruit ? item.Devil_Fruit : 'NONE'}
                </Text>
              </View>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginTop: 10,
                  alignItems: 'center',
                }}>
                <TouchableOpacity style={styles.ButtonDefault}>
                  <Text style={styles.text}>SET AS DEFAULT RINGTONE</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}>
                  {/*logo here*/}
                  <Icon
                    name="close-circle"
                    color="red"
                    size={35}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
        </View>
      </Modal>
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
    color: 'black',
    textAlign: 'left',
  },
  icon: {},
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: Dimensions.get('window').width - 25,
    height: Dimensions.get('window').height / 2.5,
    backgroundColor: 'white',
    flexDirection: 'column',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  imageBackground: {
    width: Dimensions.get('window').width - 25,
    height: Dimensions.get('window').height / 2.5,
    borderRadius: 20,
    opacity: 0.7,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  ButtonDefault: {
    backgroundColor: 'red',
    borderRadius: 20,
    width: Dimensions.get('window').width / 1.5,
    height: Dimensions.get('window').height / 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    backgroundColor: 'red',
    borderRadius: 20,
    width: Dimensions.get('window').width / 5,
    height: Dimensions.get('window').height / 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeImage: {
    width: Dimensions.get('window').width / 10,
    height: Dimensions.get('window').height / 15,
  },
});
