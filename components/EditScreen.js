import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

const EditScreen = ({ route, navigation }) => {
  const [editedText, setEditedText] = useState('');
  const { data, index } = route.params;

  useEffect(() => {
    setEditedText(data[index]);
  }, [data[index]]);

  const handleSave = () => {
    data[index] = editedText;
    navigation.navigate('Home', { data });
  };

  const handleCancel = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={{margin: 12}}>
      <Text style={{color: '#000', fontSize: 14, marginBottom: 20}}>Edit Screen</Text>
      <TextInput value={editedText} onChangeText={(text) => setEditedText(text)} 
              style={{
                height: 40,
                marginBottom: 12,
                color:'#000',
                borderWidth: 1,
                padding: 10
              }}
      />
      <View style={{display: 'flex', flexDirection:'row'}}>
        <View style={{paddingEnd: 6, width: '50%'}}>
          <Pressable onPress={handleSave} style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save</Text>
          </Pressable>
        </View>
        <View style={{paddingStart: 6, width: '50%'}}>
          <Pressable onPress={handleCancel} style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default EditScreen;

const styles = StyleSheet.create({
  saveButton: {
    elevation: 4,
    backgroundColor: '#2196F3',
    borderRadius: 2
  },
  saveButtonText: {
    textAlign: 'center',
    margin: 8,
    fontWeight: '500',
    color: '#fff'
  },
  cancelButton: {
    elevation: 4,
    borderColor: '#2196F3',
    borderWidth: 1,
    backgroundColor: '#FFF',
    borderRadius: 2
  },
  cancelButtonText: {
    textAlign: 'center',
    margin: 8,
    fontWeight: '500',
    color: '#2196F3',
  }
})