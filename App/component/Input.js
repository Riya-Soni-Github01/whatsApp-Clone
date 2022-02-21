import React, { useState, useRef } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
const Input = (props) => {
  const { label, style } = props

  return (
    <View style={[styles.container]}>
      <View style={[styles.container]}>
        <Text style={styles.text}> {label}</Text>
      </View>
      <View style={[styles.container]}>
        <TextInput {...props} style={[styles.textInput, style]} />
      </View>
    </View>

  )
}
const styles = StyleSheet.create(
  {
    text: {
      fontSize: 15,
      letterSpacing: 0.98,
      fontWeight: '600',

    },
    textInput: {
      borderBottomWidth: 1,
      borderBottomColor: '#0a9396',

    },
    container: {
      paddingVertical: 10,
      paddingHorizontal: 10,
      justifyContent: 'center'
    }
  }
)
export default Input