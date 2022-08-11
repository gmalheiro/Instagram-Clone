import React from 'react'
import { StyleSheet,SafeAreaView,StatusBar, ScrollView} from 'react-native'
import Header from '../components/home/Header'
import Post from '../components/home/Post'
import { POSTS } from '../data/posts'
import Stories from '../components/home/Stories'
import BottomTabs from '../components/home/BottomTabs'
import { bottomTabIcons } from "../components/home/BottomTabs";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Header />
        <Stories />
        <ScrollView>
          {POSTS.map((post,index)=>(
            <Post post={post} key={index} />
          ))}
        </ScrollView>
        <BottomTabs icons={bottomTabIcons} />
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