import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Platform } from 'react-native'
import React, { useState } from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core'

import CustomButton from '../Components/customButton';
import AnimatedJson from '../assets/animations/login-animated.json'

import LottieView from 'lottie-react-native';

const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation();

    const handleLogin = () => {
        if (!email || !password) {
            alert("Please fill in all fields");
            return;
        }
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                console.log('Logged in with ', user.email);
            })
            .catch((error) => alert(error.message));
    }

    const renderLogin = () => {
        return (
            <View>
                <View>
                    <LottieView
                        source={AnimatedJson}
                        autoPlay
                        loop={true}
                        resizeMode="cover"
                        style={{ width: 100, height: 100 }}
                    // onAnimationFinish={() => setIsLoading(false)}
                    />
                </View>
                <View style={{ paddingHorizontal: 25 }}>
                    <View style={{ alignItems: 'center' }}>
                        {/* <Image source={require('../assets/images/login.svg')} /> */}
                    </View>

                    <Text
                        style={{
                            // fontFamily: 'Roboto-Medium',
                            fontSize: 38,
                            fontWeight: '500',
                            color: '#333',
                            marginBottom: 30,
                        }}>
                        Login
                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Enter email"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        autoFocus={false}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Enter password"
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />

                    <CustomButton label={"Login"} color={'#051250'} onPress={() => handleLogin()} />

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            marginBottom: 30,
                        }}>
                        <Text>Don't have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                            <Text style={{ color: '#051250', fontWeight: '700' }}> Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

    if (Platform.OS === 'ios') {
        return (
            <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'center' }} behavior="padding">
                {renderLogin()}
            </KeyboardAvoidingView>
        );
    } else {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                {renderLogin()}
            </View>
        );
    };
}

const styles = StyleSheet.create({
    input: {
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
    }
})

export default LoginScreen;