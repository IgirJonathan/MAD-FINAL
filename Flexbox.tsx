import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Flexbox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.redContainer}></View>
      <View style={styles.greenContainer}></View>
      <View style={styles.blueContainer}></View>
      <View style={styles.yellowContainer}></View>
      <View style={styles.pinkContainer}></View>
    </View>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  redContainer: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
  },
  greenContainer: {
    backgroundColor: 'green',
    height: 100,
    width: 100,
  },
  blueContainer: {
    backgroundColor: 'blue',
    height: 100,
    width: 100,
  },
  yellowContainer: {
    backgroundColor: 'yellow',
    height: 100,
    width: 100,
  },
  pinkContainer: {
    backgroundColor: 'pink',
    height: 100,
    width: 100,
  },
});
