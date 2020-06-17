import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Dimensions,TouchableOpacity } from 'react-native';
import {Entypo,Ionicons,MaterialIcons} from '@expo/vector-icons'
import Constant from 'expo-constants'
import {useNavigation,useTheme} from '@react-navigation/native'

const MiniCard = (props) =>{
    const navigation = useNavigation();
    const {colors} = useTheme();
    const textColor = colors.iconColor
    return (
        <TouchableOpacity
        onPress={()=> navigation.navigate("videoplayer",{videoId:props.videoId,title:props.title})}>
    <View style={{flexDirection:"row",margin:10,marginBottom:0,marginTop:Constant.statusBarHeight}}>
        <Image
        source={{uri:`https://i.ytimg.com/vi/${props.videoId}/maxresdefault.jpg`}}
        style={{width:"45%",height:100}}
       />
       <View style={{paddingLeft:7}}>
           <Text style={{
               fontSize:17,
               width:Dimensions.get("screen").width/2,
               color:textColor
           }}
           ellipsizeMode="tail"
           numberOfLines={3}>
          {props.title}
           </Text>
           <Text style={{fontSize:12,color:textColor}}>{props.channel}</Text>
       </View>
       </View>
       </TouchableOpacity>
    )
}
export default MiniCard