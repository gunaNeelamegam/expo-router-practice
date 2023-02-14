import { useEffect } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { useSearchParams, usePathname } from "expo-router"

const UserName = () => {

    const { name, about } = useSearchParams()
    // console.log(usePathname())
    console.log(about)
    return (
        <View>
            <Text>{name} : { }</Text>
        </View>
    )
}

export default UserName