import React, { useState, useContext } from 'react';
import { View } from 'react-native';
import auth from '@react-native-firebase/auth'
import { AuthContext } from '../AuthProvider';
import Input from '../../component/Input';
import Button from '../../component/Button';

const PhoneSignIn = ({ navigation }) => {
  const { confirm, setConfirm } = useContext(AuthContext)
  const [contact, setContact] = useState('+91');

  async function signInWithPhoneNumber() {
    try {
      const confirmation = await auth().signInWithPhoneNumber(contact);
      setConfirm(confirmation);
      confirmation ? navigation.navigate('Otp', { phone: contact, confirm: confirm }) : alert('incorrect phone number')

    } catch (e) {
      alert('Incorrect phone number')
    }
  }
  const getOTP = () => {
    if (contact && contact.length > 9) {
      validate(contact);
      signInWithPhoneNumber()

    }
    else
      alert("Please enter 10 digit phone number");
  }
  const validate = (e) => {
    if (/^\d+$/.test(e.toString())) {
      setContact(e)
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Input label={'Phone Number'} placeholder={'Phone Number'}
        autoCorrect={false}
        autoCapitalize='none'
        value={contact}
        onChangeText={(value) => setContact(value)}
        keyboardType='numeric'

      />
      <Button title={"Send OTP"} onPress={() => { getOTP() }} />
    </View>

  )
}

export default PhoneSignIn