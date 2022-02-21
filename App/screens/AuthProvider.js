import React, { createContext, useState } from "react";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'
import firebase from '@react-native-firebase/app';
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState()
  const [user, setUser] = useState(null);
  const [confirm, setConfirm] = useState(null);
  const [valid, setValid] = useState(false);
  const [frnd, setFrnd] = useState();
  const [frndStatus, setFrndStatus] = useState('offline');
  return (
    <AuthContext.Provider
      value={{
        user, setUser, confirm, setConfirm, valid, setValid, username, setUsername, frnd, setFrnd,
        frndStatus, setFrndStatus,
        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
          }
          catch (e) {
            console.log(e)
          }
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}