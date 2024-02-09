import React, {useEffect} from 'react';
import { SafeAreaView } from "react-native"
import SignUp from './src/screens/auth/SignUp';

const WEB_CLIENT_ID = '718662104936-u8njpm6eq3bd0e7artao5oj\dotof7fp.apps.googleusercontent.com'
const IOS_CLIENT_ID = '718662104936-u1vhhtibdac3kko6efrvr9v3vam2168a.apps.googleusercontent.com'
const REVERSED_CLIENT_ID = 'com.googleusercontent.apps.718662104936-u1vhhtibdac3kkoefrvr9v3vam2i68a'

const App = () => {
  useEffect(() => {},[])
  return(
    <SafeAreaView>
      <SignUp />
    </SafeAreaView>
  );
};

export default App