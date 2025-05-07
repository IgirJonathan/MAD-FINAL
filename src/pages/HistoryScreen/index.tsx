import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

const dummyHistory = [
  {
    id: '1',
    service: 'Wash And Fold',
    date: '2025-05-07',
    weight: '5 KG',
    payment: 'Cash',
    location: 'Jl. Sudirman No. 123',
  },
  {
    id: '2',
    service: 'Dry Wash',
    date: '2025-05-03',
    weight: '3 KG',
    payment: 'Debit',
    location: 'Bitung Lorong Pakadoodan',
  },
];

const HistoryItem = ({ item }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{item.service}</Text>
    <Text>Date: {item.date}</Text>
    <Text>Weight: {item.weight}</Text>
    <Text>Payment: {item.payment}</Text>
    <Text>Location: {item.location}</Text>
  </View>
);

const HistoryScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your History</Text>
      <FlatList
        data={dummyHistory}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <HistoryItem item={item} />}
        contentContainerStyle={{ paddingBottom: 80 }} // untuk jarak bawah
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('WelcomeScreen')}
          activeOpacity={0.6}
        >
          <Image
            source={require('../../assets/Home.png')}
            style={styles.navIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('History')}
          activeOpacity={0.6}
        >
          <Image
            source={require('../../assets/BookOpen.png')}
            style={styles.navIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('Profile')} // jika belum ada bisa dikosongkan dulu
          activeOpacity={0.6}
        >
          <Image
            source={require('../../assets/User.png')}
            style={styles.navIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F7FB',
    padding: 20,
    paddingBottom: 100,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3B5998',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
    color: '#3B5998',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    width: '112%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 60,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#DDD',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  navIcon: {
    width: 32,
    height: 32,
    tintColor: '#3B5998',
  },
});
