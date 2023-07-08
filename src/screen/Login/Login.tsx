import React, {useRef, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './LoginStyle';
import localStorage from '../../Helper/storage';
import {useDispatch} from 'react-redux';
import {setUserData} from '../../Redux/Reducer/AppReducer';
import {CommonActions, useNavigation} from '@react-navigation/native';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const inputEmail = useRef<TextInput>(null);
  const inputPass = useRef<TextInput>(null);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const submit = () => {
    console.log('submit btn pressed');
    localStorage.addItem(email, 'email');
    localStorage.addItem(password, 'password');
    const userData = {
      email,
      password,
    };
    dispatch(setUserData(userData));

    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          {
            name: 'Drawer',
            params: {
              isLogOut: true,
            },
          },
        ],
      }),
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        keyboardType="email-address"
        placeholder="enter email"
        style={styles.textInput}
        numberOfLines={1}
        value={email}
        onChangeText={text => setEmail(text)}
        onSubmitEditing={() => inputPass.current?.focus()}
      />
      <TextInput
        ref={inputPass}
        secureTextEntry={true}
        keyboardType="default"
        placeholder="enter password"
        style={styles.textInput}
        numberOfLines={1}
        value={password}
        onChangeText={pass => setPassword(pass)}
      />
      <TouchableOpacity style={styles.btnSubmit} onPress={() => submit()}>
        <Text style={styles.textSubmit}>{'Submit'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
