import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, SafeAreaView, ScrollView, View } from 'react-native';
import Card from './components/Card';
import ScrllCard from './components/ScrllCard';
import Picture from './components/Picture';
import Contact from './components/Contact';


export default function App() {

  return (
    <SafeAreaView>
      {/* <StatusBar/> */}

      <ScrollView>
        <Card />
        <ScrllCard />
        <Picture />
        <Contact />
      </ScrollView>


    </SafeAreaView>
  );
}


