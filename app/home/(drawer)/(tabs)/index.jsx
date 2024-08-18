import { useDrawerStatus } from "@react-navigation/drawer";
import React from "react";
import { SafeAreaView } from "react-native";
import DrawerSceneWrapper from "../../../../components/DrawerSceneWrapper";
import AddTripScreen from "../../../../screens/AddTripScreen";

const AddTripPage = () => {
    return (
        <SafeAreaView
            className={`flex-1 bg-lime-600 justify-start items-stretch ${
                useDrawerStatus() === "open" ? "bg-lime-600" : "bg-white"
            }`}
        >
            <DrawerSceneWrapper>
                <AddTripScreen />
            </DrawerSceneWrapper>
        </SafeAreaView>
    );
};

export default AddTripPage;
