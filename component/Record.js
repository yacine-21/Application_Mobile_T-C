import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-ionicons';

const Record = ({numero = 0, duration = 0}) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: Dimensions.get('window').height / 10,
        width: Dimensions.get('window').width / 1,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: Dimensions.get('window').width / 5,
          alignSelf: 'center',
          backgroundColor: 'grey',
          height: Dimensions.get('window').height / 10,
          opacity: 0.7,
        }}>
        <Text style={styles.text}>{numero}</Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          height: Dimensions.get('window').height / 10,
          alignSelf: 'center',
          borderRightWidth: 1,
          borderRightColor: 'black',
          height: Dimensions.get('window').height / 10,
        }}>
        <Text
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            fontSize: 20,
            color: 'black',
          }}>
          record{' '}
          <Text
            style={[
              styles.text,
              {
                fontWeight: 'bold',
              },
            ]}>
            {numero}
          </Text>
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
          height: Dimensions.get('window').height / 10,
          width: Dimensions.get('window').width / 4,
        }}>
        <Text style={styles.text}>{duration}</Text>
        <View
          style={{
            width: Dimensions.get('window').width / 4,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              alert('Play');
            }}>
            <Icon name="play" color="grey" size={35} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              alert('Stop');
            }}>
            <Icon name="square" color="grey" size={35} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Record;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  icon: {},
});
