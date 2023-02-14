import { Text, View, TouchableOpacity, SafeAreaView, Platform, useColorScheme } from "react-native"
import React, { useEffect } from "react"
import { Link, useRouter } from "expo-router"

const Onboarding = () => {

    const color = useColorScheme()
    console.log(color)
    const router = useRouter()

    return (
        <SafeAreaView style={{
            flex: 1,
            // backgroundColor:"#000"
        }}>
            <View style={{
                marginTop: Platform.OS === "android" ? 40 : 0
            }}>
                <Text style={{
                    color: color === "light" ? "black" : "white"
                }} >Index  Screen</Text>
                <Link href={"/store/home"}>home</Link>
                {/* <Link href={{
                    pathname: "/auth/gunaNeelamegam",
                    params: {
                        name: "guna", about: {
                            dept: "CSE"
                        }
                    }
                }}>go to index</Link> */}
            </View>
        </SafeAreaView>
    )
}


export default Onboarding