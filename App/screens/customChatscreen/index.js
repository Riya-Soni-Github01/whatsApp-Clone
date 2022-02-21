import React, { useState, useRef, useContext, useLayoutEffect } from 'react';
import { Text, View, TextInput, StyleSheet, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles';
import { AuthContext } from '../AuthProvider';
import firestore from '@react-native-firebase/firestore';

const App = ({ route }) => {

  const { user } = useContext(AuthContext)
  const [messages, setMessages] = useState([]);
  const email = route.params.email;
  const id = route.params.id;
  const [text, setText] = useState()
  useLayoutEffect(() => {
    const docid = id > user.uid ? user.uid + "-" + id : id + "-" + user.uid
    const messageRef = firestore().collection('chatrooms')
      .doc(docid)
      .collection('messages')
      .orderBy('createdAt', "desc")

    const unSubscribe = messageRef.onSnapshot((querySnap) => {
      const allmsg = querySnap.docs.map(docSanp => {
        const data = docSanp.data()
        if (data.createdAt) {
          return {
            ...docSanp.data(),
            createdAt: docSanp.data().createdAt.toDate()
          }
        } else {
          return {
            ...docSanp.data(),
            createdAt: new Date()
          }
        }

      })
      setMessages(allmsg)
    })
    return () => {
      unSubscribe()
    }
  }, [])
  const onSend = () => {
    if (text) {
      const msg = text
      const mymsg = {
        text: msg,
        sentBy: user.email,
        sentTo: email,
        createdAt: new Date()
      }
      const docid = id > user.uid ? user.uid + "-" + id : id + "-" + user.uid
      firestore().collection('chatrooms')
        .doc(docid)
        .collection('messages')
        .add({ ...mymsg })

    }
    setText('')
  }



  const renderItemNew = ({ item }) => {
    const time = item.createdAt.getHours() + ":" + item.createdAt.getMinutes();
    let color, align, textColor, profile;
    const setValues = () => {
      if (item.sentBy == user.email) {
        color = '#128C7E';
        align = 'flex-end';
        textColor = '#ffffff',
          profile = 'row'
      }
      else {
        color = '#ffffff';
        align = 'flex-start';
        textColor = 'black',
          profile = 'row-reverse'
      }
    }
    setValues();
    return (
      <View style={{ flex: 0.08, alignSelf: align }}>
        <View style={{ flexDirection: profile }}>
          <View style={[{ backgroundColor: color, alignSelf: align }, styles.msgContentOuter]}>
            <Text style={[{ color: textColor }, styles.msgContentInner]}>{item.text}</Text>
            <View style={{ alignSelf: 'flex-end', paddingTop: 5 }}>
              <Text style={{ color: textColor, fontStyle: 'italic' }}>{time}</Text>
            </View>
          </View>
          {(item.sentTo == user.email) ?
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <View style={styles.profileContainer}>
                <Image source={require('../../../assets/profile.jpeg')} style={styles.profileAvatar} />
              </View>
            </View> : null}
        </View>
      </View >
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.chatContainer}>
        {messages ? <FlatList
          inverted={true}
          data={messages}
          renderItem={renderItemNew}
        /> : null}
      </View>

      <View style={styles.msgOutContainer}>
        <View style={styles.textBox}>
          <View style={styles.textInput}>
            <TextInput placeholder='Type a message ........' autoFocus={true} onChangeText={(msg) => setText(msg)} value={text} />
          </View>
        </View>
        <View style={styles.sendContainer}>
          <View style={styles.sendInnerContainer}>
            <Icon name='send' size={30} style={styles.sendIcon} onPress={() => { onSend() }} />
          </View>
        </View>

      </View>
    </View>
  )
}

export default App