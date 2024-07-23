import React from "react";
import { SafeAreaView } from "react-native";
import RegisterScreen from "../../screens/RegisterScreen";

const Register = () => {
    return (
        <SafeAreaView className="flex-1 flex-col bg-white">
            <RegisterScreen />
        </SafeAreaView>
    );
};

export default Register;
