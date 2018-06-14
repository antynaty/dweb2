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

import Home from './Home/Home';
import HomeScreenTabNavigator from './Home/HomeScreenTabNavigator';

const InnerStackNavigator = createStackNavigator({ // en HOME las tabs de abajo
    tabNavigator: { 
        screen: HomeScreenTabNavigator
    }
});
const AppDrawerNavigator = createDrawerNavigator({  // apunta a Home
    Home: {
      screen: InnerStackNavigator,
    }
});

export default AppDrawerNavigator;
