import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {screenHeight, screenWidth} from '../../utils/Scaling';
import {Colors} from '../../utils/Constants';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/icons/logo.png')}
        style={styles.logoImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundDark,
    alignItems: 'center',
    padding: 20,
  },
  header: {
    marginBottom: 20,
    color: Colors.text,
  },
  logoImage: {
    height: screenHeight * 0.15,
    marginTop: 50,
    width: screenWidth * 0.6,
    resizeMode: 'contain',
  },
});

export default LoginScreen;
