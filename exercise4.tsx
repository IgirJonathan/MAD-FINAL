import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Exercise4 = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.redBanner}>
        <View style={styles.blackSquare}></View>
        <View style={styles.yellowSquare}></View>
        <View style={styles.blackSquare}></View>
      </View>

      <View style={styles.middleSection}>
        <Image
          style={styles.logo}
          source={require('./Assets/logo-with-motto-3.png')}
          resizeMode="contain"
        />
      </View>

      <View style={styles.blueBanner}>
        <View style={styles.blackSquare}></View>
        <View style={styles.yellowSquare}></View>
        <View style={styles.blackSquare}></View>
      </View>
    </View>
  );
};

export default Exercise4;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  redBanner: {
    backgroundColor: 'red',
    height: 150,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingRight: 110,
  },
  blueBanner: {
    backgroundColor: 'blue',
    height: 150,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  middleSection: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blackSquare: {
    backgroundColor: 'black',
    height: 90,
    width: 90,
  },
  yellowSquare: {
    backgroundColor: 'yellow',
    height: 90,
    width: 90,
  },
  logo: {
    width: '80%',
    height: 150,
  },
});
