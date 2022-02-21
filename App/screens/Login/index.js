import React, { useState, useContext, useEffect } from "react";
import { Text, View, TouchableOpacity, } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import Button from '../../component/Button';
import Input from '../../component/Input';
import auth from '@react-native-firebase/auth';
export default function Login({ navigation }) {

  const navigateSignUp = () => { navigation.navigate('newSignUp') }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (email, password) => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      navigation.navigate('Home')
      setPassword('');
      setEmail('');
    } catch (e) {
      alert('Invalid')
    }
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.4, backgroundColor: 'rgb(80,140,126)', justifyContent: 'center', alignItems: 'center' }}>
        <Icon name='whatsapp' size={80} style={{ color: 'white' }} />
        <Text style={{ fontSize: 20, color: 'white', fontWeight: '600', letterSpacing: 0.88 }}>{"WhatsApp"}</Text>
      </View>
      <View style={{ flex: 0.4, justifyContent: 'center', padding: 10 }}>
        <Input label={'Email'} placeholder={'E-Mail'}
          autoCorrect={false}
          autoCapitalize='none'
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <Input label={'Password'} placeholder={'Password'}
          autoCorrect={false}
          autoCapitalize='none'
          value={password}
          secureTextEntry={true}
          onChangeText={(password) => { setPassword(password); }}
        />
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Phone')}>
            <Text>{"Login With PhoneNumber !"}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flex: 0.2, justifyContent: 'flex-end', padding: 20, }}>
        <View style={{ flex: 0.5, justifyContent: 'flex-end' }}>
          <Button title={"Login"} onPress={() => {
            login(email, password);
          }} />
        </View>

        <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={navigateSignUp}>
            <Text>{"Don't Have an account , Sign Up !"}</Text>
          </TouchableOpacity>
        </View>


      </View>
    </View>

  );
}
