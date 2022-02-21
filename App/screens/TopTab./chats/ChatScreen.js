import React, { useState, useLayoutEffect, useContext } from 'react';
import { View } from 'react-native';
import { GiftedChat, Bubble, InputToolbar } from 'react-native-gifted-chat'
import { AuthContext } from '../../AuthProvider';
import firestore from '@react-native-firebase/firestore';
import { TextInput } from 'react-native-paper';

const Chat = ({ route }) => {
  const { user } = useContext(AuthContext)
  const [messages, setMessages] = useState([]);
  const email = route.params.email;
  const id = route.params.id;

  // const getAllMessages = async () => {
  //   const docid = id > user.uid ? user.uid + "-" + id : id + "-" + user.uid
  //   const querySanp = await firestore().collection('chatrooms')
  //     .doc(docid)
  //     .collection('messages')
  //     .orderBy('createdAt', "desc")
  //     .get()
  //   const allmsg = querySanp.docs.map(docSanp => {
  //     return {
  //       ...docSanp.data(),
  //       createdAt: docSanp.data().createdAt.toDate()
  //     }
  //   })
  //   setMessages(allmsg)
  // }
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
  const onSend = (messageArray) => {
    const msg = messageArray[0]
    const mymsg = {
      ...msg,
      sentBy: user.email,
      sentTo: email,
      createdAt: new Date()
    }
    setMessages(previousMessages => GiftedChat.append(previousMessages, mymsg))
    const docid = id > user.uid ? user.uid + "-" + id : id + "-" + user.uid
    firestore().collection('chatrooms')
      .doc(docid)
      .collection('messages')
      .add({ ...mymsg, createdAt: firestore.FieldValue.serverTimestamp() })
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#E8E8E4" }}>

      <GiftedChat
        messages={messages}
        onSend={text => onSend(text)}
        user={{
          _id: user.email,
          avatar: require('../../../../assets/profile.jpeg')
        }}
        showUserAvatar={true}
        renderBubble={(props) => {
          return <Bubble
            {...props}
            wrapperStyle={{
              right: {
                backgroundColor: "rgb(18,140,126)",

              }
            }}
          />
        }}

        renderInputToolbar={(props) => {
          return (

            <InputToolbar {...props}
              containerStyle={{ height: 50, borderRadius: 20, backgroundColor: 'white', marginHorizontal: 5 }}
            />

          )

        }}
      />
    </View>
  )
}

export default Chat