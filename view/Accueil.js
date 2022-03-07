import React from 'react';
import {View, Text, StyleSheet, Button, ImageBackground, Image, Dimensions, TouchableOpacity} from 'react-native';

const Accueil = ({navigation}) => {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <ImageBackground source={require('../assets/images/Accueil/bg-accueil.png')} resizeMode="cover" style={styles.image}>
          <TouchableOpacity
            style={styles.accueil_button}
            onPress={() =>
              navigation.navigate("Laugh")
            }
          >
            <View style={styles.accueil_img}>  
              <Image
                source={require('../assets/images/Accueil/icone_accueil.png')}
              />
            </View>
          </TouchableOpacity>
        </ImageBackground>
      </View>  
      <View>
          <Text
            style={styles.accueil_text}
          >
            We help you to make your day{"\n"}   better, so come and laugh
          </Text>
      </View>
    </React.Fragment>
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
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 50,
    justifyContent: 'center',
    alignItems:'center',
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
    left: Dimensions.get("window").width / 6,
    bottom: Dimensions.get("window").height / 8,
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
