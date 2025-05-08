import React from 'react';
import SplashScreen from './src/pages/SplashScreen';
import SignUp from './src/pages/SignUp';
import SignIn from './src/pages/SignIn';
import WelcomeScreen from './src/pages/WelcomeScreen';
import SplashPayment from './src/pages/SplashPayment';
import Confirmation from './src/pages/Confirmation';
import OrderCompleted from './src/pages/OrderCompleted'; // Tambahkan screen baru
import HistoryScreen from './src/pages/HistoryScreen';
import ProfileScreen from './src/pages/ProfileScreen';
import './src/config/Firebase'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlashMessage from 'react-native-flash-message';
import SplashPayment2 from './src/pages/SplashPayment2';
import SplashPayment3 from './src/pages/SplashPayment3';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="SplashScreen"
        screenOptions={{
          gestureEnabled: true, // Aktifkan gesture navigasi
          animation: 'slide_from_right' // Animasi transisi
        }}
      >
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="History"
          component={HistoryScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SplashPayment"
          component={SplashPayment}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SplashPayment2"
          component={SplashPayment2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SplashPayment3"
          component={SplashPayment3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Confirmation"
          component={Confirmation}
          options={{ headerShown: false }}
        />
        {/* Tambahkan screen OrderCompleted */}
        <Stack.Screen
          name="OrderCompleted"
          component={OrderCompleted}
          options={{ 
            headerShown: false,
            gestureEnabled: false // Nonaktifkan gesture kembali
          }}
        />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;