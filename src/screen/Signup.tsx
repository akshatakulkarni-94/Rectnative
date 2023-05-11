import { 
    StyleSheet,
   Text,
   TextInput,
   View,
   TouchableOpacity,
   Image,
   KeyboardAvoidingView,
   Keyboard,
   ScrollView,} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { BASE_URL } from './config'
import axios from 'axios'
import React, {createContext, useEffect, useState} from 'react';


const Signup = ({navigation}:any) => {
// const [name, setText] = useState('');
// const [email, setemail] = useState('');


const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [password, setUserpassword] = useState('');
  const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);
  const [errortext, setErrortext] = useState('');

const handleSubmitButton = () => {
    setErrortext('');
    if (!userName) {
      alert('Please fill Name');
      return;
    }
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!password) {
      alert('Please fill Age');
      return;
    }
   
    //Show Loader
   // setLoading(true);
    var dataToSend = {
        name: userName,
        email: userEmail,
        password: password,
     
    };
    console.log(dataToSend)

fetch('http://restapi.adequateshop.com/api/authaccount/registration',{
method: 'POST',
body: JSON.stringify(dataToSend),
headers: {
   'Content-Type': 'application/json' 
},
}).then((response) => response.json())
.then((responseJson) => {
console.log(responseJson["code"]);

// If server response message same as Data Matched
if (responseJson["code"] == 0) {
  setIsRegistraionSuccess(true);
  console.log('Registration Successful. Please Login to proceed');
} else {
  setErrortext('Registration Unsuccessful');
}
})
.catch((error) => {
    //Hide Loader
    //setLoading(false);
    console.error(error);
  });
};
  if (isRegistraionSuccess) {
    console.log('success');
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#307ecc',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../screen/Image/success.png')}
          style={{height: 150, resizeMode: 'contain', alignSelf: 'center'}}
        />
        <Text style={styles.successTextStyle} >Registration Successful.</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonTextStyle}>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  }


 return (
   <View style = {styles.container}>
     <Text style={styles.text}>Let's get started!</Text>
     <TextInput style={styles.inputText} 
     placeholder='Display Name'
     onChangeText={newText => setUserName(newText)}
     defaultValue={userName}
     />
   <TextInput style={styles.inputText} placeholder='Email'
    onChangeText={newText => setUserEmail(newText)}
    defaultValue={userEmail}
   />
   <TextInput style={styles.inputText} placeholder='Password'
    onChangeText={newText => setUserpassword(newText)}
    defaultValue={password}
   />
   <View style = {styles.buttonCon}>
   {errortext != '' ? (
            <Text style={styles.errorTextStyle}> {errortext} </Text>
    ) : null}
   <TouchableOpacity
            style={styles.button}
            activeOpacity={0.5}
            onPress={handleSubmitButton}>
            <Text style={styles.buttonText}>SIGNUP</Text>
 </TouchableOpacity>
  <TouchableOpacity  onPress={() => {
       // Button press handler
     }}>
       <Text style={styles.arrow} onPress={() => navigation.navigate('Login')}><Icon name='arrow-back-sharp' color='black' size={25} /></Text>
     </TouchableOpacity>
     </View>
  </View> 
 )
}

export default Signup

const styles = StyleSheet.create({
   container:{
       flex:1,
        justifyContent:'center',
       // alignItems:'center',
      },
      text:{
       fontWeight:'bold',
       textAlign:'center',
       fontSize:30,
       color:'black'
      },
      inputText:{
       borderColor:'black',
       borderWidth:1,
       fontSize:20,
       marginLeft:50,
       marginRight:50,
       marginTop:15,
       marginBottom:20,
       padding:10,
      },
      buttonCon:{
       alignItems:'center',
       justifyContent:'center',
      },
      button: {
       padding: 10,
       paddingLeft:80,
       paddingRight:80,
       backgroundColor: 'blue',
       borderRadius: 5,
     },
     buttonText: {
       color: 'white',
       fontSize: 16,
       fontWeight:'bold',
     },
     arrow:{
       marginTop:20,
      
     },
     successTextStyle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        padding: 30,
      },
      buttonStyle: {
        backgroundColor: '#7DE24E',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#7DE24E',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 20,
      },
      buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
      },
      errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
      },
})