import React from 'react';
import { 
  StyleSheet, 
  Text,
  AppRegistry,
  FlatList
} from 'react-native';
import { 
    Container, 
    Content, 
    Header,
    Left,
    Right,
    Card,
    CardItem
  } from 'native-base'; 
import { Ionicons } from '@expo/vector-icons'; 
import {createStackNavigator} from 'react-navigation'; 
import HistorialCard from './HisotrialCard';

export default class Profile extends React.Component {

    render() {
        return (
            <Container >  
                <Content> 
                    <Text style={styles.titulo} > Tu historial de recetas </Text> 
                    < HistorialCard  navigation={this.props.navigation}/>
                </Content>
                     
            </Container>
            
        );
    }
}

const styles = StyleSheet.create({ 
    titulo:{
        textAlign: 'center',
        fontSize: 21,
        marginTop: 5,
        opacity:0.9,
        backgroundColor: '#FFBF00'
    }
});
AppRegistry.registerComponent('App', () => App);

