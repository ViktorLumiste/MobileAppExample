import React, {useEffect} from 'react';
import { SafeAreaView } from "react-native";
import SignIn from './src/screens/auth/SignIn';

import { GoogleSignin } from '@react-native-google-signin/google-signin';

import Config from "react-native-config"


const App = () => {
  useEffect(() => {
    GoogleSignin. configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId: Config.GOOGLE_WEB_CLIENT_ID,
      offlineAccess: true,
      iosClientId: Config.GOOGLE_IOS_CLIENT_ID,
      })
  },[])
  return(
    <SafeAreaView>
      <SignIn />
    </SafeAreaView>
  );
};

export default App