import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Carousel from '../components/Carousel';
import CardBox from '../components/CardBox';
import MidTitle from '../components/MidTitle'
import ButtonComponent from '../components/ButtonComponent';
import ServicesBlock from '../components/ServicesBlock';


const Services = () => {
    return (
        <View>
          <Carousel />
          <CardBox title='Upcoming Service' progress={.5} >
          <MidTitle title='Check in here or scan customer QR code to check in when the service is about to start' />
          <ServicesBlock />
          <ButtonComponent 
          navigationProp='Payments' 
          type='payment'
          buttonText1='Check In'
          buttonText2='Generate Invoice'
          mode='contained' />
          </CardBox>
        </View>
      );
}

export default Services;
