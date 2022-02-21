import React from "react";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
  chatContainer: {
    flex: 0.9,
    backgroundColor: 'floralwhite',
  },
  msgOutContainer: {
    flex: 0.1,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: 'floralwhite'
  },
  textBox: {
    justifyContent: 'center',
    padding: 12,
    flex: 0.9,
    alignSelf: 'stretch'
  },
  textInput:
  {
    justifyContent: 'center',
    borderRadius: 60,
    backgroundColor: '#ffffff',
    flex: 1, padding: 10,
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOpacity: 0.1
  },
  sendContainer: {
    flex: 0.12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },
  sendInnerContainer: {
    borderRadius: 100,
    backgroundColor: '#128C7E',
    justifyContent: 'center',
    padding: 10
  },
  sendIcon: {
    color: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 5

  },
  msgContentOuter: {
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOpacity: 0.25,
    margin: 5, paddingHorizontal: 15,
    borderRadius: 15,
    paddingVertical: 5
  },
  msgContentInner: {
    fontFamily: 'Arial',
    fontWeight: '300',
    letterSpacing: 0.88,
    fontStyle: 'italic'
  },
  profileContainer: {
    alignItems: 'center',
    paddingRight: 5,
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOpacity: 0.3
  },
  profileAvatar: {
    height: 40,
    width: 40,
    borderRadius: 50
  }
})