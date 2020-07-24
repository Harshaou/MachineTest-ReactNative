import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import { EvilIcons } from '@expo/vector-icons';

const ServicesBlock = () => {
    return (
      <View>
        <View style={styles.container}>
          
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <EvilIcons name="clock" size={24} color="black" color="#0997b5" />
          <View style={{marginRight: 30}}>
            <Title style={{fontSize: 17}}>1:00pm, Sunday, December 29th, 2019</Title>
          </View>
        </View>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <EvilIcons name="location" size={24} color="#0997b5" />
          <View >
            <Title style={{fontSize: 17, color: '#0997b5'}}>50 Hagiwara Tea Garden Dr, San Fransisco, CA 94118</Title>
        </View>
        </View>

        </View>
        
      );
}

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
      marginBottom: 10
   }
    
  })

export default ServicesBlock;
