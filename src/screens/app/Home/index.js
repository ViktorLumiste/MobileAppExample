import React from "react";
import { View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import { styles } from "./styles"

const Home = () => {
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <Header showSearch={true} title="Find All You Need"></Header>
                <Text>Home</Text>
            </View>
        </SafeAreaView>
    )
}
export default React.memo(Home)