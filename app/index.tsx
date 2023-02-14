import { Text, View, TouchableOpacity, SafeAreaView, Platform, useColorScheme } from "react-native"
import React, { useEffect } from "react"
import { Link } from "expo-router"


//create as the onboarding screen


const Index = () => {

    const color = useColorScheme()
    console.log(color)
    return (
        <SafeAreaView style={{
            flex: 1,
        }}>
            <View style={{
                marginTop: Platform.OS === "android" ? 40 : 0
            }}>
                <Text>Index  Screen</Text>
                <Link href={"onboarding"}>go to onboarding</Link>
            </View>
        </SafeAreaView>
    )
}


export default Index