import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/Redux/Store';
import AppNavigation from './src/route/AppNavigation';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
      setIsShowSplash(false);
    }, 1000);
  }, [isShowSplash]);
  return (
    <View style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          {/* <RootNavigator /> */}
          {!isShowSplash && <AppNavigation />}
        </PersistGate>
      </Provider>
    </View>
  );
};

export default App;
