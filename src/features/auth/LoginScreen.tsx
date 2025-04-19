import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import {screenHeight, screenWidth} from '../../utils/Scaling';
import {Colors} from '../../utils/Constants';
import CustomText from '../../components/ui/CustomText';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/icons/logo.png')}
        style={styles.logoImage}
      />
      <CustomText variant="h3" style={styles.header}>
        Login
      </CustomText>

      <TextInput
        value={email}
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={Colors.inactive}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        value={password}
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={Colors.inactive}
        secureTextEntry
        onChangeText={setPassword}
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
    fontWeight: 'bold',
  },
  logoImage: {
    height: screenHeight * 0.15,
    marginTop: 50,
    width: screenWidth * 0.6,
    resizeMode: 'contain',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.backgroundLight,
    borderRadius: 8,
    paddingHorizontal: 15,
    color: Colors.text,
    marginBottom: 15,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: Colors.background,
  },
  signUpText: {
    marginTop: 15,
    color: Colors.primary,
  },
});

export default LoginScreen;
