import React, {useEffect} from 'react';
import { SafeAreaView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/auth/Splash';

import { GoogleSignin } from '@react-native-google-signin/google-signin';

import Config from "react-native-config"
import Splash from './src/screens/auth/Splash';

const Stack = createNativeStackNavigator();

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
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App