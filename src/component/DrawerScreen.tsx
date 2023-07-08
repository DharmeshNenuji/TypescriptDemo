import React, {useCallback} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../Helper/colors';
import {CommonActions, useNavigation} from '@react-navigation/native';

interface DrawerProps {
  // onToggle: (status: boolean) => void;
}

const DrawerScreen = (props: DrawerProps) => {
  // const {navigation, state} = props;
  const navigation = useNavigation();

  const pressLogout = useCallback(() => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          {
            name: 'AuthLogin',
            params: {
              isLogout: true,
            },
          },
        ],
      }),
    );
  }, [navigation]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#EDDAA0',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 50,
            paddingHorizontal: 20,
            borderBottomWidth: 10,
            borderColor: Colors.green,
          }}>
          <Text style={{fontSize: 20, fontWeight: '900'}}>
            Welcome To Side Menu
          </Text>
          <Text style={{fontSize: 20, fontWeight: '900'}}>Hello User,</Text>
        </View>

        <TouchableOpacity
          onPress={pressLogout}
          style={{
            borderWidth: 2,
            borderColor: Colors.red,
            margin: 50,
            padding: 15,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, fontWeight: '900'}}>{'Logout'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DrawerScreen;
