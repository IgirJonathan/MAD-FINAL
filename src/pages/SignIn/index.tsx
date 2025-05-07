import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { showMessage } from 'react-native-flash-message';
import { Gap } from '../../components/atoms';

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      showMessage({
        message: 'Email dan Password wajib diisi.',
        type: 'danger',
      });
      return;
    }

    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      showMessage({
        message: 'Berhasil login!',
        type: 'success',
      });
      navigation.replace('WelcomeScreen');
    } catch (error) {
      showMessage({
        message: error.message,
        type: 'danger',
      });
    }
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.page}>
        <Image
          source={require('../../assets/Frame34.png')}
          style={styles.logo}
        />

        <Text style={styles.header}>SIGN IN</Text>
        <Gap height={36} />

        <View style={styles.form}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <Gap height={24} />

          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />
          <Gap height={30} />

          <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <Gap height={15} />

          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.link}>Create New Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#EAF9FF',
  },
  page: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
    paddingTop: 60,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 12,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3182CE',
  },
  form: {
    width: '100%',
    marginTop: 36,
  },
  label: {
    fontSize: 14,
    color: '#0369a1',
    marginBottom: 8,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#4682B4',
    borderRadius: 22.5,
    paddingHorizontal: 16,
    backgroundColor: '#FFF',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#87CEFA',
    height: 45,
    borderRadius: 22.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    textAlign: 'center',
    color: '#0369a1',
    fontWeight: '600',
  },
});
