import { StyleSheet, Text,TouchableOpacity} from 'react-native'
import React from 'react'
import { View } from 'react-native'

const Setting = () => {
  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Logout</Text>
    </TouchableOpacity>
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({
  button: {
    padding: 10,
    paddingLeft:80,
    paddingRight:80,
    // backgroundColor: 'blue',
    borderRadius: 5,
    borderWidth:1,
    borderColor:'red'
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight:'bold',
  },
  container:{
    flex:1,
     justifyContent:'center',
    alignItems:'center',
   },
})