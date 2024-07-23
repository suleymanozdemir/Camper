import React from "react";
import { SafeAreaView } from "react-native";
import ForgotPasswordScreen from "../../screens/EnterPhoneNumberScreen";

const ForgotPassword = () => {
    return (
        <SafeAreaView className="flex-1 justify-center items-start bg-white">
            <ForgotPasswordScreen />
        </SafeAreaView>
    );
};

export default ForgotPassword;
