import React from 'react';
import { 
  StyleSheet, 
  Text,
  AppRegistry, 
  TouchableOpacity,
  View
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
// import Gallery from './Home/TabNavigator/Tabs/Camera/Gallery';

export default class User extends React.Component {
    static navigationOptions = {
        header : null 
      }
    render() {
        return (
            <Container >  
                <Content> 
                    <Text style={styles.titulo} > Profile </Text>  
                </Content>
                <Content >
                    <View style={styles.header}>
                        <View style={styles.fotoContainer}> 
                        </View>
                        <Text> NOMBRE USUARIO</Text>
                    </View>
                </Content>
                <Content >
                    <View style={styles.center}>  

                        <TouchableOpacity  
                            underlayColor='#fff'
                            onPress={()=>  this.props.navigation.navigate('Gallery') }
                        >
                            <Text> Nueva Receta </Text> 
                        </TouchableOpacity>
                        <TouchableOpacity  
                            underlayColor='#fff'
                            onPress={()=>  this.props.navigation.navigate('Gallery') }
                        >
                            <Text> Editar Perfil </Text> 
                        </TouchableOpacity>            
            
                    </View>                                   
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
    },
    header:{
        marginTop: 30,
        height: '90%',
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#FFBF00'
    },
    fotoContainer:{
        width: 140,
        height:140,
        borderRadius:100,
        borderWidth:4,
        borderColor:'#fff',
        backgroundColor:'#eee'
    },
    center:{  
        justifyContent: 'center',
        alignItems:'center',
    }
     
});
AppRegistry.registerComponent('App', () => App);
 