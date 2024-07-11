import { Stack } from "expo-router"

export default function TesteLayout (){
    return(
        <Stack
            screenOptions={{
                headerTitleAlign: "center",
                headerTitleStyle: {
                    fontWeight: "bold",
                },
            }}
        >
            <Stack.Screen name="index" options={{ headerShown:false}}/>
            <Stack.Screen name="semHead" options={{ headerShown:false}}/>
            <Stack.Screen name="comHead" />
        </Stack>
    )
}