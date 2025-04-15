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

const Exercise2 = () => {
  return (
    <View style={Styles.wrapper}>
      <ScrollView contentContainerStyle={Styles.scrollViewContent}>
        <View style={Styles.header}>
          <Image
            style={Styles.profileImage}
            source={require('./Assets/IMG_20241218_211739_128.webp')}
          />
          <Text style={Styles.name}>Igir, Jonathan</Text>
          <Text style={Styles.title}>Illustrator</Text>
        </View>

        <View style={Styles.section}>
          <Text style={Styles.sectionTitle}>About Me</Text>
          <Text style={Styles.sectionContent}>
            Ditakdirkan untuk menjadi seorang Illustrator,Dipaksa Untuk Ngoding
          </Text>
        </View>

        <View style={Styles.section2}>
          <Text style={Styles.sectionTitle2}>My Biodata</Text>
          <Text style={Styles.sectionContent2}>Ini biodata saya:</Text>
        </View>

        <View style={Styles.card}>
          <View style={Styles.biodata}>
            <Text style={Styles.Universitas}>Universtas</Text>
            <Text style={Styles.Namauniversitas}>Universtas Klabat</Text>
          </View>

          <View style={Styles.biodata2}>
            <Text style={Styles.Hobi}>Hobi</Text>
            <Text style={Styles.NamaHobi}>Menggambar</Text>
          </View>
        </View>

        <TextInput
          style={Styles.input}
          placeholder="Enter your email to contact me"
        />

        <TouchableOpacity style={Styles.button}>
          <Text style={Styles.buttonText}>Send Message</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Exercise2;

const Styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  scrollViewContent: {
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    color: '#666',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  sectionSubtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  sectionContent: {
    fontSize: 16,
    marginBottom: 5,
    color: 'grey',
  },

  section2: {
    marginBottom: 20,
  },
  sectionTitle2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  sectionSubtitle2: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sectionContent2: {
    fontSize: 16,
    marginBottom: 5,
    color: 'grey',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  biodata: {
    fontSize: 16,
    marginBottom: 5,
    color: 'grey',
  },

  Universitas: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },

  biodata2: {
    fontSize: 16,
    marginBottom: 5,
    color: 'grey',
  },

  Hobi: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },

  card: {
    borderRadius: 15,
  },
});
