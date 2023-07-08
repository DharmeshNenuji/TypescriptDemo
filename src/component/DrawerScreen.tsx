import React, {useCallback} from 'react'
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {CommonActions, useNavigation} from '@react-navigation/native'

import {Colors} from '../Helper/colors'

// interface DrawerProps {
//   // onToggle: (status: boolean) => void;
// }

const DrawerScreen = () => {
  // const {navigation, state} = props;
  const navigation = useNavigation()

  const pressLogout = useCallback(() => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          {
            name: 'AuthLogin',
            params: {
              isLogout: true
            }
          }
        ]
      })
    )
  }, [navigation])
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.child}>
        <View style={styles.userView}>
          <Text style={styles.userText}>{'Welcome To Side Menu'}</Text>
          <Text style={styles.userText}>{'Hello User,'}</Text>
        </View>

        <TouchableOpacity onPress={pressLogout} style={styles.btn}>
          <Text style={styles.userText}>{'Logout'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {flex: 1},
  child: {
    flex: 1,
    backgroundColor: Colors.black
  },
  userView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 20,
    borderBottomWidth: 10,
    borderColor: Colors.green
  },
  userText: {fontSize: 20, fontWeight: '900'},
  btn: {
    borderWidth: 2,
    borderColor: Colors.red,
    margin: 50,
    padding: 15,
    alignItems: 'center'
  }
})

export default DrawerScreen
