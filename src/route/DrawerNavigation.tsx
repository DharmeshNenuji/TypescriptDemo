import {createDrawerNavigator} from '@react-navigation/drawer';
import React, {useState} from 'react';
import Home from '../screen/Home/Home';
import Dashboard from '../screen/Dashboard/Dashboard';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import DrawerScreen from '../component/DrawerScreen';
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  // const offsets = useSafeAreaInsets();
  // const [isOpen, setISOpen] = useState(false);
  return (
    <Drawer.Navigator
      // initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerStyle: {
          width: 300,
          // marginTop: offsets.top,
          // marginBottom: offsets.bottom,
          // marginLeft: isOpen ? 0 : 0,
          overflow: 'hidden',
          backgroundColor: '#000fff',
        },
        keyboardDismissMode: 'on-drag',
      }}
      drawerContent={props => <DrawerScreen {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Feed" component={Dashboard} />
      <Drawer.Screen name="Article" component={Dashboard} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
