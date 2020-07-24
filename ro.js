import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';



const Carousel = () => {

    const programs = [
        {name: 'Yoga pilate Training', type: 'Training-Fitness', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus molestiae libero cupiditate",
        image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60', price: '$80.00'},

        {name: 'Spiritual Training', type: 'Mental-Fitness', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus molestiae libero cupiditate", 
        image: 'https://images.unsplash.com/photo-1500904156668-758cff89dcff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60', price: '$90.00'}
    ]

    const renderItem = (item, index) => {
        return (
            <View>
                <Card >
                <View style={styles.container}>
                <Image style={styles.img} 
                source={{uri: item.image}} />
                

                <View style={{width: '60%'}}>
                <Card.Content>
                <Title > {item.name} </Title>
                <Paragraph style={{fontSize: 16}}> {item.type} </Paragraph>
                <Text style={{marginTop: 5}}> {item.description} </Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 12}}>
                    <Text style={{paddingTop: 8, color: 'grey'}}>For one session</Text>
                    <Title style={{color: 'goldenrod'}}> {item.price} </Title>
                </View>
                </Card.Content>
                </View>
                </View>
            </Card>

            <View style={{flexDirection: 'row'}}>
            <Text>⬤</Text>
            </View>
            </View>
        )
    }


    return (
        
        <Carousel 
        ref = {ref => carousel  = ref}
        data = {programs}
        sliderWidth = {450}
        itemWidth = {450}
        renderItem = {renderItem}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        borderWidth: 1,
        borderColor: '#c6c9c3'
        
    },
    img: {
        width: '40%', 
        height: 180,
    }
    
  })

export default Carousel;
