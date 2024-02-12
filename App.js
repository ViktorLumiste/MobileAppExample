import React, {useEffect} from 'react';
import { SafeAreaView } from "react-native"
import SignUp from './src/screens/auth/SignUp';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const WEB_CLIENT_ID = '296202650771-6kcuk1kmo2ssboue7vlvhbi4othcvukm.apps.googleusercontent.com'
const IOS_CLIENT_ID = '296202650771-1ch5vin90i6g4a6a458s9pts9nomf3b2.apps.googleusercontent.com'
const REVERSED_CLIENT_ID = 'com.googleusercontent.apps.296202650771-1ch5vin90i6g4a6a458s9pts9nomf3b2'

const App = () => {
  useEffect(() => {
    GoogleSignin. configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId: WEB_CLIENT_ID,
      offlineAccess: true,
      iosClientId: IOS_CLIENT_ID,
      })
  },[])
  return(
    <SafeAreaView>
      <SignUp />
    </SafeAreaView>
  );
};

export default App