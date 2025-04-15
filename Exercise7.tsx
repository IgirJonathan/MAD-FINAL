import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import axios from 'axios';
import UserCard1 from './components/userCard/UserCard1';
import UserCard2 from './components/userCard/UserCard2';
import UserCard3 from './components/userCard/UserCard3';
import UserCard4 from './components/userCard/UserCard4';
import UserCard5 from './components/userCard/UserCard5';
import UserCard6 from './components/userCard/UserCard6';
import UserCard7 from './components/userCard/UserCard7';
import UserCard8 from './components/userCard/UserCard8';
import UserCard9 from './components/userCard/UserCard9';
import UserCard10 from './components/userCard/UserCard10';
import UserCard11 from './components/userCard/UserCard11';
import UserCard12 from './components/userCard/UserCard12';

const Exercise7 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://reqres.in/api/users?per_page=12')
      .then(res => setUsers(res.data.data));
  }, []);

  const renderUserCard = (item, index) => {
    switch (index) {
      case 0:
        return <UserCard1 user={item} />;
      case 1:
        return <UserCard2 user={item} />;
      case 2:
        return <UserCard3 user={item} />;
      case 3:
        return <UserCard4 user={item} />;
      case 4:
        return <UserCard5 user={item} />;
      case 5:
        return <UserCard6 user={item} />;
      case 6:
        return <UserCard7 user={item} />;
      case 7:
        return <UserCard8 user={item} />;
      case 8:
        return <UserCard9 user={item} />;
      case 9:
        return <UserCard10 user={item} />;
      case 10:
        return <UserCard11 user={item} />;
      case 11:
        return <UserCard12 user={item} />;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User List</Text>
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index}) => renderUserCard(item, index)}
      />
    </View>
  );
};

export default Exercise7;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
  },
});
