import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

interface HeaderProps {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  image?: ImageSourcePropType;
}

function Header(props: HeaderProps) {
  return (
    <View style={headerStyle.container}>
      <TouchableOpacity onPress={props?.onPress}>
        <Image
          style={headerStyle.leftMenu}
          source={props?.image ?? require('../resource/image/menu.png')}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={headerStyle.titleParent}>
        <Text>Title</Text>
      </View>
      <Image
        style={headerStyle.leftMenu}
        source={props?.image ?? require('../resource/image/menu.png')}
        resizeMode="contain"
      />
    </View>
  );
}

const headerStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#AAffdd',
    // justifyContent: 'space-around',
    alignItems: 'center',
    height: 64,
  },
  titleParent: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  leftMenu: {
    width: 20,
    height: 20,
    tintColor: '#000',
  },
});

export default Header;
