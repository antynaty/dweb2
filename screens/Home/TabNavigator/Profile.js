import React from 'react';
import { 
  StyleSheet, 
  Text
} from 'react-native';
import { 
    Container, 
    Content, 
    Header,
    Left,
    Right 
  } from 'native-base';

  import { Ionicons } from '@expo/vector-icons'; 
export default class Profile extends React.Component {
  render() {
    return (
        <Container style={styles.container}> 
            <Header style={styles.Bottom}> 
                <Text style={styles.titulo}> CocinApp </Text>
                <Left>
                    < Ionicons name= "md-menu" style={ {color:'white'}} />
                </Left>    
            </Header>
          
        </Container>
        
    );
  }
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1, 
    //     backgroundColor: rgb(245, 254, 219),
    //     justifyContent:'center',
    //     alignItems: 'center'
    // },
    Bottom:{
        backgroundColor: "#F8ECE0",
        height: 90,
        borderBottomColor: "#F7F8E0"
    },
    titulo:{
        textAlign: 'center',
        fontSize: 21,
        marginTop: 5,
        opacity:0.9
    }
});