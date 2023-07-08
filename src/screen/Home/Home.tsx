import React, {useEffect} from 'react';
import {ImageSourcePropType, Text, TouchableOpacity, View} from 'react-native';
import styles from './HomeStyle';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import Header from '../../component/Header';
import {useDrawerStatus} from '@react-navigation/drawer';

type Props = {};

const Home = (props: Props) => {
  const navigation = useNavigation();
  const status = useDrawerStatus();

  useEffect(() => {
    console.log('drawer status is --- > ', status);
  }, [status]);
  const menuIcon: ImageSourcePropType = require('../../resource/image/menu.png');
  return (
    <View style={{flex: 1}}>
      <Header
        image={menuIcon}
        onPress={() => {
          console.log('clicked');
          navigation.dispatch(DrawerActions.toggleDrawer());
        }}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Tab')}>
        <Text style={styles.btnText}>{'Tab'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('MyDrawer')}>
        <Text style={styles.btnText}>{'Drawer'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.btnText}>{'Custom'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
