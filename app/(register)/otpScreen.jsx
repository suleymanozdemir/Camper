import React from "react";
import { SafeAreaView } from "react-native";
import OTPScreen from "../../screens/OTPScreen";

const ForgotPassword = () => {
    return (
        <SafeAreaView className="flex-1 justify-center items-start bg-white">
            <OTPScreen route={"/(register)/registered"} />
        </SafeAreaView>
    );
};

export default ForgotPassword;
