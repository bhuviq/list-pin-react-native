import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ route, navigation }) => {
  const [pin, setPin] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    const params = route.params;
    let data;
    if (params) {

      data = params.data;
    }
    else {

      data = ['Item 1', 'Item 2', 'Item 3'];
    }
    if (pin === '1234') {
      setLoggedIn(true);
      AsyncStorage.setItem('pin', pin);

      navigation.navigate('Home', { data });
    } else {
      alert('Invalid PIN');
    }
  };

  return (
    <View style={{margin: 12}}>
      <Text style={{color: '#000', fontSize: 14, marginBottom: 20}}>Login Screen</Text>
      <TextInput
        style={{
          height: 40,
          marginBottom: 12,
          color:'#000',
          borderWidth: 1,
          padding: 10
        }}
        keyboardType="numeric"
        placeholderTextColor={'#a9a9a9'}
        placeholder="Enter PIN"
        value={pin}
        onChangeText={(text) => setPin(text)}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;