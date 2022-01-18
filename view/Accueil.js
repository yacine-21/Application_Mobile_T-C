import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Accueil = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Accueil</Text>
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
  },
});
