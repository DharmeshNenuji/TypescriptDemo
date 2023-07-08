import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Login from '../screen/Login/Login'
import SignUp from '../screen/SignUp/SignUp'

const AuthStack = createNativeStackNavigator()

const AuthNavigation = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name={'Login'} component={Login}></AuthStack.Screen>
      <AuthStack.Screen name={'Sign Up'} component={SignUp}></AuthStack.Screen>
    </AuthStack.Navigator>
  )
}

export default AuthNavigation
