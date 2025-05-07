// src/pages/SplashPayment/index.js
import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';

const SplashPayment = ({ navigation }) => {
  const [selectedWeight, setSelectedWeight] = useState(3);
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [notes, setNotes] = useState('');
  const [location, setLocation] = useState('');

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      {/* Header dengan Tombol Kembali */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('WelcomeScreen')}
          style={styles.backButton}
          activeOpacity={0.7}
        >
          <Image
            source={require('../../assets/back_icon.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.header}>Wash And Fold</Text>

      {/* Weight Selection */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Weight Clothes</Text>
        <View style={styles.weightGrid}>
          {[3, 5, 7, 10].map((weight) => (
            <TouchableOpacity
              key={weight}
              style={[
                styles.weightButton,
                selectedWeight === weight && styles.selectedWeight,
              ]}
              onPress={() => setSelectedWeight(weight)}
            >
              <Text style={styles.weightLabel}>{weight} kg</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Location Input */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Location</Text>
        <TextInput
          style={styles.locationInput}
          placeholder="Isi lokasi Anda"
          placeholderTextColor="rgba(51,51,51,0.5)"
          value={location}
          onChangeText={setLocation}
        />
      </View>

      {/* Payment Method */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment Method</Text>
        <TouchableOpacity
          style={[
            styles.paymentCard,
            paymentMethod === 'debit' && styles.selectedPayment,
          ]}
          onPress={() => setPaymentMethod('debit')}
        >
          <Text style={styles.paymentText}>Debit/Credit Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.paymentCard,
            paymentMethod === 'cash' && styles.selectedPayment,
          ]}
          onPress={() => setPaymentMethod('cash')}
        >
          <Text style={styles.paymentText}>Cash (Pay at Pickup)</Text>
        </TouchableOpacity>
      </View>

      {/* Notes */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Add Notes?</Text>
        <TextInput
          style={styles.notesInput}
          multiline
          placeholder="Example: Please handle delicate fabrics carefully..."
          placeholderTextColor="#999"
          numberOfLines={4}
          value={notes}
          onChangeText={setNotes}
        />
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() =>
          navigation.navigate('Confirmation', {
            weight: selectedWeight,
            location,
            paymentMethod,
            notes,
          })
        }
      >
        <Text style={styles.continueText}>Continue to Payment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E6F7FB' },
  scrollContent: { padding: 10, paddingBottom: 40 },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 25,
  },
  backButton: {
    padding: 8,
    marginLeft: -10,
    top: 0,
    position: 'absolute',
  },
  backIcon: {
    width: 50,
    height: 50,
    tintColor: '#3B5998',
  },
  header: {
    fontSize: 32,
    fontWeight: '800',
    color: '#3B5998',
    textAlign: 'center',
    marginTop: -13,
    marginLeft: 10,
    flex: 1,
  },
  section: {},
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#3B5998',
    marginBottom: 15,
    marginTop: 30,
    paddingLeft: 5,
  },
  weightGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  weightButton: {
    width: '48%',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 18,
    marginBottom: 15,
    elevation: 3,
  },
  selectedWeight: {
    borderWidth: 2,
    borderColor: '#3B5998',
    backgroundColor: '#F0F5FF',
  },
  weightLabel: {
    color: '#3B5998',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  locationInput: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    elevation: 3,
    color: '#333',
    borderWidth: 1,
    borderColor: '#EEE',
    minHeight: 56,
  },
  paymentCard: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    elevation: 3,
  },
  selectedPayment: {
    borderWidth: 2,
    borderColor: '#3B5998',
  },
  paymentText: {
    color: '#3B5998',
    fontSize: 16,
    fontWeight: '600',
  },
  notesInput: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    minHeight: 120,
    textAlignVertical: 'top',
    elevation: 3,
    lineHeight: 22,
  },
  continueButton: {
    backgroundColor: '#3B5998',
    borderRadius: 25,
    padding: 18,
    marginTop: 20,
    elevation: 5,
  },
  continueText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default SplashPayment;
