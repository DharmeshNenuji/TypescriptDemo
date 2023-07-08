import React, {useEffect} from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import {useDrawerStatus} from '@react-navigation/drawer'
import {DrawerActions, useNavigation} from '@react-navigation/native'

import Header from '../../component/Header'
import {IMAGES} from '../../Helper/images'
import styles from './HomeStyle'

const Home = () => {
  const navigation: any = useNavigation()
  const status = useDrawerStatus()

  useEffect(() => {}, [status])
  const {menuIcon} = IMAGES
  return (
    <View style={styles.container}>
      <Header
        image={menuIcon}
        onPress={() => {
          navigation.dispatch(DrawerActions.toggleDrawer())
        }}
      />
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Tab')}>
        <Text style={styles.btnText}>{'Tab'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('MyDrawer')}>
        <Text style={styles.btnText}>{'Drawer'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.btnText}>{'Custom'}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home
