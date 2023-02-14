import { Stack, Tabs } from "expo-router";
import { Platform } from "react-native";

const isAndroid = (type: string) => type !== "android"

export default () => (
    <Stack>
        <Stack.Screen
            options={{
                presentation:"modal",
                headerShown:isAndroid(Platform.OS)
            }}
            name="index"
        />
        <Stack.Screen
            options={{
                presentation:"modal",
                headerShown: Platform.OS !== "android" ? true : false
            }}
            name="onboarding"
        />
    </Stack>

)