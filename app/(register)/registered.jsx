import React from "react";
import { SafeAreaView } from "react-native";
import HurreyScreen from "../../screens/HurreyScreen";

const RegisteredPage = () => {
    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-white">
            <HurreyScreen
                message={
                    "Your registration is successful. Please go back and log-in."
                }
            />
        </SafeAreaView>
    );
};

export default RegisteredPage;
