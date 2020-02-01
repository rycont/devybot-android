/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, StatusBar, Alert} from 'react-native';
import firebase from 'react-native-firebase';

declare var global: {HermesInternal: null | {}};

const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    firebase
      .messaging()
      .getToken()
      .then(token => console.log('token: ', token));
    firebase.notifications().onNotification(() => {
      Alert.alert('', 'noti!');
      setCount(c => {
        console.log(c);
        return c + 1;
      });
    })();
    return () => {
      console.log(count);
    };
  }, [count]);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>{count}</Text>
      </SafeAreaView>
    </>
  );
};

export default App;
