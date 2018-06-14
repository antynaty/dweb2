import React from 'react';
import { 
    StyleSheet, 
    TextInput, 
    View,
    TouchableOpacity,
    Text,
    KeyboardAvoidingView,
    Button
} from 'react-native';
import createStackNavigator from 'react-navigation';
import Login from './Login';

class LoginForm extends React.Component {
    static navigationOptions = {
        header : null 
    }
    render() {
        return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <TextInput 
                    placeholder="User name/email"
                    placeholderTextColor="#000000"
                    keyboardType= 'email-address'
                    returnKeyType= 'next'
                    style={styles.input}
                    onSubmitEditing={()=> this.refs.txtPassword.focus()}
                />
                <TextInput 
                    placeholder="Password"
                    placeholderTextColor="#000000"
                    returnKeyType= 'go'
                    sourceTextEntry
                    style={styles.input}
                    refs={"textPassword"}
                />
                <View style={styles.buttonContainer}>
                    <Button title= "INGRESAR" onPress={()=> this.props.navigation.navigate('DrawerNavigator')}/> 
                </View>
            </KeyboardAvoidingView>
        </View>
    );
  }
} 
export default LoginForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        position:'absolute',
        left: 0,
        right:0,
        bottom:2
    },
    input: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        //backgroundColor: '#EFFBFB',
        height:40,
        marginBottom:10,
        color:'#000000',
        paddingHorizontal: 10
    },
    buttonContainer: {
        padding: 15,
        backgroundColor:'#FFBF00',
    },
    buttonText: {
        color:'#000000',
        textAlign:'center',
        fontSize: 18
    }
});