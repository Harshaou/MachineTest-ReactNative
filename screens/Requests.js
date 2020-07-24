import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Carousel from '../components/Carousel';
import CardBox from '../components/CardBox';
import MidTitle from '../components/MidTitle'
import RequestBlock from '../components/RequestBlock';
import ButtonComponent from '../components/ButtonComponent';


const Requests = () => {
    return (
        <View>
          <Carousel />
          <CardBox title='Pending Request' progress={.1} >
          <MidTitle title='This customer is availible at:' />
          <RequestBlock />
          <ButtonComponent 
          navigationProp='Services'
          type='services' 
          buttonText1='Reshedule'
          buttonText2='Accept Request'
          mode='outlined' />
          </CardBox>
          
        </View>
      );
}

export default Requests;
