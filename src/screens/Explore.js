import React from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import Constant from 'expo-constants'
import Header from '../components/Header';
import {useSelector} from 'react-redux'
import Card from '../components/Card'
import { ScrollView } from 'react-native-gesture-handler';

const LittleCard = ({name}) =>{
    return (
        <ScrollView>
        <View style={{
            backgroundColor:"red",
            width:150,
            height:50,
            borderRadius:4,
            marginTop:10
        }}>
            <Text style={{
                textAlign:"center",
                color:"white",
                fontSize:22,
                marginTop:5
            }}>
            {name}
            </Text>
        </View>
        </ScrollView>
    )
}


const Explore = () =>{
    const cardData = useSelector(state =>{
        console.log("-----><-----");
        console.log(state.cardData)
        return state.cardData
      })

    return(
        <View style={{flex:1}}>
            <Header/>
            <View style={{flexDirection:"row",flexWrap:'wrap',justifyContent:'space-around'}}>
            <LittleCard name="Movie"/>
            <LittleCard name="Gaming"/>
            <LittleCard name="Fashion"/>
            <LittleCard name="Corona"/>
            <LittleCard name="Trending"/>
            <LittleCard name="Hollywood"/>
            </View>
            <Text style={{
                
                margin:8,
                fontSize:22,
                borderBottomWidth:4
            }}>
                Trending Video
            </Text>
            <FlatList
            data ={cardData}
            renderItem = {({item}) => {
            return <Card
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

export default Explore