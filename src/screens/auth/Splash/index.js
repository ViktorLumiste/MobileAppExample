import React from "react";
import {
    Text,
    View,
    Image,
    Pressable
} from "react-native"
import Button from "../../../components/Button";
import { styles } from "./styles"
import { SafeAreaView } from "react-native-safe-area-context";

const Splash = ({navigation}) => {
    console.log('navigation => ', navigation)

    const onSignup = () => {
        navigation.navigate('SignUp')
    }
    const onSignin = () => {
        navigation.navigate('SignIn')
    }

    return(
        <SafeAreaView>
            <View style={styles.container}>
                <Image resizeMode="contain"  style={styles.image} source={require('../../../assets/splash_image.png')} />
                <Text style={styles.title} >You'll Find </Text>
                <Text style={[styles.title,styles.innerTitle]}>All You Need</Text>
                <Text style={styles.title} > Here!</Text>

                <Button onPress={onSignup} title="Sign Up"></Button>
                <Pressable onPress={onSignin} >
                    <Text style={styles.footerText}>Sign In</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}
export default Splash