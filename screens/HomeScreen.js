import React from 'react'
import { View, Text, StyleSheet,SafeAreaView,StatusBar} from 'react-native'
import Header from '../components/home/Header'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Header />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'black',
  },
})

export default HomeScreen