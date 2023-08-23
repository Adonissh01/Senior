import { KeyboardAvoidingView, Text, TouchableOpacity, StyleSheet, View, Platform, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core'

import CustomButton from '../Components/customButton'

import LottieView from 'lottie-react-native';

import {addUser} from '../Utils/api/users'

const SignUpScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const navigation = useNavigation();

    const handleSignUp = () => {
        if (!email || !password || !firstName || !lastName) {
            alert("Please fill in all fields");
            return;
        }
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                console.log('Registered with ', user.email);
                const userInfo = {
                    role: 'user',
                    uEmail: email,
                    uFirstName: firstName,
                    uLastName: lastName,
                    uId: user.uid,
                }
                addUser(userInfo);
            })
            .catch((error) => alert(error.message));
    }

    const renderSignUp = () => {
        return (
            <View>
                <View>
                    <LottieView
                        source={require('../assets/animations/signup-animation.json')}
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
                        Sign Up
                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Enter First Name"
                        autoCapitalize="none"
                        autoCorrect={false}
                        autoFocus={false}
                        value={firstName}
                        onChangeText={(text) => setFirstName(text)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Enter Last Name"
                        autoCapitalize="none"
                        autoCorrect={false}
                        autoFocus={false}
                        value={lastName}
                        onChangeText={(text) => setLastName(text)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Enter email"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        textContentType="emailAddress"
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

                    <CustomButton label={"Register"} color={'#051250'} onPress={() => handleSignUp()} />

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            marginBottom: 30,
                        }}>
                        <Text>Already have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                            <Text style={{ color: '#051250', fontWeight: '700' }}> Log In</Text>
                        </TouchableOpacity>

                    </View>


                </View>
            </View>

        )
    }

    if (Platform.OS === 'ios') {
        return (
            <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'center' }} behavior="padding">
                {renderSignUp()}
            </KeyboardAvoidingView>
        );
    } else {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                {renderSignUp()}
            </View>
        );
    }
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

export default SignUpScreen;