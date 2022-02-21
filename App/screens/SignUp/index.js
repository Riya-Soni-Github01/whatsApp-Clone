import React, { useState, useContext, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { vs } from "react-native-size-matters";
import { AuthContext } from '../AuthProvider';
import Icon from 'react-native-vector-icons/FontAwesome'
import Button from '../../component/Button';
import Input from '../../component/Input';
export default function App({ navigation }) {
  const { user, register } = useContext(AuthContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  console.log(user)
  const check = () => {
    const regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const validity = () => { return regx.test(email) }
    const k = validity()
    console.log('valid', k)
    if (password == confirmpassword && email && password && confirmpassword && k) {

      register(email, password);
      navigation.navigate('UserName')

    }
    else { alert('Incorrect Information') }
  }

  return (
    <View style={{ flex: 1 }}>

      <View style={{ flex: 0.4, backgroundColor: 'rgb(80,140,126)', justifyContent: 'center', alignItems: 'center' }}>
        <Icon name='whatsapp' size={80} style={{ color: 'white' }} />
        <Text style={{ fontSize: 20, color: 'white', fontWeight: '600', letterSpacing: 0.88 }}>{"WhatsApp"}</Text>
      </View>
      <View style={{ flex: 0.4, justifyContent: 'center', }}>
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
        <Input label={'Confirm Password'} placeholder={'Confirm Password'}
          autoCorrect={false}
          autoCapitalize='none'
          value={confirmpassword}
          secureTextEntry={true}
          onChangeText={(password) => setConfirmPassword(password)}
        />
      </View>

      <View style={{ flex: 0.2, justifyContent: 'flex-end', padding: 20, }}>
        <View style={{ flex: 0.5, justifyContent: 'flex-end' }}>
          <Button title={"SignUp"} onPress={() => { check(); }} />
        </View>

        <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.navigate('newLogin')}>
            <Text>{"<< Login"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>


  );
}