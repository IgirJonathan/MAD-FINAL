import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { Gap } from '../../components/atoms';

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log({ email, password });
    navigation.navigate('WelcomeScreen');
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.pageContainer}>
        {/* Logo */}
        <Image
          source={require('../../assets/Frame34.png')}
          style={styles.logo}
        />

        {/* Title */}
        <Text style={styles.title}>SIGN IN</Text>

        <Gap height={36} />

        {/* Form */}
        <View style={styles.form}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Type your email address"
            placeholderTextColor="#94a3b8"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />

          <Gap height={24} />

          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Type your password"
            placeholderTextColor="#94a3b8"
            secureTextEntry
            style={styles.input}
          />
        </View>

        <Gap height={40} />

        {/* Login Button */}
        <TouchableOpacity
          style={styles.continueButton}
          activeOpacity={0.8}
          onPress={handleLogin}
        >
          <Text style={styles.continueButtonText}>Login</Text>
        </TouchableOpacity>

        <Gap height={20} />

        {/* Create Account */}
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpText}>Create New Account</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#f0f9ff',
  },
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  logo: {
    width: 80,
    height: 80,
    tintColor: '#0369a1',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0369a1',
  },
  form: {
    width: '100%',
    marginTop: 24,
  },
  inputLabel: {
    fontSize: 14,
    color: '#0369a1',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 45,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#0369a1',
    borderRadius: 22.5,
    paddingHorizontal: 12,
  },
  continueButton: {
    width: 150,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#87CEFA',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpText: {
    color: '#0369a1',
    fontSize: 14,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});
