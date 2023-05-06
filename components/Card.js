import React from 'react'
import { Text, StyleSheet, View,FlatList, ScrollView,SafeAreaView } from 'react-native'

export default function Card()  {
  
    return (
      <View >
        <Text style={styles.headingText}> Flat Cards </Text>
        
        <View style={styles.container}>
        <View style={[styles.cardOne,styles.card]}><Text>Red</Text></View>
        <View style={[styles.cardTwo,styles.card]}><Text>Green</Text></View>
        <View style={[styles.cardThree,styles.card]}><Text>Blue</Text></View>
        <View style={[styles.cardFour,styles.card]}><Text>orange</Text></View>
        </View>
       
        </View>
    
    );
  }


const styles = StyleSheet.create({
  
    container:{
        flexDirection:'row',
        padding:2
    },
    headingText:{
        fontSize:20,
        
    },
    card:{
        height:100,
        width:'25%',
        alignItems:'center',
        justifyContent:'center',
        margin:2,
    },
    cardOne:{
        backgroundColor:'red',
    },
    cardTwo:{
        backgroundColor:'green',
    },
    cardThree:{
        backgroundColor:'blue',
    },
    cardFour:{
        backgroundColor:'orange',
    },
})
