import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Accueil = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Accueil</Text>
      <Button
        title="Laugh"
        onPress={() => {
          navigation.navigate('Laugh');
        }}
      />
    </View>
  );
};

export default Accueil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    fontSize: 20,
    color: 'black',
  },
});
