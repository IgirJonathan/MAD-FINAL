import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Title from './components/welcome';
import Input from './components/input';
import Button from './components/button';

const Register = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleRegister = () => {
    console.log('Registration data:', {
      name,
      username,
      email,
      address,
      phoneNumber,
    });
  };

  return (
    <View style={styles.container}>
      <Title text="Registration" />

      <Input
        label="Name"
        placeholder="Masukan nama lengkap anda"
        value={name}
        onChangeText={setName}
      />

      <Input
        label="Username"
        placeholder="Masukan username anda"
        value={username}
        onChangeText={setUsername}
      />

      <Input
        label="Email"
        placeholder="Masukan email anda"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Input
        label="Address"
        placeholder="Masukan alamat anda"
        value={address}
        onChangeText={setAddress}
      />

      <Input
        label="Phone Number"
        placeholder="Masukan Nomor telepon anda"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="numeric"
      />

      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
});

export default Register;
