import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { showMessage } from 'react-native-flash-message';
import { Gap } from '../../components/atoms';
import { NullPhoto } from '../../assets'; // pastikan NullPhoto ini ada

const Signup = ({ navigation }) => {
  const [photo, setPhoto] = useState(NullPhoto);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleContinue = () => {
    console.log({ username, email, password, photo });
    // Navigasi setelah signup berhasil
    navigation.navigate('SignIn');
  };

  const getImage = async () => {
    const result = await launchImageLibrary({
      maxHeight: 100,
      maxWidth: 100,
      quality: 0.5,
      includeBase64: true,
      mediaType: 'photo',
    });

    if (result.didCancel) {
      showMessage({
        message: 'Pilih foto dibatalkan',
        type: 'danger',
      });
    } else {
      const asset = result.assets[0];
      const base64 = `data:${asset.type};base64,${asset.base64}`;
      setPhoto({ uri: base64 });
    }
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.pageContainer}>
        {/* Avatar */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={getImage}
          style={styles.avatarWrapper}
        >
          <Image source={photo} style={styles.avatar} />
        </TouchableOpacity>

        <Text style={styles.title}>SIGN UP</Text>

        <Gap height={36} />

        {/* Form */}
        <View style={styles.form}>
          <Text style={styles.inputLabel}>Username</Text>
          <TextInput
            value={username}
            onChangeText={setUsername}
            placeholder="Type your username"
            placeholderTextColor="#94a3b8"
            style={styles.input}
          />

          <Gap height={24} />

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

        {/* Continue Button */}
        <TouchableOpacity
          style={styles.continueButton}
          activeOpacity={0.8}
          onPress={handleContinue}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#f0f9ff',
  },
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  avatarWrapper: {
    borderWidth: 1,
    borderColor: '#0369a1',
    borderRadius: 60,
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: '#e0f2fe',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  title: {
    marginTop: 16,
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
});
