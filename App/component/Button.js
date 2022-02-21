import React, { useState, useRef } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
const Button = (props) => {

  const { title } = props;
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>

  )
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(7,94,84)',
    height: 30,
    borderRadius: 15
  }
  ,
  text: {
    color: 'white',
    fontWeight: '600',
    fontSize: 15,
    letterSpacing: 0.88,
  }


})
export default Button