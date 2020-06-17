import React from 'react';
import { StyleSheet, Text, View, Image,Dimensions, TouchableOpacity } from 'react-native';
import {Entypo,Ionicons,MaterialIcons} from '@expo/vector-icons'
import Constant from 'expo-constants'
import {useNavigation,useTheme} from '@react-navigation/native'

const Card = (props) => {
  const navigation = useNavigation();
  const {colors} = useTheme();
  const textColor = colors.iconColor; 
  return (
    <TouchableOpacity
    onPress={()=> navigation.navigate("videoplayer",{videoId:props.videoId,title:props.title})}
    >
    <View style={{margin:10,marginTop:Constant.statusBarHeight}}>
        <Image
        source={{uri:`https://i.ytimg.com/vi/${props.videoId}/maxresdefault.jpg`}}
        style={{width:"100%",height:200}}
       />
       <View style={{
           flexDirection:"row",
           margin:5
       }}>
       <MaterialIcons name="account-circle" size={32} color="#212121"/>
           <View style={{marginLeft:10}}>
           <Text 
           style={{fontSize:20,
            width:Dimensions.get("screen").width - 90,
            color:textColor}}
            ellipsizeMode="tail"
            numberOfLines={1}>
              {props.title}
              </Text>
           <Text 
           style={{color:textColor}}>{props.channel} </Text>
           </View>
       </View>
    </View>
    </TouchableOpacity>
  );
}

export default Card