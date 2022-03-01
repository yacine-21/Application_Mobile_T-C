import React from 'react';
import {View, Text, StyleSheet, Button, ImageBackground, Image, Dimensions, TouchableOpacity} from 'react-native';

const Accueil = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/Accueil/bg-accueil.png')} resizeMode="cover" style={styles.image}>
        <View style={styles.accueil_img}>  
          <Image
            source={require('../assets/images/Accueil/icone_accueil.png')}
          />
        </View>  
        <TouchableOpacity
            style={styles.accueil_button}
            onPress={() =>
              navigation.navigate("Laugh")
            }
          >
            <Text
              style={styles.text_button}
            >Laugh{"\n"}  Tale</Text>
          </TouchableOpacity>
          <Text
            style={styles.accueil_text}
          >
            We help you to make your day{"\n"}   better, so come and laugh
          </Text>
      </ImageBackground>
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
  accueil_button: {
    justifyContent: 'center',
    alignItems:'center',
  },
  text_button: {
    fontFamily: 'Roboto',
    fontSize: 60,
    left: 10,
    top: 10,
    textShadowColor:'red',
    textShadowOffset:{width: 2, height: 2},
    textShadowRadius:1,
  },
  accueil_img: {
    position: 'absolute',
    right: 50,
  },
  accueil_text: {
    backgroundColor: 'white',
    position: 'absolute',
    color: 'red',
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 2,
    paddingBottom: 2,
    borderRadius: 15,
    fontSize: 20,
    left: 60,
    bottom: 90,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: Dimensions.get("window").width,
  },
  Text: {
    fontSize: 20,
    color: 'black',
  },
});
