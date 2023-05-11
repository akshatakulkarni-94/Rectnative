import { 
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,Alert
} from 'react-native'
import React, {useState, createRef} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}:any) => {

  const [email, setUserEmail] = useState('');
  const [password, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
 
  const passwordInputRef = createRef();

  const handleSubmitPress = () => {
    setErrortext('');
    if (!email) {
      alert('Please fill Email');
      return;
    }
    if (!password) {
      alert('Please fill passowrd');
      return;
    }
  
    var dataToSend = {
        email: email,
        password: password,
    };
    console.log(dataToSend)

fetch('http://restapi.adequateshop.com/api/authaccount/login',{
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
    console.log(responseJson["data"]);
    let data1 = responseJson["data"]
    console.log (data1["Id"])
    //AsyncStorage.setItem('Id', data1);
    
    Alert.alert(  
      '',  
      'Login success',  
      [   
          {text: 'OK', onPress: () => navigation.navigate('Home')},  
      ],  
      {cancelable: false}  
  )  
   
  } else {
    setErrortext('Please check your email id or password');
    console.log('Please check your email id or password');
  }

})
.catch((error) => {
   
    console.error(error);
  });
  };

  


  return (
    <View style = {styles.container}>
      <Text style={styles.text}>WelCome</Text>
    <TextInput style={styles.inputText} placeholder='Email'
     onChangeText={newText => setUserEmail(newText)}
     defaultValue={email}
    />
    <TextInput style={styles.inputText} placeholder='Password'
     onChangeText={newText => setUserPassword(newText)}
     defaultValue={password}
    />
    <View style = {styles.buttonCon}>
    <TouchableOpacity
            style={styles.button}
            activeOpacity={0.5}
            onPress={handleSubmitPress}>
            <Text style={styles.buttonText}>LOGIN</Text>
 </TouchableOpacity>
    {/* <TouchableOpacity style={styles.button} onPress={() => {
        // Button press hndler
      }}>
        <Text style={styles.buttonText} onPress={() => navigation.navigate('Home')}>LOGIN</Text>
      </TouchableOpacity> */}
      </View>
      <TouchableOpacity onPress={() => {
        // Button press handler
      }}>
      <Text style={styles.signUp} onPress={() => navigation.navigate('Signup')}>Sign up here</Text>
      </TouchableOpacity>
   </View>
  )
}

export default Login

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
      signUp:{
        color:'blue',
        textAlign:'center',
        marginTop:10,
      }
})