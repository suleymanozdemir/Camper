import { Drawer } from "expo-router/drawer";
import React, { useState } from "react";
import { Platform, useColorScheme } from "react-native";
import { Colors } from "../../../constants/Colors";

export default function DrawerLayout() {
    const colorScheme = useColorScheme();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Drawer
            screenListeners={(x) =>
                setIsOpen(!!x.navigation.getState().history[1]?.status)
            }
            initialRouteName="(tabs)"
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: Colors.drawerBgColors.transparent,
                drawerInactiveBackgroundColor:
                    Colors.drawerBgColors.transparent,
                drawerActiveTintColor: Colors.drawerBgColors.active,
                drawerInactiveTintColor: Colors.drawerBgColors.inactive,
                drawerHideStatusBarOnOpen: Platform.OS === "ios" ? true : false,
                overlayColor: Colors.drawerBgColors.transparent,
                drawerStyle: {
                    backgroundColor: Colors.drawerBgColors.bg,
                    width: "60%",
                },
                sceneContainerStyle: {
                    backgroundColor: Colors.drawerBgColors.bg,
                },
            }}
        ></Drawer>
    );
}
