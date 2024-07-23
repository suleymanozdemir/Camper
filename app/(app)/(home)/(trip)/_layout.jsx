import { Stack } from "expo-router";
import React from "react";

const TripLayout = () => {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="addTripPage" />
            <Stack.Screen name="addTripFormPage" />
        </Stack>
    );
};

export default TripLayout;
