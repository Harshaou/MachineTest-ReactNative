import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import Constants from 'expo-constants'


const MainHead = () => {
  
    const navigation = useNavigation()

    return (
      <View style={styles.container}>
        <Feather name="menu" size={30} color="black" />
        <FontAwesome5 name="search" size={26} color="black" />
        <Title style={{fontSize: 30}} >Trova</Title>
        <FontAwesome5 name="comment" size={30} color="black" />
        <Feather name="bell" size={30} color="black" />
        
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }
  
})


export default MainHead