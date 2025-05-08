import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { getDatabase, ref, onValue } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { showMessage } from 'react-native-flash-message';

const HistoryItem = ({ item }) => {
  const formattedDate = item.createdAt
    ? new Date(item.createdAt).toLocaleDateString()
    : 'Unknown';

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Wash And Fold</Text>
      <Text>Date: {formattedDate}</Text>
      <Text>Weight: {item.weight || 'N/A'} KG</Text>
      <Text>Payment: {item.paymentMethod || 'N/A'}</Text>
      <Text>Location: {item.location || 'N/A'}</Text>
      {item.notes ? <Text>Notes: {item.notes}</Text> : null}
    </View>
  );
};


const HistoryScreen = ({ navigation }) => {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const db = getDatabase();
      const ordersRef = ref(db, 'orders/' + user.uid);

      onValue(ordersRef, snapshot => {
        const data = snapshot.val();
        if (data) {
          const parsed = Object.entries(data).map(([id, value]) => ({
            id,
            ...value,
          }));
          setHistoryData(parsed.reverse()); // untuk tampilkan terbaru di atas
        } else {
          setHistoryData([]);
        }
      });
    } else {
      showMessage({
        message: 'User tidak ditemukan.',
        type: 'danger',
      });
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your History</Text>
      <FlatList
        data={historyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <HistoryItem item={item} />}
        contentContainerStyle={{ paddingBottom: 80 }}
        ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 20 }}>Belum ada riwayat</Text>}
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
          onPress={() => navigation.navigate('Profile')}
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
