import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AuthNavigation from './AuthNavigation';
import DrawerNavigation from './DrawerNavigation';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const userData = useSelector((state: any) => state?.user?.userData);
  const [isLogin, setISLogin] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log('user data: ', userData);
    console.log('user data: ', !!userData?.email && !!userData?.password);
    setISLogin(!!userData?.email && !!userData?.password);
  }, [userData]);
  console.log('isLogin: ', isLogin);

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={
            !!userData?.email && !!userData?.password ? 'Drawer' : 'AuthLogin'
          }
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="AuthLogin" component={AuthNavigation} />
          <Stack.Screen name="Drawer" component={DrawerNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default AppNavigation;
