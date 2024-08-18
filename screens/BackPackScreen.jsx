import React from "react";
import { View } from "react-native";
import Header from "../components/Header";

const BackPackScreen = () => {
    return (
        <View>
            <Header
                title={"Backpack"}
                key={"Backpack"}
                showNotification={false}
            />
        </View>
    );
};

export default BackPackScreen;
