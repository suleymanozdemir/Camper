import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from "@react-navigation/native";
import { Drawer } from "expo-router/drawer";
import React, { useState } from "react";
import { Platform, useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Colors } from "../../constants/Colors";

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <ThemeProvider
            value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
            <GestureHandlerRootView style={{ flex: 1 }}>
                <Drawer
                    screenListeners={(x) =>
                        setIsOpen(!!x.navigation.getState().history[1]?.status)
                    }
                    screenOptions={{
                        headerShown: false,
                        headerLargeTitleShadowVisible: false,
                        drawerActiveBackgroundColor:
                            Colors.drawerBgColors.activebg,
                        drawerInactiveBackgroundColor:
                            Colors.drawerBgColors.transparent,
                        drawerActiveTintColor: Colors.drawerBgColors.active,
                        drawerInactiveTintColor: Colors.drawerBgColors.inactive,
                        overlayColor: Colors.drawerBgColors.transparent,
                        drawerHideStatusBarOnOpen:
                            Platform.OS === "ios" ? true : false,
                        drawerStyle: {
                            backgroundColor: Colors.drawerBgColors.bg,
                            width: "60%",
                        },
                        sceneContainerStyle: {
                            backgroundColor: Colors.drawerBgColors.bg,
                        },
                    }}
                ></Drawer>
            </GestureHandlerRootView>
        </ThemeProvider>
    );
}
