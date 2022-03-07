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
import { AudioSet } from 'react-native-audio-recorder-player';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

const Card = ({item}) => {
  
  // !!!!!!!!!!!
  // const audioSet: AudioSet = {
  //   AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
  //   AudioSourceAndroid: AudioSourceAndroidType.MIC,
  //   AVModeIOS: AVModeIOSOption.measurement,
  //   AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
  //   AVNumberOfChannelsKeyIOS: 2,
  //   AVFormatIDKeyIOS: AVEncodingOption.aac,
  // };
  // const meteringEnabled = false;
  // const path = 'android/app/src/main/res/raw';
  
  // const uri = await this.audioRecorderPlayer.startRecorder(
  //   path,
  //   audioSet,
  //   meteringEnabled,
  // );
  
  // this.audioRecorderPlayer.addRecordBackListener((e: any) => {
  //   this.setState({
  //     recordSecs: e.currentPosition,
  //     recordTime: this.audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
  //   });
  // });
  // !!!!!!!!!
  const audioRecorderPlayer = new AudioRecorderPlayer();
  onStartRecord = async () => {
    const result = await this.audioRecorderPlayer.startRecorder();
    this.audioRecorderPlayer.addRecordBackListener((e) => {
      this.setState({
        recordSecs: e.currentPosition,
        recordTime: this.audioRecorderPlayer.mmssss(
          Math.floor(e.currentPosition),
        ),
      });
      return;
    });
    console.log(result);
  };
  
  onStopRecord = async () => {
    const result = await this.audioRecorderPlayer.stopRecorder();
    this.audioRecorderPlayer.removeRecordBackListener();
    this.setState({
      recordSecs: 0,
    });
    console.log(result);
  };
  
  onStartPlay = async () => {
    console.log('onStartPlay');
    const msg = await this.audioRecorderPlayer.startPlayer();
    console.log(msg);
    this.audioRecorderPlayer.addPlayBackListener((e) => {
      this.setState({
        currentPositionSec: e.currentPosition,
        currentDurationSec: e.duration,
        playTime: this.audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
        duration: this.audioRecorderPlayer.mmssss(Math.floor(e.duration)),
      });
      return;
    });
  };
  
  onPausePlay = async () => {
    await this.audioRecorderPlayer.pausePlayer();
  };
  
  onStopPlay = async () => {
    console.log('onStopPlay');
    this.audioRecorderPlayer.stopPlayer();
    this.audioRecorderPlayer.removePlayBackListener();
  };

  // !!!!!!!!!!!
  const playSound = () => {
    try {
      SoundPlayer.playSoundFile(`${item.sound}`, 'mp3');
      console.log(item.sound);
    } catch (error) {
      console.log(error);
    }
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [isRecord, setIsRecord] = useState(false);
  let icon_name = isRecord ? 'square' : 'radio-button-on';

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
                    setModalVisible(!modalVisible);
                  }}>
                  {/*logo here*/}
                  <Icon
                    name="close-circle"
                    color="white"
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
