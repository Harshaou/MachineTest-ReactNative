import React from 'react';
import {useSelector} from 'react-redux'
import {FlatList, ScrollView } from 'react-native';
import Carousel from '../components/Carousel';
import CardBox from '../components/CardBox';
import MidTitle from '../components/MidTitle'
import RequestBlock from '../components/RequestBlock';
import ButtonComponent from '../components/ButtonComponent';
import NoMore from '../components/NoMore';



const Requests = () => {

  let data = useSelector(state => state)
  let pendingRequest = data.filter(item => item.status === 'pending')

  
    return (
        <ScrollView>
          <Carousel />
          <FlatList data={pendingRequest} 
          renderItem ={({item}) => {
            return (
              <CardBox
              key={item.name}
              name={item.name} 
              place={item.place}
              profilePic={item.profilePic}
              title='Pending Request' 
              progress={0.1} >
              <MidTitle title='This customer is availible at:' />
              <RequestBlock 
              placeDetail={item.detailPlace} />
              <ButtonComponent
              name={item.name}
              navigationProp='Services'
              type='ACTIVE' 
              buttonText1='Reshedule'
              buttonText2='Accept Request'
              mode='outlined' />
              </CardBox>
              )
          }} />
          <NoMore value={true} content='No more pending requests' />
        </ScrollView>
      );
}

export default Requests;

