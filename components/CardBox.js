import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { Title } from 'react-native-paper';
import * as Progress from 'react-native-progress';
import { FontAwesome } from '@expo/vector-icons';

const dimensions = Dimensions.get('window')
const width = dimensions.width
const progressWidth = width/2.5


const CardBox = ({children, title, progress, name, place, profilePic}) => {  
    return (
      <View style={styles.container}>

        <View style={styles.secondView}>          
          <View >
          <Title style={{color: 'goldenrod', fontSize: 18}}> {title} </Title>
          <Text style={{marginLeft: '2%'}}>10:22 am, 12/01/2019</Text>
          </View>
          
          <View style={{alignItems: 'center'}}>
          <Progress.Bar style={{marginRight: 20}} progress={progress} width={progressWidth} />
          <View style={{flexDirection: 'row', marginRight: '6%'}}>
          <Text style={{fontSize: 10}}>Request</Text>
          <Text style={styles.serviceText}>Service</Text>
          <Text style={{fontSize: 10}}>Payment</Text>
          </View>
          </View>
        </View>

        <View style={styles.secondLayout}>
          <View style={{flexDirection: 'row'}}>
            <Image style={{height: 60, width: 60, borderRadius: 30, marginRight: 10}} 
            source={{uri: profilePic}} />
            <View>
            <Title style={{color: '#0997b5', fontSize: 18}}> {name} </Title>
            <Text style={{fontSize: 16}}> {place} </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', width: '50%'}}>
            <FontAwesome name="handshake-o" size={34} color="#0997b5" />
            <Text style={{fontSize: 16, width: progressWidth/1.5, marginLeft: '5%'}}>You and {name} had 12 deals  before</Text>
          </View>
        </View>

        {children}

      </View>
    )
}


  const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    elevation: 4,
    shadowOffset: {width: 0, height: 3},
    shadowColor: 'black',
    shadowOpacity: 0.3,
    margin: 7,
    padding: 10,
  }, 
  secondView: {
    width: width,
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  serviceText: {
    marginRight: '10%', 
    marginLeft: '10%',
    fontSize: 10
  },
  secondLayout: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginTop: 20,
  },
  
})

export default CardBox;
