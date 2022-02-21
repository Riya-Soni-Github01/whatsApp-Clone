import React, { useState, useEffect, useContext } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, Button, StyleSheet } from 'react-native'
import firestore from '@react-native-firebase/firestore'
import { AuthContext } from '../../AuthProvider'
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';

const Users = ({ navigation }) => {

  const { user, setFrnd, username, setFrndStatus } = useContext(AuthContext);
  const [users, setUsers] = useState(null)
  const getUsers = async () => {
    const querySanp = await firestore().collection('users').where('id', '!=', user.uid).get()
    const allusers = querySanp.docs.map(docSnap => docSnap.data())
    setUsers(allusers)
  }

  useEffect(() => {
    getUsers()
  }, [])
  if (user) {
    if (user.uid !== null) {
      var userStatusDatabaseRef = database().ref('/status/' + user.uid);
    }
  }

  var isOfflineForDatabase = {
    state: 'offline',
    last_changed: firebase.database.ServerValue.TIMESTAMP,
  };

  var isOnlineForDatabase = {
    state: 'online',
    last_changed: firebase.database.ServerValue.TIMESTAMP,
  };
  firebase.database().ref('.info/connected').on('value', function (snapshot) {
    if (snapshot.val() == false) {
      return;
    };
    if (userStatusDatabaseRef) {
      userStatusDatabaseRef.onDisconnect().set(isOfflineForDatabase).then(function () {
        userStatusDatabaseRef.set(isOnlineForDatabase);
      });
    }
  });

  const logout = async () => {
    try {
      await auth().signOut();
      navigation.navigate('newLogin')
    }
    catch (e) {
      console.log(e)
    }
  }
  const out = () => {
    userStatusDatabaseRef.set(isOfflineForDatabase)
    logout();
  }
  useEffect(() => {

  })

  const RenderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => {
        setFrnd(item.username);
        firebase.database().ref(`status/${item.id}/state`).on('value', function (snapshot) { setFrndStatus(snapshot.val()) });
        navigation.navigate('CustomChatscreen', {
          id: item.id,
          name: item.username,
          email: item.email,
          status: typeof (item.status) == "string" ? item.status : item.status.toDate().toString()
        })

      }}>
        <View style={style.container}>
          <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../../../../assets/profile.jpeg')} style={style.profile} />
          </View>
          <View style={style.msg_container}>
            <View >
              <Text styles={style.text_name}>{item.username}</Text>
            </View>
            <View>
              <Text style={style.text_msg}>Message</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={users}
        renderItem={({ item }) => { return <RenderItem item={item} /> }}
        keyExtractor={(item) => item.id}
      />

      <View style={{ padding: 15 }}>
        <Button title='LogOut' onPress={() => out()} />
      </View>

    </View>

  )
}

const style = StyleSheet.create({
  container: {
    borderWidth: 0.16,
    borderColor: 'black',
    height: 70,
    backgroundColor: 'white',
    padding: 5, flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 8,
  },
  profile: {
    height: 65, borderRadius: 50, width: 50
  },
  msg_container: {
    flex: 0.78, justifyContent: 'center', padding: 5
  },
  text_name: {
    fontWeight: '500'
  },
  text_msg: {
    fontWeight: '200'
  }


})
export default Users