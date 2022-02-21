import React from 'react';
import { View, StyleSheet } from 'react-native';
const TwoDots = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
      <View style={styles.dot} />
      <View style={styles.dot} />
    </View>)
}
export const Face1 = () => {
  return (<View style={{ alignItems: 'center' }}>
    <View style={styles.dot} />
  </View>
  )
}
export const Face2 = () => {
  return (<View >
    <TwoDots />
  </View>
  )
}
export const Face3 = () => {
  return (
    <View >
      <View style={styles.dot} />
      <View style={[styles.dot, { marginLeft: '30%' }]} />
      <View style={[styles.dot, { marginLeft: '70%' }]} />
    </View>
  )
}
export const Face4 = () => {
  return (
    <View >
      <TwoDots />
      <TwoDots />
    </View>
  )
}
export const Face5 = () => {
  return (<View >
    <TwoDots />
    <View style={[styles.dot, { marginLeft: '38%' }]} />
    <TwoDots />
  </View>
  )
}
export const Face6 = () => {
  return (
    <View >
      <TwoDots />
      <TwoDots />
      <TwoDots />
    </View>

  )
}




const styles = StyleSheet.create({
  dot: {
    height: 25,
    width: 25,
    backgroundColor: 'white',
    borderRadius: 30,
  }

})