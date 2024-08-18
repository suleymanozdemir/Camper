import React from "react";
import { SafeAreaView } from "react-native";
import AddTripFormScreen from "../../../screens/AddTripFormScreen";

const AddTripFormPage = () => {
    return (
        <SafeAreaView className="flex-1 justify-strech items-stretch bg-white">
            <AddTripFormScreen />
        </SafeAreaView>
    );
};

export default AddTripFormPage;
