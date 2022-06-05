import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  PermissionsAndroid,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  onPausePlay,
  onStartPlay,
  onStartRecord,
  onStopPlay,
  onStopRecord,
  playSound,
} from '../lib/record';

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

  return (
    <TouchableOpacity
      onPress={() => {
        setModalVisible(true);
        playSound(item.sound);
      }}
      style={{
        alignItems: 'center',
        flex: 1,
      }}>
      <View>
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
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 50,
  },

  image: {
    zIndex: 1,
    top: -52,
    borderRadius: 50,
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').width * 0.4,
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
