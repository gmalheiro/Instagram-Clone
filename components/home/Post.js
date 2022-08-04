import React from 'react'
import { View, Text,StyleSheet,Image } from 'react-native'
import { POSTS } from '../../data/posts'

const Post = ({post}) => {
  return (
    <View style={{marginBottom:30}} >
        <View style={{height:1,backgroundColor:'#282a36',width:'100%'}}></View>
        <PostHeader post={post} />
        <PostImage post={post}/>
    </View>
  )
}

const PostHeader = ({ post }) => (
    <View 
        style={{
            flexDirection: 'row',
            justifyContent:'space-between',
            margin:5,
            alignItems:'center'
    }} 
    >
        <View style={{flexDirection:'row',alignItems:'center'}} >
            <Image source={{uri: post.profile_picture}} style={styles.story} />
            <Text style={{color:'#fff', marginLeft:5, fontWeight:'700'}} >
                {post.user}
                </Text>
        </View>

        <Text style={{color:'#fff',fontWeight:'900'}} >...</Text>
    </View>
)

const PostImage = ({post}) => (
    <View style={{
        width:'100%',
        height:450,
    }}>
        <Image source={{uri: post.imageURL}} style={{height:'100%',resizeMode:'cover'}} />
    </View>
)

const styles = StyleSheet.create({
    story:{
        width:35,
        height:35,
        borderRadius:50,
        marginLeft: 6,
        borderWidth:1.6,
        /*  */
    }
})

export default Post