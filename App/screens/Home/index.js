import React, { useState, useRef } from 'react';
import { StatusBar, Text, View } from 'react-native';
import TopTab from '../TopTab.'
const App = () => {
  return (

    <View style={{ flex: 1, backgroundColor: '#EDF8F5' }}>
      <StatusBar
        animated={true}
        barStyle="light-content"
      />
      <TopTab />
    </View>)
}
export default App