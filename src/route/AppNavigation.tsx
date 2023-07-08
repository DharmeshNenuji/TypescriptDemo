import React, {useEffect, useState} from 'react'
import {SafeAreaView, StyleSheet} from 'react-native'
import {useSelector} from 'react-redux'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import AuthNavigation from './AuthNavigation'
import DrawerNavigation from './DrawerNavigation'

const Stack = createNativeStackNavigator()

const AppNavigation = () => {
  const userData = useSelector((state: any) => state?.user?.userData)
  const [, setISLogin] = useState(false)
  // const dispatch = useDispatch()

  useEffect(() => {
    // console.log('user data: ', userData);
    // console.log('user data: ', !!userData?.email && !!userData?.password);
    setISLogin(!!userData?.email && !!userData?.password)
  }, [userData])
  // console.log('isLogin: ', isLogin);

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={!!userData?.email && !!userData?.password ? 'Drawer' : 'AuthLogin'}
          screenOptions={{headerShown: false}}
        >
          <Stack.Screen name={'AuthLogin'} component={AuthNavigation} />
          <Stack.Screen name={'Drawer'} component={DrawerNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {flex: 1}
})
export default AppNavigation
