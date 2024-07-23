import React from "react";
import { SafeAreaView } from "react-native";
import DrawerSceneWrapper from "../../../components/DrawerSceneWrapper";
import AddTripScreen from "../../../screens/AddTripScreen";

const AddTripPage = () => {
    return (
        <DrawerSceneWrapper>
            <SafeAreaView className="flex-1 bg-white justify-start items-stretch ">
                <AddTripScreen />
            </SafeAreaView>
        </DrawerSceneWrapper>
    );
};

export default AddTripPage;
