/* eslint-disable no-undef */
import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { React, useEffect } from "react";
import { useColorScheme } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const colorScheme = useColorScheme();

    const [loaded, error] = useFonts({
        "SF-Pro-Display-Medium": require("./../assets/fonts/SF-Pro-Display-Medium.otf"),
        "SF-Pro-Display-Regular": require("./../assets/fonts/SF-Pro-Display-Regular.otf"),
        "SF-Pro-Display-Thin": require("./../assets/fonts/SF-Pro-Display-Thin.otf"),
        "SF-Pro-Display-Bold": require("./../assets/fonts/SF-Pro-Display-Bold.otf"),
        "SF-Pro-Display-Black": require("./../assets/fonts/SF-Pro-Display-Black.otf"),
        "SF-Pro-Display-Heavy": require("./../assets/fonts/SF-Pro-Display-Heavy.otf"),
        "SF-Pro-Display-Light": require("./../assets/fonts/SF-Pro-Display-Light.otf"),
        "SF-Pro-Display-SemiBold": require("./../assets/fonts/SF-Pro-Display-Semibold.otf"),
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded && !error) {
        return null;
    }

    return (
        <ThemeProvider
            value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
            <Stack
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="index" />
                <Stack.Screen name="login" />
            </Stack>
        </ThemeProvider>
    );
}
