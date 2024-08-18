import React from "react";
import { SafeAreaView } from "react-native";
import BackPackScreen from "../../../../screens/BackPackScreen";

const BackPackPage = () => {
    return (
        <SafeAreaView className="flex-1 justify-strech items-stretch bg-white">
            <BackPackScreen />
        </SafeAreaView>
    );
};

export default BackPackPage;
