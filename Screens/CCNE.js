import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import ScreenTop from './SubScreens/ScreenTop';
import LottieView from 'lottie-react-native';
import PreviousExams from './SubScreens/PreviousExams';

export default function CCNE() {
    const navigation = useNavigation();
  return (
    <View>
        <ScreenTop/>
        <View style={{paddingTop:5}}>
       
       <View>
        <Text style={{fontSize:20,fontWeight:'bold',paddingLeft:12}}>CCNE PREVIOUS EXAMS</Text>
        <Text style={{color:"gray",paddingLeft:12}}>By Faculty Of Technology</Text>
          
       </View>
       </View>
       
       <PreviousExams/>
       </View>
    
  )
}