/* eslint-disable no-undef */
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from "@react-navigation/native";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import { QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { useFonts } from "expo-font";
import { router, SplashScreen, Stack } from "expo-router";
import { React, useEffect } from "react";
import { useColorScheme } from "react-native";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            cacheTime: 1000 * 60 * 60 * 24 * 5, // 5 days
        },
    },
});

const asyncStoragePersister = createAsyncStoragePersister({
    storage: AsyncStorage,
});

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
            getToken();
        }
    }, [loaded]);

    const getToken = async () => {
        const token = await AsyncStorage.getItem("token");
        if (token) {
            return router.replace("/home");
        }
    };

    if (!loaded && !error) {
        return null;
    }

    return (
        <PersistQueryClientProvider
            client={queryClient}
            persistOptions={{ persister: asyncStoragePersister }}
        >
            <ThemeProvider
                value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
            >
                <Stack
                    initialRouteName="index"
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name="index" />
                    <Stack.Screen name="login" />
                    <Stack.Screen name="forgotPassword" />
                    <Stack.Screen name="register/index" />
                    <Stack.Screen name="home/(drawer)" />
                </Stack>
            </ThemeProvider>
        </PersistQueryClientProvider>
    );
}
