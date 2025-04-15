import React from 'react';
import {Text, StyleSheet} from 'react-native';

const welcome = ({text, style}) => {
  return <Text style={[styles.title, style]}>{text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 20,
  },
});

export default welcome;
