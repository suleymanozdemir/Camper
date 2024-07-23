import { DrawerActions } from "@react-navigation/native";
import { router, useNavigation } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Bell from "../assets/icon/Outline/bell.svg";
import Grid from "../assets/icon/Outline/grid.svg";

type Header = {
    title: string;
};
const Header = ({ title }) => {
    const navigation = useNavigation();

    const openDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };

    const openNotification = () => {
        router.navigate("/(home)/campingTrips/notificationsPage");
    };

    return (
        <View className="flex-initial flex-row items-center justify-between">
            <View>
                <TouchableOpacity onPress={openDrawer}>
                    <Grid width={32} height={32} fill={"#000"} />
                </TouchableOpacity>
            </View>
            <View>
                <Text
                    className="text-xl"
                    style={{ fontFamily: "SF-Pro-Display-Medium" }}
                >
                    {title}
                </Text>
            </View>
            <View>
                <TouchableOpacity onPress={openNotification}>
                    <Bell width={32} height={32} fill="#000" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Header;
