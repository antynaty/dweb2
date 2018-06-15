import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Plataform,

} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import Splash from './screens/Splash/Splash';
import Login from './screens/Login/Login'; 
import LoginForm from './screens/Login/LoginForm';
import DrawerNavigator from './screens/DrawerNavigator';
import HistorialCard from './screens/Home/TabNavigator/HisotrialCard';

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
      //<Splash/>
    );
  }
}
const RootStack = createStackNavigator({
  // Splash : {
  //   screen : Splash
  // },
  Login : {
    screen : Login
  },
  LoginForm : {
    screen : LoginForm
  },
  HistorialCard: {
    screen: HistorialCard
  },
  DrawerNavigator :{
    screen : DrawerNavigator,
    navigationOptions: {
      header: null 
    }
  }
}, { 
  navigationOptions:{
    gesturesEnable: false
  }
})
