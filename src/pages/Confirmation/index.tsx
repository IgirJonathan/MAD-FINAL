// src/pages/Confirmation/index.js
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { getDatabase, ref, push } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { showMessage } from 'react-native-flash-message';

const Confirmation = ({ route, navigation }) => {
  const { weight, location, paymentMethod, notes } = route.params;

  const handleDone = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const db = getDatabase();
      const orderRef = ref(db, 'orders/' + user.uid);
      const orderData = {
        weight,
        location,
        paymentMethod,
        notes: notes || '',
        createdAt: new Date().toISOString(),
      };

      try {
        await push(orderRef, orderData);
        showMessage({
          message: 'Order berhasil disimpan!',
          type: 'success',
        });
        navigation.replace('OrderCompleted');
      } catch (error) {
        showMessage({
          message: error.message,
          type: 'danger',
        });
      }
    } else {
      showMessage({
        message: 'User tidak ditemukan. Silakan login kembali.',
        type: 'danger',
      });
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>CONFIRMATION</Text>

      {/* Detail Order */}
      <View style={styles.section}>
        <Text style={styles.label}>Weight Clothes :</Text>
        <Text style={styles.value}>{weight}KG</Text>

        <Text style={styles.label}>Location :</Text>
        <Text style={styles.value}>{location}</Text>

        <Text style={styles.label}>Payment :</Text>
        <Text style={styles.value}>{paymentMethod}</Text>

        <Text style={styles.label}>Price :</Text>
        <Text style={styles.value}>
          Rp80.000 + (If there are + additional charges)
        </Text>
      </View>

      {/* Payment Guide */}
      <View style={styles.section}>
        <Text style={styles.guideHeader}>Payment Guide :</Text>
        <Text style={styles.guideText}>
          1. Your Laundry will be picked up and weighed by the courier{'\n'}
          2. Your total bill will be given by the courier{'\n'}
          3. Make the payment according to the price given
        </Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
          <Text style={styles.doneText}>Done</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Confirmation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F7FB',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: '800',
    color: '#3B5998',
    textAlign: 'center',
    marginVertical: 25,
  },
  section: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    color: '#3B5998',
    fontWeight: '600',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
  },
  guideHeader: {
    fontSize: 18,
    fontWeight: '700',
    color: '#3B5998',
    marginBottom: 10,
  },
  guideText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  editButton: {
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderColor: '#3B5998',
    borderRadius: 25,
    padding: 15,
    width: '48%',
    alignItems: 'center',
  },
  doneButton: {
    backgroundColor: '#3B5998',
    borderRadius: 25,
    padding: 15,
    width: '48%',
    alignItems: 'center',
  },
  editText: {
    color: '#3B5998',
    fontSize: 18,
    fontWeight: '700',
  },
  doneText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '700',
  },
});
