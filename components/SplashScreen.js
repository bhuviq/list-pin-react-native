import React, { useState, useEffect } from 'react';
import { View, Image, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({ navigation }) => {

    const data = ['Item 1', 'Item 2', 'Item 3'];

    useEffect(() => {
        checkLoginStatus();
    }, []);

    const checkLoginStatus = async () => {
        const storedPin = await AsyncStorage.getItem('pin');
        setTimeout (() => {
            if (storedPin === '1234') {
                navigation.replace('Home', { data });
            }
            else {
                
                navigation.replace('Login', { data });
            }
        }, 2000);
    };

    return (
        <View style={{margin: 12, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%'}}>
            <Image source={require('../android/app/src/main/res/mipmap-xhdpi/ic_launcher.png')}/>
        </View>
    );
};

export default SplashScreen;