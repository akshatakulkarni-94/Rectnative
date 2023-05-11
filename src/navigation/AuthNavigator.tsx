import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screen/Login'
import Signup from '../screen/Signup';
import HomeComponet from './HomeComponet';


const Stack = createNativeStackNavigator();
// Navigator, Screen, Group

function AuthNavigator() {
  console.log(Stack);
  return (
    <Stack.Navigator screenOptions={{}} initialRouteName='Login'>
      <Stack.Screen
        name='Login'
        component={Login}
        options={() => ({
          headerShown: false
          // headerBackTitle: 'Back',
          // headerBackTitleVisible: false,
          // headerStyle: {
           
          // },
          // title: '',
        })}
      />
      <Stack.Screen
        name='Signup'
        component={Signup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='Home'
        component={HomeComponet}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;