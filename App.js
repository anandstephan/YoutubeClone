import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer,DefaultTheme,DarkTheme,useTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {MaterialIcons} from '@expo/vector-icons'
import Home from './src/screens/Home'
import SearchScreen from './src/screens/Search';
import VideoPlayer from './src/screens/VideoPlayer';
import Constant from 'expo-constants'
import Subscribe from './src/screens/Subscribe';
import Explore from './src/screens/Explore'
import {Provider, useSelector} from 'react-redux'
import {createStore,combineReducers} from 'redux'
import {reducer} from './src/reducers/reducer'
import {themeReducer} from './src/reducers/themeReducer'


const customDarkTheme = {
  ...DarkTheme,
  colors:{
    ...DarkTheme.colors,
    headerColor:"#404040",
    iconColor:"white",
    tabIcon:"white"
  }
}

const customDefaultTheme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    headerColor:"white",
    iconColor:"black",
    tabIcon:"red"
  }
}

const rootReducer = combineReducers({
  cardData:reducer,
  myDarkMode:themeReducer
})

const store = createStore(rootReducer)

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const RootHome = () =>{
  const {colors} = useTheme()
  return (
    <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'home') {
          iconName = 'home';
        } else if (route.name === 'explore') {
          iconName = 'explore';
        } else if(route.name === 'subscribe'){
          iconName = 'subscriptions'
        }

        // You can return any component that you like here!
        return <MaterialIcons name={iconName} size={32} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: colors.tabIcon,
      inactiveTintColor: 'gray',
    }}
    >
      <Tabs.Screen name="home" component={Home}/>
      <Tabs.Screen name="explore" component={Explore}/>
      <Tabs.Screen name="subscribe" component={Subscribe}/>
    </Tabs.Navigator>
  )
}

export default () =>{
 return <Provider store={store}>
    <App/>
  </Provider>
}
export  function App() {

  let currentheme = useSelector((state)=>{
    return state.myDarkMode
  })


  return (
    <Provider store={store}>
    <NavigationContainer theme={currentheme?customDarkTheme:customDefaultTheme}>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="rootHome" component ={RootHome}/>
        <Stack.Screen name="search" component={SearchScreen}/>
        <Stack.Screen name="videoplayer" component={VideoPlayer}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

