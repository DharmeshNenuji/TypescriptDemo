import {StyleSheet} from 'react-native'

import {Colors} from '../../Helper/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    width: '90%',
    margin: 15,
    borderRadius: 20,
    paddingHorizontal: 5,
    backgroundColor: Colors.gray,
    fontSize: 16,
    fontWeight: '600',
    height: 48
  },
  btnSubmit: {
    alignItems: 'center',
    width: '60%',
    marginVertical: 15,
    borderRadius: 20,
    padding: 12,
    backgroundColor: Colors.blue
  },
  textSubmit: {
    fontSize: 16,
    fontWeight: '600'
  }
})

export default styles
