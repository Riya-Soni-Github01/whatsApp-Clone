
// import React, { useState, useRef, useEffect } from 'react';
// import { Text, View, Button } from 'react-native';
// import firebase from "@react-native-firebase/app";
// import messaging from '@react-native-firebase/messaging';
// import Navigation from './navigation'
// import notifee from '@notifee/react-native';
// const App = () => {

//   useEffect(() => {
//     messaging()
//       .getToken(firebase.app().options.messagingSenderId)
//       .then(x => {
//         console.log('FCM TOKEN OF DEVICE', x)
//       })
//       .catch(e => console.log(e));
//     // Assume a message-notification contains a "type" property in the data payload of the screen to open

//     messaging().onNotificationOpenedApp(remoteMessage => {
//       console.log(
//         'Notification caused app to open from background state:',
//         remoteMessage.notification,
//       );
//     });

//     messaging().setBackgroundMessageHandler(remoteMessage => {
//       console.log(
//         'backHandler',
//         remoteMessage.notification
//       )
//     });

//     // Check whether an initial notification is available
//     messaging()
//       .getInitialNotification()
//       .then(remoteMessage => {
//         if (remoteMessage) {
//           console.log(
//             'Notification caused app to open from quit state:',
//             remoteMessage.notification,
//           );
//         }
//       });
//   }, []);
//   async function onDisplayNotification() {
//     // Create a channel
//     const channelId = await notifee.createChannel({
//       id: '01',
//       name: 'Default Channel',
//     });

//     // Display a notification
//     const notification = await notifee.displayNotification({
//       title: 'Notification Title',
//       body: 'Main body content of the notification',
//       android: {
//         channelId,
//       },
//     });

//     console.log('notification', notification)
//   }
//   return (
//     <>
//       <Button title="Display Notification" onPress={() => onDisplayNotification()} />
//     </>)
// }
// export default App