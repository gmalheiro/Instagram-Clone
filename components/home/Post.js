import React from 'react'
import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import { POSTS } from '../../data/posts'

const postFooterIcons = [
    {
        name: 'Like',
        imageURL:
        'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',
        likedImageURL:'https://img.icons8.com/ios-glyphs/90/fa314a/like.png'
    },
    {
        name: 'Comment',
        imageURL:
        'https://img.icons8.com/material-outlined/60/ffffff/filled-topic.png'
    },
    {
        name:'Share',
        imageURL: 
        'https://img.icons8.com/material-outlined/60/ffffff/filled-sent.png'
    },
    {
        name:'Save',
        imageURL:
        'https://img.icons8.com/material-outlined/60/ffffff/bookmark-ribbon--v1.png'
    },
]

const Post = ({post}) => {
  return (
    <View style={{marginBottom:30}} >
        <View style={{height:1,backgroundColor:'#282a36',width:'100%'}}></View>
        <PostHeader post={post} />
        <PostImage post={post}/>
        <View style={{marginHorizontal:15,marginTop:10}}>
            <PostFooter />
            <Likes post={post} />
            <Caption post={post} />
            <CommentsSection post={post} />
            <Comments post={post} />
        </View>
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
    <View 
    style={{
        width:'100%',
        height:450,
        }}
        >
        <Image 
        source={{uri: post.imageURL}} 
        style={{height:'100%',resizeMode:'cover'}} 
        />
    </View>
)

const PostFooter = () => (
    <View style={{flexDirection:'row', }}>
        <View style={styles.leftFooterIconsContainer} >
            <Icon imgStyle={styles.footerIcon} imgURL={postFooterIcons[0].imageURL} />
            <Icon imgStyle={styles.footerIcon} imgURL={postFooterIcons[1].imageURL} />
            <Icon 
             imgStyle={styles.footerIcon/*  */} 
             imgURL={postFooterIcons[2].imageURL} 
             />
        </View>

        <View style={{flex:1,alignItems:'flex-end'}} > 
            <Icon imgStyle={styles.footerIcon} imgURL={postFooterIcons[3].imageURL} />
        </View>
    </View>
)

const Icon = ({imgStyle,imgURL}) => (
    <TouchableOpacity>
        <Image style={imgStyle} source={{uri: imgURL}} />
    </TouchableOpacity>
)

const Likes = ({post}) => (
    <View style={{marginTop:4,flexDirection:'row'}} >
        <Text style={{color:'#fff',fontWeight:'600'}}>
            {post.likes.toLocaleString('en')} likes
        </Text>
    </View>
)

const Caption = ({ post }) => ( 
    <View style={{marginTop:5}}>
        <Text style={{color:'#fff'}}>
            <Text style={{fontWeight:'600'}}>{post.user}</Text>
            <Text  > {post.caption}</Text>
        </Text>
    </View>
)   

const CommentsSection = ({ post }) => (
    <View style={{marginTop:5}}>
        { !! post.comments.length && (
            <Text style={{color:'gray'}}>
                View {post.comments.length > 1 ? ' all ' : ' '} {post.comments.length}
                {post.comments.length > 1 ? ' comments ' : ' comment '}
            </Text>
        )}
    </View>
)

const Comments = ({post}) => (
    <>
    {post.comments.map((comment,index) => (
        <View key={index} style={{flexDirection:'row', marginTop:5}} >
            <Text style={{color:'white'}} >
                <Text style={{fontWeight:'600'}} > {comment.user} </Text>{''}
                {comment.comment}
            </Text>
        </View>    
    ))}
    </>
)

const styles = StyleSheet.create({
    story:{
        width:35,
        height:35,
        borderRadius:50,
        marginLeft: 6,
        borderWidth:1.6,
        /*  */
    },

    footerIcon:{
       width:33,
       height:33,
    },

    /* shareIcon:{
        transform:[[rotate:'320deg']],
        margin:-3,

    } */

    leftFooterIconsContainer:{
        flexDirection:'row',
        width:'32%',
        justifyContent:'space-between',
    },
})

export default Post