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
            <View style={styles.flatItem}>
                <Image style={{ width: 100, height:100}}
                    source = {{uri: item.picture }} />
                <View style={styles.flatContent}> 
                    <Text style={styles.itemTextName}>
                        {item.name}
                    </Text>
                    <Text style={styles.itemTextAbout}>
                        {item.about}
                    </Text>
                </View> 
            </View>
        ) 
    }
    renderSeparator = () => {
        return ( 
            <View
                style={{ height:2, width:'100%', backgroundColor:'white' }}
            >
            </View>
        )
    }
    componentDidMount (){
        const url = 'http://www.json-generator.com/api/json/get/cgiLPwERlu?indent=2'
        fetch(url)  // fetch al server
        .then((response) => response.json() )
        .then( ( responseJson)=> {
            this.setState({
                dataSource: responseJson.receta_array});
        })
        .catch((error) => {
            console.log(error)
        })  
    }
    render() {
        return (
            <View style={styles.container}> 
                <FlatList  
                    data = {this.state.dataSource}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index}
                    ItemSeparatorComponent={this.renderSeparator}
                /> 
            </View> 
        );
    }
}

export default HistorialCard;

const styles = StyleSheet.create({
    container: { 
        backgroundColor: '#F7F8E0'
    },  
    flatItem: {
        flex: 1,
        flexDirection:'row',
    },  
    flatContent:{
        flex:1,
        justifyContent:'center',
        marginLeft:5
    },
    itemTextName:{
        fontSize:19
    },
    itemTextAbout:{
        fontSize:17
    }
});
