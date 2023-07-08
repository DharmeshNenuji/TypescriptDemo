import {StyleSheet} from 'react-native'

import {Colors} from '../../Helper/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  btn: {
    flex: 1,
    backgroundColor: Colors.purple,
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    fontWeight: '900',
    color: Colors.white,
    fontSize: 20
  }
})

export default styles
