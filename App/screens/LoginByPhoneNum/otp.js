import React, { useState, useRef, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { AuthContext } from '../AuthProvider';
import Input from '../../component/Input';
import Button from '../../component/Button';
const OTPScreen = ({ route, navigation }) => {

  const [otp, setOtp] = useState();
  const { confirm, setConfirm } = useContext(AuthContext)

  async function confirmCode() {
    try {
      const code = otp;
      const response = await confirm.confirm(code)
      if (response) {
        navigation.navigate('Home');
      }
    } catch (e) {
      alert('wrong otp');
    }
  }
  return (

    <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
      <Input label={'Enter OTP'} placeholder={'OTP'}
        autoCorrect={false}
        autoCapitalize='none'
        value={otp}
        onChangeText={(value) => setOtp(value)}
        keyboardType='numeric'

      />
      <Button title={"Verify"} onPress={() => { confirmCode() }} />
    </View>
  )
}

export default OTPScreen;