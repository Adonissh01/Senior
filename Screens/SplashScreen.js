import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';

import { useNavigation } from '@react-navigation/native';

import CustomButton from '../Components/customButton';

export default function SplashScreen() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/logo-black.png')} style={{ width: 300, height: 150}} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>Welcome to FOTCourses </Text >
                <Text style={styles.slogan}>Study Smarter, Not Harder</Text>
            </View>

            <CustomButton  label={"Let's Begin"} color={'#051250'} onPress={() => navigation.navigate('Login')} />

            <LottieView
                source={require('../assets/animations/animation-education.json')}
                autoPlay
                loop={true}
                resizeMode="cover"
                style={{ width: 200, height: 100 }}
            // onAnimationFinish={() => setIsLoading(false)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        margin:0
        
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: 100,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#051250',
        marginBottom: 20,
    },
    slogan: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#051250',
        marginBottom: 10,
    }
});