import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, sli } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';



const Carousel = () => {

    const [carousel, setCarousel] = useState(1)

    const dataOne = {name: 'Yoga Pilate Training', type: 'Training-Fitness', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus molestiae libero cupiditate",
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60', price: '$80.00'}
    
    const dataTwo = {name: 'Spiritual Training', type: 'Mental-Fitness', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus molestiae libero cupiditate", 
    image: 'https://images.unsplash.com/photo-1500904156668-758cff89dcff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60', price: '$90.00'}


    const renderItem = () => {
        if(carousel === 1) {
            return (
                <View>
                <View style={styles.container}>
                <Image style={styles.img} 
                source={{uri: dataOne.image}} />
                
                <View style={{width: '60%'}}>
                <Card.Content>
                <Title style={{color: '#0997b5'}} > {dataOne.name} </Title>
                <Paragraph style={{fontSize: 16}}> {dataOne.type} </Paragraph>
                <Text style={{marginTop: 5}}> {dataOne.description} </Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 12}}>
                    <Text style={{paddingTop: 8, color: 'grey'}}>For one session</Text>
                    <Title style={{color: 'goldenrod'}}> {dataOne.price} </Title>
                </View>
                </Card.Content>
                </View>
                </View>
                </View>
            )
        } else  {
            return (
                <View>
                    <View style={styles.container}>
                    <Image style={styles.img} 
                    source={{uri: dataTwo.image}} />
                    
                    <View style={{width: '60%'}}>
                    <Card.Content>
                    <Title style={{color: '#0997b5'}} > {dataTwo.name} </Title>
                    <Paragraph style={{fontSize: 16}}> {dataTwo.type} </Paragraph>
                    <Text style={{marginTop: 5}}> {dataTwo.description} </Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 12}}>
                        <Text style={{paddingTop: 8, color: 'grey'}}>For one session</Text>
                        <Title style={{color: 'goldenrod'}}> {dataTwo.price} </Title>
                    </View>
                    </Card.Content>
                    </View>
                    </View>
                </View>
            )
        }
    }

    let carouselColor1 = carousel === 1 ? '#cbced1' : '#e6e9ed'
    let carouselColor2 = carousel === 1 ? '#e6e9ed' : '#cbced1'


    return (
        <View>
            {renderItem()}
            <TouchableWithoutFeedback onPress={() => carousel === 1 ? setCarousel(2) :  setCarousel(1)}>
            <View style={{flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{margin: 1, color:  carouselColor1}}>⬤</Text>
            <Text style={{margin: 1, color:  carouselColor2}}>⬤</Text>
            </View>
            </TouchableWithoutFeedback>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        
        
    },
    img: {
        width: '40%', 
        height: 180,
    }
    
  })

export default Carousel;
