import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Title } from 'react-native-paper';

const NoMore = ({value, content}) => {
    const [show, setShow] = useState(value)


    return (
        <View style={styles.container} >
            {show ? <Button onPress={() => setShow(false)} theme={theme}
             mode='contained'>Show more</Button> : <Title style={{color: '#0997b5'}}> {content} </Title> }
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
