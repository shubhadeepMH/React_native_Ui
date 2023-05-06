import React from 'react'
import { Text, StyleSheet, View,ScrollView } from 'react-native'

export default function ScrllCard() {
 
    return (
      <View>
        <Text style={styles.headingText}> Scroll Card </Text>
        <ScrollView horizontal={true}>
        <View style={styles.container}>
        <View style={styles.card}>
        <Text>
            Hello!
        </Text>
        </View>
        <View style={styles.card}>
        <Text>
            Hello!
        </Text>
        </View>
        <View style={styles.card}>
        <Text>
            Hello!
        </Text>
        </View>
        <View style={styles.card}>
        <Text>
            Hello!
        </Text>
        </View>
        <View style={styles.card}>
        <Text>
            Hello!
        </Text>
        </View>
        <View style={styles.card}>
        <Text>
            Hello!
        </Text>
        </View>
        <View style={styles.card}>
        <Text>
            Hello!
        </Text>
        </View>
        <View style={styles.card}>
        <Text>
            Hello!
        </Text>
        </View>
        </View>
        </ScrollView>
      </View>
    );
  
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:20,
        color:'green'
    },
    container:{
        padding:5,
        margin:5,
        flexDirection:'row'
    },
    card:{
        margin:3,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:100,
        width:100,
        backgroundColor:'gray'
        
    },


})
