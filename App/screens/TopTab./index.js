import React from 'react';
import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Chats from './chats'
import Status from './status'
import Calls from './calls'
const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarLabelStyle: { fontSize: 15, fontWeight: '500' },
        tabBarStyle: { backgroundColor: 'rgb(18,140,126)' },
      }}
    >
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="Status" component={Status} />
      <Tab.Screen name="Calls" component={Calls} options={{

      }} />
    </Tab.Navigator>
  );
}
export default MyTabs;