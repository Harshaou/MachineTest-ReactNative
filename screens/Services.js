import React, { Component } from 'react';
import {useSelector} from 'react-redux'
import { ScrollView, FlatList } from 'react-native';
import Carousel from '../components/Carousel';
import CardBox from '../components/CardBox';
import MidTitle from '../components/MidTitle'
import ButtonComponent from '../components/ButtonComponent';
import ServicesBlock from '../components/ServicesBlock';
import NoMore from '../components/NoMore';


const Services = () => {

    let data = useSelector(state => state)
    let upcomingService = data.filter(item => item.status === 'ACTIVE')

    return (
      <ScrollView>
          <Carousel />
          <FlatList data={upcomingService} 
          renderItem ={({item}) => {
            return (
              <CardBox
              key={item.name}
              name={item.name} 
              place={item.place}
              profilePic={item.profilePic}
              title='Pending Request' 
              progress={.5} >
              <MidTitle 
              title='Check in here or scan customer QR code to check in when the service about to start' />
              <ServicesBlock 
              placeDetail={item.detailPlace} />
              <ButtonComponent
              name={item.name}
              navigationProp='Payments'
              type='SERVICES' 
              buttonText1='Check In'
              buttonText2='Generete invoice'
              mode='contained' />
              </CardBox>
              )
          }} />
          <NoMore value={false} content='No more services' />
      </ScrollView>
      );
}

export default Services;
