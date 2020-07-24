import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';

const MidTitle = ({title}) => {
    return (
        <View style={styles.container} >
          <Title style={{color: 'grey', fontSize: 16}}> {title} </Title>
        </View>
      );
}

const styles = StyleSheet.create({
   container: {
       marginTop: 15,
   }
    
  })

export default MidTitle;
