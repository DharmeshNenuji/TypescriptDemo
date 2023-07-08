import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '90%',
    margin: 15,
    borderRadius: 20,
    paddingHorizontal: 5,
    backgroundColor: '#ececec',
    fontSize: 16,
    fontWeight: '600',
    height: 48,
  },
  btnSubmit: {
    alignItems: 'center',
    width: '60%',
    marginVertical: 15,
    borderRadius: 20,
    padding: 12,
    backgroundColor: '#CCCAAA',
  },
  textSubmit: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;
