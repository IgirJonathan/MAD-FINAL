/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import Input from './components/input';
import Button from './components/button';
import Welcome from './components/welcome';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Exercise3 = () => {
  const [username] = useState('');
  const [password] = useState('');

  return (
    <View>
      <Welcome />
      <Input
        label="Username"
        placeholder="masukan nama anda"
        onChangeText={event => console.log(event)}
      />
      <Input
        label="Password"
        placeholder="Masukan password anda"
        onChangeText={event => console.log(event)}
      />
      <Button label="Sign In" onPress={() => console.log('Test')} />
      <Button label="Sign In with Google" color="#DB4437" />
      <Button label="Sign In with Facebook" color="#4267B2" />
      <Button label="Sign In Apple" color="#000000" />
    </View>
  );
};

export default Exercise3;

const Styles = StyleSheet.create({
  containerView: {
    flex: 1,
    marginTop: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
    marginBottom: 30,
    marginLeft: 10,
  },
  title2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
  input: {
    width: '95%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 10,
  },
  input2: {
    width: '95%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 10,
  },
  button: {
    alignItems: 'center',
    width: '95%',
    backgroundColor: 'orange',
    marginTop: 30,
    height: 50,
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: 10,
  },
  Textbutton: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});
