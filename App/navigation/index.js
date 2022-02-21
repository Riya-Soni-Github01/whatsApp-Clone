import React, { useState, useContext, useEffect } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth'
import { AuthContext } from '../screens/AuthProvider';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import newLogin from '../screens/Login'
import newSignUp from '../screens/SignUp'
import UserName from '../screens/UserName'
import Dice from '../../screen/Dice'
import Ionicon from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/AntDesign'
import GiftedChatScreenNew from '../screens/TopTab./chats/ChatScreen'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Home from '../screens/Home'
import CustomChatscreen from '../screens/customChatscreen'
import Entypo from 'react-native-vector-icons/Entypo'
import styles from './styles';
import LoginByPhoneNumber from '../screens/LoginByPhoneNum'
import OTPScreen from '../screens/LoginByPhoneNum/otp';

const Stack = createNativeStackNavigator();
const App = () => {
  const { user, setUser, frnd, frndStatus } = useContext(AuthContext);
  console.log(user)
  const NewOne =
    <Stack.Navigator initialRouteName={user ? "Home" : "newLogin"} screenOptions={{
      headerStyle: { backgroundColor: '#128C7E' },
      headerTintColor: 'white',
    }}>
      <Stack.Screen name="newLogin" component={newLogin} options={{ headerShown: false }} />
      <Stack.Screen name="UserName" component={UserName} options={{ headerShown: false }} />
      <Stack.Screen name="newSignUp" component={newSignUp} options={{ headerShown: false }} />
      <Stack.Screen name="Phone" component={LoginByPhoneNumber} options={{ headerShown: true, title: "Login" }} />
      <Stack.Screen name="Otp" component={OTPScreen} options={{ headerShown: true, title: "OTP" }} />
      <Stack.Screen name="Dice" component={Dice} options={{ headerShown: true }} />
      <Stack.Screen name="Home" component={Home} options={{
        title: '',
        headerLeft: () => (
          <Text style={styles.whatsapp_heading}>WhatsApp</Text>
        ),
        headerRight: () => (
          <View style={styles.iconContainer}>
            <View style={styles.iconInnerContainer}>
              <Ionicon name='search-outline' size={25} color={'rgb(237,248,245)'} />
            </View>
            <View style={styles.iconInnerContainer}>
              <Icon name='more-vert' size={25} color={'rgb(237,248,245)'} />
            </View>
          </View>
        )
      }} />
      <Stack.Screen name="CustomChatscreen" component={CustomChatscreen} options={({ navigation }) => ({
        title: '',
        headerLeft: () => (
          <>
            <View style={{ justifyContent: 'center' }}>
              <Icons name='arrowleft' size={25} color={'rgb(237,248,245)'} onPress={() => {
                navigation.navigate('Home')
              }} />
            </View>
            <View style={styles.profileContainer}>
              <View style={styles.profileInnerContainer} >
                <Image source={require('../../assets/profile.jpeg')} style={styles.profile} />
              </View>
            </View>
            <View style={styles.nameContainer}>
              <Text style={styles.name}>{frnd}</Text>
              <Entypo name='dot-single' size={38} style={
                { color: (frndStatus == 'online' ? 'rgb(127,255,0)' : 'black') }} />
            </View>
          </>
        ),
        headerRight: () => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ justifyContent: 'center', padding: 10 }}>
              <FontAwesome name='video-camera' size={20} color={'rgb(237,248,245)'} />
            </View>
            <View style={{ justifyContent: 'center', padding: 10 }}>
              <FontAwesome name='phone' size={22} color={'rgb(237,248,245)'} />
            </View>
            <View style={{ justifyContent: 'center' }}>
              <Icon name='more-vert' size={25} color={'rgb(237,248,245)'} />
            </View>
          </View>
        )
      })} />
    </Stack.Navigator>
  const [initializing, setInitializing] = useState(true);
  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false)
  };
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  if (initializing) return null;
  return (
    <NavigationContainer>
      {NewOne}
    </NavigationContainer>)
}
export default App