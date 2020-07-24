import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Carousel from '../components/Carousel';
import CardBox from '../components/CardBox';
import MidTitle from '../components/MidTitle'
import ButtonComponent from '../components/ButtonComponent';
import PaymentBlock from '../components/PaymentBlock';

const Payments = () => {
    return (
        <View>
          <Carousel />
          <CardBox title='Pending Payment' progress={.9} >
          <MidTitle title='Service is complete, please confirm payment amount:' />
          <PaymentBlock />
          <ButtonComponent
          navigationProp='Payments'
          buttonText1='Start a Chat'
          buttonText2='Resend Invoice'
          mode='outlined'
          type='payment'/>
          </CardBox>
        </View>
      );
}

export default Payments;
