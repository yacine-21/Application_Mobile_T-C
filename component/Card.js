import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  Dimensions,
  ImageBackground,
  PermissionsAndroid,
} from 'react-native';
import Icon from 'react-native-ionicons';
import SoundPlayer from 'react-native-sound-player';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

const checkPermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const grants = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      ]);
      if (
        grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
          PermissionsAndroid.RESULTS.GRANTED &&
        grants['android.permission.READ_EXTERNAL_STORAGE'] ===
          PermissionsAndroid.RESULTS.GRANTED &&
        grants['android.permission.RECORD_AUDIO'] ===
          PermissionsAndroid.RESULTS.GRANTED
      ) {
      } else {
        return;
      }
    } catch (err) {
      console.warn(err);
      return;
    }
  }
};

const audioRecorderPlayer = new AudioRecorderPlayer();

const Card = ({item, navigation}) => {
  useEffect(() => {
    checkPermission();
  }, []);

  const [modalVisible, setModalVisible] = useState(false);
  const [isRecord, setIsRecord] = useState(false);
  let icon_name = isRecord ? 'square' : 'radio-button-on';
  const [recordSecs, setRecordSecs] = useState(0);
  const [recordTime, setRecordTime] = useState('00:00:00');
  const [currentPositionSec, setCurrentPositionSec] = useState(0);
  const [currentDurationSec, setCurrentDurationSec] = useState(0);
  const [playTime, setPlayTime] = useState('');
  const [duration, setDuration] = useState('');

  const onPausePlay = async () => {
    await audioRecorderPlayer.pausePlayer();
  };

  const onStopPlay = async () => {
    console.log('record stopped');
    audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
  };

  const onStartRecord = async () => {
    const result = await audioRecorderPlayer.startRecorder();
    audioRecorderPlayer.addRecordBackListener(e => {
      setRecordSecs(e.currentPosition);
      setRecordTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));
      return;
    });
    console.log(result);
  };

  const onStopRecord = async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    setRecordSecs(0);
    console.log(result);
  };

  const onStartPlay = async () => {
    console.log('onStartPlay');
    const msg = await audioRecorderPlayer.startPlayer();
    console.log(msg);
    audioRecorderPlayer.addPlayBackListener(e => {
      setCurrentPositionSec(e.currentPosition);
      setCurrentDurationSec(e.duration);
      setPlayTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));
      setDuration(audioRecorderPlayer.mmssss(Math.floor(e.duration)));
      return;
    });
  };

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
        <Text style={styles.text}>{item.Name}</Text>
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
                  Name : {item.Name ? item.Name : 'NO DATA'}
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
              <View style={styles.ButtonDefault}>
                <TouchableOpacity
                  onPress={() => {
                    setIsRecord(!isRecord);
                    // onStartRecord()
                  }}>
                  <Icon
                    name={icon_name}
                    color="black"
                    size={35}
                    style={styles.icon}
                  />
                </TouchableOpacity>
                <Text style={styles.text}>00:00</Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('List');
                  }}>
                  <Icon
                    name="add"
                    color="black"
                    size={35}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  zIndex: 2,
                  top: 10,
                  right: 20,
                }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Icon
                  name="arrow-round-back"
                  color="black"
                  size={45}
                  style={styles.icon}
                />
              </TouchableOpacity>
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
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'red',
    alignSelf: 'center',
    borderRadius: 20,
    marginHorizontal: 10,
    width: Dimensions.get('window').width / 1.5,
    height: Dimensions.get('window').height / 20,
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
