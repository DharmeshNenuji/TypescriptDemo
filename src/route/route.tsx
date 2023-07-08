import React from 'react'
import {SafeAreaView, StyleSheet} from 'react-native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Dashboard from '../screen/Dashboard/Dashboard'
import Home from '../screen/Home/Home'
import Login from '../screen/Login/Login'
import Tab from '../screen/Tab/Tab'

const HomeNavigator = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={'Feed'} component={Dashboard} />
      <Drawer.Screen name={'Article'} component={Dashboard} />
    </Drawer.Navigator>
  )
}
const HomeStack = () => {
  return (
    <HomeNavigator.Navigator initialRouteName={'Home'}>
      <HomeNavigator.Screen name={'Home'} component={Home} />
      <HomeNavigator.Screen name={'Dashboard'} component={Dashboard} />
      <HomeNavigator.Screen name={'Tab'} component={Tab} />
      <HomeNavigator.Screen name={'MyDrawer'} component={MyDrawer} />
      <HomeNavigator.Screen name={'Login'} component={Login} />
    </HomeNavigator.Navigator>
  )
}

const RootNavigator = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {flex: 1}
})

export default RootNavigator
