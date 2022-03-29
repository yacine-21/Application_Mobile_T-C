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
import LinearGradient from 'react-native-linear-gradient';

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
    <View
      style={{
        height: Dimensions.get('window').height * 0.3,
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <LinearGradient
          colors={[`#${item.main_color}`, '#000000']}
          style={[styles.gradient, {shadowColor: `#${item.shadow_color}`}]}>
          <View style={styles.card}>
            <LinearGradient
              colors={[
                `#${item.linear_color}`,
                `#${item.linear_color}`,
                `#${item.linear_color}`,
                `#${item.linear_color}`,
                '#000000',
                '#000000',
              ]}
              style={styles.gradient_2}
            />
            <Image style={styles.image} source={item.image} />
            <Text style={styles.text}>{item.Name}</Text>
            <Image style={styles.image_logo} source={item.image_logo} />
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    zIndex: 1,
    top: -52,
    // width: '100%',
    // height: 200,
    borderRadius: 0,
  },
  text: {
    fontFamily: 'Fada',
    bottom: 50,
    left: 10,
    fontSize: 50,
    color: 'white',
    zIndex: 2,
    position: 'absolute',
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
    flexDirection: 'column',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
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

  imageBackground: {
    width: Dimensions.get('window').width - 25,
    height: Dimensions.get('window').height / 2.5,
    borderRadius: 20,
    opacity: 0.7,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },

  gradient: {
    width: 143,
    height: 158,
    borderRadius: 30,
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 30,
    elevation: 30,
    shadowOffset: {
      width: 20,
      height: 20,
    },
  },
  gradient_2: {
    width: 143,
    height: 158,
    zIndex: 2,
    top: 0,
    position: 'absolute',
    borderRadius: 30,
  },
  image_logo: {
    position: 'absolute',
    bottom: 18,
    right: 4,
    zIndex: 2,
  },
});
