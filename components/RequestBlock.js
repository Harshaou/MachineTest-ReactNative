import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Title } from 'react-native-paper';
import { EvilIcons } from '@expo/vector-icons';



const RequestBlock = ({placeDetail}) => {

const dimensions = Dimensions.get('window')
const width = dimensions.width
const fontA = width * .1/1.9
const fontB = width * .1/2.7

    return (
      <View>
        <View style={styles.container}>
        <EvilIcons name="clock" size={fontA} color="black" color="#0997b5" />
          <View >
            <Text style={{fontSize: fontB}} >Sunday, December 22nd 2019</Text>
            <Text style={{fontSize: fontB}}>Sunday, December 29th 2019</Text>
          </View>

        <View >
            <Text style={{fontSize: fontB}} >9:00am - 2:00pm</Text>
            <Text style={{fontSize: fontB}} >9:00am - 2:00pm</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <EvilIcons style={{ marginRight: '1%'}} name="location" size={24} color="#0997b5" />
          <View style={{marginRight: '3%'}}>
            <Title style={{fontSize: 17, color: '#0997b5'}}> {placeDetail} </Title>
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
