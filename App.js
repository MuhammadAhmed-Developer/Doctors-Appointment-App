import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SplashScreen from './src/screens/frontend/splashScreen'
import OnBoardingScreen from './src/screens/frontend/onBoardingScreen'

const App = () => {
  return (
    <SafeAreaView>
      <OnBoardingScreen/>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})