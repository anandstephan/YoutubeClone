import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Entypo,Ionicons,MaterialIcons} from '@expo/vector-icons'
import Constant from 'expo-constants'
import { useNavigation,useTheme } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

export default function Header() {

    const navigation = useNavigation();
    const {colors} = useTheme();
    const dispatch = useDispatch();
    const mycolor = colors.iconColor;
    const currentTheme = useSelector(state=>{
      return state.myDarkMode
    })
  return (
    <View style={{
        height:45,
        backgroundColor:colors.headerColor,
        flexDirection:"row",
        justifyContent:"space-between",
        elevation:5,
        marginTop:Constant.statusBarHeight
    }}>
        <View style={{flexDirection:"row",margin:5}}>
        <Entypo name="youtube" size={32} color="red" style={{marginLeft:20}}/>
        <Text style={{fontSize:22,marginLeft:5,fontWeight:"bold",color:mycolor}}>Youtube</Text>
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-around",width:150,marginTop:10,margin:5}}>
        <Ionicons name="md-videocam" size={32} color={mycolor}/>
        <Ionicons name="md-search" size={32} color={mycolor} onPress={()=> navigation.navigate('search')}/>
        <MaterialIcons 
        name="account-circle" 
        size={32} 
        color={mycolor}
        onPress ={() =>{ 
          console.log("hello"+currentTheme);
        dispatch({type:"change_theme",payload:!currentTheme})
        }
       } />
        </View>
    </View>
  );
}
