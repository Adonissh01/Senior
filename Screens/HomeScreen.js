
import { View, Text,StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { auth, db } from '../firebase';
import { collection } from 'firebase/firestore';
import { getFullNameByUserId } from '../Utils/api/users';
import { KeyboardAvoidingView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import { TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import ScreenTop from './SubScreens/ScreenTop';
import CCNE from './CCNE';


export default function HomeScreen() {
    
    const navigation = useNavigation();
   

    return (
       
        <View>
          <ScreenTop/>
      
        <View style={styles.container2}>
        <Text style={styles.title}>Welcome to FOT Courses </Text>
        <LottieView
                        source={require('../assets/animations/admin.json')}
                        autoPlay
                        loop={true}
                        resizeMode="cover"
                        
                        style={{ width: 350, height: 300 ,marginBottom:50}}
                    // onAnimationFinish={() => setIsLoading(false)}
                    />
        
        
           
        <Text style={styles.title}>The File Archiving App for the Lebanese University Faculty of Technology</Text>
<Text style={styles.subtitle}>Our Course Data Is Now Stored In The Cloud And Accessible By All Students</Text>
<Text style={styles.major}>CHOOSE YOUR MAJOR</Text>

        </View>
        <View style={styles.container3}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("CCNE")}>
        <Text style={styles.buttonText}>CCNE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>MIE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>BC</Text>
      </TouchableOpacity>
    </View>
        </View>
        
    );
}
const styles = StyleSheet.create({
    container1:{
        backgroundColor:'#051250',
        paddingLeft:5,
        paddingTop:50,
        paddingBottom:5,
        display:'flex',
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center'
    },
    container2:{
        display:'flex',
        flexDirection:'column',
        
        
       


    
     
        

    },
    //cont 2
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold', // Make the text bold if desired
        color: '#333', // Change the text color if desired
        marginBottom: 10, // Add some bottom margin for spacing
      },
      subtitle: {
        fontSize: 15,
        textAlign: 'center',
        color: '#666', // You can adjust the color
        marginBottom: 20, // Add more spacing below the subtitle
      },
      major: {
        fontSize: 18, // You can adjust the font size
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#051250', // You can choose a different color
      },
      container3: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 20,
      },
      button: {
        backgroundColor: '#051250', // Background color
        width: 100, // Width and height to create a circle
        height: 100,
        borderRadius: 50, // To make it a circle, set borderRadius to half of the width and height
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000', // Shadow color (for iOS)
        shadowOffset: { width: 0, height: 4 }, // Shadow offset (for iOS)
        shadowOpacity: 0.4, // Shadow opacity (for iOS)
        shadowRadius: 4, // Shadow radius (for iOS)
        elevation: 5, // For Android shadow
      },
      buttonText: {
        color: 'white', // Text color
        fontSize: 18, // Font size
        fontWeight: 'bold', // Font weight
      },
      
})


