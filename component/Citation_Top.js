import {View, Text, Dimensions} from 'react-native';
import React from 'react';

const Citation_Top = () => {
  return (
    <View
      style={{
        height: Dimensions.get('window').height * 0.15,
        backgroundColor: 'red',
      }}>
      <Text>Citation_Top</Text>
    </View>
  );
};

export default Citation_Top;
