import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View
} from 'react-native';
import { 
    createBottomTabNavigator,
    createDrawerNavigator
} from 'react-navigation';

// import Ionicons from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';

import Home from './Home';

import Camera from './TabNavigator/Camera';
import Profile from './TabNavigator/Profile';

export default class AppTabNavigator extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerLeft:(
                <View style= { styles.container } >
                    <Ionicons name='md-menu' size={24} onPress={()=> navigation.openDrawer() }/>
                </View> 
            )
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
              },

        })
    },
    // ya no sera profiel, sino un home con las recetas
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

        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
      },
    }

});

const styles = StyleSheet.create({
    container: {
        padding:10,
        backgroundColor: '#F7F8E0',
    }

})