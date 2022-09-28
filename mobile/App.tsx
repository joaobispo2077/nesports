import {
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
  useFonts,
} from '@expo-google-fonts/inter';
import { Subscription } from 'expo-modules-core';
import * as Notifications from 'expo-notifications';
import { useEffect, useRef } from 'react';
import { StatusBar } from 'react-native';

import { Background } from './src/components/Background';
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';
import { getPushNotificationToken } from './src/services/notifications';

import './src/services/notifications/config';

export default function App() {
  const getNotificationListener = useRef<Subscription>();
  const responseNotificationListener = useRef<Subscription>();

  const [isFontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  useEffect(() => {
    getPushNotificationToken().then((token) => {
      console.log(token);
    });
  });

  useEffect(() => {
    getNotificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        console.log('@notification', notification);
      });

    responseNotificationListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log('@response', response);
      });

    return () => {
      getNotificationListener.current?.remove();
      responseNotificationListener.current?.remove();
    };
  }, []);

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {isFontsLoaded ? <Routes /> : <Loading />}
    </Background>
  );
}
