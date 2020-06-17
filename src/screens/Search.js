import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, FlatList, ActivityIndicator } from 'react-native';
import {Entypo,Ionicons,MaterialIcons} from '@expo/vector-icons'
import MiniCard from '../components/MiniCard';
import Constant from 'expo-constants'
import {useSelector,useDispatch} from 'react-redux'
import { useNavigation,useTheme } from '@react-navigation/native';


const SearchScreen = ({navigation}) =>{

    const {colors} = useTheme();
    const mycolor = colors.iconColor;
    const [value,setValue] = useState("");
    // const [miniCardData,setMiniCard] = useState([]);
    const [loading,setLoading] = useState(false)

    const miniCardData = useSelector(state => {
        return state.cardData
    })
    const dispatch = useDispatch();

    const fetchData = () =>{
        setLoading(true)
   console.log("Fetch Data Called") 
fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyAzP8Nyb3CE5JVd3ZPjE-ijd-WCfFlNGfE`)
     .then(res => res.json())
     .then(data => {
         setLoading(false)
         console.log(data)
        //  setMiniCard(data.items)
        dispatch({type:"add",payload:data.items})
        })
     .catch(err => console.log(err))
    }

    return (
        <View style={{flex:1,marginTop:Constant.statusBarHeight}}>
            <View style={{
                padding:5,
                flexDirection:"row",
                justifyContent:"space-around",
                elevation:5,
                backgroundColor:colors.headerColor
            }}>
                <Ionicons 
                name="md-arrow-back" 
                size={32}
                 onPress={()=>navigation.goBack()}
                 style={{color:mycolor}}/>
                <TextInput
                style={{
                width:"70%",
                backgroundColor:"#e6e6e6"
                }}
                placeholder="Search..."
                value={value}
                onChangeText={(text)=>setValue(text)}
                />
                <Ionicons 
                name="md-send"
                style={{color:mycolor}}
                size={32}
                onPress={()=>fetchData()}
                />
            </View>
            {loading?<ActivityIndicator color="red" size="large" style={{marginTop:10}}/>:null}   
             <FlatList 
            data={miniCardData}
            renderItem = {({item}) =>{
                return <MiniCard
                videoId={item.id.videoId}
                title={item.snippet.title}
                channel={item.snippet.channelTitle}
                />
            }}
            keyExtractor={item=>item.id.videoId}
            />
        </View>
    )

}

export default SearchScreen
