import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  Text,
} from 'react-native';
const News = (props) =>{
    return(
    <View style={styles.container}>
        <Image style={styles.imageContainer} source={props.picture}/> 
        <Text style= {styles.header}>{props.title}</Text>
        <Text style= {styles.details}>{props.text}</Text>
    </View>
    )
} 
export default News;
const styles= StyleSheet.create({
    container:{
      borderWidth:0.5,
      borderColor:"#e3f2fd",
      borderRadius:10,
      padding:10,
      margin:7,
      alignItems:"center",
      backgroundColor:"#e6ffff",
      flex:1
    },
    imageContainer:{
      width:330,
      height:220,
      borderRadius:10
    },
    details:{
      marginTop:7,
      fontWeight:"600",
      fontSize:17,
      textAlign:"justify"
    },
    header:{
      fontStyle:"italic",
      alignSelf:"center",
      marginTop:10,
      fontSize:15,
      fontWeight:"bold"
    }
  });