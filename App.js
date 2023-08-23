import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignUpScreen from './Screens/SignUpScreen';
import LoginScreen from './Screens/LoginScreen';
import SplashScreen from './Screens/SplashScreen';
import HomeScreen from './Screens/HomeScreen';
import SunScreen from './Screens/SunScreen';
import CourseScreen from './Screens/CourseFiles/CourseScreen';
import French from './Screens/CourseFiles/French';
import CCNE from './Screens/CCNE';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import {auth} from './firebase';
import { db } from './firebase';
import { getRoleByUserId, getUsers } from './Utils/api/users';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import WebDevelopment from './Screens/CourseFiles/WebDevelopment';
import Vhdl from './Screens/CourseFiles/Vhdl';
import PropagationAndAntennas from './Screens/CourseFiles/PropagationAndAntennas';
import NetworkAdminstration from './Screens/CourseFiles/NetworkAdminstration';
import Wlan from './Screens/CourseFiles/Wlan';
import Optoelectronics from './Screens/CourseFiles/Optoelectronics';
import Microwaves from './Screens/CourseFiles/Microwaves';
const Stack = createNativeStackNavigator();
export default function App() {
  const [isAdmin,setIsAdmin] = useState(false);
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  useEffect(()=>{

    auth.onAuthStateChanged((user)=>{
      if(user) {
        if(user.uid=="UpQaw2QIrwXLb86Qie29cz4SSof1"){
          setIsAdmin(true) }else{
           setIsAdmin(false);
          }
            setIsLoggedIn(true);
      
    } else {
        setIsLoggedIn(false);
    }
    })
  },[])
  return (
   <NavigationContainer>
    <Stack.Navigator>
      {isLoggedIn ? (
        isAdmin ? (
          <Stack.Group screenOptions={{ headerShown: false }}>
                          
                             <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
                             <Stack.Screen options={{ headerShown: false }} name="CCNE" component={CCNE}/>
                             <Stack.Screen options={{ headerShown: false }} name="Course Screen" component={CourseScreen} />

                            {/*} <Stack.Screen options={{ headerShown: false }} name="VHDL" component={Vhdl}/>
                             <Stack.Screen options={{ headerShown: false }} name="Propagation and Antennas" component={PropagationAndAntennas}/>
                             <Stack.Screen options={{ headerShown: false }} name="Network Adminstration" component={NetworkAdminstration}/>
                             <Stack.Screen options={{ headerShown: false }} name="French" component={French}/>
                             <Stack.Screen options={{ headerShown: false }} name="WLAN and Security" component={Wlan}/>
                             <Stack.Screen options={{ headerShown: false }} name="Optoelectronics" component={Optoelectronics}/>
                             <Stack.Screen options={{ headerShown: false }} name="WEB Development" component={WebDevelopment}/>
                             <Stack.Screen options={{ headerShown: false }} name="Microwaves" component={Microwaves}/>
                             */}
                        </Stack.Group>
        ) : (

          <Stack.Group>
          <Stack.Screen options={{ headerShown: false }} name="SunScreen" component={SunScreen} />
          <Stack.Screen options={{ headerShown: false }} name="CCNE" component={CCNE}/>
          <Stack.Screen options={{ headerShown: false }} name="French" component={French}/>
          
      </Stack.Group>
        ) 
      ) : (

    <Stack.Group screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="Splash" component={SplashScreen} />
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen name="SignUp" component={SignUpScreen} />
                    </Stack.Group>
      )}
    </Stack.Navigator>


   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
