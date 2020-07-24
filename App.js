import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Provider } from  'react-redux'
import {createStore} from 'redux'
import reducer from './redux/reducer'
import MainHead from './components/MainHead'
import Payments from './screens/Payments';
import Services from './screens/Services';
import Requests from './screens/Requests';

const App = () => {

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();
const store = createStore(reducer)

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Requests"
      
      tabBarOptions={{
        activeTintColor: 'white',
        labelStyle: { fontSize: 18 },
        style: {backgroundColor: '#0997b5' },
      }} >
      <Tab.Screen
        name="Requests"
        component={Requests}
        options={{ tabBarLabel: 'Requests' }}
      />
      <Tab.Screen
        name="Services"
        component={Services}
        options={{ tabBarLabel: 'Services' }}
      />
      <Tab.Screen
        name="Payments"
        component={Payments}
        options={{ tabBarLabel: 'Payments' }}
      />
    </Tab.Navigator>
  );
}

  const options = {
    activeTintColor: 'red',
    headerStyle: {
      backgroundColor: "white"
    }
  }

  return (
    <Provider store={store} >
    <NavigationContainer >
      <Stack.Navigator  >
      <Stack.Screen name="MyTabs" 
      options={{
        headerTitle: () => <MainHead />, 
        headerStyle: {height: 120},
        headerTitleAllowFontScaling: true }} 
        component={MyTabs} />
    </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}



export default App;
