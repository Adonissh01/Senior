
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
import CCNE from './CCNE';

const handleSignOut = async () => {
    try {
      await auth.signOut(); // Use your authentication system's sign-out method
      // Optionally, you can navigate the user to a different screen or perform any other action after sign-out.
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
export default function HomeScreen() {
    
    const navigation = useNavigation();
    const [userFullName, setUserFullName] = useState('');

    useEffect(() => {
        // Check if a user is signed in
        const fetchData = async () => {
            const fullName = await getFullNameByUserId(auth.currentUser.uid);
            setUserFullName(fullName);
        };
        fetchData();
    }, []);

    return (
       
        <View>
        <View style={styles.container1}>
           <View style={{display:"flex",flexDirection:"row"}}> 
            <FontAwesomeIcon icon={faUser} style={{color: "#ffffff",}} />
            <Text style={{ marginLeft:10,fontSize:20,fontWeight:"600",color:"white"}}>{userFullName}</Text>
            </View>
            <TouchableOpacity style={{ backgroundColor: "white",width:60,alignItems:"center",borderRadius:5,}} onPress={handleSignOut}><Text>Log Out</Text></TouchableOpacity>
              
           
        </View>
        <View style={styles.container2}>
        <Text style={styles.title}>Welcome to FOT Courses </Text>
        <LottieView
                        source={require('../assets/animations/student.json')}
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
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("CCNE")}>
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
        backgroundColor: '#000080',
        borderRadius: 50, // To make it a circle, set borderRadius to half of the width and height
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5, // For Android shadow
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
      },
})


