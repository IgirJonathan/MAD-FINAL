// src/pages/OrderCompleted/index.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const OrderCompleted = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Completed!</Text>
      <Text style={styles.subtitle}>Your laundry is being processed</Text>
      
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate('WelcomeScreen')}
      >
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6F7FB',
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#3B5998',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 40,
  },
  homeButton: {
    backgroundColor: '#3B5998',
    padding: 16,
    borderRadius: 25,
    width: '60%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default OrderCompleted;