
import React from 'react';
import { Button, StyleSheet, Text, View , TextInput, TouchableOpacity, Image,ImageBackground, ScrollView} from 'react-native';


function Secondscreen({navigation}) {
    return (
      // GOOD
    
  
  
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <Image source={{uri: 'https://images.unsplash.com/photo-1612882355276-43ad8ccb8693?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80'}}
         style={styles.imgStyletop} />
        
        <Text style={{fontSize:25, color:"#999999", marginTop:70}}> Welcome to </Text>
        
        <Text style={styles.mainStylenew}> Power Bike Shop </Text>
  
            <TouchableOpacity style={styles.button} >
            <Text   onPress={() => navigation.push('Cartlist')}
            style={{color:"#4d4d4d", fontSize:20, fontWeight: 'bold', }}>                  Sign in with Google</Text> 
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.button1} >
            <Text   onPress={() => navigation.push('Cartlist')}
            style={{color:"white", fontSize:20, fontWeight: 'bold', }}>                   Sign in with Apple</Text> 
            </TouchableOpacity>
            <Text style={{fontSize:15, color:"#999999", marginTop:9}}> Not a member? 
            <Text onPress={() => navigation.push('HomeScreen')} style={{fontWeight:'bold', color:'#ff8000'}}>Sign up</Text>
            </Text>
  
        
        
      </View>
    );
  }

  export default Secondscreen;


  const styles = StyleSheet.create({
    imgStyletop:{
      width: 250, 
      height: 250, 
      borderRadius:25, 
      marginRight:15, 
      transform: [{rotate:"-35deg"}],
      
  
    
    },

    mainStylenew:{
      height: 50,
      width: "80%",
      marginBottom:"1%" , 
      textAlign:"center",
      fontSize: 30, 
      fontWeight: 'bold', color:"#262626",
      },

      button:{
  
        height:60, 
        justifyContent:'center',
        borderRadius:15, 
        backgroundColor:"#d9d9d9", 
        alignSelf:"center", 
        textAlign: "center" ,
        width:"80%",
        marginTop:5,
        
      },

      button1:{
  
        height:60,
        justifyContent:'center',
        borderRadius:15, 
        backgroundColor:"#1a1a1a", 
        alignSelf:"center", 
        textAlign: "center" ,
        width:"80%",
        marginTop:15,
        
      },
  });