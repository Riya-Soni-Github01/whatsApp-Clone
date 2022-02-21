import React from "react";
import { StyleSheet } from "react-native";
import { s, vs, ms } from 'react-native-size-matters'
export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 10,
    flex: 1
  },

  modalView: {
    padding: 5,
    flex: 0.2,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },

});
