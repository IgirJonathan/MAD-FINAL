import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TextInput from '../../Components/molecules/TextInput';
import Button from '../../Components/atoms/Button';
import Gap from '../../Components/atoms/Gap';
import {ArrowBack} from '../../assets';

const Signup = () => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.headerRow}>
        <ArrowBack style={styles.backIcon} />
        <Text style={styles.headerTitle}>Sign Up</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.profilContainer}>
          <View style={styles.profil}>
            <View style={styles.add}>
              <Text style={styles.addLabel}>Add Photo</Text>
            </View>
          </View>
        </View>
        <Gap height={36} />
        <TextInput label="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Type your email Address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button label="Continue" />
        <Gap height={12} />
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 43,
    paddingHorizontal: 24,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  headerTitle: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
    marginLeft: 12,
  },
  profilContainer: {
    marginTop: 26,
    alignItems: 'center',
  },
  profil: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 130,
    width: 130,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#8D92A3',
    borderStyle: 'dashed',
  },
  add: {
    backgroundColor: '#F0F0F0',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addLabel: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    width: 40,
    textAlign: 'center',
  },
  contentContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 24,
    flex: 1,
    paddingHorizontal: 24,
  },
});
