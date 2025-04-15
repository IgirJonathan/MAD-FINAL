import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <View style={Styles.wrapper}>
      <View style={Styles.container}>
        <Text style={Styles.subTitle}>demi apa?</Text>
        <Text style={Styles.title}>demikian</Text>
      </View>
      <ScrollView contentContainerStyle={Styles.scrollViewContent}>
        <TextInput
          style={Styles.input}
          placeholder="enter your email"></TextInput>

        <TouchableOpacity style={Styles.button}>
          <text style={Styles.buttonText}>Submit</text>
        </TouchableOpacity>

        <Image
          style={Styles.img1}
          source={require('./Assets/efe284b8d7cac1a05cc05a707a25719f.jpg')}
        />
        <Text style={Styles.title2}>berotak aru</Text>

        <Image
          style={Styles.img2}
          source={require('./Assets/IMG_20250203_030446.jpg')}
        />
        <Text style={Styles.title3}>Womenji</Text>

        <Image
          style={Styles.img3}
          source={{
            uri: 'https://tse1.mm.bing.net/th?id=OIP.el0tBX9OwxJrowNp8EA_TgHaIl&pid=Api&P=0&h=180',
          }}
        />
        <Text style={Styles.title3}>Siap</Text>
      </ScrollView>
    </View>
  );
};

export default App;

const Styles = StyleSheet.create({
  scrollViewContent: {},
  wrapper: {
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 20, // Add some padding at the bottom
  },
  container: {
    backgroundColor: 'cyan',
    borderColor: 'black',
    borderWidth: 5,
    borderRadius: 15,
    padding: 20,
    width: '90%',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
  title2: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    marginTop: 30,
  },
  title3: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    marginTop: 30,
  },
  subTitle: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    marginBottom: 10,
  },
  img1: {
    marginTop: 80,
    width: 300,
    height: 300,
  }, // Added closing curly brace here
  img2: {
    marginTop: 80,
    width: 300,
    height: 300,
  },

  img3: {
    marginTop: 80,
    width: 300,
    height: 300,
  },
  input: {
    borderWidth: 5,
    borderColor: 'black',
    margin: 20,
    padding: 20,
    fontSize: 25,
    borderRadius: 15,
  },
  button: {
    backgroundColor: 'Blue',
    margin: 20,
    padding: 20,
    borderRadius: 15,
  },

  buttonText: {
    backgroundColor: 'Blue',
    margin: 20,
    padding: 20,
    borderRadius: 15,
  },
});
