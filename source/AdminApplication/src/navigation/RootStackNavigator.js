import React from 'react';
import {
  StudentProfileList,
  Home,
  StudentProfile,
  StudentChatList,
  StudentChat,
} from '../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const RootStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Student Profiles" component={StudentProfileList} />
      <Stack.Screen name="Student Profile" component={StudentProfile} />
      <Stack.Screen name="Chat List" component={StudentChatList} />
      <Stack.Screen name="Chat" component={StudentChat} />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
