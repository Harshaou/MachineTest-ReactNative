import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import {useDispatch, useSelector} from 'react-redux'
import { Title } from 'react-native-paper';
import * as Progress from 'react-native-progress';
import { FontAwesome } from '@expo/vector-icons';

const dimensions = Dimensions.get('window')
const width = dimensions.width

const CardBox = ({children, title, progress}) => {

  const status = useSelector(state => state)
  const dispatch = useDispatch()

  console.log(status)
  
    return (
      <View style={styles.container}>

        <View style={styles.secondView}>          
          <View >
          <Title style={{color: 'goldenrod', fontSize: 18}}> {title} </Title>
          <Text>10:22 am, 12/01/2019</Text>
          </View>
          
          <View style={{alignItems: 'center'}}>
          <Progress.Bar style={{marginRight: 20}} progress={progress} width={200} />
          <View style={{flexDirection: 'row', marginRight: 20}}>
          <Text>Request</Text>
          <Text style={styles.serviceText}>Service</Text>
          <Text>Payment</Text>
          </View>
          </View>
        </View>

        <View style={styles.secondLayout}>
          <View style={{flexDirection: 'row'}}>
            <Image style={{height: 60, width: 60, borderRadius: 30, marginRight: 10}} 
            source={{uri: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'}} />
            <View>
            <Title style={{color: '#0997b5', fontSize: 18}}>Rey Pressley</Title>
            <Text style={{fontSize: 16}}>San Fransisco</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', width: '50%'}}>
            <FontAwesome name="handshake-o" size={34} color="#0997b5" />
            <Text style={{fontSize: 16, width: '80%', marginLeft: 10}}>You and Ray had 12 deals  before</Text>
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
    padding: 15,
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
  },
  secondLayout: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginTop: 20,
  },
  
})

export default CardBox;
