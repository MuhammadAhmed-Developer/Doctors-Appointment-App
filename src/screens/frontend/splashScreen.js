import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  View,
  Image,
  StatusBar,
} from 'react-native';

const BackgroundImage = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ImageBackground
        source={require('../../assets/images/splashscreen.png')}
        style={styles.backgroundImage}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/Logo.png')}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 70,
    height: 150,
    resizeMode: 'contain',
  },
});

export default BackgroundImage;
