import { StyleSheet } from "react-native";

import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container:{
        borderColor: colors.gray,
        borderWidth:1,
        borderRadius: 4,
        width: 22,
        height:22
    },
    innerContainer:{
        backgroundColor: colors.grey,
        width:'100%',
        height:'100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkIcon:{
        width: '100%',
        height: '100%'
    }
})