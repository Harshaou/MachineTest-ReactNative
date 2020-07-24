import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import { AntDesign, EvilIcons } from '@expo/vector-icons';

const RequestBlock = () => {
    return (
      <View>
        <View style={styles.container}>
        <EvilIcons name="clock" size={24} color="black" color="#0997b5" />
          <View >
            <Text style={{fontSize: 17, fontWeight: '700'}} >Sunday, December 22nd 2019</Text>
            <Text style={{fontSize: 17, fontWeight: '700'}}>Sunday, December 29th 2019</Text>
          </View>

          <View style={{marginRight: 30}}>
            <Text style={{fontSize: 17, fontWeight: '700'}}>9:00 am - 2:00 pm</Text>
            <Text style={{fontSize: 17, fontWeight: '700'}}>9:00 am - 2:00 pm</Text>
          </View>

        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <EvilIcons name="location" size={24} color="#0997b5" />
          <View style={{marginRight: 30}}>
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

export default RequestBlock;
