import React from 'react';
import { 
    StyleSheet,  
} from 'react-native';
import { 
    createBottomTabNavigator,
    createDrawerNavigator
} from 'react-navigation';
import { 
    Container,
    Text,
    Content,
    Icon
} from 'native-base';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';
 
import Camera from './TabNavigator/Tabs/Camera/Camera';
import Profile from './TabNavigator/Tabs/Profile/Profile';

export default class AppTabNavigator extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerLeft:
                <Ionicons name='md-menu' size={24} style={{paddingLeft:10}}
                onPress={()=> navigation.openDrawer() }/> ,
            title: "CocinApp " 
        }
    }
    render() {
      return (
          <HomeScreenTabNavigator/> 
      );
    }
  }

const HomeScreenTabNavigator = createBottomTabNavigator ({
    Camera : {
        screen: Camera,
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Camera') {
                  iconName = `ios-camera${focused ? '' : '-outline'}`;
                }
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            }
        })
    },
    // ya no sera profile, sino un home con las recetas
    Profile : {
        screen: Profile,
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Profile') {
                  iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                }
                return <Ionicons name={iconName} size={25} color={tintColor} />;
              },

        }) 
    }

});

const styles = StyleSheet.create({
    container: {
        padding:10, 
        flexDirection: 'row'
    }, 
    titulo:{
        textAlign: 'center',
        fontSize: 21,
        marginRight: 30,
        opacity:0.9
    }

})