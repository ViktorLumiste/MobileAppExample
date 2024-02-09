import React from 'react';
import { SafeAreaView } from "react-native"
import Splash from "./src/screens/auth/Splash";
import SignUp from './src/screens/auth/SignUp';

const App = () => {
  return(
    <SafeAreaView>
      <SignUp />
    </SafeAreaView>
  );
};

export default App