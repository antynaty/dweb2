import React from 'react';
import { 
  StyleSheet, 
  Text, 
  FlatList,
  View,
  Image,
  AppRegistry
   
} from 'react-native';  
import Profile from './Profile';


class HistorialCard extends React.Component {
    constructor (){
        super()
        this.state = {
            dataSource:[]
        }
    }
    renderItem = ({item}) => {
        return (
            <View>
                <Image style={{ width: 100, height:100}}
                    source = {{uri: item.picture }} />
                <View> 
                    <Text>
                        {item.name}
                    </Text>
                    <Text>
                        {item.about}
                    </Text>
                </View> 
            </View>
        ) 
    }
    componentDidMount (){
        const url = 'http://www.json-generator.com/api/json/get/cgiLPwERlu?indent=2'
        fetch(url)  // fetch al server
        .then((response) => response.json() )
        .then( ( responseJson)=> {
            dataSource: responseJson.receta_array
        })
        .catch((error) => {
            console.log(error)
        })  
    }
    render() {
        return (
            <View> 
                <FlatList  
                    data = {this.state.dataSource}
                    renderItem={this.renderItem}
                /> 
            </View> 
        );
    }
}

export default HistorialCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,  
        justifyContent:'center',
        alignItems: 'center'
    },  
});
