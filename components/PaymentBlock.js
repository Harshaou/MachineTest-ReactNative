import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';

const PaymentBlock = () => {
    return (      
        <View style={styles.container}>

        <View style={{flexDirection: 'row', }}>
        <FontAwesome5 style={{marginRight: 8}} name="file-invoice" size={24} color="#0997b5"  />
          <View style={{marginRight: 30}}>
            <Title style={{fontSize: 17}}>Invoice item</Title>
            <Text style={{fontSize: 17}}>Session Price</Text>
          </View>
        </View>
        <Title style={{color: 'goldenrod', fontSize: 18}}>$80</Title>
        </View>
      );
}

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
      marginBottom: 10
   }
    
  })

export default PaymentBlock;
