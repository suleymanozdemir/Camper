import { router } from "expo-router";
import React, { useCallback } from "react";
import { Text, View } from "react-native";
import Hurrey from "../assets/images/common/Hurrey.jsx";
import { Button } from "../components/Button.tsx";

const HurreyScreen = ({ message }) => {
    const goBackBtnPress = useCallback(() => {
        router.navigate("/login");
    }, []);

    return (
        <View className="flex-auto items-center px-10 justify-center">
            <View className=" justify-center" style={{ flex: 2 }}>
                <Hurrey width={300} height={250} />
                <Text
                    className="text-center mb-4 text-2xl"
                    style={{
                        fontFamily: "SF-Pro-Display-Bold",
                        fontWeight: 600,
                    }}
                >
                    Hurrey
                </Text>
                <Text className="text-center text-gray-700 text-base">
                    {message
                        ? message
                        : "Your Password changed successfully. Please go back and log-in."}
                </Text>
                <Button
                    onPress={goBackBtnPress}
                    label="Go Back"
                    buttonType="success"
                    containerClassName="mt-4"
                />
            </View>
        </View>
    );
};

export default HurreyScreen;
