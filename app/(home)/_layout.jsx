import {
    DarkTheme,
    DefaultTheme,
    DrawerActions,
    ThemeProvider,
} from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { Text, TouchableOpacity, useColorScheme, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Bell from "../../assets/icon/Outline/bell.svg";
import Grid from "../../assets/icon/Outline/grid.svg";
import Home from "../../assets/icon/Outline/home.svg";

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const navigation = useNavigation();

    const openDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };

    return (
        <ThemeProvider
            value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
            <GestureHandlerRootView style={{ flex: 1 }}>
                <Drawer
                    screenOptions={{
                        headerShown: true,
                        headerLargeTitleShadowVisible: false,
                        headerTintColor: "#000",
                        drawerActiveBackgroundColor: "#fff",
                        drawerContentStyle: {
                            flexDirection: "row",
                            backgroundColor: "#65A30D",
                        },
                        drawerActiveTintColor: "#365314",
                        drawerItemStyle: {
                            flex: 1,
                            width: 100,
                        },
                        drawerContentContainerStyle: {
                            flex: 1,
                        },
                        headerLeft: () => (
                            <TouchableOpacity onPress={openDrawer}>
                                <Grid width={32} height={32} fill={"#000"} />
                            </TouchableOpacity>
                        ),
                        headerRight: () => (
                            <TouchableOpacity>
                                <Bell width={32} height={32} fill="#000" />
                            </TouchableOpacity>
                        ),
                    }}
                >
                    <Drawer.Screen
                        name="campingTrips/addTripPage"
                        options={{
                            headerTitle: "Camping Trips",
                            drawerLabel: () => (
                                <View className="flex-auto">
                                    <Text className="flex-auto ">Deneme</Text>
                                </View>
                            ),
                            drawerIcon: () => (
                                <View className="flex-1">
                                    <Home
                                        width={24}
                                        height={24}
                                        fill={"#4D7C0F"}
                                    />
                                </View>
                            ),
                        }}
                    />
                    <Drawer.Screen
                        name="campingTrips/addTripPage2"
                        options={{
                            headerTitle: "Camping Trips",
                            drawerLabel: () => (
                                <View className="flex-auto">
                                    <Text className="flex-auto ">Deneme</Text>
                                </View>
                            ),
                            drawerIcon: () => (
                                <View className="flex-1">
                                    <Home
                                        width={24}
                                        height={24}
                                        fill={"#4D7C0F"}
                                    />
                                </View>
                            ),
                        }}
                    />
                </Drawer>
            </GestureHandlerRootView>
        </ThemeProvider>
    );
}
