import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {screenHeight, screenWidth} from '../../utils/Scaling';
import {Colors} from '../../utils/Constants';
import CustomText from '../../components/ui/CustomText';
import {navigate} from '../../utils/NavigationUtils';
import {useMutation} from '@apollo/client';
import {REGISTER_MUTATION} from '../../graphQL/queries';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [register, {loading, error}] = useMutation(REGISTER_MUTATION);

  const handleRegister = async () => {
    // Input validation
    if (!name.trim() || !email.trim() || !password.trim()) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters long');
      return;
    }

    try {
      console.log('Attempting registration with:', {name, email});
      const {data} = await register({variables: {name, email, password}});
      console.log('Registration response:', data);

      if (data?.registerUser?.user) {
        Alert.alert('Registration success');
        navigate('LoginScreen');
      }
    } catch (err: any) {
      console.log('Full registration error:', JSON.stringify(err, null, 2));
      Alert.alert(
        'Registration failed',
        err.message ||
          'An error occurred during registration. Please try again.',
      );
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/icons/logo.png')}
        style={styles.logoImage}
      />
      <CustomText variant="h3" style={styles.header}>
        Sign Up
      </CustomText>

      <TextInput
        value={name}
        style={styles.input}
        placeholder="Name"
        placeholderTextColor={Colors.inactive}
        onChangeText={setName}
        autoCapitalize="none"
      />
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

      <TouchableOpacity
        style={styles.button}
        onPress={handleRegister}
        disabled={loading}>
        <CustomText variant="h5" style={styles.buttonText}>
          {loading ? 'Registering...' : 'Register'}
        </CustomText>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigate('LoginScreen')}>
        <CustomText variant="h6" style={styles.signUpText}>
          Already have an account? Log In
        </CustomText>
      </TouchableOpacity>
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
    fontWeight: '500',
  },
  signUpText: {
    marginTop: 15,
    color: Colors.primary,
  },
});

export default RegisterScreen;
