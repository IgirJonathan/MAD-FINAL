// WelcomeScreen.js
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  LogBox,
} from 'react-native';

if (__DEV__) {
  LogBox.ignoreLogs(['property is not configurable']);
}

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>WELCOME</Text>

      {/* Kartu Layanan */}
      <View style={styles.cardsContainer}>
        <View style={styles.row}>
          <TouchableOpacity 
            style={styles.card}
            onPress={() => navigation.navigate('SplashPayment')} 
            activeOpacity={0.7}
          >
            <Image
              source={require('../../assets/WashClothes.png')}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Wash And Fold</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}
            onPress={() => navigation.navigate('SplashPayment2')}  
            activeOpacity={0.7}>
            
            <Image
              source={require('../../assets/drywashhh.png')}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Dry Wash </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={[styles.card, styles.centerCard]}
            onPress={() => navigation.navigate('SplashPayment3')} 
            activeOpacity={0.7}>
            
            <Image
              source={require('../../assets/dryCleanMaybe.png')}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Wash Delicate{'\n'}and Dry </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('WelcomeScreen')} // Tetap di halaman
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
 // Arahkan ke halaman riwayat
          activeOpacity={0.6}
        >
          <Image
            source={require('../../assets/BookOpen.png')}
            style={styles.navIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Profile')} // Belum aktif
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F7FB',
    paddingTop: 50,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: '800',
    color: '#3B5998',
    textAlign: 'center',
    marginBottom: 30,
    textShadowColor: 'rgba(0,0,0,0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  cardsContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  card: {
    width: 160,
    height: 160,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#FFF',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  centerCard: {
    width: 160,
    alignSelf: 'center',
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardText: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(59,89,152,0.8)',
    color: 'white',
    padding: 10,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  bottomNav: {
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

export default WelcomeScreen;
