import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Button, TouchableOpacity, Linking } from 'react-native'


export default function Picture() {
    redirect = () => {
        Linking.openURL('https://en.wikipedia.org/wiki/Taj_Mahal')
    }


    {
        return (
            <View>
                <Text style={styles.headingText}> Image </Text>
                <View style={styles.container}>
                    {/* image */}
                    <Image style={styles.image} source={{ uri: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=600' }}
                    />
                    {/* Data */}
                    <View style={styles.dataContainer}>
                        <View >
                            <View style={styles.mainData}>
                                <Text style={styles.title}>**Taj Mahal**</Text>
                                <Text style={styles.far}>15 Mins...</Text>
                            </View>
                            <Text style={styles.description}>The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India..</Text>
                        </View>

                        {/* Button */}
                        <TouchableOpacity onPress={redirect} style={styles.button}><Text>For More</Text></TouchableOpacity>

                    </View>

                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    headingText: {
        fontSize: 25
    },
    container: {


    },
    image: {
        width: 400,
        height: 200,
        borderRadius: 30,

    },
    dataContainer: {
        padding: 15,
        backgroundColor: 'violet',
    },
    mainData: {

        flexDirection: 'row'

    },

    title: {
        fontSize: 20,
        color: 'green'
    },
    description: {
        fontFamily: 'serif'
    },
    far: {
        position: 'absolute',
        right: 0
    },
    button: {
        flex: 1,
        backgroundColor: 'blue',
        padding: 5,
        alignItems: 'center',
        marginHorizontal: 30,
        elevation: 20,
        marginTop: 5,
        shadowColor: 'blue',
        borderRadius: 5,
    },
})
