import React, { useState, useEffect, useContext } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import firestore from '@react-native-firebase/firestore'
import { AuthContext } from '../AuthProvider'
import firebase from '@react-native-firebase/app';
import { s, vs, ms } from 'react-native-size-matters'
import styles from './styles'
import Button from '../../component/Button';
import Input from '../../component/Input';

const UserName = ({ navigation }) => {
  const { setUsername, username, user } = useContext(AuthContext)
  const move = () => {
    console.log(username)
    if (!username) { alert('Enter correct credential') }
    else if (username.length < 4) { alert('Enter correct credential') }
    else {
      firestore().collection('users').doc(user.email).set({
        id: user.uid,
        username: username,
        email: user.email,
        status: 'online'
      })
      navigation.navigate('Home')
    }

  }
  return (
    <View style={styles.container} >
      <View style={styles.modalView}>
        <View>
          <Input placeholder={"UserName"} value={username}
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        <View style={{ justifyContent: 'center' }}>
          <Button title={"Create"} onPress={() => move()} />
        </View>
      </View>
    </View>

  )
}
export default UserName;