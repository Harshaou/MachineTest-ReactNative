import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import {useDispatch} from 'react-redux'
import { useNavigation } from '@react-navigation/native';

const ButtonComponent = ({ navigationProp, mode, buttonText1, buttonText2, type, name}) => {

  const dispatch = useDispatch()
  const navigation = useNavigation();

    return ( 
        <View style={styles.container} >
          <Button theme={theme} mode={mode}>{buttonText1}</Button>
          <Button onPress={() => { dispatch({type: type, payload: name}), navigation.navigate(navigationProp)}} theme={theme} mode='contained' >
            {buttonText2} </Button>
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
       marginTop: 35,
       flexDirection: 'row',
       justifyContent: 'space-evenly'
   }
    
  })

export default ButtonComponent;
