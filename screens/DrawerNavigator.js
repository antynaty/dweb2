import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View
} from 'react-native';
import { 
    createStackNavigator,
    createDrawerNavigator,
    SafeAreaView
} from 'react-navigation';
 
import HomeScreenTabNavigator from './Home/HomeScreenTabNavigator';
import Profile from './Home/TabNavigator/Tabs/Profile/Profile';
import User from './User/User';

const InnerStackNavigator = createStackNavigator({ // en HOME las tabs de abajo
    tabNavigator: { 
        screen: HomeScreenTabNavigator
    }
});
const AppDrawerNavigator = createDrawerNavigator({  // apunta a Home
    Profile: {
      screen: InnerStackNavigator,
    },
    User:{
        screen: User,
    }
        
});

export default AppDrawerNavigator;
