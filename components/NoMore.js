import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Title } from 'react-native-paper';

const NoMore = () => {
    const [show, setShow] = useState(false)


    return (
        <View style={styles.container} >
            {!show ? <Button onPress={() => setShow(true)} theme={theme}
             mode='contained'>Show more</Button> : <Title style={{color: '#0997b5'}}>No more booking </Title> }
        </View>
    );
}


const theme = {
    colors: {
      primary: '#0997b5'
    }
  }
  
  const styles = StyleSheet.create({
     container: {
         marginTop: 40,
         marginBottom: 40,
         flexDirection: 'row',
         justifyContent: 'center'
     }
    })
  
  

export default NoMore;
