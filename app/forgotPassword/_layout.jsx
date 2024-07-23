import { Stack } from "expo-router";
import React from "react";

const ForgotPasswordLayout = () => {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="index" />
            <Stack.Screen name="newPassword" />
            <Stack.Screen name="otpScreen" />
            <Stack.Screen name="passwordChanged" />
        </Stack>
    );
};

export default ForgotPasswordLayout;
