import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ route, navigation }) => {

  const { data } = route.params;

  const handleItemPress = (index) => {
    navigation.navigate('Edit', { data, index });
  };

  const handleLogout = () => {
    AsyncStorage.removeItem('pin');
    navigation.replace('Login');
  };

  return (
    <View style={{margin: 12}}>
      <Text style={{color: '#000', fontSize: 14, marginBottom: 20}}>Home Screen</Text>
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => handleItemPress(index)} style={{padding: 10, backgroundColor: '#fff', marginBottom: 12}}>
            <Text style={{color: '#2196F3'}}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button title="Logout" color={'#F00'} onPress={handleLogout} />
    </View>
  );
};

export default HomeScreen;