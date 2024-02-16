import React, {useEffect} from 'react';
import { colors } from './src/utils/colors';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { GoogleSignin } from '@react-native-google-signin/google-signin';

import Config from "react-native-config"
import Splash from './src/screens/auth/Splash';
import SignUp from './src/screens/auth/SignUp';
import SignIn from './src/screens/auth/SignIn';

const theme = {
  colors:{
    background: colors.white
  }
}

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
    <SafeAreaProvider>
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
          <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
          <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
          <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App