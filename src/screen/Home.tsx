import { Button, FlatList, ScrollView, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useCallback, useEffect} from 'react'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Dialog, { DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog';

const Home = () => {
  const navigation = useNavigation()
  const [Data,setData]=useState([])
  const [ShowPop,setShowPop] = useState('false')
  const callApiData = async()=>{
    const url ='https://dummy.restapiexample.com/api/v1/employees'
    let result:any = await fetch(url);
     result  =await result.json()
     console.log("response ...",result);
     setData(result.data);
     
  }
  const handleDelete= async (id)=>{
    console.log("ID",id);
    
    const url='https://dummy.restapiexample.com/public/api/v1/delete'
    console.warn(`${url}/${id}`);
    
    let result = await fetch(`${url}/${id}`,{
     method:"delete"
    });
    result = await result.json();
    if(result){
      console.log("Delete successful");
      callApiData();
    }
  }
 
  console.log("Data",Data);
  useEffect(()=>{
    callApiData()
  },[])
  return (
    <View style={styles.container}>
    <View style={styles.button}>
    <Button title='Add employee' color='rgb(142,143,142)'/>
    </View>
    <Text style ={styles.heading}>Employee Lists</Text>
    <ScrollView >
      
      {/* <Text>Home</Text>
      <Text><Icon name='home' size={50}/></Text> */}
      
      
      {
       Data.length ?
      <FlatList data={Data} 
      renderItem={({item})=><View style={styles.card}>
        <Text style={styles.id}>{item.id}.</Text>
        <Text style={styles.name}>{item.employee_name}</Text>
        <Text>Employee age : {item.employee_age}</Text>
        <Text>Employee salary : {item.employee_salary}</Text>
        <View style = {styles.buttonCon}>
          <View></View>
    <TouchableOpacity style={styles.EditButton} onPress={() => {
        //navigation.navigate('EditDetails')
      }}>
        <Text style ={styles.text} >EDIT</Text>
      </TouchableOpacity>
      
      <TouchableOpacity  style={styles.DeleteButton}  onPress={() => {

        setShowPop('true')

//handleDelete(item.id)
}}>
      <Text style ={styles.text} >DELETE</Text>
      </TouchableOpacity>
      </View>
      </View>}
    />
    :null
      }
    </ScrollView>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container :{
     //flex:1,
    //alignItems:'center',
    //justifyContent:'center' 
    // width:200, 
   margin:10,
    color:'black'
  },
  card: {
    backgroundColor: '#fff',
    //borderRadius: 8,
    padding: 16,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    //shadowOpacity: 0.1,
    //shadowRadius: 4,
    elevation: 2,
  },
  text:{
 color:'white',
 fontWeight:'bold',
 fontSize:15,
 padding:5,
  },
  heading :{
 fontSize:16,
 fontWeight:'bold',
 margin:10,
  },
  buttonCon :{
  flexDirection: 'row',  // Display items horizontally
  //justifyContent: 'space-between', // Space items evenly
  },
  EditButton :{
    width:70,
    backgroundColor:'rgb(142,143,142)',
    justifyContent:'center',
    alignItems:'center',
    marginRight:10,
    borderRadius: 5,
    marginTop:5,
  },
  DeleteButton:{
    width:90,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'red',
    borderRadius: 5,
    marginTop:5,
  },
  button :{
    width:140,
    marginTop:70, 
  
  },
  id:{
    color:'red'
  },
  name:{
    color:'black',
    fontWeight:'bold'
  },


})

const PopUp = () => {
<View style={styles.container}>
  <Dialog
    footer={
      <DialogFooter>
        <DialogButton
          text="CANCEL"
          onPress={() => {}}
        />
        <DialogButton
          text="OK"
          onPress={() => {}}
        />
      </DialogFooter>
    }
  >
    <DialogContent>
      
    </DialogContent>
  </Dialog>
</View>
}

