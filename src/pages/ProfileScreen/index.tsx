import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { showMessage } from 'react-native-flash-message';
import { getAuth, signOut } from 'firebase/auth';
import { NullPhoto } from '../../assets'; // default profile image

const UserProfileScreen = ({ navigation }) => {
  const [photo, setPhoto] = useState(NullPhoto);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        message: 'Image selection cancelled',
        type: 'warning',
      });
    } else {
      const asset = result.assets[0];
      const base64 = `data:${asset.type};base64,${asset.base64}`;
      setPhoto({ uri: base64 });
    }
  };

  const handleConfirm = () => {
    showMessage({
      message: 'Profile updated successfully',
      type: 'success',
    });
  };

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        showMessage({
          message: 'Berhasil logout.',
          type: 'success',
        });
        navigation.replace('SignIn');
      })
      .catch(error => {
        showMessage({
          message: error.message,
          type: 'danger',
        });
      });
  };

  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={styles.scrollContent}
    >
      <View style={styles.pageContainer}>
        {/* Back Button */}
        <TouchableOpacity
          onPress={() => navigation.navigate('WelcomeScreen')}
          style={styles.backButton}
        >
          <Text style={styles.backText}>{'<'} Back</Text>
        </TouchableOpacity>

        {/* Profile Photo */}
        <TouchableOpacity onPress={getImage} style={styles.avatarWrapper}>
          <Image source={photo} style={styles.avatar} />
        </TouchableOpacity>
        <Text style={styles.changeText}>Change Profile Picture</Text>

        {/* Form */}
        <View style={styles.form}>
          <Text style={styles.inputLabel}>Username</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            placeholder="Enter username"
            placeholderTextColor="#94a3b8"
          />

          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter email"
            keyboardType="email-address"
            placeholderTextColor="#94a3b8"
          />

          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter password"
            secureTextEntry
            placeholderTextColor="#94a3b8"
          />
        </View>

        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
          <Text style={styles.confirmText}>Confirm</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#f0f9ff',
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 40,
  },
  pageContainer: {
    width: '100%',
    alignItems: 'center',
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  backText: {
    fontSize: 16,
    color: '#0369a1',
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
  changeText: {
    marginTop: 10,
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
    marginLeft: 4,
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#0369a1',
    borderRadius: 22.5,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  confirmButton: {
    width: 150,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#87CEFA',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  confirmText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    width: 150,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#FF6B6B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
