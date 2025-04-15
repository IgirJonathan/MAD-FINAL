import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const UserCard1 = ({user}) => (
  <View style={styles.card}>
    <Image source={{uri: user.avatar}} style={styles.avatar} />
    <View style={styles.userInfo}>
      <Text>
        <Text style={styles.lastName}>{user.last_name} </Text>
        <Text style={styles.firstName}>{user.first_name} </Text>
      </Text>
      <Text style={styles.email}>{user.email}</Text>
    </View>
  </View>
);

export default UserCard1;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 25,
    marginRight: 15,
  },
  userInfo: {
    flex: 1,
  },
  firstName: {
    fontSize: 18,
  },
  lastName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'ccc',
  },
  email: {
    fontSize: 17,
    color: 'black',
  },
});
