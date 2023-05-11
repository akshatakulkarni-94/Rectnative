import { StyleSheet } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Setting from '../screen/Setting'
import Home from '../screen/Home'
import Icon from 'react-native-vector-icons/Ionicons'


const Tab = createBottomTabNavigator()
const HomeComponet = () => {
  return (
   <Tab.Navigator>
    <Tab.Screen
        name='Home'
        component={Home}
        options={{headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return(
         <Icon name="home-outline" color={color} size={30} />
            )
          }
            
        }}
      />
      <Tab.Screen
        name='Setting'
        component={Setting}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return(
         <Icon name="settings-outline" color={color} size={30} />
            )
          }
        }}
      />
   </Tab.Navigator>
  )
}

export default HomeComponet

const styles = StyleSheet.create({})