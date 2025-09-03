import { StatusBar } from 'expo-status-bar';
import React, {useState} from "react";
import { StyleSheet, Text, View,Button } from 'react-native';

export default function App() {
  const [mensaje,setMensaje]=useState("");
  const obtenerMensaje=async()=> {
    try {
      const response=await fetch("http://localhost:3000/");
      const data=await response.text();
      setMensaje(data);
    }catch(error){
      setMensaje("Error");
      console.error(error);
    }
  }
  return (
    <View style={styles.container}>
      <Text>App Inicial</Text>
      <Button title="Pulsa" onPress={obtenerMensaje} color="orange"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
