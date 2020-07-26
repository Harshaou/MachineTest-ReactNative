import React, { Component } from 'react';
import {useSelector} from 'react-redux'
import { ScrollView, FlatList } from 'react-native';
import Carousel from '../components/Carousel';
import CardBox from '../components/CardBox';
import MidTitle from '../components/MidTitle'
import ButtonComponent from '../components/ButtonComponent';
import PaymentBlock from '../components/PaymentBlock';

const Payments = () => {

    let data = useSelector(state => state)
    let pendingPayment = data.filter(item => item.status === 'PAYMENT')


    return (
      <ScrollView>
          <Carousel />
          <FlatList data={pendingPayment} 
          renderItem ={({item}) => {
            return (
              <CardBox
              key={item.name}
              name={item.name} 
              place={item.place}
              profilePic={item.profilePic}
              title='Pending payment' 
              progress={0.9} >
              <MidTitle 
              title='Service is complete, please confirm payment amount' />
              <PaymentBlock 
              placeDetail={item.detailPlace} />
              <ButtonComponent
              name={item.name}
              navigationProp='Payments'
              type='PAYMENT' 
              buttonText1='Start a chat'
              buttonText2='Resend invoice'
              mode='outlined' />
              </CardBox>
              )
          }} />
      </ScrollView>
      );
}

export default Payments;
