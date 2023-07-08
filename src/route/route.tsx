import React from 'react';
import Home from '../screen/Home/Home';
import Dashboard from '../screen/Dashboard/Dashboard';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';
import Tab from '../screen/Tab/Tab';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Login from '../screen/Login/Login';

const HomeNavigator = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Dashboard} />
      <Drawer.Screen name="Article" component={Dashboard} />
    </Drawer.Navigator>
  );
};
const HomeStack = () => {
  return (
    <HomeNavigator.Navigator initialRouteName="Home">
      <HomeNavigator.Screen name="Home" component={Home} />
      <HomeNavigator.Screen name="Dashboard" component={Dashboard} />
      <HomeNavigator.Screen name="Tab" component={Tab} />
      <HomeNavigator.Screen name="MyDrawer" component={MyDrawer} />
      <HomeNavigator.Screen name="Login" component={Login} />
    </HomeNavigator.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default RootNavigator;
