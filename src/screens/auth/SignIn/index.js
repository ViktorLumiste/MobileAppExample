import React, { useContext } from "react";
import { useState } from "react";
import { View, Text } from "react-native"
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { styles } from "./styles"
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserContext } from "../../../../App";

const SignIn = ({navigation}) => {
    const [values, setValues] = useState({})
    const {user, setUser} = useContext(UserContext)

    const onBack = () => {
        navigation.goBack()
    }

    const onSignup = () =>{
        navigation.navigate('Signup')
    }

    const onChange = (key,value) =>{
        setValues(v =>({...v, [key]:value}))
    }
    const onSignin = () =>{
        console.log('login values=>', values)
        if(!values?.email || !values?.password){
            Alert.alert('All field names are required!')
            return
        }
        const {email, password} = values
        axios.post('http://192.168.18.4/api/user/login', values)
        .then(async (response)=>{
            console.log('login =>', response)
            const accessToken = response?.data?.accessToken
            console.log(accessToken)
            setUser({accessToken})
            if (response?.data?.token) {
                await AsyncStorage.setItem('auth_token', `${response?.data?.token}`)
            }
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <AuthHeader onBackPress={onBack} title="Sign In"/>
                <Input value={values.email} onChangeText={(v)=> onChange('email', v)} label="Email" placeholder={"example@gmail.com"}/>
                <Input value={values.password} onChangeText={(v)=> onChange('password', v)} isPassword label="Password" placeholder={"********"}/>
                <Button style={styles.button} title="Sign In"></Button>
                <Separator text="Or sign in with" />
                <GoogleLogin />
                <Text style={styles.footerText}>Don't have an account?
                    <Text style={styles.footerLink}>Sign Up</Text>
                </Text>
            </View>
        </SafeAreaView>
    )
}
export default SignIn