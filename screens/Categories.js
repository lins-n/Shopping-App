import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View , TextInput, TouchableOpacity, Image,ImageBackground, ScrollView} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context';
import bike from '../assets/bike.png';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function Categories({navigation}) {
  
  return (
   
  

  <ScrollView style={styles.scrollContainer}>
    <View style={{ flex: 1, alignItems: 'left', justifyContent: 'center' ,paddingLeft:20, backgroundColor:'white',paddingTop:20}}>
    
    
    
    <View style={styles.categories}>
    
    <Icon name='bars' type='font-awesome' color='#b3b3b3'  style={{alignContent:'center',alignItems:'center',paddingTop:30 }}/>
    <Icon name='bicycle' type='font-awesome' color='black' size='30'  style={{alignContent:'center',alignItems:'center',paddingTop:28, paddingLeft:150 }}/>
    <Icon name='search' type='font-awesome' color='#b3b3b3'  style={{alignContent:'center',alignItems:'center',paddingTop:30 , paddingLeft: 100}}/>
    <Icon name='bell' type='font-awesome' color='#b3b3b3'  style={{alignContent:'center',alignItems:'center',paddingTop:30 , paddingLeft: 15}}/>
    </View> 


      <Text style={{fontSize:20, color:"#999999", marginTop:20, textAlign:'left'}}> The Worlds <Text style={{fontWeight:'bold',color:'#ff8000', fontSize:25}}>Best Bike </Text></Text>
      
      <Text style={styles.mainStyle1}> Categories </Text>

      <ScrollView>
      <View style={styles.categories}>
      <TouchableOpacity style={styles.buttonCat} >
          <Text 
          style={{color:"#ff8000", fontSize:20,fontWeight: 'bold',  }}>    All    </Text> 
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonCat} >
          <Text 
          style={{color:"#b3b3b3", fontSize:20, }}>    RoadBike    </Text> 
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonCat} >
          <Text 
          style={{color:"#b3b3b3", fontSize:20,}}>    Mountain    </Text> 
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonCat} >
          <Text 
          style={{color:"#b3b3b3", fontSize:20, }}>    Urban    </Text> 
          </TouchableOpacity>
      </View>
      </ScrollView>

      
     
     
      
      <View style={styles.imgStyle1}>
        <TouchableOpacity 
        style={styles.imgCont1} onPress={() => navigation.push('Cartlist')} >
        <View>
        <ImageBackground source={bike} style={styles.imgStyle} >
        <Icon raised name='heart' type='font-awesome' size='15' style={styles.iconStyle} />
        </ImageBackground> 
        </View>
        <Text style={styles.textStyle1}>Pinarello Bike</Text>
        <Text style={styles.textStyle2}>$1700.00</Text>
       </TouchableOpacity>

       <TouchableOpacity 
       style={styles.imgCont1} onPress={() => navigation.push('Secondscreen')} >
       
       <Image source={bike} style={styles.imgStyle} />
       <Text style={styles.textStyle1}>Pinarello Bike</Text>
       <Text style={styles.textStyle2}>$1700.00</Text> 
       </TouchableOpacity>
       </View>
       

       <View style={styles.imgStyle1}>
       <TouchableOpacity style={styles.imgCont1}>
       <Image source={bike} style={styles.imgStyle} /> 
       <Text style={styles.textStyle1}>Pinarello Bike</Text>
       <Text style={styles.textStyle2}>$1700.00</Text>
       </TouchableOpacity>

       <TouchableOpacity style={styles.imgCont1}>
       <Image source={bike} style={styles.imgStyle} /> 
       <Text style={styles.textStyle1}>Pinarello Bike</Text>
      <Text style={styles.textStyle2}>$1700.00</Text>
       </TouchableOpacity>
       </View>

       <View style={styles.imgStyle1}>
       <TouchableOpacity style={styles.imgCont1}>
       <Image source={bike} style={styles.imgStyle} /> 
       <Text style={styles.textStyle1}>Pinarello Bike</Text>
      <Text style={styles.textStyle2}>$1700.00</Text>
       </TouchableOpacity>

       <TouchableOpacity style={styles.imgCont1}>
       <Image source={bike} style={styles.imgStyle} /> 
       <Text style={styles.textStyle1}>Pinarello Bike</Text>
      <Text style={styles.textStyle2}>$1700.00</Text>
       </TouchableOpacity>
       </View>

   
      
       
          
       

       
       

          

      
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.push('DetailsScreen')}
        /> */}
        {/* <Button
        title="Register"
        onPress={() => navigation.push('HomeScreen')}
        /> */}
    </View>
    </ScrollView>

    
    
  );
}

const styles=StyleSheet.create({
  categories:{
    flexDirection:'row',
  },

  mainStyle1:{
    height: 50,
    width: "80%",
    marginTop:"2%" , 
    textAlign:"left",
    fontSize: 25, 
    fontWeight: 'bold', color:"#262626",
    },

     textStyle2:{
    fontSize:19,
    fontWeight:'bold',
    textAlign:'center',
    color:"#ff8000",
  },


    buttonCat:{
  
      height:40,
      justifyContent:'center',
      borderRadius:15, 
      backgroundColor:"#f2f2f2",  
      textAlign: "left" ,
      marginBottom:20,
      marginRight:10,
      
    },
    imgStyle:{
      width: 130, 
      height: 200, 
      borderRadius:25, 
      
      marginLeft: 18,
  
    
    },

    textStyle1:{
      fontSize:15,
      textAlign:'center',
      },
  
    imgCont1:{
      width: "90%", 
      height: 250, 
      borderRadius:25, 
      marginRight:15, 
      backgroundColor:"#f2f2f2",
  
    
    },
    button4:{
  
      height:60, 
      justifyContent:'center',
      borderRadius:15, 
      backgroundColor:"black", 
      textAlign: "center" ,
      width:"150%",
      marginTop:5,
      
      
      
    },
  imgStyle1:{
    flex:1,
    flexDirection:'row',
    justifyContent: 'flex-start',
    width: 200, 
    height: 250, 
    borderRadius:25, 
    marginBottom: 20,
    
    
    
  },

});
  export default Categories;