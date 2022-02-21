import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Face1, Face2, Face3, Face4, Face5, Face6 } from './faces';
const Dice = () => {
  const [num, setNum] = useState(1)
  const show = () => {
    switch (num) {
      case 1: return (<Face1 />)

      case 2: return (<Face2 />)

      case 3: return (<Face3 />)

      case 4: return (<Face4 />)

      case 5: return (<Face5 />)

      case 6: return (<Face6 />)

    }
  }

  const spin = () => {
    const getRandomber = (min = 1, max = 6) => {
      return Math.floor((Math.random() * (max - min + 1)) + min);
    }
    var x = getRandomber()
    console.log(x)
    setNum(x)

  }
  return (
    <View style={styles.container} >
      <View style={[styles.box, { height: 100 }]} >
        {show()}
      </View>
      <TouchableOpacity style={styles.button} onPress={() => spin()}>
        <Text> Spin</Text>
      </TouchableOpacity>
    </View>

  )
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  box: {
    width: 100,
    backgroundColor: 'black',
    shadowColor: 'grey',
    shadowOpacity: 0.8,
    shadowOffset: { width: 5, height: 3 },
    borderRadius: 10,
    justifyContent: 'center',
  },
  button: {
    height: 50,
    width: 80,
    backgroundColor: 'orange',
    marginTop: 50,
    shadowColor: 'grey',
    shadowOpacity: 0.8,
    shadowOffset: { width: 5, height: 3 },
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

})
export default Dice