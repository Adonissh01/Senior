
import { View, Text,StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { auth,db} from "../../firebase"
import { collection } from 'firebase/firestore';
import { getFullNameByUserId } from '../../Utils/api/users';
import { KeyboardAvoidingView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import { TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';


const handleSignOut = async () => {
    try {
      await auth.signOut();
      // Use your authentication system's sign-out method
      // Optionally, you can navigate the user to a different screen or perform any other action after sign-out.
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
export default function ScreenTop() {
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
    
    <View style={styles.container1}>
       <View style={{display:"flex",flexDirection:"row"}}> 
        <FontAwesomeIcon icon={faUser} style={{color: "#ffffff",}} />
        <Text style={{ marginLeft:10,fontSize:20,fontWeight:"600",color:"white"}}>{userFullName}</Text>
        </View>
        <TouchableOpacity style={{ backgroundColor: "white",width:60,alignItems:"center",borderRadius:5,}} onPress={handleSignOut}><Text>Log Out</Text></TouchableOpacity>
          
       
    </View>
  )
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
})